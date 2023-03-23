import React, { useState } from 'react';
import Header from "./components/header/header";
import Footer from './components/footer/Footer';

function App() {
  const [likes, setCount] = useState(0)
  const [value, setValue] = useState('начальное значение')

  return (
    // <div>
    //   <p>likes: {likes}</p>
    //   <button onClick={() => setCount(likes + 1)}>+</button>
    //   <button onClick={() => setCount(likes - 1)}>-</button>
    //   <h1>{value}</h1>
    //   <input value={value} onChange={(event) => setValue(event.target.value)}/>
    // </div>
    <>
      <Header></Header>
      <Footer></Footer>
    </>
  );
}

export default App;
