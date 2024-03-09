'use client'
import React from 'react'
import Color from 'color-thief-react'

const DominantColor = ({children,imageUrl}:{children:React.ReactNode,imageUrl:string}) => {
  const Loading = () => <div>Loading...</div>;
  return (
    <Color src={imageUrl} crossOrigin="anonymous" format="rgbArray">
        {({ data, loading }) => {
          if (loading) return <Loading />;
          return (
        
            
              <div className='w-full h-[340px] p-4 rounded-xl' style={{backgroundImage: `linear-gradient(to bottom, rgb(${data?.map((v) => (v + 30)).join()}),rgb(${data?.map((v) => (v - 30)).join()}))` }}>{children}</div>
           
          );
        }}
      </Color>
  )
}

export default DominantColor



