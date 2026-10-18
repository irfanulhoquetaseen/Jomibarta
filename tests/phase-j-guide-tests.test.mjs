import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

function loadTs(relativePath) {
  const source = readFileSync(new URL(relativePath, import.meta.url), 'utf8');
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const context = { exports: {}, require: () => ({}) };
  runInNewContext(output, context);
  return context.exports;
}

const { checks } = loadTs('../src/components/guide/guideTopics.ts');
const { topicGuideDetails } = loadTs('../src/components/guide/guideTopicDetails.ts');
const { createPaperPreparationStore } = loadTs('../src/components/guide/paperPreparationStore.ts');

test('all five topic guides contain all required actionable sections (A to F) in Bengali and English', () => {
  const requiredIds = ['owner', 'mutation', 'case', 'khas', 'acquisition'];
  assert.equal(checks.length, 5);

  for (const id of requiredIds) {
    const detail = topicGuideDetails[id];
    assert.ok(detail, `Missing detail data for topic: ${id}`);
    assert.equal(detail.id, id);

    // Section A: What to check & why it matters
    assert.ok(detail.whatToCheck.summaryBn.trim().length > 20, `${id}: whatToCheck.summaryBn too short`);
    assert.ok(detail.whatToCheck.summaryEn.trim().length > 20, `${id}: whatToCheck.summaryEn too short`);
    assert.ok(detail.whatToCheck.whyItMattersBn.trim().length > 20, `${id}: whatToCheck.whyItMattersBn too short`);
    assert.ok(detail.whatToCheck.whyItMattersEn.trim().length > 20, `${id}: whatToCheck.whyItMattersEn too short`);
    assert.match(detail.whatToCheck.summaryBn, /[\u0980-\u09ff]/u, `${id} summaryBn must contain Bengali`);
    assert.match(detail.whatToCheck.summaryEn, /[A-Za-z]/u, `${id} summaryEn must contain English`);

    // Section B: Required documents list and disclaimer
    assert.ok(detail.requiredDocuments.disclaimerBn.trim().length > 15, `${id}: missing requiredDocuments disclaimerBn`);
    assert.ok(detail.requiredDocuments.disclaimerEn.trim().length > 15, `${id}: missing requiredDocuments disclaimerEn`);
    assert.match(detail.requiredDocuments.disclaimerBn, /একক|চূড়ান্ত|প্রমাণ/u, `${id}: disclaimer must state one document alone is not proof`);
    assert.ok(detail.requiredDocuments.items.length >= 4, `${id} must have at least 4 required document types`);
    for (const doc of detail.requiredDocuments.items) {
      assert.ok(doc.nameBn.trim().length > 0, `${id} doc missing nameBn`);
      assert.ok(doc.nameEn.trim().length > 0, `${id} doc missing nameEn`);
      assert.ok(doc.purposeBn.trim().length > 10, `${id} doc missing purposeBn`);
      assert.ok(doc.purposeEn.trim().length > 10, `${id} doc missing purposeEn`);
    }

    // Section C: How to compare (Actionable numbered steps)
    assert.ok(detail.howToCompare.steps.length >= 4, `${id} must have at least 4 comparison steps`);
    for (const step of detail.howToCompare.steps) {
      assert.ok(step.stepNumber >= 1, `${id} invalid stepNumber`);
      assert.ok(step.titleBn.trim().length > 0, `${id} step missing titleBn`);
      assert.ok(step.titleEn.trim().length > 0, `${id} step missing titleEn`);
      assert.ok(step.instructionBn.trim().length > 20, `${id} step instructionBn too short`);
      assert.ok(step.instructionEn.trim().length > 20, `${id} step instructionEn too short`);
      assert.ok(step.keyItemsBn.length >= 2, `${id} step must have at least 2 key comparison items`);
    }

    // Section D: Where to verify (Offices and Portals)
    assert.ok(detail.whereToVerify.offices.length >= 2, `${id} must have at least 2 verifying offices`);
    for (const off of detail.whereToVerify.offices) {
      assert.ok(off.nameBn.trim().length > 0, `${id} office missing nameBn`);
      assert.ok(off.nameEn.trim().length > 0, `${id} office missing nameEn`);
      assert.ok(off.roleBn.trim().length > 10, `${id} office missing roleBn`);
      assert.ok(off.roleEn.trim().length > 10, `${id} office missing roleEn`);
    }
    assert.ok(detail.whereToVerify.portals.length >= 1, `${id} must have at least 1 verified portal`);
    for (const portal of detail.whereToVerify.portals) {
      assert.ok(portal.url.startsWith('https://'), `${id} portal url must be HTTPS: ${portal.url}`);
      assert.ok(portal.nameBn.trim().length > 0);
      assert.ok(portal.nameEn.trim().length > 0);
    }

    // Section E: What to do if discrepancy found (Safe next steps)
    assert.ok(detail.ifDiscrepancyFound.actions.length >= 3, `${id} must have at least 3 discrepancy actions`);
    assert.match(detail.ifDiscrepancyFound.warningBn, /অমিল|সতর্ক|অস্তিত্ব|সন্দেহ|নোটিশ/u, `${id} discrepancy warning`);
    for (const act of detail.ifDiscrepancyFound.actions) {
      assert.ok(act.titleBn.trim().length > 0);
      assert.ok(act.titleEn.trim().length > 0);
      assert.ok(act.guidanceBn.trim().length > 15);
      assert.ok(act.guidanceEn.trim().length > 15);
    }

    // Section F: Track preparation disclaimer
    assert.ok(detail.preparationPrompt.leadBn.trim().length > 0);
    assert.ok(detail.preparationPrompt.disclaimerBn.trim().length > 15);
    assert.match(detail.preparationPrompt.disclaimerBn, /যাচাই|প্রস্তুতি|পরখ|নিশ্চ/u);
  }
});

test('topic-specific distinctions are strictly maintained without generic boilerplate', () => {
  // Case topic must specify 4-digit case year and court name, and that lack of online records != no case
  const caseDetail = topicGuideDetails.case;
  assert.match(caseDetail.howToCompare.steps[0].instructionBn, /৪ ডিজিট|চার ডিজিট/u);
  assert.match(caseDetail.requiredDocuments.disclaimerBn, /মামলা-মুক্ত/u);

  // Khas topic must highlight Union Land Office and AC Land, and state Jomibarta does not query khas register
  const khasDetail = topicGuideDetails.khas;
  assert.match(khasDetail.requiredDocuments.disclaimerBn, /খাস রেজিস্টার/u);
  assert.match(khasDetail.whereToVerify.offices[0].nameBn, /ভূমি অফিস/u);

  // Acquisition topic must explain Sec 4/7/8 notices and DC LA branch
  const acqDetail = topicGuideDetails.acquisition;
  assert.match(acqDetail.howToCompare.steps[2].instructionBn, /৪ ধারা|৭ ধারা|৮ ধারা/u);
  assert.match(acqDetail.whereToVerify.offices[0].nameBn, /ভূমি অধিগ্রহণ|এলএ/u);

  // Owner topic must explain title chain (vaya deeds) and Sub-Registry search
  const ownerDetail = topicGuideDetails.owner;
  assert.match(ownerDetail.requiredDocuments.items[1].nameBn, /ভায়া দলিল/u);
  assert.match(ownerDetail.whereToVerify.offices[0].nameBn, /সাব-রেজিস্ট্রি/u);

  // Mutation topic must distinguish application from approval order sheet and DCR
  const mutDetail = topicGuideDetails.mutation;
  assert.match(mutDetail.requiredDocuments.items[1].nameBn, /আদেশনামা/u);
  assert.match(mutDetail.requiredDocuments.items[2].nameBn, /ডিসিআর|DCR/u);
});

test('preparation checklist starts completely unmarked for a fresh user and derives progress truthfully', () => {
  function createMockStorage(initial = null) {
    let value = initial;
    return {
      getItem: () => value,
      setItem: (_, val) => { value = val; },
      removeItem: () => { value = null; },
      get value() { return value; },
    };
  }

  const plain = value => JSON.parse(JSON.stringify(value));
  const storage = createMockStorage(null);
  const store = createPaperPreparationStore(() => storage);

  // Fresh user must have completely empty snapshot, not 4/5 or preselected
  const fresh = store.getSnapshot();
  assert.deepEqual(plain(fresh), {});
  assert.equal(Object.keys(fresh).length, 0);

  // Marking one item as collected
  store.setPaper('owner', 'collected');
  assert.equal(store.getSnapshot().owner, 'collected');
  assert.equal(Object.keys(store.getSnapshot()).length, 1);

  // Marking another as mismatch
  store.setPaper('case', 'mismatch');
  assert.equal(store.getSnapshot().case, 'mismatch');
  assert.equal(Object.keys(store.getSnapshot()).length, 2);

  // Unmarking owner
  store.unmarkPaper('owner');
  assert.equal(store.getSnapshot().owner, undefined);
  assert.equal(store.getSnapshot().case, 'mismatch');
  assert.equal(Object.keys(store.getSnapshot()).length, 1);

  // Clearing all
  store.clearPapers();
  assert.deepEqual(plain(store.getSnapshot()), {});
});

test('print styles in globals.css support clean printable checklist without UI clutters', () => {
  const css = readFileSync(new URL('../src/app/globals.css', import.meta.url), 'utf8');
  assert.match(css, /@media print/);
  assert.match(css, /\.print-checklist-container/);
  assert.match(css, /page-break-inside:\s*avoid/);
  assert.match(css, /\.workspace-header,\s*\.skip-link,\s*main button,\s*footer\s*\{\s*display:\s*none !important;/);
});
