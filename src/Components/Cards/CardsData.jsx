import {UilUsdSquare,UilMoneyWithdrawal,UilClipboardAlt} from '@iconscout/react-unicons';

  const CardsData =[
    {
      title:"Sales",
      color:{
        backGround:"rgb(33, 33, 57)",
        //boxShadow:"0px 10px 20px 0px #e0c6f5",
        //linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)
        ////rgb(33, 33, 57)
      },
      barValue:70,
      value:"25,970",
      png: UilUsdSquare,
      series:[
        {
            name:"Sales",
            data:[31,40,28,51,42,109,100],
        },
      ]
    },
    {
        title:"Revenue",
        color:{
          backGround:"rgb(33, 33, 57)",
          //boxShadow:"0px 10px 20px 0px #FDC0C7",
          //linear-gradient(180deg,#FF919D 0%,#FC929D 100%)
          //rgb(33, 33, 57)
        },
        barValue:80,
        value:"14,270",
        png: UilMoneyWithdrawal,
        series:[
          {
              name:"Revenue",
              data:[10,100,50,70,80,30,40],
          },
        ]
      },
      {
        title:"Expenses",
        color:{
          backGround:"rgb(33, 33, 57)",
          //boxShadow:"0px 10px 20px 0px #F9D59B",
          //linear-gradient(rgb(248,212,154) -146.42%,rgb(255,202,113) -46.42%)
          ////rgb(33, 33, 57)
        },
        barValue:60,
        value:"4,270",
        png: UilClipboardAlt,
        series:[
          {
              name:"Expenses",
              data:[10,25,15,30,12,15,20],
          },
        ]
      },
]
  

export default CardsData
 