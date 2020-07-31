import NavBar from './NavBar/NavBar'
import PropTypes from 'prop-types';
import Header from './Header/Header'
import CollapsibleMenuDemo from './LeftMenu/MainLeft'
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ParallaxCarousel from './Carousel/Carousel';
import BlogCardDemo from './Landing/Landing';
import Footer from './Landing/Footer';
import NewsCardDemo from './Landing/News';
import NavBarLow from './NavBar/NavBarLow';
import SearchPanel from './NavBar/SearchPanel';
import { useRouter } from 'next/router';


const useStyles = makeStyles((theme) => ({
    allbleat:{
    },root: {
      flexGrow: 1,
    },
    container: {
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingLeft: '15px',
      paddingRight: '15px',
      [theme.breakpoints.up('md')]: {
          width: '1270px',
          paddingLeft: 0
        },
        [theme.breakpoints.up('lg')]: {
          width: '1400px'
        },},
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    control: {
      padding: theme.spacing(2),
    },
    bread:{
      color: 'black'
    }
  }));

  const breadcrumbNameMap = {
    '/inbox': 'Inbox',
    '/inbox/important': 'Important',
    '/counter': 'Считалка',
    '/ssr': 'Сервер сайд',
    '/ssg': 'Статичный рендеринг',
    '/about': 'Компания',
    '/pindex': 'Чистящие средства',
    '/productpage/5eedb2a20c125d0aa50049e6': 'Чистящие средства / Ваниш'
  };



const Layout = ({children}) =>{ 
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const router = useRouter();
    const to = `${router.asPath}`;
    return (
        <React.Fragment>
        <div className={classes.allbleat}>
        <NavBar/>
        <SearchPanel />
        
        <div className={classes.container}>
        <Grid container
        direction="row"
        alignItems="flex-start"
        >
          <Grid item xs={4} md={5} lg={4}>
          <NavBarLow/>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={8} >
          <div className="child">

      
        {children}
        </div>
          </Grid>
        </Grid>
        </div>
        
        </div>
        
        <style jsx>{`
          
          .category{
            color: black;
            justify-content: center;
            font-size: 20px;
            font-family: Montserrat,sans-serif;
            font-weight: 500;
            display: flex; 
            cursor: pointer;
            margin-top: 20px;
            margin-bottom: 20px;
          } 
          .category:hover{
            color: #209F38; 
          } 
          .carousel{
            margin-right: 20px;
          }
          
           `
          }
        </style>
        </React.Fragment>
    )

}

Layout.propTypes = {

    children: PropTypes.node,

  };

export default Layout;
