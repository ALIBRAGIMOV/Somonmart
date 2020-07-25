import {Card, Row, Image, Text, Button, Spacer} from '@zeit-ui/react'
import {useToasts} from '@zeit-ui/react'
import React from 'react';
import Link from 'next/link'
import ShowImage from './ShowImage'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, incrementProducts, decrementProducts, } from "../../store/cart/action";




const CardCart = ({product}) => {
    

    return(
        <div>
    <Card width="230px"  style={{cursor: 'pointer'}}>

                
            <div>
            <Text>
                

                    
                    </Text>
                    <Link href='/pindex/[slug]' as={`/pindex/${product._id}`}>
                        <a>
                        <ShowImage  item={product} url="product" />
                        <Text type="secondary" h3 style={{ marginBottom: '0' }}>
                        {product.name}
                    </Text>
                        </a>

                    
                    </Link>
                
                    
                </div>
            
            
                 <Card.Footer>
                  <Link href='/pindex/[slug]' as={`/pindex/${product._id}`}>
                  <Button type='success' ghost auto shadow="true"> Подробнее</Button>
                  </Link>
                  <Spacer y={.5} /> 
                 
                            
                    <Text type="secondary" h4 >{product.price}₽</Text>
                
                    </Card.Footer>

        </Card>
        </div>
        
        
    )
}

export default CardCart;
