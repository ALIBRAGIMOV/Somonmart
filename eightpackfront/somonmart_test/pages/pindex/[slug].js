import React from "react";
import Layout from '../../components/Layout';
import Router, {useRouter} from 'next/router';
import { useEffect, useState, useContext, createContext } from 'react'
import Link from 'next/link';
import Cardz from '../../components/Card/Cardz';
import CardBuy from '../../components/Card/CardBuy';
import NextLink from 'next/link'
import Grid from '@material-ui/core/Grid';
import ShowImage from '../../components/Card/ShowImage'
const API = 'http://localhost:8000/api';
import {Card, Typography, Button, Input} from "@material-ui/core"
import Footer from "../../components/Landing/Footer";
import fetch from 'isomorphic-fetch';
import {ready, listRelated} from '../../components/apiCore';


export default function Product ({product, query}) {
  const router = useRouter()
  const twoPhoto = <img
  src={`${API}/product/photoTwo/${product._id}`}
  alt={product.name}
  className="mb-3"
  style={{ maxHeight: "250px", maxWidth: "250px" }}
/>;
  const threePhoto = <img
  src={`${API}/product/photoThree/${product._id}`}
  alt={product.name}
  className="mb-3"
  style={{ maxHeight: "250px", maxWidth: "250px" }}
/>
  const und = '';


  const { slug } = router.query

  const [related, setRelated] = useState([]);

  const loadRelated = () => {
    listRelated(slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            setRelated(data);
        }
    });
};
useEffect(() => {
  loadRelated();
}, []);

  const showRelatedProduct = () => {
    return related.map((product, i) => (
      <Grid item >
             <div className='card' key={i}>
               
                <Cardz product={product} />
                <br/>
             </div>
      </Grid>

    ));
  };



return (
        <React.Fragment>
          <Layout>

          <div>
            <div>
              <Link href="/pindex">
                <Button shadow type="abort" style={{marginTop: '20px', marginBottom: '20px'}}>
                  Назад
                </Button>
            </Link>
            </div>
            <div>
            <Typography h1>{product.name}</Typography>
            </div>
            <div>
            <Grid container>
              <Grid item xs={8}>
                <Card variant="outlined" style={{marginBottom: '20px'}}>
                  <ShowImage item={product} url="product" />
                 </Card>
              </Grid>
              <Grid item xs={4}>
                  <CardBuy product={product}/>
              </Grid>
              <Grid container>
              <Grid item xs={3}>
                <Card variant="outlined" style={{marginBottom: '20px'}}>
                   {product.photoTwo === undefined ? und : twoPhoto}
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card variant="outlined" style={{marginBottom: '20px'}}>
                    {product.photoThree === undefined ? und : threePhoto}
                </Card>
                   
              </Grid>
              </Grid>
            </Grid>
            
               

       
            </div>
            <div>
              <h3>
                Описание товара
              </h3>
            <Typography>{product.description}</Typography>
                
            </div>
            <div>
                  <h2>Похожие товары</h2>
                  <Grid container justify="center" spacing={5}>
                      {showRelatedProduct()}
                  </Grid>
            </div>
          </div>
          </Layout>
          <style jsx>
            {`
            .card{
              margin-right: 20px;
            }
            `}
          </style>
          <Footer/>
        </React.Fragment>
        )
}


Product.getInitialProps = ({ query }) => {

  return ready(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { product: data, query
      };
    }
  });
};


/*
export async function getStaticPaths() {
  const allProducts = await fetch(`http://localhost:8000/api/products`);
  const data = await allProducts.json()
    // Only `/posts/1` and `/posts/2` are generated at build time
    return {
      paths: data.map((product) => `/pindex/${product._id}`) ?? [],
      fallback: true,
    }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const listRelated = await fetch(`http://localhost:8000/api/products/related/${params.slug}`);
  const relatedProduct = await listRelated.json();

  const res = await fetch(`http://localhost:8000/api/product/${params.slug}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post, relatedProduct } }
}

*/

/*
import React from "react";
import Link from "next/link"
import {Button, Typography} from "@material-ui/core"
import Layout from "../../components/Layout";

const Users = () => {



  return (
    <Layout>
      <Link href="/pindex">
        <Button>Назад</Button>
      </Link>
      
    <Typography type="success" size="1.25rem">
    Информация о товаре скоро появится
  </Typography>
  </Layout>
    
  );
};

export default Users;
*/