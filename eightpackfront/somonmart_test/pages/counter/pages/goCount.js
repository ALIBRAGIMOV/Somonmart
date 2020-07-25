import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../../../store/counter/action";
import Layout from "../../../components/Layout";
import { Breadcrumbs } from '@zeit-ui/react'
import NextLink from 'next/link'


const Users = ({ users, error }) => {
  
  const globalState = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const globalCart = useSelector((state) => state.cart.cart)


  return (
    <Layout>

      <Breadcrumbs>
          <NextLink href="/">
            <Breadcrumbs.Item nextLink>Главная страница</Breadcrumbs.Item>
          </NextLink>
          <NextLink href="/pindex">
            <Breadcrumbs.Item nextLink>Товары</Breadcrumbs.Item>
          </NextLink>
          <Breadcrumbs.Item>Breadcrumbs</Breadcrumbs.Item>
        </Breadcrumbs>
        {globalCart.map((item) => (
          <a>{item.count} </a>
            
        ))}
    <section>
      <h1>GLOBAL COUNTER {globalState}</h1>
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
    </section>
  </Layout>
    
  );
};

export default Users;
