import React from 'react';

import Child from './components/STATE_LIFTING/Child';
// import Card from './components/Card';
// import data from "./data"
// import List from "./components/uniqueList/List"
// import User from './components/uniqueList/NestedLists';
// import Product from './components/products/Product';
// import Card1 from './components/func_class_component/Card1'
// import Card2 from './components/func_class_component/Card2';
//import { FaJs, FaFacebook } from "react-icons/fa";
// import CONDITIONAL_RENDERING from "./components/CONDITIONAL_RENDERING/index"
// import STATE from './components/STATE';
//import EVENT_HANDLER from './components/EVENT_HANDLER';
//import EVENT_HANDLER_Binding from './components/EVENT_HANDLER_Binding';
//import USESTATE_HOOKS from './components/USESTATE_HOOKS';
// import FORMS from './components/FORMS';
export default function App(){
    const handleChildData = (childData) => {
      console.log(childData);
    }
    return <>
      <Child onChildData={handleChildData}/>
        {/* <Card1 name="Afroza Nisha"/> */}
      {/* <h1 className='headingStyle'>My app</h1>
      {data.map((item,index) => <Card key={index} titleText={item.title} titleDesc={item.desc}/>)} */}
  </>
}