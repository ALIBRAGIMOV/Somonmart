import React from 'react';
import Link from 'next/link'
import ShowImage from './ShowImage'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import PeopleCardFooter from '@mui-treasury/components/cardFooter/people';


const useStyles = makeStyles({
  root: {
    minWidth: 255,
    maxWidth: 270,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
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
});

export default function CardCart({product}) {
  const classes = useStyles();
  const styles = useSoftRiseShadowStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} classes={styles} variant="outlined">



      <CardContent>
      <Typography variant="h6" gutterBottom>
                                    {product.name}
                                    </Typography>
      <Link href='/pindex/[slug]' as={`/pindex/${product._id}`}>
                        <a>
                        <ShowImage  item={product} url="product" />
                        
                        </a>

                    
                    </Link>
      </CardContent>
          <PeopleCardFooter />

      <CardActions disableSpacing>
      <Link href='/pindex/[slug]' as={`/pindex/${product._id}`}>
        <Button style={{ marginLeft: 10 }} size="small" color="secondary"> 
        <Typography variant="overline" gutterBottom>
            Подробнее
        </Typography>
            
        </Button>
        </Link>
          <Typography variant="subtitle1" gutterBottom>
          <a style={{ marginLeft: 100 }}>{product.price}₽</a>
          </Typography>
                  
      </CardActions>
    </Card>
  );
}
