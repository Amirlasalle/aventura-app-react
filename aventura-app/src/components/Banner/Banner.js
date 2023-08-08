import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@mui/material'
import Search from '../Search/Search';

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='banner_search'>
        {showSearch && <Search />}

        <Button onClick={() => setShowSearch(!showSearch)} className='banner_searchButton' variant='outlined'>
          {showSearch ?
          "Hide" :
          "Search Dates"}
        </Button>
      </div>
      <div className='banner_info'>
        <h1>おはよう! アベンチュラです!</h1>
        <h3> 冒険は新たな世界を開く鍵です。</h3>
        <h3> "古道やわが思ふ旅に出る" - 松尾芭蕉
        </h3>
        <Button varient='outlined'>冒険に行きましょう!</Button>
      </div>
    </div>
  )
}

export default Banner