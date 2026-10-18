import test from 'node:test';
import assert from 'node:assert/strict';

import { DEMO_SCENARIOS, getDemoPlotData, getDemoScenario, SYNTHETIC_RECORD_DISCLOSURE_BN, SYNTHETIC_RECORD_DISCLOSURE_EN } from '../src/lib/demo/fixtures';
import { runLandVerification, MANDATORY_LEGAL_DISCLAIMER_BN } from '../src/lib/verification/rules';
import { executeLandVerification } from '../src/lib/services/landService';
import { normalizeDagNo } from '../src/lib/validation/normalize';
import { isISOCalendarDate } from '../src/lib/validation/date';

test('Mentor Feedback: Eight Scenarios Correct Outcomes & Risk Invariants', async (t) => {
  const expectedMap = {
    A: { status: 'GREEN', issues: [] },
    B: { status: 'GREEN', issues: [] },
    C: { status: 'YELLOW', issues: ['SELLER_NAME_VARIATION'] },
    D: { status: 'YELLOW', issues: ['PLOT_MORTGAGED'] },
    E: { status: 'RED', issues: ['DOUBLE_SALE_DETECTED'] },
    F: { status: 'RED', issues: ['SELLER_OWNER_MISMATCH'] },
    G: { status: 'RED', issues: ['EXCESSIVE_AREA_REQUESTED'] },
    H: { status: 'RED', issues: ['DEED_HASH_MISMATCH'] },
  } as const;

  for (const scenario of DEMO_SCENARIOS) {
    await t.test(`Scenario ${scenario.code} preserves exact outcome ${scenario.expectedStatus}`, async () => {
      const exp = expectedMap[scenario.code];
      assert.equal(scenario.expectedStatus, exp.status, `Declared expected status for ${scenario.code}`);

      // Verify directly with engine
      const engineRes = await runLandVerification({
        dagNo: scenario.dagNo,
        khatian: scenario.khatian,
        plotStatus: scenario.plotStatus,
        deeds: scenario.deeds,
        targetDeedNo: scenario.deedNo,
      });

      assert.equal(engineRes.overallStatus, exp.status, `Engine status for Scenario ${scenario.code}`);
      const issueCodes = engineRes.issues.map(i => i.code);
      for (const expectedIssue of exp.issues) {
        assert.ok(issueCodes.includes(expectedIssue), `Scenario ${scenario.code} must include issue ${expectedIssue}`);
      }
      if (exp.issues.length === 0) {
        assert.equal(engineRes.issues.length, 0, `Clean baseline Scenario ${scenario.code} must have 0 issues`);
      }

      // Verify with service layer
      const serviceRes = await executeLandVerification({
        dagNo: scenario.dagNo,
        deedNo: scenario.deedNo,
      });
      assert.equal(serviceRes.success, true);
      assert.equal(serviceRes.result?.overallStatus, exp.status);
      assert.equal(serviceRes.result?.scenarioCode, scenario.code);
      assert.ok(serviceRes.result?.scenarioReasonBn, 'Reason must be attached for judges');
      assert.ok(serviceRes.result?.suggestedStepsBn && serviceRes.result.suggestedStepsBn.length >= 2, 'Suggested steps must be attached');
    });
  }
});

test('Mentor Feedback: Synthetic Data Disclosure & Labeling Requirements', async (t) => {
  await t.test('All scenarios are explicitly labeled as synthetic demo records', () => {
    assert.equal(SYNTHETIC_RECORD_DISCLOSURE_BN, 'ডেমো ডেটা — কাল্পনিক রেকর্ড');
    assert.equal(SYNTHETIC_RECORD_DISCLOSURE_EN, 'Demo Data — Synthetic Record');

    for (const scenario of DEMO_SCENARIOS) {
      assert.equal(scenario.disclosureBn, 'ডেমো ডেটা — কাল্পনিক রেকর্ড', `Scenario ${scenario.code} disclosureBn`);
      assert.equal(scenario.disclosureEn, 'Demo Data — Synthetic Record', `Scenario ${scenario.code} disclosureEn`);
      assert.ok(scenario.nameBn.includes('কেস') || scenario.nameBn.includes('রেকর্ড'));
      assert.ok(scenario.khatian.mouza.length > 0);
      assert.ok(scenario.khatian.owner_name.includes('কাল্পনিক'), `Owner name in ${scenario.code} must be clearly fictional`);
    }
  });

  await t.test('Mandatory legal disclaimer includes explicit synthetic demo disclosure', () => {
    assert.ok(
      MANDATORY_LEGAL_DISCLAIMER_BN.includes('ডেমো ডেটা — কাল্পনিক রেকর্ড'),
      'Disclaimer must explicitly state ডেমো ডেটা — কাল্পনিক রেকর্ড'
    );
    assert.ok(
      MANDATORY_LEGAL_DISCLAIMER_BN.includes('নয়') || MANDATORY_LEGAL_DISCLAIMER_BN.includes('সতর্কীকরণ'),
      'Disclaimer must advise caution and not claim government certification'
    );
  });

  await t.test('Engine verification results include synthetic disclosure', async () => {
    const res = await runLandVerification({
      dagNo: '0101',
      khatian: DEMO_SCENARIOS[0].khatian,
      plotStatus: DEMO_SCENARIOS[0].plotStatus,
      deeds: DEMO_SCENARIOS[0].deeds,
    });
    assert.equal(res.disclosureBn, 'ডেমো ডেটা — কাল্পনিক রেকর্ড');
    assert.equal(res.disclosureEn, 'Demo Data — Synthetic Record');
  });
});

test('Mentor Feedback: Leading-Zero Preservation and Identifiers Consistency', async (t) => {
  await t.test('All scenario Dag and Khatian numbers preserve leading zeros as strings', () => {
    for (const scenario of DEMO_SCENARIOS) {
      // Must be string type
      assert.equal(typeof scenario.dagNo, 'string', `dagNo in ${scenario.code} must be string`);
      assert.equal(typeof scenario.khatianNo, 'string', `khatianNo in ${scenario.code} must be string`);
      assert.equal(typeof scenario.khatian.dag_no, 'string');
      assert.equal(typeof scenario.khatian.khatian_no, 'string');

      // Must preserve leading zero
      assert.ok(scenario.dagNo.startsWith('0'), `dagNo in ${scenario.code} must start with leading 0`);
      assert.ok(scenario.khatianNo.startsWith('0'), `khatianNo in ${scenario.code} must start with leading 0`);
      assert.equal(scenario.dagNo, scenario.khatian.dag_no);
      assert.equal(scenario.khatianNo, scenario.khatian.khatian_no);

      // Must have at least 4 characters
      assert.ok(scenario.dagNo.length >= 4);
    }
  });

  await t.test('Normalization preserves leading zeros for English and Bangla digits', () => {
    assert.equal(normalizeDagNo('0101'), '0101');
    assert.equal(normalizeDagNo('  0101  '), '0101');
    assert.equal(normalizeDagNo('০১০১'), '0101');
    assert.equal(normalizeDagNo('০২০২'), '0202');
    assert.equal(normalizeDagNo('০০৪২'), '0042');
  });

  await t.test('Stripped leading zeros do not alias the canonical record', () => {
    // 0101 must exist, but 101 must not match
    assert.notEqual(getDemoPlotData('0101'), null);
    assert.equal(getDemoPlotData('101'), null, 'Truncated number must not accidentally match 0101');
  });
});

test('Mentor Feedback: Fictional Data Quality & Metadata Consistency', async (t) => {
  for (const s of DEMO_SCENARIOS) {
    await t.test(`Scenario ${s.code} fictional land fields are complete and consistent`, () => {
      // Fictional mouza
      assert.ok(s.mouza.length > 2, `mouza in ${s.code}`);
      assert.equal(s.mouza, s.khatian.mouza, `mouza match in ${s.code}`);

      // Transaction date
      for (const deed of s.deeds) {
        assert.ok(isISOCalendarDate(deed.date), `Deed date in ${s.code} must be valid ISO date`);
        assert.ok(deed.area > 0, `Deed area in ${s.code} must be positive`);
        assert.equal(deed.dag_no, s.dagNo, `Deed dag_no in ${s.code} must match scenario`);
        assert.ok(deed.seller.length > 0);
        assert.ok(deed.buyer.length > 0);
        assert.ok(deed.hash.length >= 64);
      }

      // Mutation history
      assert.ok(Array.isArray(s.khatian.mutation_history) && s.khatian.mutation_history.length > 0);
      for (const mut of s.khatian.mutation_history!) {
        assert.ok(isISOCalendarDate(mut.date));
        assert.equal(mut.status, 'done');
        assert.ok(mut.reference.startsWith('DEMO-MUT-'));
      }

      // Reason and Next Steps for Judges
      assert.ok(s.reasonBn && s.reasonBn.length > 25, `Scenario ${s.code} must have detailed reasonBn`);
      assert.ok(s.reasonEn && s.reasonEn.length > 25, `Scenario ${s.code} must have detailed reasonEn`);
      assert.ok(Array.isArray(s.suggestedStepsBn) && s.suggestedStepsBn.length >= 2, `Scenario ${s.code} must have suggestedStepsBn`);
      assert.ok(Array.isArray(s.suggestedStepsEn) && s.suggestedStepsEn.length >= 2, `Scenario ${s.code} must have suggestedStepsEn`);
    });
  }
});

test('Mentor Feedback: getDemoScenario Helper Function', () => {
  assert.equal(getDemoScenario('A')?.dagNo, '0101');
  assert.equal(getDemoScenario('0101')?.code, 'A');
  assert.equal(getDemoScenario('DEED-2024-0001')?.code, 'A');
  assert.equal(getDemoScenario('DEED-2024-0005B')?.code, 'E');
  assert.equal(getDemoScenario('H')?.code, 'H');
  assert.equal(getDemoScenario('NON_EXISTENT'), null);
});
