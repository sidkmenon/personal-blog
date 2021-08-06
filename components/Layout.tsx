import React from 'react';
import { MetaProps } from '../types/layout';
import ContactIcons from './ContactIcons';
import Head from './Head';
import Navigation from './Navigation';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

// TODO: Sid:: Theme Switcher

export const WEBSITE_HOST_URL = 'https://personal-blog-sidkmenon.vercel.app/';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <ContactIcons />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8">
        <div className="max-w-5xl px-8 mx-auto">
          Built by Sidharth Menon using{' '}
          <a
            className="text-gray-900 dark:text-white"
            href="https://nextjs.org/"
          >
            Next.js
          </a>{' '}
          and{' '}
          <a
            className="text-gray-900 dark:text-white"
            href="https://vercel.com/"
          >
            Vercel
          </a>
          .{' '}
          <a
            className="text-gray-900 dark:text-white"
            href="https://github.com/sidkmenon/personal-blog"
          >
            Here is the source code
          </a>
          .
        </div>
      </footer>
    </>
  );
};

export default Layout;
