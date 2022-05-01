import React, { useState } from "react";
// import React, { Component } from "react";  -> برای استفاده از کامپوننت های کلاسی، میشه اینجوری هم ایمپورت کرد

import Product from "./components/Product/Product";
// import HookContent from "./HookCounter";
// import ClassCounter from "./ClassCounter";
// import HookObject from "./components/HookObject";
// import ClassObject from "./components/ClassObject";
import HookArray from "./components/HookArray";

/////////////////////////////////////////////
// functional component:

// const App = () => {
//   return (
//     <div className="container bg-purple-100 p-4 pt-0 text-center">
//       <h1 className="py-4 text-3xl">Shopping list</h1>
//       <Product />
//       <Product />
//       <Product />
//     </div>
//   );
// };

// export default App;

/////////////////////////////////////////////
// using props: (for make it dynamic)

// const App = () => {
//   return (
//     <div className="container bg-purple-100 p-4 pt-0 text-center">
//       <h1 className="py-4 text-3xl">Shopping list</h1>
//       <Product name="React.js" price="100$" />
//       <Product name="Node.js" price="89$" />
//       <Product name="Tailwind.css" price="25$">
//         <p className="text-red-600">Discount is 15%</p>
//       </Product>
//     </div>
//   );
// };

// export default App;

/////////////////////////////////////////////
// class component:

// class App extends React.Component {
//   render() {
//     return (
//       <div className="container bg-purple-100 p-4 pt-0 text-center">
//         <h1 className="py-4 text-3xl">Shopping list</h1>
//         <Product name="React.js" price="100$" />
//         <Product name="Node.js" price="89$" />
//         <Product name="Tailwind.css" price="25$">
//           <p className="text-red-600">Discount is 15%</p>
//         </Product>
//       </div>
//     );
//   }
// }

// export default App;

/////////////////////////////////////////////
// state: (also using map)

// class App extends React.Component {
//   state = {
//     products: [
//       { title: "Tailwindcss", price: "390$" },
//       { title: "JavaScript", price: "220$" },
//       { title: "React", price: "300$" },
//     ],
//   };
//   render() {
//     return (
//       <div className="container bg-purple-100 p-4 pt-0 text-center">
//         <h1 className="py-4 text-3xl">Shopping list</h1>
//         {this.state.products.map((product) => {
//           return <Product name={product.title} price={product.price} />;
//         })}
//       </div>
//     );
//   }
// }

// export default App;

/////////////////////////////////////////////
// click event:

// class App extends React.Component {
//   state = {
//     products: [
//       { title: "Tailwindcss", price: "390$" },
//       { title: "JavaScript", price: "220$" },
//       { title: "React", price: "300$" },
//     ],
//   };

//   clickHandler = () => {
//     // setState() => to uppate states
//     this.setState({
//       products: [
//         { title: "Tailwindcss", price: "35$" },
//         { title: "JavaScript", price: "20$" },
//         { title: "React", price: "25$" },
//       ],
//     });
//   };

//   render() {
//     return (
//       <div className="container bg-purple-100 p-4 pt-0 text-center">
//         <h1 className="py-4 text-3xl">Shopping list</h1>
//         {this.state.products.map((product) => {
//           return <Product name={product.title} price={product.price} />;
//         })}
//         <button
//           onClick={this.clickHandler}
//           className="mt-4 rounded bg-green-100 p-2 ring-1 ring-green-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
//         >
//           Change price
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

/////////////////////////////////////////////
// توسعه کامپوننت با فانکشن:

// const App = () => {
//   const [products, setProducts] = useState([
//     { title: "Tailwindcss", price: "90$" },
//     { title: "JavaScript", price: "100$" },
//     { title: "React", price: "80$" },
//   ]);

//   const clickHandler = () => {
//     setProducts([
//       { title: "Tailwindcss", price: "20$" },
//       { title: "JavaScript", price: "30$" },
//       { title: "React", price: "40$" },
//     ]);
//   };

//   return (
//     <div className="container bg-purple-100 p-4 pt-0 text-center">
//       <h1 className="py-4 text-3xl">Shopping list</h1>
//       {products.map((product) => {
//         return <Product name={product.title} price={product.price} />;
//       })}
//       <button
//         onClick={clickHandler}
//         className="mt-4 rounded bg-green-100 p-2 ring-1 ring-green-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
//       >
//         Change price
//       </button>
//     </div>
//   );
// };

// export default App;

/////////////////////////////////////////////
// callback آپدیت استیت به کمک:

const App = () => {
  const [products, setProducts] = useState([
    { title: "Tailwindcss", price: "90$" },
    { title: "JavaScript", price: "100$" },
    { title: "React", price: "80$" },
  ]);

  const clickHandler = () => {
    setProducts([
      { title: "Tailwindcss", price: "20$", id: 1 },
      { title: "JavaScript", price: "30$", id: 2 },
      { title: "React", price: "40$", id: 3 },
    ]);
  };

  return (
    <div className="container bg-purple-100 p-4 pt-0 text-center">
      <h1 className="py-4 text-3xl">Shopping list</h1>
      {products.map((product) => {
        return (
          <Product
            name={product.title}
            price={product.price}
            key={product.id}
          />
        );
      })}
      <button
        onClick={clickHandler}
        className="mt-4 rounded bg-green-100 p-2 ring-1 ring-green-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
      >
        Change price
      </button>
      <HookArray />
    </div>
  );
};

export default App;
