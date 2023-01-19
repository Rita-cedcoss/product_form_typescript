import React, { useRef } from "react";
import { settings } from "./types";
// import useSettingHooks from "./useSettingHooks";
type addSettingsProps = {
  settingArr: settings | null;
  setSetting: React.Dispatch<React.SetStateAction<settings | null>>;
};
const AddSettings = (props: addSettingsProps) => {
  const titleRef = useRef<HTMLSelectElement>(null);
  const defPriceRef = useRef<HTMLInputElement>(null);
  const defStockRef = useRef<HTMLInputElement>(null);
  const defZipRef = useRef<HTMLInputElement>(null);
  const addSettings = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (
      titleRef.current !== null &&
      defPriceRef.current !== null &&
      defStockRef.current !== null &&
      defZipRef.current !== null
    ) {
      if (
        titleRef.current.value !== "" &&
        defPriceRef.current.value !== "" &&
        defStockRef.current.value !== "" &&
        defZipRef.current.value !== ""
      ) {
        let obj = {
          title: titleRef.current.value,
          price: defPriceRef.current.value,
          stock: defStockRef.current.value,
          zip: defZipRef.current.value,
        };
        props.setSetting(obj);
        titleRef.current.value = " ";
        defPriceRef.current.value = " ";
        defStockRef.current.value = " ";
        defZipRef.current.value = " ";
      } else {
        alert("Please fill the all fieldS");
      }
    }
  };
  return (
    <div className="container-fluid mt-3 ">
      <h3 className="text-center">Add Settings</h3>
      <div className="col-6 m-auto mt-4 border p-4 mb-4">
        <form onSubmit={addSettings}>
          <div className="mb-3">
            <label className="form-label">Product</label>
            <select
              className="form-select"
              aria-label="Default select example"
              ref={titleRef}
            >
              <option value="with Tags" selected>With Tags</option>
              <option value="without Tags">Without Tags</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Default price</label>
            <input type="text" className="form-control" ref={defPriceRef} />
          </div>
          <div className="mb-3">
            <label className="form-label">Default stock</label>
            <input type="number" className="form-control" ref={defStockRef} />
          </div>
          <div className="mb-3">
            <label className="form-label">Default zip</label>
            <input type="number" className="form-control" ref={defZipRef} />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Settings
          </button>
        </form>
       {/* {props.settingArr? */}
       <table className="table mt-5">
       <thead>
         <tr>
           <th scope="col">Name</th>
           <th scope="col">Price</th>
           <th scope="col">Zip</th>
           <th scope="col">Stock</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>{props.settingArr?.title}</td>
           <td>{props.settingArr?.price}</td>
           <td>{props.settingArr?.zip}</td>
           <td>{props.settingArr?.stock}</td>
         </tr>
       </tbody>
     </table>
       {/* :""} */}
        
      </div>
    </div>
  );
};
export default AddSettings;
