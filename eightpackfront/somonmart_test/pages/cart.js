import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../store/counter/action";
import { addToCart, removeFromCart } from "../store/cart/action";
import Layout from "../components/Layout";
import { Breadcrumbs, Text, Card, Description, Grid,Fieldset, Divider, Button, Modal, useModal} from '@zeit-ui/react'
import CardCart from '../components/Card/CardCart';



const Users = ({products, subCategory, error }) => {
  const globalState = useSelector((state) => state.counter.counter);
  const globalCart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch();
  const [state, setState] = useState(false)
  const { visible, setVisible, bindings } = useModal()

  return (
    <Layout>
    <Grid.Container>
      <Grid.Container>
        <Grid xs>
          <Fieldset style={{ marginRight: '20px', marginBottom: '20px' }}>
             <Fieldset.Content style={{ paddingTop: '10pt', paddingBottom: '10pt' }}>
              <Text h2>Корзина</Text>
             </Fieldset.Content>
                <Divider y={0} />
                  <Fieldset.Content>
                    <Fieldset.Title>Кол-во товаров {globalCart.length}</Fieldset.Title>
                    <div>
      {!error && products && (
        <div>
          
        {globalCart.length > 0 && (
              <div>
            
            
            <Grid.Container gap={2} justify="center">
                {globalCart.map((item) => (
                  
                  <Grid xs>
                  <CardCart product={item} />   
                  </Grid>
                        
                ))}
                </Grid.Container>
            </div>
            )}
        </div>
        
      )}

    </div>
                  </Fieldset.Content>
                  <Fieldset.Footer>
                  <Fieldset.Title>Сумма заказа:</Fieldset.Title>
                  <Fieldset.Title>{
                      globalCart.reduce((a, c) => a + c.price * c.count, 0)
                    }
                    ₽</Fieldset.Title>
                  </Fieldset.Footer>
          </Fieldset>
        </Grid>
      </Grid.Container>
    </Grid.Container>
    <Button auto type="success" onClick={() => setVisible(true)}>Купить в 1 клик</Button>
      <Modal {...bindings}>
        <Modal.Title>Modal</Modal.Title>
        <Modal.Subtitle>This is a modal</Modal.Subtitle>
        <Modal.Content>
          <p>Some content contained within the modal.</p>
        </Modal.Content>
        <Modal.Action passive onClick={() => setVisible(false)}>Отмена</Modal.Action>
        <Modal.Action>Оформить заказ</Modal.Action>
      </Modal>
      <Button style={{ marginLeft: "20px", marginBottom: '20px' }} auto type="success">
        Оформить заказ
      </Button>
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
