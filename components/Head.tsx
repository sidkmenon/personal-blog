import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { MetaProps } from '../types/layout';

export const WEBSITE_HOST_URL = 'https://personal-blog-sidkmenon.vercel.app/';

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    author: 'Sidharth Menon',
    title: 'Sid Menon - Website',
    description:
      'My personal blog, built with Next.js and deployed with Vercel',
    type: 'website',
    keywords: [
      'sidharth',
      'menon',
      'sid',
      'sidkmenon',
      'software',
      'engineer',
      'engineering',
      'machine',
      'learning',
      'harvard',
    ],
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta name="author" content={meta.author} />
      <meta name="keywords" content={meta.keywords.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Sid Menon - Website" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sidkmenon" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </NextHead>
  );
};

export default Head;
