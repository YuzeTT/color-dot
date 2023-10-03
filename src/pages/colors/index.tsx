import React from 'react'
import Layout from '@theme/Layout'
import color_list from '@site/data/color_list';

export default function index() {
  const queryString = window.location.search
  const params = new URLSearchParams(queryString);
  const number = parseInt(params.get("n"));
  const list = color_list[number]
  return (
    <Layout>
      <div className='p-10'>
        <div className='font-bold text-2xl mb-10'>{list.name}</div>
        <div className='grid grid-cols-4 gap-10'>
          {list.colors.map((item, key)=>(
            <div key={key} className='rounded-lg overflow-hidden'>
              <div className='h-20 flex py-2 px-4 text-white' style={{backgroundColor: item.main_color}}>{item.name}</div>
              {item.color_list.map((color, key)=>(
                <div key={key} className='h-10 flex items-center px-4' style={{backgroundColor: color}}>{key+1}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </Layout>
  )
}
