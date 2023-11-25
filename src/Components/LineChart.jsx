import React from 'react'
import {motion} from 'framer-motion'
import Chart from 'react-apexcharts'
import './inechart.css'

const LineChart = () => {
    const data ={
        options: {
          chart: {
            id: "ares",
          },
          fill:{
            colors:['aqua']
          },
          stroke:{
            colors:['aqua']
          },
          dataLabels:{
            enabled: true,
          },
          tooltip:{
            x: {
              show: false,
          }
          },
          grid: {
            show: false,
          },
          xaxis:{
            categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999],
            labels:{
              show:false,
              style:{
                colors:['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff']
              },
              axisBorder:{show:false},
              axisTicks:{show:false},
              crosshairs:{show:false}
            },
          },
          yaxis:{
            labels:{
              show:false,
              style:{
                colors:['#fff']
              }
            }
          },
          
        },
        series: [
          {
            name: "series-1",
            data: [20, 100, 30, 90, 40, 120, 50, 160],
            
          }
        ],
      };
  return (
    <motion.div className='linechart'>
         <Chart 
         series={data.series} 
         type='area' 
         options={data.options} 
         width={"100%"} 
         height={"100%"}
         />
    </motion.div>
  )
}

export default LineChart