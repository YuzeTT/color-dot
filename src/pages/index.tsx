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
          {/* <Link
            className="button bg-blue-500 button--lg"
            to="/doing">
            配色生成
          </Link>
          <Link
            className="button bg-blue-500 button--lg"
            to="/doing">
            色彩检测
          </Link> */}

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
        <div className='grid grid-cols-4 gap-8'>
          {color_list.map((item, key)=>(
            <div key={key}>
              <Card elevation={0} variant="outlined">
                <CardActionArea>
                  <CardMedia>
                    {/* <div className='flex h-12 ml-3'>
                      {item.colors.map((item, key)=>(
                        <div key={key} className='h-8 w-8 rounded-full -ml-3' style={{backgroundColor: item.main_color}}></div>
                      ))}
                    </div> */}
                    <div className='flex h-20'>
                      {item.colors.map((item, key)=>(
                        <div key={key} className='h-20 w-full' style={{backgroundColor: item.main_color}}></div>
                      ))}
                    </div>
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      颜色数量：{item.colors.length}&nbsp;&nbsp;&nbsp;颜色深度：{item.colors[0].color_list.length}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
          
        </div>
      </main>
    </Layout>
  );
}
