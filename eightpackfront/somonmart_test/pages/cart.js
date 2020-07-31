import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout";
import CardCart from '../components/Card/CardCart';
import {Grid, Box, Typography, Card, Button, CardActions, CardContent} from "@material-ui/core"
import PeopleCardFooter from '@mui-treasury/components/cardFooter/people';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { addToCart, removeFromCart, incrementProducts, decrementProducts, } from "../store/cart/action";
import { getProducts, getBraintreeClientToken, processPayment,  createOrder } from '../components/apiCore';
import Footer from '../components/Landing/Footer';


const useStyles = makeStyles((theme) => ({
  root:{
    minWidth: 275,
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 20,

  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));


const Cart = ({products, subCategory, error }) => {
  
  const globalState = useSelector((state) => state.counter.counter);
  const globalCart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const [delivery, setDelivery] = React.useState(0);

  const allPrice = globalCart.reduce((a, c) => a + c.price * c.count, 0) + delivery;
  const allCartProduct = globalCart.map((item) => item.name);
  const allCountProduct = globalCart.map((item) => item.count);
  const allPrices = globalCart.reduce((a, c) => a + c.price * c.count, 0) + 500;


  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    adress: 'Самовывоз',
    product: globalCart.map((item) => item.name),
    countProduct: globalCart.map((item) => item.count),
    amountPrice: globalCart.reduce((a, c) => a + c.price * c.count, 0) + delivery,
    errors: "",
})

    const { name, 
      phone,  
      email, 
      adress, 
      product,
      countProduct,
      amountPrice,
      errors,
      
    } = values

  const classes = useStyles();
  


  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = useState(false)

  const [value, setValue] = React.useState('female');
  const [display, setDisplay] = React.useState('none');



  

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
    if(event.target.value === 'male'){
      setDisplay('block')
      setDelivery(500)
      setValues({...values, adress: '', amountPrice: allPrices})}
      else if(event.target.value === 'female'){
        setDisplay('none')
        setDelivery(0)
        setValues({...values, adress: 'Самовывоз'})
      }
  }

  const handleChange = name => event => {
    setValues({ ...values, errors: 'false', [name]: event.target.value });
};

    const clickSubmit = event => {

    event.preventDefault();

    setValues({ ...values, errors: 'false' });

    createOrder({name, phone, email, adress, product, countProduct, amountPrice}).then(data => {
        if (data.errors) {
            setValues({ ...values, errors: data.errors});
        } else {
            setValues({
                ...values,
                name: "",
                phone: "",
                email: "",
                adress: "Спасибо за заказ, ожидайте звонка",
                product: globalCart.map((item) => item.name),
                countProduct: globalCart.map((item) => item.count),
                amountPrice: globalCart.reduce((a, c) => a + c.price * c.count, 0),
                errors: "",
            });
        }
    });
  };


  return (
    <React.Fragment>
    <Layout>
    <Grid container>
      <Card className={classes.root} variant="outlined">
        
      <Grid container>
        <Grid xs>

              <Typography variant="h4" gutterBottom>Корзина
              </Typography> 
             <PeopleCardFooter/>
  <Typography>Кол-во товаров {globalCart.length}</Typography>
                    <div>
      {!error && products && (
        <div>
          
        {globalCart.length > 0 && (
              <div>
                              <PeopleCardFooter/>

            
            <Grid container spacing={2}>
                {globalCart.map((item) => (
                  
                  <Grid xs>
                  <CardCart product={item}  />   
                  </Grid>
                        
                ))}
                </Grid>
            </div>
            )}
        </div>
        
      )}

    </div>
                  <PeopleCardFooter/>
          <CardContent>
            <div>
              <Typography>
                Введите контактные данные
              </Typography>
            <TextField fullWidth id="name" value={name} onChange={handleChange('name')} label="Имя" variant="outlined" />
            <br/>
            <TextField fullWidth style={{marginTop: '10px'}} id="phone" value={phone} onChange={handleChange('phone')} label="Телефон" variant="outlined" />
            <br/>
            <TextField fullWidth style={{marginTop: '10px'}} id="email" value={email} onChange={handleChange('email')} label="Почта" variant="outlined" />

            <Typography>
            Выберите способ доставки
            </Typography>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio}>
            <FormControlLabel value="female" control={<Radio />} label="Самовывоз (г.Москва, ул.Складочная, д.1, стр.44)" />
            <FormControlLabel value="male" control={<Radio />} label="Курьерская доставка по Москве (500р)" />
            <TextField fullWidth style={{marginTop: '10px', display: `${display}`}} id="adress" 
            label="Адресс доставки" 
            value={adress}
            onChange={handleChange('adress')}
             variant="outlined" />
            <a>{adress}</a>
          </RadioGroup>
            <Typography>Сумма заказа: <a style={{ float: "right", fontSize: 20, fontWeight: 600 }}>
            {allPrice}  ₽</a> </Typography>
                    <Button fullWidth onClick={clickSubmit} variant="outlined" color="secondary">
                      Оформить заказ
                    </Button>
            </div>
            
            
                  </CardContent>

        </Grid>
      </Grid>

      </Card>
    </Grid>


    </Layout>
    <Footer/>
    </React.Fragment>
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
       errors: true,
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

export default Cart;



