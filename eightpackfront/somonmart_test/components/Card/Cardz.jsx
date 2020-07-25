import {Card, Row, Image, Text, Input, Button} from '@zeit-ui/react'
import {useToasts} from '@zeit-ui/react'
import React from 'react';
import Link from 'next/link'
import ShowImage from './ShowImage'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, incrementProducts, decrementProducts, } from "../../store/cart/action";
import { func } from 'prop-types';



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
    const summa = product.price * count;
    const [toasts, setToast] = useToasts()
    const click = () => setToast({ text: 'Товар добавлен в корзину!' })
    const globalCount = globalCart.map((item) => (
        item._id === product._id && (
            item.count
    )
    ))

    return(
        
        <Card width="320px" shadow="show shadow" style={{cursor: 'pointer'}}>
            <Link href='/pindex/[slug]' as={`/pindex/${product._id}`}>
            <div>
                <ShowImage item={product} url="product" />
                    <Text h3 style={{ marginBottom: '0' }}>
                        {product.name}
                    </Text>
                </div>
            </Link>
            
            
                 <Card.Footer>
                    
                 <Button auto disabled={`${globalCount.includes(1)}` === 'true' ? true : false} type="success" ghost size="medium" onClick={() => dispatch(decrementProducts(globalCart, product))}>-</Button>
            <Text shadow="true" h5 style={{ marginBottom: '0' }}>

                    <a>{globalCount} ШТ</a>

                    </Text>
            <Button auto onClick={() => dispatch(incrementProducts(globalCart, product))} type="success" ghost size="medium" >+</Button>
                <Text type="primary" h4> {count.find(findCount) > 1 ? globalSumm : product.price}₽</Text>
                
                    </Card.Footer>
                    <Card.Footer style={{    padding: '10pt 40pt'}}>
                    <Button  type="warning" size="large" onClick={() => click(dispatch(addToCart(globalCart, product)))}>Купить</Button>
                            </Card.Footer>
                    
        </Card>
        
    )
}

export default Cardz;
