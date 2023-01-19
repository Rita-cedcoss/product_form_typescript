import React, { useEffect } from 'react'
import { addproduct ,settings,placeOrder} from './types'
const useSettingHooks = (productArr:addproduct[],settingArr:settings|null,setProductArr:React.Dispatch<React.SetStateAction<addproduct[]>>,placeorder:placeOrder[]) => {
  let product=productArr;
  let customerZip=placeorder
  if(settingArr!==null)
  {
  if(settingArr?.title=="with Tags"){
    productArr[productArr.length-1].price=settingArr.price;
    productArr[productArr.length-1].stock=settingArr.stock;
    placeorder[placeorder.length-1].zip=settingArr.zip;
  }
  if(settingArr.title=="without Tags")
  {
    productArr[productArr.length-1].price=settingArr.price;
    productArr[productArr.length-1].stock=settingArr.stock;
    placeorder[placeorder.length-1].zip=settingArr.zip;
  }
}
  return {product,customerZip} 
}

export default useSettingHooks