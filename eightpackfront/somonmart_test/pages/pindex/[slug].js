/*
import React from "react";
import Layout from '../../components/Layout';
import Router, {useRouter} from 'next/router';
import { Button } from '@zeit-ui/react';
import Link from 'next/link';
import Cardz from '../../components/Card/Cardz';
import CardBuy from '../../components/Card/CardBuy';
import { Breadcrumbs, Textarea, Card, Description, Text} from '@zeit-ui/react'
import NextLink from 'next/link'
import Grid from '@material-ui/core/Grid';
import ShowImage from '../../components/Card/ShowImage'
const API = 'http://localhost:8000/api';



export default function Product ({post, relatedProduct}) {
  const router = useRouter()
  const { slug } = router.query
  const twoPhoto = <img
  src={`${API}/product/photoTwo/${post._id}`}
  alt={post.name}
  className="mb-3"
  style={{ maxHeight: "250px", maxWidth: "250px" }}
/>;
  const threePhoto = <img
  src={`${API}/product/photoThree/${post._id}`}
  alt={post.name}
  className="mb-3"
  style={{ maxHeight: "250px", maxWidth: "250px" }}
/>
  const und = '';



  const showRelatedProduct = () => {
    return relatedProduct.map((product, i) => (
      <Grid item xs={4}>
             <div key={i}>
               
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
              <Breadcrumbs>
                  <NextLink href="/">
                    <Breadcrumbs.Item nextLink>Главная страница</Breadcrumbs.Item>
                  </NextLink>
                  <NextLink href="/pindex">
                    <Breadcrumbs.Item nextLink>Товары</Breadcrumbs.Item>
                  </NextLink>
              <Breadcrumbs.Item>{post.name}</Breadcrumbs.Item>
            </Breadcrumbs>
            </div>
            <div>
              <Link href="/pindex">
                <Button shadow type="abort" style={{marginTop: '20px', marginBottom: '20px'}}>
                  Назад
                </Button>
            </Link>
            </div>
            <div>
            <Text h1>{post.name}</Text>
            </div>
            <div>
            <Grid container>
              <Grid item xs={8}>
                <Card style={{marginBottom: '20px'}}>
                  <ShowImage item={post} url="product" />
                 </Card>
              </Grid>
              <Grid item xs={4}>
                  <CardBuy product={post}/>
              </Grid>
              <Grid container>
              <Grid item xs={3}>
                <Card style={{marginBottom: '20px'}}>
                   {post.photoTwo === undefined ? und : twoPhoto}
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card style={{marginBottom: '20px'}}>
                    {post.photoThree === undefined ? und : threePhoto}
                </Card>
                   
              </Grid>
              </Grid>
            </Grid>
            
               

       
            </div>
            <div>
            <Description title="Описание" content={<Textarea width="80%" disabled placeholder={`${post.description}`} />} />
                
            </div>
            <div>
                  <h2>Похожие товары</h2>
                  <Grid container>
                      {showRelatedProduct()}
                  </Grid>
            </div>
          </div>
          </Layout>
          
        </React.Fragment>
        )
}


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

import React from "react";
import Link from "next/link"
import {Button, Text} from "@zeit-ui/react"
import Layout from "../../components/Layout";

const Users = () => {



  return (
    <Layout>
      <Link href="/pindex">
        <Button>Назад</Button>
      </Link>
      
    <Text type="success" size="1.25rem">
    Информация о товаре скоро появится
  </Text>
  </Layout>
    
  );
};

export default Users;
