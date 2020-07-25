import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../../store/counter/action";
import Layout from "../../components/Layout";
import { useRouter } from 'next/router'

const Users = ({ users, error }) => {
  
  const globalState = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/counter/pages/suka')
  }


  return (
    <Layout>
                <a href={'/counter/pages/suka'} onClick={handleClick}>
      GO next
    </a>
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
