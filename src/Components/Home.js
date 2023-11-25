import React from 'react'
import './Home.css'
import Linechart from './LineChart'
import Cards from './Cards/Cards'
import Table from './Table/Table'
const Home = () => {
  return (
    <div className='Home'>
      <Linechart/>
       <Cards/>
       <Table/>
    </div>
  )
}

export default Home