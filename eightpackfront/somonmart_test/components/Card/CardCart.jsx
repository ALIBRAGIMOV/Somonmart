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

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth: 270,
    cursor: 'pointer',
    marginBottom: '20px',
    marginLeft: '20px',
    marginRight: '20px'

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

export default function OutlinedCard({product}) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.counter.counter);
  const globalCart = useSelector((state) => state.cart.cart);
  const [count, setCount] = React.useState(1);
  const [input, setInput] = React.useState('');
  const globalCount = globalCart.map((item) => (
      item._id === product._id && (
          item.count
  )
  ))
      
  const globalSumm =  globalCart.map((item) => (item._id === product._id && (
          item.price * item.count
  )))

  let summaInput = product.price * (input > 1 ? input : 1);
  return (
    <Card className={classes.root} style={{cursor: 'pointer'}} variant="outlined">
      <CardContent>
      
                {globalCart.map((item) => (
                    <div>
                        {`${item._id}` === `${product._id}` && (
                  <div>
                       <Button variant="outlined" color="secondary"
                      style={{ float: "right" }}
                      onClick={() =>
                        dispatch(removeFromCart(globalCart, item))
                      }
                    >
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd">

                <g>
                <title>background</title>
                <rect fill="none" id="canvas_background" height="18" width="18" y="-1" x="-1"/>
                </g>
                <g>
                <title>Layer 1</title>
                <path stroke="null" id="svg_1" d="m7.96877,7.63092l7.16418,-7.19342l0.49209,0.4941l-7.16418,7.19342l7.16418,7.19342l-0.49209,0.4941l-7.16418,-7.19342l-7.16418,7.19342l-0.49209,-0.4941l7.16418,-7.19342l-7.16418,-7.19342l0.49209,-0.4941l7.16418,7.19342z"/>
                </g>
                </svg>
                    </Button>
                    <br />
                  </div>
                   
                  )}

                    </div>))}
                    <Link href='/pindex/[slug]' as={`/pindex/${product._id}`}>
                        <a>
                        <ShowImage  item={product} url="product" />
                        <Typography variant="h6" display="block" gutterBottom >                        {product.name}
                    </Typography>
                        </a>

                    
                    </Link>
      </CardContent>
      <CardActions>
      <Button disabled={`${globalCount.includes(1)}` === 'true' ? true : false} auto type="success" auto ghost shadow="true" size="small" onClick={() => dispatch(decrementProducts(globalCart, product))}>-</Button>
                 <Typography shadow="true" h5 style={{ marginBottom: '0' }}>

                        <a>{globalCount} ШТ</a>
                        
                    </Typography>
                            
            <Button auto onClick={() => dispatch(incrementProducts(globalCart, product))} type="success" shadow="true" auto="true" ghost size="small">+</Button>
                    <Typography type="primary" h4>{globalSumm}₽</Typography>
                    </CardActions>
    </Card>
  );
}

