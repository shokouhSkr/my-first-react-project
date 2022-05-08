// imr => import React from "react";
// imrd => import ReactDOM from "react-dom";

/******************************************************************/
// When we have a function with at least one method, we need a blueprint to create object of that type. sth like:

class Person() {
  
}

// class, technically is an object in js.

// default export -> import ... from ''
// named export -> import { ... } from ''

// expression: is sth that produces a value. like 2 + 2 = 4

/******************************************************************/
// components in react => every sections of a website like navbar and footer and form and etc. or we can say: a piece of UI.
// App() in react => <App/> => called jsx => javascript and XML. 
// call a function in react => render => we render a component by sth like: <App />
// کامپوننت ها تگ های اچ تی ام ال رو ریترن میکنن و این یعنی رندر کردن
// تعریف کامپوننت: میاد کد هارو مارو جدا از هم میکنه، توی فایل های جدا و با لاجیک های جدا توسعه میده
// کامپوننت ها به ما قابلیت استفاده مجدد میدن

/******************************************************************/
// کامپوننت از نوع فانکشن (فانکشنال کامپوننت):
// الگوش ساخته میشه sfc با دستور

const App = () => {
  return (
    <div className="container bg-pink-200" id="title">
      <h1>Shopping list</h1>
      <p>product #1: book 1</p>
    </div>
  );
};

// we have 'defult export' and 'named export'
export default App; // فقط یکبار اجازه داریم یک فایل رو به صورت دیفالت اکسپورت کنیم
// اکسپورت میکنیم که در هر نقطه از اپلیکیشن بتونیم ایمپورت کنیم

// هست به این شکل ایمپورت میکنیم index.js بعد تو فایل اصلی که:
import App from "./src/App";

// ها به این شکل اکسپورت و ایمپورت میشن named export اما:
export const userName = "shokouh";
export const appName = "react";

import App, { appName, userName } from "./src/App"; // توی براکت میان_میتونی کنترل اسپیس بزنی تا لیست نیمد اکسپورت ها بیاد واست

/******************************************************************/
// App طریقه ایمپورت کردن به فایل:

/* ما کامپوننت هامونو توی فایل های مجزا مینویسیم و همه رو توی فایل اپ ایمپورت میکنیم
و بعد خود فایل اپ رو توی فایل ایندکس جی اس ایمپورت میکنیم
*/

import Product from "./component/product/product"; // مثلا فایلی به نام پروداکت باید توی فایل اپ ایمپورت شه

/******************************************************************/
// props پاس دادن دیتا به کامپوننت برای داینامیک کردن آن با مفهوم:

// سه نوع پراپز داریم: اکسپرشن ها، چیلدرن ها و ایونت ها

// توی فایل پروداکت:
const Product = (props) => {
  return (
    <div className="bg-blue-50 p-4">
      <p>Product: {props.name}</p>  // expresion به این پراپزا که توی براکتن میگن
      <p>Price: {props.price}</p>
    </div>
  );
};

export default Product;

// توی فایل اپ:
const App = () => {
  return (
    <div className="container bg-purple-100 p-4 pt-0 text-center">
      <h1 className="py-4 text-3xl">Shopping list</h1>
      <Product name="React.js" price="100$" />
      <Product name="Node.js" price="89$" />
      <Product name="Tailwind.css" price="25$" />
    </div>
  );
};

export default App;

/******************************************************************/
// nested دیتاهای:

// توی فایل پروداکت:
const Product = (props) => {
  return (
    <div className="bg-blue-50 p-4">
      <p>Product: {props.name}</p>  
      <p>Price: {props.price}</p>
      <p>{props.children}</p>  // این فقط برای اونی که نستد شده اجرا میشه
    </div>
  );
};

export default Product;

// توی فایل اپ:
const App = () => {
  return (
    <div className="container bg-purple-100 p-4 pt-0 text-center">
      <h1 className="py-4 text-3xl">Shopping list</h1>
      <Product name="React.js" price="100$" />
      <Product name="Node.js" price="89$" />
      <Product name="Tailwind.css" price="25$">
        <p className="text-red-600">Discount is 15%</p>  // نستد شده
      </Product>
    </div>
  );
};

export default App;

/******************************************************************/
// کامپوننت از نوع کلاس (کلس کامپوننت):

import React, { Component, Fragment } from "react";  // -> برای استفاده از کامپوننت های کلاسی، میشه اینجوری هم ایمپورت کرد

class App extends Component {  // این کامپوننت یک کلسه که ریکت درستش کرده تا ما به چیزایی که ریکت در اختیارمون گذاشته دسترسی پیدا کنیم
  render() {
    return (
      <div className="container bg-purple-100 p-4 pt-0 text-center">
        <h1 className="py-4 text-3xl">Shopping list</h1>
        <Product name="React.js" price="100$" />
        <Product name="Node.js" price="89$" />
        <Product name="Tailwind.css" price="25$">
          <p className="text-red-600">Discount is 15%</p>
        </Product>
      </div>
    );
  }
}

export default App;

/******************************************************************/
// state: 
// استیت توی "کلس کامپوننت" یک آبجکت جاوااسکریپتیه 

// state و props تفاوت:
// دیتاهایی هستند به کمک آن ها داده های اپلیکیشن داینامیک میشن state و props
// لوکال هست، یعنی فقط داخل کامپوننتی که داخلش هست قابل استفاده س state اما
// به کامپوننت های مختلف پاس داده میشه props در حالیکه دیتاهای 

// state و props ویژگی مشترک:
// کامپوننت ما دوباره رندر میشه state و props تنها با تغییر 

// state: (also using map)

class App extends React.Component {
  state = {
    products: [
      { title: "Tailwindcss", price: "390$" },
      { title: "JavaScript", price: "220$" },
      { title: "React", price: "300$" },
    ],
  };
  render() {
    return (
      <div className="container bg-purple-100 p-4 pt-0 text-center">
        <h1 className="py-4 text-3xl">Shopping list</h1>
        {this.state.products.map((product) => {
          return <Product name={product.title} price={product.price} />;
        })}
      </div>
    );
  }
}

export default App;

/******************************************************************/
// ایونت کلیک: (اینجا در یک کلس کامپوننت)

// اجازه داریم دیتا های خودمون رو در کامپوننت ها به روز کنیم setState فقط از طریق

class App extends React.Component {
  state = {
    products: [
      { title: "Tailwindcss", price: "390$" },
      { title: "JavaScript", price: "220$" },
      { title: "React", price: "300$" },
    ],
  };

  clickHandler = () => {  //** 
    // setState() => to uppate states
    this.setState({
      products: [
        { title: "Tailwindcss", price: "35$" },
        { title: "JavaScript", price: "20$" },
        { title: "React", price: "25$" },
      ],
    });
  }

  render() {
    return (
      <div className="container bg-purple-100 p-4 pt-0 text-center">
        <h1 className="py-4 text-3xl">Shopping list</h1>
        {this.state.products.map((product) => {  // داریم. توی فانکشن ها نداریم this یادت باشه توی کلس ها
          return <Product name={product.title} price={product.price} />;
        })}
        <button
          onClick={this.clickHandler}  //*
          className="mt-4 rounded bg-green-100 p-2 ring-1 ring-green-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Change price
        </button>
      </div>
    );
  }
}

export default App;

/******************************************************************/
// به ریکت اضافه شد؟ hook چرا

// در نسخه های قدیمی تر ریکت زمانی که میخواستیم به فانکشنال کامپوننتمون استیت بدیم، مجبور بودیم به کلس کامپوننت تبدیلش کنیم تا بتونیم از استیت استفاده کنیم
// در فانکشنال کامپوننت ها هم استفاده کنیم state و lifeCycle پس هوک اضافه شد تا ما بتونیم از

// sfc => stateless functional component 

// حالا که برای داینامیک کردن فانکشنال کامپوننت نمیتونیم از استیت استفاده کنیم از هوک ها استفاده میکنیم. چطور؟
// import React, {useState} from "react"; با
// و قسمت ستاره دار

const App = () => {
  const [products, setProducts] = useState([  //* => مقدار اولیه ای که میدیم به یوزاستیت
    { title: "Tailwindcss", price: "90$" },
    { title: "JavaScript", price: "100$" },
    { title: "React", price: "80$" },
  ]);

  const clickHandler = () => {
    setProducts([
      { title: "Tailwindcss", price: "20$" },
      { title: "JavaScript", price: "30$" },
      { title: "React", price: "40$" },
    ]);
  };

  return (
    <div className="container bg-purple-100 p-4 pt-0 text-center">
      <h1 className="py-4 text-3xl">Shopping list</h1>
      {products.map((product) => {
        return <Product name={product.title} price={product.price} />;
      })}
      <button
        onClick={clickHandler}
        className="mt-4 rounded bg-green-100 p-2 ring-1 ring-green-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
      >
        Change price
      </button>
    </div>
  );
};

export default App;

/******************************************************************/
// callback آپدیت استیت به کمک: 

// یک قانون کلی برای هم کلس و هم فانکشنال کامپوننت ها وجود داره که
// اگر اپدیت استیت ما بر اساس استیت قبلی مون باشه از کال بک ها استفاده میکنیم
// update state based on previous state => callback function


// by functional component:
import React, { useState } from "react";

const HookContent = () => {
  const [count, setCount] = useState(0); 

  const addOneHandler = () => {
    setCount(prevCount => prevCount + 1);  // نکته ای که گفته شد:
  };
  const addTwoHandler = () => {
    setCount(prevCount => prevCount + 2);
  };

  const addFiveHandler = () => {
    // setCount(count + 5);
    // use callback:
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1) // this arrow function here called callback function
    }                                      // البته چون اینجا تک خطیه شبیه ارو فانکشن نیست
  };                                        

  return (
    <div className="container mt-4 w-1/2 rounded bg-yellow-50 p-4 ring-1 ring-yellow-500">
      <h2>count - {count}</h2>
      <div className="flex items-center justify-center gap-x-2">
        <button
          className="mt-4 rounded bg-green-100 p-2 ring-1 ring-green-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={addOneHandler}
        >
          add One
        </button>
        <button
          className="mt-4 rounded bg-green-100 p-2 ring-1 ring-green-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={addTwoHandler}
        >
          add Two
        </button>
        <button
          className="mt-4 rounded bg-green-100 p-2 ring-1 ring-green-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={addFiveHandler}
        >
          add Five
        </button>
      </div>
    </div>
  );
};

export default HookContent;




// by class component:
class ClassCounter extends Component {
  state = {
    count: 0,
  };

  addOneHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  addTwoHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 2 };
    });
  };

  addFiveHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 5 };
    });
  };

  render() {
    return (
      <div className="container mt-4 w-1/2 rounded bg-yellow-50 p-4 ring-1 ring-yellow-500">
        <h2>count - {this.state.count}</h2>
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="mt-4 rounded bg-blue-100 p-2 ring-1 ring-blue-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={this.addOneHandler}
          >
            add One
          </button>
          <button
            className="mt-4 rounded bg-red-100 p-2 ring-1 ring-red-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={this.addTwoHandler}
          >
            add Two
          </button>
          <button
            className="mt-4 rounded bg-green-100 p-2 ring-1 ring-green-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            onClick={this.addFiveHandler}
          >
            add Five
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;

/******************************************************************/
// آپدیت استیت از نوع آبجکت:

//  اگر دیتایی که آپدیت میکنیم از نوع آبجکت باشه، اول میایم از دیتاهای قبلی یک کلون میگیریم بعد آپدیتش میکنیم تا پراپرتی های قبلی حذف نشه

// by functional component:
import { useState } from "react";

const HookObject = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const firstNameHandler = (e) => {
    //console.log(e.target.value) => s, sa, sah, sahe, saheb
    setUser({ ...user, firstName: e.target.value });  // اگر استیت مون یک آبجکت بود، باید موقع اپدیت اینجوری اول کلشو باز کنیم 
  };

  const lastNameHandler = (e) => {
    //console.log(e.target.value) => s, sa, sah, sahe, saheb
    setUser({ ...user, lastName: e.target.value });
  };

  return (
    <div className="mt-4 rounded p-4">
      <form>
        <input
          type="text"
          value={user.firstName}
          onChange={firstNameHandler}
          className="mb-4 mr-2 p-2"
        />
        <input
          type="text"
          value={user.lastName}
          onChange={lastNameHandler}
          className="mb-4 p-2"
        />
        <h2>My first name is - {user.firstName}</h2>
        <h2>My last name is - {user.lastName}</h2>
        <div>{JSON.stringify(user)}</div>
      </form>
    </div>
  );
};

export default HookObject;



// by functional component:

/******************************************************************/
// آپدیت استیت از نوع آرایه:

// اگر دیتاهایی که آپدیت میکنیم از نوع آرایه بود، باید یک کلون از دیتاهای قبلی بگیریم

// by functional component:
import React, { useState } from "react";

const HookArray = () => {
  const [item, setItem] = useState([]);

  const addItemHandler = () => {
    const addedItem = {
      id: item.length,
      number: Math.floor(Math.random() * 10),
    };

    const updatedItem = [...item, addedItem];

    setItem(updatedItem);
  };

  return (
    <div className="mt-4 bg-red-200 p-2">
      <button onClick={addItemHandler} className="block w-full  px-10">
        Add Item
      </button>
      {item.map((item) => {
        return <li key={item.id}>{item.number}</li>;
      })}
    </div>
  );
};

export default HookArray;




// by functional component:

/******************************************************************/
// در ریکت key مفهوم:

// چرا از کلیدها استفاده میکنیم؟ چون ریکت نمیدونه ما کدوم کامپوننت رو داریم استیت میکنیم و دیتای کدوم کامپوننت داره تغییر میکنه

// چرا برای کلید ها نباید از ایندکس استفاده کنیم؟
// وقتی از ایندکس ها به عنوان کلید استفاده میشه، مرتب کردن مجدد یک لیست، یا افزودن و حذف موارد از یک لیست می تواند باعث ایجاد مشکلاتی در استیت کردن کامپوننت ها بشه
// اگر از ایندکس به عنوان کلید استفاده کنیم، مرتب کردن مجدد یک آیتم آن را تغییر می دهد. از این رو، استیت یک کامپوننت ممکنه اشتباه عمل کنه و از یک کلید قدیمی در یک کامپوننت استفاده کنه

const clickHandler = () => {
    setProducts([
      { title: "Tailwindcss", price: "20$", id:1 }, // these are uniqe ideas
      { title: "JavaScript", price: "30$", id:2 },
      { title: "React", price: "40$", id:3 },
    ]);
  };

  return (
    <div className="container bg-purple-100 p-4 pt-0 text-center">
      <h1 className="py-4 text-3xl">Shopping list</h1>
      {products.map((product) => {
        return <Product name={product.title} price={product.price} key={product.id}/>;  // this is the key in map
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
}

export default App;

/******************************************************************/
// pass "argument" to event: (in class component)

// وقتی ارو فانکشن ما یک خطی هست دیگه ریترن رو نمینویسیم

import React, { Component } from 'react';

class ArgumentPassing extends Component {
  state = { 
  } 

  clickHandler = () => {
    ...
  }

  countHandler = () => {
    this.setState({count: this.state.count + 1})
  }

  render() { 
    return (
      <div>
        <h1>Shopping App</h1>
        <button onClick={this.countHandler.bind(this, 2)}>  // از متود بایند استفاده کردیم تا بتونیم به چیزای کلاس دسترسی پیدا کنیم
          counter: {this.state.count}</button>              // و ارگومان دوم هم مقداریه که بهش پاس میدیم
      </div>
    );
  }
}

export default ArgumentPassing;

// یا میتونیم از ارو فانکشن برای پاس دادن مقدار به ایونت استفاده کنیم:
return (
      <div>
        <h1>Shopping App</h1>
        <button onClick={() => this.countHandler(2)}>  // راه دوم و راه بهتر_استفاده از ارو فانکشن
          counter: {this.state.count}</button>              
      </div>
    );

/******************************************************************/
// pass function ass props:

// توی فایل پروداکت:
const Product = (props) => {
  return (
    <div className="bg-blue-50 p-4" onClick={props.click}> //*
      <p>Product: {props.name}</p>
      <p>Price: {props.price}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Product;



// توی فایل اپ:
class PropsPassing extends React.Component {
  state = {
    products: [
      { title: "Tailwindcss", price: "390$" },
      { title: "JavaScript", price: "220$" },
      { title: "React", price: "300$" },
    ],
  };

  clickHandler = (newTitle) => {  //*
    this.setState({
      products: [
        { title: "Tailwindcss", price: "35$" },
        { title: newTitle, price: "20$" },  //*
        { title: "React", price: "25$" },
      ],
    });
  };

  render() {
    return (
      <div className="container bg-purple-100 p-4 pt-0 text-center">
        <h1 className="py-4 text-3xl">Shopping list</h1>
        {this.state.products.map((product) => {
          return <Product name={product.title} price={product.price} click={() => this.clickHandler('new title')} />; //*
        })}
        <button
          onClick={this.clickHandler({id:2})} //*
          className="mt-4 rounded bg-green-100 p-2 ring-1 ring-green-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Change price
        </button>
      </div>
    );
  }
}

export default PropsPassing;

/******************************************************************/
// fragment:

// مفهومش اینه که هر تگ جی اس ایکس، باید یک تگ پدر داشته باشه
// اگر تگ ما نیازی به تگ پدر نداشت، به جاش از تگ فرگمنت استفاده میکنیم

import React, {Fragment} from 'react'; //*

const Product = (props) => {
  return (
    <Fragment>  //*
      <p>product name: {props.name} courses</p>
      <p>product price: {props.price}</p>
    </Fragment>
  )
}

export default Product;

// حتی میشه فرگمنت رو ایمپورت نکرد و تگ خالی گذاشت
const Product = (props) => {
  return (
    <>  //*
      <p>product name: {props.name} courses</p>
      <p>product price: {props.price}</p>
    </>
  )
}

export default Product;

/******************************************************************/
// هر کامپوننتی که استیتش تغییر میکنه باید هندلرها همون جا نوشته بشه

// استیت، لوکاله
