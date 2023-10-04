import React, { useEffect, useState } from 'react'
import Layout from '@theme/Layout'
import color_list from '@site/data/color_list';

export default function index() {
  const queryString = window.location.search
  const params = new URLSearchParams(queryString);
  const [c, setC] = useState(0)
  // var number = 0
  // try {
  //   number = parseInt(params.get("n"));
  // } catch (e) {

  // }
  useEffect(()=>{
    const number = parseInt(new URLSearchParams(location.search).get("n") || "-1")
    setC(number)
    if (number == -1) return;
  },[])
  const list = color_list[c]
  return (
    <Layout>
      <div className='p-10'>
        <div className='flex mb-10 items-center'>
          <div className="icon-[ri--arrow-left-line] text-3xl mr-5 hover:text-blue-500 cursor-pointer" onClick={()=>{history.back()}} />
          <div className='flex-1'>
            <div className='font-bold text-2xl'>{list.name}</div>
            <div className='text-md opacity-50'>{list.url}</div>
          </div>
          {list.colors.length === 0 ? '' :
            <div className='flex space-x-2 items-center h-full'>
            <div>
              <div className='font-bold text-xl text-center'>{list.colors.length}</div>
              <div className='text-xs opacity-50'>颜色数量</div>
            </div>
            <svg className='opacity-50' xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.586l4.95-4.95l1.415 1.415l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.95 4.95l-1.413-1.415l4.95-4.95l-4.95-4.95L7.05 5.638l4.95 4.95Z"/></svg>
            <div>
              <div className='font-bold text-xl text-center'>{list.colors[0].color_list.length}</div>
              <div className='text-xs opacity-50'>色彩细分</div>
            </div>
          </div>
          }
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
          {list.colors.map((item, key)=>(
            <div key={key} className='rounded-lg group'>
              <div className='py-2 px-4 text-white hover:scale-110 hover:rounded-md transition-all rounded-t-md hover:drop-shadow-xl' style={{backgroundColor: item.main_color}}>
                <div className='mb-8'>{item.name}</div>
                <div className='flex justify-between'>
                  <div>{item.color_list.indexOf(item.main_color)+1}</div>
                  <div className='text-right'>{item.main_color}</div>
                </div>
              </div>
              {item.color_list.map((color, key)=>(
                <div key={key} className='h-10 flex items-center justify-between px-4 hover:scale-110 transition-all last:rounded-b-md hover:rounded-md hover:drop-shadow-xl' style={{color: color, backgroundColor: 'currentColor'}}>
                  <span className='opacity-20 group-hover:opacity-90 transition' style={{filter: 'grayscale(1) contrast(999) invert(1)'}}>
                    {key+1}
                  </span>
                  <span className='opacity-20 group-hover:opacity-90 transition' style={{filter: 'grayscale(1) contrast(999) invert(1)'}}>
                    {color}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </Layout>
  )
}
