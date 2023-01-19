import React, {useRef } from "react";
import { addproduct ,settings} from "./types";
type addproductProps = {
  productArr: addproduct[];
  settingArr: settings | null;
  setProductArr: React.Dispatch<React.SetStateAction<addproduct[]>>;
};

const Addproduct = (props: addproductProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const disRef = useRef<HTMLTextAreaElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);
  const stockRef = useRef<HTMLInputElement>(null);
  const addproduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (
      nameRef.current !== null &&
      disRef.current !== null &&
      priceRef.current !== null &&
      tagsRef.current !== null &&
      stockRef.current !== null
    ) {
      
      if(nameRef.current.value!=="" && disRef.current.value!=="" && priceRef.current.value!==""){
        if(props.settingArr?.title=="with Tags"){
          let obj = {
            name: nameRef.current.value+tagsRef.current.value,
            discription: disRef.current.value,
            price: priceRef.current?.value,
            tags: tagsRef.current.value,
            stock: stockRef.current?.value,
          };
          props.productArr.push(obj);
          props.setProductArr([...props.productArr]);
        }else{
          let obj = {
            name: nameRef.current.value,
            discription: disRef.current.value,
            price: priceRef.current?.value,
            tags: tagsRef.current.value,
            stock: stockRef.current?.value,
          };
          props.productArr.push(obj);
          props.setProductArr([...props.productArr]);
        }
       

      nameRef.current.value=" ";
       disRef.current.value=" ";
       priceRef.current.value=" ";
       tagsRef.current.value=" ";
       stockRef.current.value=" ";
      }else{
        alert("Please fill the field");
      }
      
       
    }
  };
  return (
    <div className="container-fluid mt-3 ">
      <h3 className="text-center">Add Product</h3>
      <div className="col-6 m-auto mt-4 border p-4 mb-4">
        <form onSubmit={addproduct}>
            <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              ref={nameRef}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Discription</label>

            <div className="form-floating">
              <textarea
                ref={disRef}
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              ref={priceRef}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Tags</label>
            <input
              type="text"
              ref={tagsRef}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Stocks</label>
            <input
              type="number"
              ref={stockRef}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
        {props.productArr.length>0?
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Tags</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody>
            {props.productArr.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.discription}</td>
                    <td>{item.price}</td>
                    <td>{item.tags}</td>
                    <td>{item.stock}</td>
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

export default Addproduct;
