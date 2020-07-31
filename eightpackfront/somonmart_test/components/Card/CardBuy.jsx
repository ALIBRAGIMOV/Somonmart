import React from 'react';
import Link from 'next/link'
import ShowImage from './ShowImage'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, incrementProducts, decrementProducts, } from "../../store/cart/action";
import {Card, Typography, Button, Input} from "@material-ui/core"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Cardz = ({product}) => {
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
   

    return(
        
        <Card  variant="outlined"  style={{cursor: 'pointer', marginLeft: '20px'}}>
            
            <Typography type="primary" h4 >Количество / Цена </Typography>
            <br/>
            <br/>
            <br/>
            <br/>
            
                    <FiberManualRecordIcon color="secondary" />В наличии
                    <br/>
                   
                    <Button auto disabled={`${globalCount.includes(1)}` === 'true' ? true : false} type="success" ghost size="medium" onClick={() => dispatch(decrementProducts(globalCart, product))}>-</Button>

            
                    <Button auto onClick={() => dispatch(incrementProducts(globalCart, product))} type="success" ghost size="medium" >+</Button>

                    <Typography variant="h6"> {count.find(findCount) > 1 ? globalSumm : product.price}₽</Typography>
                
                <Button size="medium" fullWidth  variant={'contained'} color={'secondary'} onClick={() => dispatch(addToCart(globalCart, product))}>Купить</Button>
                    
        </Card>
        
    )
}

export default Cardz;
//<Input placeholder={`${count} ШТ`} value={input} onInput={e => setInput(e.target.value)}  />