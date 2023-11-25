import React,{useState} from 'react'

const Friends = () => {
  const [image,setImage] = useState("");
  
  const convert=(e)=>{
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    
     reader.onload = () =>{
    //  console.log(reader.result);
      setImage(reader.result);
     }
  }
  return (
    <div style={{color:'#fff',background:'green',height:'100%'}}>
      <input type='file' accept='images/png,images/jpg' onChange={convert}/>
      <img src={image}  style={{width:'250px',height:'250px',background:'red'}} alt=""/>
    </div>
  )
}

export default Friends