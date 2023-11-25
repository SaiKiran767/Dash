import React, { useState } from 'react'
import  {motion,LayoutGroup} from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card1.css'
import {UilTimes} from '@iconscout/react-unicons'
import Chart from "react-apexcharts"
const Card1 = (props) => {

    const [expanded,setExpanded] =useState(false);
  return (
    <LayoutGroup>
        {
            expanded?(
                <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
            ):
            <CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>
        }
    </LayoutGroup>
  )
}

function CompactCard({param,setExpanded}){
    const Png = param.png;
   return(
    <motion.div 
    className='CompactCard'
      style={{
        background:param.color.backGround,
        boxShadow:param.color.boxShadow
      }}
      onClick={setExpanded}
      // layoutId='expandableCard'
    >
        <div className='radialBar'>
            <CircularProgressbar
             value={param.barValue}
             text={`${param.barValue}%`}
             />
             <span>{param.title}</span>
        </div>
        <div className='detail'>
           <Png/>
           <span>${param.values}</span>
           <span>Last 24 hours</span>
        </div>
    </motion.div>
   )
}

function ExpandedCard({param,setExpanded}){
  const data ={
    options: {
      chart: {
        id: "ares"
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ],
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.35
  },
  dataLabels:{
    enabled: false,
  },
  fill:{
    color:["#fff"],
    type:"gradient"
  },
  stroke:{
    curve:'smooth',
    colors:["#fff"]
  },
  tooltip:{
    x: {
      show: true,
      format: 'dd/MM/yy HH:mm',
      formatter: undefined,
  }
  },
  grid: {
    show: true,
  },
  xaxis:{
    type:"datetime",
    categories:[
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ]
  }
  };
  
   return(
    <motion.div className='ExpandedCard'
      style={{
        background:param.color.backGround,
        boxShadow:param.color.boxShadow
      }}
        // layoutId='expandableCard'
    >
         <div
          style={{
                alignSelf:'flex-end',
                cursor:'pointer',
                color:'#fff'
               }}
         >
           <UilTimes onClick={setExpanded}/>
         </div>
         <span>{param.title}</span>
         <div className='chartContainer'>
              <Chart series={param.series} type='area' options={data.options}/>
             
         </div>
         <span>Last 24 hours</span>
    </motion.div>
   )
}
export default Card1