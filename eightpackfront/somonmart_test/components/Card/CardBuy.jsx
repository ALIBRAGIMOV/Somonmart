import {Card, Row, Image, Text, Input, Button, Dot} from '@zeit-ui/react'
import {useToasts} from '@zeit-ui/react'
import React from 'react';
import Link from 'next/link'
import ShowImage from './ShowImage'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cart/action";



const Cardz = ({product}) => {
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state.counter.counter);
    const globalCart = useSelector((state) => state.cart.cart);
    const [count, setCount] = React.useState(1);
    const [input, setInput] = React.useState('');
    let summa = product.price * count;
    let summaInput = product.price * (input > 1 ? input : 1);
    const [toasts, setToast] = useToasts()
    const click = () => setToast({ text: 'Товар добавлен в корзину!' })

    return(
        
        <Card width="320px"  style={{cursor: 'pointer', marginLeft: '20px'}}>
            
            <Text type="primary" h4 >Количество / Цена </Text>
            <br/>
            <br/>
            <br/>
            <br/>
            
                    <Dot style={{ marginRight: '20px' }} type="success">В наличии</Dot>
                 <Card.Footer>
                   
                 <Button auto type="success" ghost size="medium" onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}>-</Button>
            <Input placeholder={`${count} ШТ`} value={input} onInput={e => setInput(e.target.value)}  />
            <Button auto onClick={() => {
              setCount(count + 1);
            }} type="success" ghost size="medium" >+</Button>
                <Text type="primary" h4> {count > 1 ? summa : summaInput}₽</Text>
                
                    </Card.Footer>
                    <Card.Footer style={{    padding: '10pt 40pt'}}>
                    <Button  type="warning" size="large" onClick={() => click(dispatch(addToCart(globalCart, product)))}>Купить</Button>
                            </Card.Footer>
                    
        </Card>
        
    )
}

export default Cardz;
