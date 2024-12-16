import axios from 'axios'
import React, { useState } from 'react'

const Product = () => {

  const [data ,setData]=useState([])



  function FetchData()
  {
    axios.get('http://localhost:3000/Products')
  .then(function (response) {
    // handle success
    setData(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  }FetchData()
  
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(() => {
        console.log('Product deleted');
        fetchProducts();
      })
      .catch((err) => console.error(err));
  };

  return (
   <>
    <div>Product</div>

{
  data.map((el)=>
   ( <div key={el.id} style={{display:"flex",alignItems:"center",textAlign:"center", margin:"auto",flexDirection:"column" ,width:"1200px",height:"500px",border:"1px solid grey",marginBottom:"40px"}}>
    <img src={el.image} height={200} width={200}></img>
    <h4>{el.title}</h4>
    <h1>{el.price}</h1>
    <h4>{el.description}</h4>
    <div style={{display:"flex", justifyContent:"space-between",width:"180px",margin:"20px"}}><button style={{padding:"10px 20px"}}>Edit</button>
    <button style={{padding:"10px 20px"}} onClick={() => handleDelete(el.id)}>Delete</button></div>
    <button style={{padding:"10px 20px", marginBottom:"20PX"}} >ADD TO CART</button>
  </div>))
}
   </>
 
  )
}

export default Product