import Layout from '../components/Layout'
import NextLink from 'next/link'
import fetch from 'isomorphic-unfetch'
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Cardz from '../components/Card/Cardz'
import { Breadcrumbs, Textarea, Card, Description, Text} from '@zeit-ui/react'
import Footer from '../components/Landing/Footer';




export default function Index ({slug, products}) {
  return(
    <div>
      <Layout>
    
    <h1>Cleaning products</h1>
    <div style={{marginBottom: '20px'}}>
    <Breadcrumbs >
                  <NextLink href="/">
                    <Breadcrumbs.Item nextLink>Главная страница</Breadcrumbs.Item>
                  </NextLink>
                  <NextLink href="/pindex">
                    <Breadcrumbs.Item >Товары</Breadcrumbs.Item>
                  </NextLink>
            </Breadcrumbs>
    </div>
    
          <div className="recommend_product">
        <div className="container">
            <div className="new-grid"> 
            <Grid container justify="center" spacing={5}>
            {products.products.map((product, i) => (
                <Grid key={product} item>
                <Cardz key={i} product={product} />
                </Grid>
                 
            ))}
            
            </Grid> 
            </div>
        </div>
    </div>
    
  </Layout>
  
      <Footer/>
    </div>
    

  )
  

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

