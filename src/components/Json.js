import React from "react";
export default function Json() {
  const [starWarsdata, setStarWarsData] = React.useState({
  const [count,setCount] = React.useState(0)
    //1.get the data(fetch api)
    //2. save the data state
  });
  // console.log("component rendered");
  
  // React.useEffect(fetch("https://swapi.dev/api/people/1")
  // .then((res) => res.json())
  // .then((data) => console.log(data)););
  React.useEffect(()=>{
     
     },[count])
     return (
       <div>
          <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>
          <h2>The count is:</h2>
          <button onClick={()=>setCount(prevCount => prevCount+1)}>Add</button>
       </div>
  );
     }
