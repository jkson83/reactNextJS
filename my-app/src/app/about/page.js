'use client';
import { useState } from "react";

function MyButton(){
  const [count, setCounct] = useState(0);
  return (
    <div>
      <button onClick={() => setCounct(count + 1)}>Click Me</button>
      <span>count: {count}</span>
    </div>
  );
}

//list.map test
const products = [
  {title: 'Cat', id:1},
  {title: 'Dog', id:2},
  {title: 'Pig', id:3}
]

export default function About() {
  const user = {
    name:'Hello world'
  }
  
  const listItems = products.map(product => 
  <li key = {product.id}>
    {product.title}
  </li>
);

  return (
    <div>
      <h1>{user.name}</h1>
      <hr />
      클릭 예제
      <MyButton />
      <hr />
      리스트예제
      <ul>
        {listItems}
      </ul>
      <hr />
    </div>
  );
}