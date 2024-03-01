"use client";

import Script from "next/script";

function MetaInfo() {
  return (
    <>
      <meta
        name="naver-site-verification"
        content={`${process.env.NEXT_PUBLIC_NAVER_SITE_ID}`}
      />
      <Script
        id="jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://novelduck.farm",
            "@type": "Organization",
            name: "노벨덕 | 소설로 자연스럽게 배우는 외국어",
            url: "https://novelduck.farm",
            provider: {
              "@type": "Organization",
              name: "노벨덕",
            },
          }),
        }}
      />
    </>
  );
}

export default MetaInfo;
