import React from 'react'
import './Home.css'
import Banner from '/Users/amir/Desktop/projects/aventura-app-react/aventura-app-react/aventura-app/src/components/Banner/Banner.js'
// import { Card } from '@mui/material'
import Card from '/Users/amir/Desktop/projects/aventura-app-react/aventura-app-react/aventura-app/src/components/Card/Card.js'

function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className='home_section'>
        <Card
          scr='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw8u-OiQI12PmWZHt1DFn3ASrWRNLZOV-ieg&usqp=CAU'
          title='Aventura Experiences'
          description='Put these Aventuras on your bucket, the Aventura never stops.'
        />
        <Card
          scr='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEzbz6O5Ei1yR6dKuMEQ4ZxPUiAR8ME-oycQxlyW5__WcYCyTGxPzRavBb8zi2BhWkYA&usqp=CAU'
          title='Unique stays'
          description="Whether it's traditional or exotic, it will definitely be a stay to remember." />
        <Card
          scr='https://i.etsystatic.com/42569828/r/il/4794e4/4806640032/il_1588xN.4806640032_kwl8.jpg'
          title='Private homes'
          description='Need more space and privacy? Find a comfortable private home with more room for family and friends.' />
      </div>
      <div className='home_section'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home