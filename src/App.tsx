import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Addproduct from './TypescriptTask/ Addproduct';
import Placeorder from './TypescriptTask/Placeorder';
import AddSettings from './TypescriptTask/AddSettings';
import {addproduct,placeOrder,settings} from './TypescriptTask/types'
import useSettingHooks from './TypescriptTask/useSettingHooks';
// import settings from './TypescriptTask/types'
function App() {
  const [productArr,setProductArr]=useState<addproduct[]>([]);
  const [placeorder,setPlaceorder]=useState<placeOrder[]>([]);
  const [settingArr,setSetting]=useState<settings|null>(null);
  useSettingHooks(productArr,settingArr,setProductArr,placeorder);

  return (
    <>
    {
      placeorder.length>0?<AddSettings settingArr={settingArr} setSetting={setSetting}/>:''
    }
    
    <Addproduct productArr={productArr} setProductArr={setProductArr} settingArr={settingArr}/>
    {productArr.length>0?<Placeorder placeorder={placeorder} setPlaceorder={setPlaceorder} productArr={productArr}/>:""}
    
   
    </>
  );
}

export default App;
