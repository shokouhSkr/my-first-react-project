// const Product = () => {
//   return (
//     <div className="bg-blue-50 p-4">
//       <p>Product name: React.js</p>
//       <p>Price: 99$</p>
//     </div>
//   );
// };

// export default Product;

/////////////////////////////////////////////
// using props: (for make it dynamic)

const Product = (props) => {
  return (
    <div className="bg-blue-50 p-4">
      <p>Product: {props.name}</p>
      <p>Price: {props.price}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Product;
