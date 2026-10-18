import type { Metadata } from 'next';
import { Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-bengali',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://treetweet.vercel.app'),
  description: 'জমি কেনার আগে মালিক, নামজারি, মামলা, খাস ও অধিগ্রহণের তথ্য কোথায় যাচাই করবেন—সহজ বাংলা ও ইংরেজিতে সরকারি সেবার নির্দেশিকা।',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'bn_BD', alternateLocale: ['en_US'],
    url: '/', siteName: 'জমিবার্তা',
    title: 'জমিবার্তা — জমি কেনার আগে ৫টি জরুরি খোঁজ',
    description: 'মালিক, নামজারি, মামলা, খাস ও অধিগ্রহণ: সরকারি সেবা ও সহজ করণীয়। স্বাধীন সহায়ক প্রকল্প; সরাসরি সরকারি রেকর্ড সংযোগ নেই।',
    images: [{ url: '/social-card.png', width: 1200, height: 630, alt: 'জমিবার্তা / Jomibarta — Check before you buy. Five essential land record checks.' }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/icon.svg', apple: '/apple-touch-icon.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" className={`${notoSansBengali.variable} font-sans`} suppressHydrationWarning>
      <head>
        <script
          id="suppress-extension-attrs"
          dangerouslySetInnerHTML={{
            __html: `(function(){
  if (typeof window === 'undefined' || !window.Element) return;
  var isExtAttr = function(name) {
    if (!name) return false;
    return name === 'bis_skin_checked' ||
           name === 'bis_register' ||
           name.indexOf('bis_') === 0 ||
           name.indexOf('__processed_') === 0;
  };
  var origSet = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function(name, value) {
    if (isExtAttr(name)) return;
    return origSet.apply(this, arguments);
  };
  var cleanTree = function(node) {
    if (!node || node.nodeType !== 1) return;
    if (node.getAttributeNames) {
      var attrs = node.getAttributeNames();
      for (var i = 0; i < attrs.length; i++) {
        if (isExtAttr(attrs[i])) {
          node.removeAttribute(attrs[i]);
        }
      }
    }
    var children = node.children;
    if (children) {
      for (var j = 0; j < children.length; j++) {
        cleanTree(children[j]);
      }
    }
  };
  if (document.documentElement) {
    cleanTree(document.documentElement);
  }
  if (window.MutationObserver && document.documentElement) {
    var observer = new MutationObserver(function(mutations) {
      for (var m = 0; m < mutations.length; m++) {
        var mut = mutations[m];
        if (mut.type === 'attributes' && isExtAttr(mut.attributeName)) {
          if (mut.target && mut.target.removeAttribute) {
            mut.target.removeAttribute(mut.attributeName);
          }
        } else if (mut.type === 'childList' && mut.addedNodes) {
          for (var a = 0; a < mut.addedNodes.length; a++) {
            cleanTree(mut.addedNodes[a]);
          }
        }
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['bis_skin_checked', 'bis_register']
    });
  }
})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased font-sans flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
