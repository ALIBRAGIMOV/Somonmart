import {Card, Row, Image, Text, Button, Table, Input} from '@zeit-ui/react'
import {useToasts} from '@zeit-ui/react'
import React from 'react';
import Link from 'next/link'
import ShowImage from './ShowImage'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, incrementProducts, decrementProducts, } from "../../store/cart/action";




const CardCart = ({product}) => {
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state.counter.counter);
    const globalCart = useSelector((state) => state.cart.cart);
    const [count, setCount] = React.useState(1);
    const [input, setInput] = React.useState('');
    const [toasts, setToast] = useToasts();
    const click = () => setToast({ text: 'Товар добавлен в корзину!' });

    const globalCount = globalCart.map((item) => (
        item._id === product._id && (
            item.count
    )
    ))
        
    const globalSumm =  globalCart.map((item) => (item._id === product._id && (
            item.price * item.count
    )))

    let summaInput = product.price * (input > 1 ? input : 1);

    return(
        <div>
    <Card width="220px"  style={{cursor: 'pointer'}}>

                
            <div>
            <Text>
                {globalCart.map((item) => (
                    <div>
                        {`${item._id}` === `${product._id}` && (
                  <div>
                       <Button size="mini" auto="true" 
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

                    
                    </Text>
                    <Link href='/pindex/[slug]' as={`/pindex/${product._id}`}>
                        <a>
                        <ShowImage  item={product} url="product" />
                        <Text h3 style={{ marginBottom: '0' }}>
                        {product.name}
                    </Text>
                        </a>

                    
                    </Link>
                
                    
                </div>
            
            
                 <Card.Footer>
                    
                 <Button disabled={`${globalCount.includes(1)}` === 'true' ? true : false} auto type="success" auto ghost shadow="true" size="small" onClick={() => dispatch(decrementProducts(globalCart, product))}>-</Button>
                 <Text shadow="true" h5 style={{ marginBottom: '0' }}>

                        <a>{globalCount} ШТ</a>
                        
                    </Text>
                            
            <Button auto onClick={() => dispatch(incrementProducts(globalCart, product))} type="success" shadow="true" auto="true" ghost size="small">+</Button>
                    <Text type="primary" h4>{globalSumm}₽</Text>
                
                    </Card.Footer>

        </Card>
        </div>
        
        
    )
}

export default CardCart;
