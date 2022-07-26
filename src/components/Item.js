
import React from "react";
import {useState} from "react";

function Item({ name, category }) {
    const [itemInCart, setItemInCart] = useState(false)

    function handleItemInCart(){
      setItemInCart((itemInCart) => !itemInCart)
    }
  return (

    <li className={itemInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={itemInCart ? "remove" : "add"} onClick={handleItemInCart}>{itemInCart ? "Remove From Cart" : "Add to Cart"}</button>

    </li>
  );
}
export default Item;