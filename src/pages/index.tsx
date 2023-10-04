import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import color_list from '@site/data/color_list';
import styles from './index.module.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero rounded-2xl p-10 md:p-14 text-center bg-transparent mx-4 md:mx-10', styles.heroBanner)}>
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold">{siteConfig.title}</h1>
        <p className="text-lg mt-4">{siteConfig.tagline}</p>
        <div className="flex items-center justify-center space-x-4 mt-6">
          <Button variant="contained" disableElevation>配色生成</Button>
          <Button variant="contained" disableElevation>色彩检测</Button>
          
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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
          {color_list.map((item, key)=>(
            key==0? '':
            <div key={key}>
              <div className='bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-500 hover:text-white rounded-lg overflow-hidden p-1 shadow-sm group transition' onClick={()=>{window.open('/colors?n='+key,'_blank')}}>
                <div className='rounded-md overflow-hidden shadow-lg'>
                  <div className='flex h-20'>
                    {item.colors.map((item, key)=>(
                      <div key={key} className='h-20 w-full' style={{backgroundColor: item.main_color}}></div>
                    ))}
                  </div>
                </div>
                <div className='p-2 flex justify-between items-center mt-1'>
                  <div>
                    <div className='font-bold text-xl'>{item.name}</div>
                    {/* <div className='text-sm opacity-50'>颜色数量：{item.colors.length}&nbsp;&nbsp;色彩细分：{item.colors[0].color_list.length}</div> */}
                    <div className='text-xs opacity-50'>{item.url}</div>
                  </div>
                  <div className='flex space-x-2 items-center h-full'>
                    <div>
                      <div className='font-bold text-xl text-center'>{item.colors.length}</div>
                      <div className='text-xs opacity-50'>颜色数量</div>
                    </div>
                    <svg className='opacity-50' xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.586l4.95-4.95l1.415 1.415l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.95 4.95l-1.413-1.415l4.95-4.95l-4.95-4.95L7.05 5.638l4.95 4.95Z"/></svg>
                    <div>
                      <div className='font-bold text-xl text-center'>{item.colors[0].color_list.length}</div>
                      <div className='text-xs opacity-50'>色彩细分</div>
                    </div>
                    {/* <svg className='translate-x-10 group-hover:translate-x-0 transition text-white' xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2h12.172Z"/></svg> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
