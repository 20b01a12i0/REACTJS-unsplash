import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
// import A from './A';
import Unsplash from './Unsplash';
import App from './App';

 export const myContext=React.createContext();
 export const location =React.createContext();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <myContext.Provider value={"svecw"}>
  //   <location.Provider value={"bmvr"}>
    <React.StrictMode>
    {/* <App /> */}
    <Unsplash />
    {/* <A /> */}
    </React.StrictMode>
  //   </location.Provider>
  // </myContext.Provider>
);

