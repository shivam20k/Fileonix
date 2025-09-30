import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = stored ? stored === 'dark' : prefersDark;
      document.documentElement.classList.toggle('dark', shouldBeDark);
    } catch {}
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}