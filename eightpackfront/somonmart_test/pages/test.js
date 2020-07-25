import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../store/counter/action";
import { addToCart, removeFromCart } from "../store/cart/action";
import Layout from "../components/Layout";
import { Breadcrumbs, Text, Card, Description, Grid} from '@zeit-ui/react'
import Cardz from '../components/Card/Cardz';


const Test = () => {
    const MockItem = () => {
        return <Card shadow style={{ width: '100%', height: '50px' }} />
      }
  return (
    <Layout>
        <Grid.Container gap={2} justify="center">
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
        <Grid xs><MockItem /></Grid>
    </Grid.Container>
    </Layout>
  );
};



export default Test;
