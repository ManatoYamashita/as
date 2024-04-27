import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export const SeoHead = ({
  title,
  description,
  ogType,
  imgUrl,
}) => {
  const router = useRouter();
  const siteUrl = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`;
  const Url = `${siteUrl}${router.asPath}`;
  const siteTitle = `${title}`;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.amausyrup.net",
    "name": "天羽しろっぷ | AmauSyrup",
    "description": "AmauSyrup.netは、VTuber『天羽しろっぷ』の非公式ファンサイトです。大学生,身バレ,X(Twitter)ユーザであることが有名な天羽しろっぷの最新情報をお届けします。",
    "publisher": {
      "@type": "Person",
      "name": "AmauSyrup.net",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.amausyrup.net/assets/amausyrup-logo.webp",
      },
    },
  };

  const schemaString = JSON.stringify(websiteSchema);

  return (
    <Head>
      <meta name="viewport" content={"width=device-width, initial-scale=1"} />
      <title>{siteTitle}</title>
      <link rel="canonical" href={Url} />
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:url" content={Url} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta name="keywords" content="天羽しろっぷ, 身バレ, 大学"/>
      <link rel="icon" href={"/favicon.ico"} />
      <link rel="apple-touch-icon" href={"/favicon.ico"} />
      <link rel="apple-touch-icon" sizes="152x152" href={"/favicon.ico"} />
      <link rel="apple-touch-icon" sizes="180x180" href={"/favicon.ico"} />
      <link rel="apple-touch-icon" sizes="167x167" href={"/favicon.ico"} />
      <link rel="apple-touch-icon" sizes="120x120" href={"/favicon.ico"} />
      <link rel="apple-touch-icon" sizes="76x76" href={"/favicon.ico"} />
      <link rel="apple-touch-icon" sizes="60x60" href={"/favicon.ico"} />
      <link rel="apple-touch-icon" sizes="57x57" href={"/favicon.ico"} />
      <link rel="apple-touch-icon" sizes="72x72" href={"/favicon.ico"} />
      <link rel="apple-touch-icon" sizes="114x114" href={"/favicon.ico"} />
      <link rel="apple-touch-icon" sizes="144x144" href={"/favicon.ico"} />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaString }}></script>
    </Head>
  );
};

export default SeoHead;