import React from "react";
// import boxes from "./boxes";
// import Box from "./Box";

// import image from "./images/star-empty-icon.png"
// import Count from "./Count"
// export default function App(){
//   console.log(image)
// const [count, setCount]=React.useState(0)
// function add(){
//    setCount(prevCount=>prevCount+1) // callback function previous value la update kela
// }
// function sub(){
//     setCount(prevCount=>prevCount-1)
//  }
//  console.log("App Component rendered")
// return(
//     <div className="counter">
//       <button onClick={sub}className="counter-minus">-</button>
//       <Count number={count}/>
//       <button onClick={add}className="counter--plus">+</button>
//     </div>
// )
// const [isGoingOut , setIsGoingOut] = React.useState(true)
// function changeMind(){
//   setIsGoingOut(prevState => !prevState)
// }
// return(
//   <div>
//     <h1>Do I feel like going out tonight</h1>
//     <div onClick={changeMind}>
//       <h1>{isGoingOut?"yes":"no"}</h1>
//     </div>
//   </div>)
//   const[contact, setContact] = React.useState({
//    firstName:"sakshi",
//     lastName:"Doe",
//     phone:"+1 (719) 555-1212",
//     email:"sakshi@gmail.com",
//     isFavourite: false
//   })
//   let starIcon = contact.isFavourite ? "star-empty-icon.png":"star-filled.png"
//      function toggleFavorite(){
//        setContact(precContact =>({
//            ...prevContact,
//              isFavourite: !precContact.isFavourite

//          }))
//       }
//             return(
//     <main>
//          <article className="card">
//           <div>
//              <img src={image} alt="pic"
//               onClick={toggleFavorite}/>
//           <h2>{contact.firstName}{contact.lastName}</h2>
//            <p>{contact.phone}</p>
//            <p>{contact.email}</p>
//         </div>

//        </article>
//     </main>
//   )
// }
// export default function App(){
//   const [user, setUser] = React.useState("Sakshi")
//   return (
//     <main>
//       <Header user={user}/>
//       <Body user={user}/>
//     </main>
//   )
// }
// export default function App() {
//   const [squares, setSquares] = React.useState(boxes);

//   function toggle(id) {
//     setSquares((prevSquares) => {
//       return prevSquares.map((square) => {
//         return square.id === id ? { ...square, on: !square.on } : square;
//       });
//     });
//   }
//   const squareElements = squares.map((square) => (
//     <Box
//       key={square.id}
//       id={square.id}
//       on={square.on}
//       toggle={() => toggle(square.id)}
//     />
//   ));
//   return <main>{squareElements}</main>;
// }
export default function App() {
  const [messages, setMessages] = React.useState(["a"]);

  return (
    <div>
      {messages.length === 0 ? (
        <h1>you're all caught up! </h1>
      ) : (
        <h1>
          You have {messages.length} unread{" "}
          {messages.length > 1 ? "messages" : "message"}
        </h1>
      )}
    </div>
  );
}
