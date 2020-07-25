import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../store/counter/action";
import Link from "next/link";
import NavBar from '../components/NavBar/NavBar'
import Layout from '../components/Layout'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Cardi from '../components/Card/Card'
import News from "../components/Landing/News";
import ParallaxCarousel from '../components/Carousel/Carousel';
import BlogCardDemo from '../components/Landing/Landing';
import Footer from "../components/Landing/Footer";

const useStyles = makeStyles((theme) => ({
    allbleat:{
        margin: '0px 20px 0px 20px'
    },root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function counter({products, subCategory, error }) {
  const globalState = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const classes = useStyles();


  return (
   
    <>
    <Layout>
      
    
    <Grid container>
      <Grid container>
        <Grid item xs={12}>
          <div className='carousel'>
          <Grid container direction="row"
                          justify="center"
                          alignItems="center">
          <Grid item xs={10} sm={12}>
              <ParallaxCarousel />
            </Grid>
           
          </Grid>
          <Grid container direction="row"
                          justify="center"
                          alignItems="center">
          <Grid item xs={12} sm={12}>
            <div>
              <a className="category">Подберите товары по типу вашего бизнеса</a>
            </div>
            </Grid>
          </Grid>
          <BlogCardDemo />
        </div>
        </Grid>
      </Grid>
    </Grid>



    

      
      </Layout>
      
    <div className="recommend_product">
        <div className="container">
            <a className="product_title">Рекомендуемые товары</a>
            <div className="new-grid"> 
            <Grid container justify="center" spacing={5}>
            {products.products.map((product, i) => (
                <Grid key={product} item>
                <Cardi key={i} product={product} />
                </Grid>
                 
            ))}
            
            </Grid> 
            </div>
        </div>
    </div>
    <div style={{textAlign: 'center'}}>
      <a className='product_title'>Новости</a>
    </div>
    <Grid container>
      <Grid item xs>
        <News />
      </Grid>
      <Grid item xs>
        <News />
      </Grid>
      <Grid item xs>
        <News />
      </Grid>
    </Grid>
    

      <Footer />

      <style jsx>
      {` 

      .category{
            color: black;
            justify-content: center;
            font-size: 20px;
            font-family: Montserrat,sans-serif;
            font-weight: 500;
            display: flex; 
            cursor: pointer;
            margin-top: 20px;
            margin-bottom: 20px;
          } 
          .category:hover{
            color: #209F38; 
          } 
        .recommend_product{
          padding: 45px 0 60px;
          position: relative;
          background-color: #f8f8f8;
          box-shadow: inset 0 2px 10px rgba(0,0,0,.1);
        }
        .recommend_product .container{
          position: relative;
        }
        .container{
          padding: 0 15px;
          margin-left: auto;
          margin-right: auto;
        }
        .product_title{
          display: inline-block;
          vertical-align: middle;
          margin-bottom: 30px;
          margin-right: 20px;
          margin-left: 20px;
          color: #323232;
          font-size: 24px;
          font-weight: 600;
          font-family: Montserrat, sans-serif; 
        }
        .product_title:hover{
          cursor: pointer;
          color: #209F38;
        }
        .new-grid{
          
        }
        /*
        @media (min-width: 1290px){
            .container {
                width: 1260px;
            }
        @media (min-width: 992px){
            .container {
                width: 970px;
            }
        @media (min-width: 768px){
            .container {
                width: 750px;
            }
            */
       `}
       
      </style>
    </>
  );
}


export async function getStaticProps(context) {
  
  const getProduct = async() =>
    await axios
     .get(`http://localhost:8000/api/products?sortBy=sold&order=desc&limit=8`)
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

export default counter;
