import Head from 'next/head';
import { useEffect, useState } from 'react';

interface SEOProps {
  title?: string | undefined | null;
  description?: string | undefined | null;
  image?: string | undefined | null;
  url?: string | undefined | null;
}

const fallbacks = {
  title: 'AI Builders',
  description: 'A program for kids who want to build good AI',
  image: '/showcase/og/14-04-2022.jpeg',
  url: 'https://www.facebook.com/aibuildersx',
};

const SEO = ({ title, description, image }: SEOProps) => {
  const [url, setUrl] = useState<string | undefined | null>(null);
  const [originUrl, setOriginUrl] = useState<string | undefined | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
      setOriginUrl(window.location.origin);
    }
  }, []);

  return (
    <Head>
      <title>{title || fallbacks.title}</title>
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta property="og:url" content={url || fallbacks.url} key="ogurl" />
      <meta
        property="og:title"
        content={title || fallbacks.title}
        key="ogtitle"
      />
      <meta
        property="og:description"
        content={description || fallbacks.description}
        key="ogdesc"
      />
      <meta
        property="og:image"
        content={`${originUrl}${image || fallbacks.image}`}
        key="ogimage"
      />
      <meta
        property="og:site_name"
        content={fallbacks.title}
        key="ogsitename"
      />
    </Head>
  );
};

export default SEO;
