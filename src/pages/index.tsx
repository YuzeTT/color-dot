import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero rounded-2xl p-10 md:p-14 text-center bg-zinc-100 dark:bg-zinc-800 mx-4 md:mx-10', styles.heroBanner)}>
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold">{siteConfig.title}</h1>
        <p className="text-lg mt-4">{siteConfig.tagline}</p>
        <div className="flex items-center justify-center space-x-4 mt-6">
          <Link
            className="button bg-blue-500 button--lg"
            to="/doing">
            配色生成
          </Link>
          <Link
            className="button bg-blue-500 button--lg"
            to="/doing">
            色彩检测
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        
      </main>
    </Layout>
  );
}
