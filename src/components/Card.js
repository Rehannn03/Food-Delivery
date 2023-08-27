import { useEffect, useRef, useState } from "react";
import { useDispatch,useCart } from "./Cart";

const Card = (props) => {
  const priceRef=useRef()
  let dispatch=useDispatch()
  let options=props.option
  let price=Object.keys(options)
  const[qty,setQty]=useState(1)
  const[size,setSize]=useState('')
  let data=useCart()
  const handleAddtoCart=async ()=>{
    await dispatch({type:'ADD',id:props.foodItem._id,name:props.foodItem.name,qty:qty,size:size,img:props.foodItem.img,price:finalPrice})
    await console.log(data)
  }
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
  let finalPrice=qty*parseInt(options[size])
  return (
    <div>
      <div className="card mt-3 " style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={props.foodItem.img} style={{objectFit:'fill',height:"100px"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">Content</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-secondary rounded" onChange={(e)=>{setQty(e.target.value)}}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-secondary rounded" ref={priceRef} onChange={(e)=>{setSize(e.target.value)}}>
              {price.map((data)=>{return(
                <option key={data} value={data}>{data}</option>)
              })}
            </select>
            <div className="d-inline fs-6">₹{finalPrice}/-</div>
            
          </div>
          <hr />
        <button className="btn btn-success justify-center ms-2" onClick={handleAddtoCart}>Add to Cart</button>
        </div>
       
        
      </div>
    </div>
  );
};

export default Card;
