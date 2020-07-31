import Link from 'next/link'
import ShowImage from './ShowImage'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, incrementProducts, decrementProducts, } from "../../store/cart/action";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useFirebaseBtnStyles } from '@mui-treasury/styles/button/firebase';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    cursor: 'pointer',
    borderRadius: 12
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
  button:{
    justifyContent: 'center'

  }
});

export default function Cardz({product}) {
  const classes = useStyles();
  const styles = useFirebaseBtnStyles();
  const shadow = useSoftRiseShadowStyles();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.counter.counter);
  const globalCart = useSelector((state) => state.cart.cart);
  const count = globalCart.map((item) => (item._id === product._id && (
      item.count
          )))
  const [input, setInput] = React.useState('');
  const globalSumm =  globalCart.map((item) => (item._id === product._id && (
      item.price * item.count
)))
  function findCount (count){
      if(count === count){
          return count;
      }
  }
  const globalCount = globalCart.map((item) => (
      item._id === product._id && (
          item.count
  )
  ))

  return (
    <Card className={classes.root} classes={shadow} variant="outlined">
      <CardContent>
      <Link href='/pindex/[slug]' as={`/pindex/${product._id}`}>
            <div>
                <ShowImage item={product} url="product" />
                    <Typography variant="h5" style={{ marginBottom: '0' }}>
                        {product.name}
                    </Typography>
                </div>
            </Link>
      </CardContent>
      <CardActions>
      <Button auto disabled={`${globalCount.includes(1)}` === 'true' ? true : false} type="success" ghost size="medium" onClick={() => dispatch(decrementProducts(globalCart, product))}>-</Button>
            <Typography style={{ marginBottom: '0' }}>

                    <a>{globalCount} ШТ</a>

                    </Typography>
            <Button auto onClick={() => dispatch(incrementProducts(globalCart, product))} type="success" ghost size="medium" >+</Button>
                <Typography variant="h6"> {count.find(findCount) > 1 ? globalSumm : product.price}₽</Typography>
                
                    </CardActions>
                    <CardActions className={classes.button}>
                    <Button size="medium" fullWidth classes={styles} variant={'contained'} color={'primary'} onClick={() => dispatch(addToCart(globalCart, product))}>Купить</Button>
      
                    </CardActions>
    </Card>
  );
}

