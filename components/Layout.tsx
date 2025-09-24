import Head from 'next/head';
import Footer from './ui/Footer';
import Navbar from './ui/Navbar';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>FILEONIX</title>
        <meta name='description' content={'FILEONIX is a modern file management system to securely organize, search, and share your files across teams and devices.'} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-300">
        {children}
      </main>
      <Footer />
    </>
  );
}