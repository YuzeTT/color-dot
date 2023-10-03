import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import color_list from '@site/data/color_list';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero rounded-2xl p-10 md:p-14 text-center bg-transparent mx-4 md:mx-10', styles.heroBanner)}>
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
      <main className='mx-4 md:mx-10 mt-4 md:mt-10'>
        {/* <HomepageFeatures /> */}
        <div className='grid grid-cols-4 gap-8'>
          {color_list.map((item, key)=>(
            <div key={key} className=''>
              <div className='flex h-20 rounded-xl overflow-hidden'>
                {/* {item.map((color, key)=>(
                  <div key={key} className='h-full w-full flex flex-grow basis-[0px] hover:basis-[80px] transition-all items-center justify-center group' style={{backgroundColor: color, boxShadow: 'inset rgba(0, 0, 0, 0.05) 1px 1px, inset rgba(0, 0, 0, 0.05) 0 -1px'}}>
                    <div className='opacity-0 group-hover:opacity-100 transition'>{color}</div>
                  </div>
                ))} */}
              </div>
              <div className='mt-1 flex justify-between'>
                <div></div>
                <button className='border-none bg-transparent p-1 flex items-center justify-center text-zinc-800'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7ZM5.002 8L5 20h10V8H5.002ZM9 6h8v10h2V4H9v2Z"/></svg>
                </button>
              </div>
              {/* <div className='m-2 flex items-center justify-between'>
                <div className='flex gap-2 opacity-50'>
                  {item.map((color, key)=>(
                    <div>{color}</div>
                  ))}
                </div>
                <button className='h-10 w-10 rounded-xl bg-zinc-100 border-none flex items-center justify-center text-zinc-800'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7ZM5.002 8L5 20h10V8H5.002ZM9 6h8v10h2V4H9v2Z"/></svg>
                </button>
              </div> */}
            </div>
          ))}
          
        </div>
      </main>
    </Layout>
  );
}
