import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../../store/counter/action";
import { addToCart, removeFromCart } from "../../store/cart/action";
import Layout from "../../components/Layout";


const Users = ({products, subCategory, error }) => {
  const globalState = useSelector((state) => state.counter.counter);
  const globalCart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch();

  return (
    <Layout>
    <section>
      <h1>GLOBAL COUNTER: {globalState}</h1>
      <h2>{JSON.stringify(products)}</h2>
      <button onClick={() => dispatch(incrementCounter(globalState))}>
        Increment +
      </button>
      {"  "}
      <button onClick={() => dispatch(decrementCounter(globalState))}>
        Decrement -
      </button>
      <br />
      <p>
        Try to reload this page or open a new tab or view this page another
        time.
        <br />
        You will see the same value everytime. Because the global state is
        persistent and saved in the localstorage
      </p>
      <header>
        <h1>An External API Call</h1>
        <p>
          just to show how next redux wrapper works with getStaticProps based
          Static Site Generation.
        </p>
      </header>
      {!error && products && (
        <div>
          <table>
          <thead>
            <tr>
              <th>Sold</th>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {products.products.map((product, key) => (
              <tr key={key}>
                <td>{product.sold}</td>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td></td>
                <td><button onClick={() => dispatch(addToCart(globalCart, product))}>buy</button></td>
              </tr>
              
            ))}
          </tbody>
          
        </table>
        {globalCart.length > 0 && (
              <div>
              <ul style={{ marginLeft: -25 }}>
                {globalCart.map((item) => (
                  <li key={item._id}>
                    <b>{item.name}</b>
                    <button
                      style={{ float: "right" }}
                      className="btn btn-danger btn-xs"
                      onClick={() =>
                        dispatch(removeFromCart(globalCart, item))
                      }
                    >
                      X
                    </button>
                    <br />
                    {item.count} 
                  </li>
                  
                ))}
              </ul>
  
              <b>
                Sum:{" "}$
                {
                  globalCart.reduce((a, c) => a + c.price * c.count, 0)
                }
              </b>
              <button
                onClick={() => alert("Todo: Implement checkout page.")}
              >
                checkout
              </button>
            </div>
            )}

            <h2>You have {globalCart.length} product in cart</h2>
        </div>
        
      )}
      
      
      
      {products.products.map((product, i) =>{
        <h2>{product}</h2>
      })}
    </section>
    </Layout>
  );
};



  


  export async function getStaticProps(context) {
  
  const getProduct = async() =>
    await axios
     .get(`http://localhost:8000/api/products?sortBy=sold&order=desc&limit=3`)
     .then((res) => ({
       error: false,
       products: res.data,
     }))
     .catch(() => ({
       error: true,
       products: null,
     }));   

  const getSubCategory = async() =>
    await axios
   .get(`http://localhost:8000/api/subcategories`)
   .then((res) => ({
    error: false,
    subCategory: res.data,
  }))
  .catch(() => ({
    error: true,
    subCategory: null,
  })); 

  const dataprod = await getProduct();
  const datasub = await getSubCategory();

  /*await new Promise(acc =>{ 
    setTimeout(acc, 50)
  })
  */

  return {
    props: {products: dataprod, subCategory: datasub}
  };
};

export default Users;
