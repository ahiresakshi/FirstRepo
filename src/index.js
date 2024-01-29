import React from "react";
import ReactDOM from "react-dom";
//import App from "./components/App.js";
import "./style.css";
//import Form from "./components/Form.js";
//import Signup from "./components/Signup";
// import Json from "./components/Json";
//import Window from "./components/Window";
//import Game from "./components/Game";
import Netflix from "./Netflix";
// function App(){
//     const [thingsArray, setThingsArray] =React.useState(["Thing1", "Thing2"])
//     function addItem(){
//         setThingsArray(prevThingsArray =>{
//             return[...prevThingsArray, `Thing ${prevThingsArray.length+1}`]
//         })

//     }
//     const thingsElements = thingsArray.map(thing=><p key={thing}>{thing}</p>)
//     return(
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }
// ReactDOM.render(<App/>,document.getElementById("root"))
function Index() {
  return <Netflix />;
}
ReactDOM.render(<Index />, document.getElementById("root"));
