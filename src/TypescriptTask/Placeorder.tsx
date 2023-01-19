import React, { memo, useRef } from "react";
import {addproduct, placeOrder } from "./types";
type placeOrderProps={
  productArr:addproduct[],
  placeorder:placeOrder[],
  setPlaceorder:React.Dispatch<React.SetStateAction<placeOrder[]>>

}
const Placeorder = (props:placeOrderProps) => {
  const nameRef=useRef<HTMLInputElement>(null);
  const addRef=useRef<HTMLInputElement>(null);
  const zipRef=useRef<HTMLInputElement>(null);
  const prodRef =useRef<HTMLSelectElement>(null);
  const quantRef=useRef<HTMLInputElement>(null);
    const PlaceOrder=(e:React.SyntheticEvent)=>{
        e.preventDefault();
        if(nameRef.current!==null&& addRef.current!==null&& zipRef.current!==null&& prodRef.current!==null&&quantRef.current!==null){
         if(nameRef.current.value!=="" && addRef.current.value!=="" && prodRef.current.value!=="" && quantRef.current.value!==""){
          let obj={
            customerName:nameRef.current.value,
            address:addRef.current.value,
            zip:zipRef.current.value,
            product:prodRef.current.value,
            quantity:quantRef.current?.value,
           }
           props.placeorder.push(obj);
           props.setPlaceorder([...props.placeorder]);
           nameRef.current.value=" ";
           addRef.current.value=" ";
           zipRef.current.value=" ";
           prodRef.current.value=" ";
           quantRef.current.value=" "
         }
          else{
               alert("Please fill the field")
          }
        }
    }
  return (
    <div className="container-fluid mt-3 ">
      <h3 className="text-center">Place order</h3>
      <div className="col-6 m-auto mt-4 border p-4 mb-4">
        <form onSubmit={PlaceOrder}>
          <div className="mb-3">
            <label className="form-label">Customer name</label>
            <input
              ref={nameRef}
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Customer address</label>
            <input type="text" ref={addRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Zip</label>
            <input type="number" ref={zipRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Product</label>
           
            <select className="form-select" aria-label="Default select example" ref={prodRef}>
            {props.productArr.map(item=>{
              return(
                <>
                     <option value={item.name}>{item.name}</option>
                </>
              )
            })}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input type="number" ref={quantRef} className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary">
            Placeorder
          </button>
        </form>
        {props.placeorder.length>0?
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">Customer name</th>
              <th scope="col">Customer address</th>
              <th scope="col">Zip</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {props.placeorder.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.customerName}</td>
                    <td>{item.address}</td>
                    <td>{item.zip}</td>
                    <td>{item.product}</td>
                    <td>{item.quantity}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>:""}
      </div>

    </div>
  );
};

export default  Placeorder;
