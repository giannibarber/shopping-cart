import React from "react";
import ReactDOM from "react-dom/client";
import mockData from "../mockData/data.js"

const App = ({products}) => {
  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <button className="checkout" disabled="true">Checkout</button> // this is not correct.
        </div>
      </header>

      <main>
        <div className="product-listing">
          <h2>Products</h2>
          <ul className="product-list">
            {products.map(product => {
              return (
                <Product
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                />
              )
            })}
          </ul>
        </div>
        <div className="add-form">
            <p><button className="add-product-button">Add A Product</button></p>
            <h3>Add Product</h3>
            <form>
              <div className="input-group">
                <label htmlFor="product-name">Product Name:</label>
                <input
                  type="text"
                  id="product-price"
                  name="product-price"
                  required="true"
                ></input>
              </div>
              <div className="input-group">
                <label htmlFor="product-price">Price:</label>
                <input
                  type="number"
                  id="product-price"
                  name="product-price"
                  min="0"
                  step="0.01"
                  required="true"
                ></input>
              </div>
              <div className="input-group">
                <label htmlFor="product-quantity">Quantity:</label>
                <input
                  type="number"
                  id="product-quantity"
                  name="product-quantity"
                  min="0"
                  required="true"
                ></input>
              </div>
              <div className="actions form-actions">
                <button type="submit">Add</button>
                <button type="button">Cancel</button>
              </div>
            </form>
        </div>
      </main>
    </div>
  );
};

const Product = ({title, price, quantity}) => {
  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit">Edit</button>
        </div>
        <button className="delete-button"><span>X</span></button>
      </div>
    </li>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App products={mockData} />);