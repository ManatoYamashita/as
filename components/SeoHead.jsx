import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export const SeoHead = ({
  title,
  titleTemplate,
  description,
  ogType,
  imgUrl,
}) => {
  const router = useRouter();
  const siteUrl = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`;
  const Url = `${siteUrl}${router.asPath}`;
  const siteTitle = `${title} - ${titleTemplate}`;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.amausyrup.net",
    "name": "AmauSyrup.net - 天羽しろっぷ",
    "description": "AmauSyrup.netは、VTuber『天羽しろっぷ』の非公式ファンサイトです。notionAPIを使用して、天羽しろっぷの最新情報をお届けします。",
    "publisher": {
      "@type": "Organization",
      "name": "AmauSyrup.net",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.amausyrup.net/assets/amau.webp"
      }
    }
  };

  return (
    <Head>
      <meta name="viewport" content={"width=device-width, initial-scale=1"} />
      <title>{siteTitle}</title>
      <link href={Url} rel="canonical" />
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:url" content={Url} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <link rel="icon" type="image/svg+xml" href={"/samplelogo.svg"} />

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Head>
  );
};

export default SeoHead;