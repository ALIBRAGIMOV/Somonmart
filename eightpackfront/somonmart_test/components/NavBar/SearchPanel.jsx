
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import Link from 'next/link'
import SearchBar from '../Header/SearchBar'
import Grid from '@material-ui/core/Grid';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Badge from '@material-ui/core/Badge';
import { useSelector, useDispatch } from "react-redux";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: '10px',
        marginRight: '25px',
        marginBottom: '20px'

      },
    img:{
        width: '260px',
        marginLeft: '10px',
        [theme.breakpoints.down('lg')]:{
            display: 'none'
        },
        [theme.breakpoints.up('lg')]:{
            display: 'block'
        }
    },
    phone:{
        textDecoration: 'none',
        color: 'black',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '15px',
        fontWeight: '300',
        whiteSpace: 'nowrap'
    },
    menui:{
        [theme.breakpoints.down('xs')]:{
            display: 'none'
        },
        [theme.breakpoints.up('sm')]:{
            display: 'flex'
        }
    },
    phones:{
        marginTop: '20px',
        marginLeft: '44px'
    },
    main:{

    },
    search:{
        marginTop: '10px'
    },
    badge:{
        verticalAlign: 'bottom'
    },
    search:{
        marginBottom: '10px'
    },
}));


const NavBarLow = () => {

    const globalCart = useSelector((state) => state.cart.cart)
    const matches = useMediaQuery('(max-width:1080px)');
    const classes = useStyles();
    const matchesmob = useMediaQuery('(max-width:600px)');
    const [isShown, setIsShown] = useState(false);

    return (
        <React.Fragment>
        <div className={classes.main}>
        {matches === false && (  
            
        <div className={classes.root}>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            >
            <Grid item xs={3}>
                <Link href="/pindex">
                <div className="csr168">
                    
                <a className="text">
                <span className="catalog-icon"/>
                Каталог товаров
                       </a>
                    </div>
                
                </Link>
            </Grid>
            <Grid item xs={7}>
                <div className={classes.search} > 
                     <SearchBar />
                </div>
                 
            </Grid>
            <Grid item xs={1}>
                    <a className='user'>
                    <svg className="img" viewBox="0 -4 29 29" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z"/></svg>
                        Вход
                    </a>
                </Grid>
                
                <Grid item xs={1}>
                    <Link href="/cart">
                    <a className='user'>
                            <Badge badgeContent={globalCart.length} color="secondary" className={classes.badge}>
                            <svg className="imgcart"  xmlns="http://www.w3.org/2000/svg" width="24" height="33" viewBox="0 0 24 24"><path d="M6.665 9.068l-3.665-1.66v14l3.665 2.592 14.335-2.155v-14.845l-14.335 2.068zm-1.665 1.441l1 .453v10.118l-1-.707v-9.864zm14 9.615l-11 1.653v-10.881l11-1.587v10.815zm-2-15.833l-.001 1.749c0 .246-.18.455-.423.492-.303.045-.576-.19-.576-.495v-1.746c.001-.691-.231-1.304-.653-1.726-.368-.37-.847-.565-1.384-.565-1.547 0-2.96 1.558-2.963 3.268v1.681c0 .247-.181.457-.425.494-.302.046-.575-.189-.575-.494l.001-1.683c.004-2.261 1.866-4.266 3.962-4.266 1.717 0 3.039 1.387 3.037 3.291zm-9.999 2.209v-2.235c.004-2.26 1.866-4.265 3.962-4.265.492 0 .944.125 1.35.332-.423.17-.822.4-1.188.683l-.162-.015c-1.547 0-2.961 1.558-2.963 3.268v2.232c0 .248-.182.458-.427.494-.3.045-.572-.187-.572-.494z"/></svg>
                            </Badge>
                         Корзина
                    
                    </a>
                    </Link>
                    
                </Grid>
            </Grid>

            
            
        </div>
          )}
          
          
          </div>
          <style jsx>{`
              
        .city{
            font-family: Montserrat, sans-serif; 
            font-weight: 400;
            font-size: 15px;
            cursor: pointer;
            transition: 0.3s ease-in-out;
        }
        
        .csr168{
            margin-left: 15px;
        }
        .catalog{
            font-family: Montserrat, sans-serif; 
            font-weight: 400;
            font-size: 16px;
            cursor: pointer;
            text-decoration: none;
            color: black;
            margin-left: 15px;
            transition: 0.3s ease-in-out;
        }
        .user{
            font-family: Montserrat, sans-serif; 
            font-weight: 400;
            font-size: 16px;
            cursor: pointer;
            
            
        }
        .uLtag{
            border-right: 0.5px solid #b9b9b999;
            transition: 0.3s ease-in-out;
        }
        .uLtag2{
            z-index: -1;
        }
        .uLtag3{
            border-top: 4px solid #66cc33;
        }
        .st0{fillRule:evenodd;clipRule:evenodd;fill:#209F38;}
	    .st1{fillRule:evenodd;clipRule:evenodd;fill:#FECB00;}

        
        .img {
          width: 24px;
          cursor: pointer;
          margin-right: 2px;
        }
        .catalog:hover .imgcat{
            fill: #209F38;
            cursor: pointer;
            -webkit-transform: rotate(180deg); // разворот элемента для разных бразуеров
            -moz-transform: rotate(180deg);
            -ms-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            transform: rotate(180deg);
        }
        
        .city:hover{
            color:  #209F38 ;
            cursor: pointer;
            font-weight: 500;
            font-size: 15.5px;
            transition: 0.3s ease-in-out;
        }
        
        
        
        .catalog:hover{
            color:  #209F38 ;
            cursor: pointer;t
        }
        .img:hover{
            fill: #209F38;
            cursor: pointer;t
        }
        .imgcat:hover{
            fill: #209F38;
            cursor: pointer;t
        }
        .user:hover{
            color:  #209F38 ;
            cursor: pointer;
        }
        .csr168{
            width: 270px;
            cursor: pointer;
            padding: 3px 0;
            position: relative;
            align-items: center;
            margin-right: 2.8vw;
            transition: 0.3s ease-in-out;
            margin-bottom: 8px;
            border-radius: 6px;
            text-align: center;
            position: relative;
        }
        
        .text{
            font-family: Montserrat, sans-serif; 
            font-weight: 400;
            font-size: 16px;
            cursor: pointer;
            display: block;
            padding: 9px;
            color: black;
            text-align: center;
            padding-right: 40px;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: .8px;
            /*border: 1.2px solid #209F38;*/
            border-radius: 3px;
            box-shadow: -2px 2px 9px rgba(0,0,0,0.25), 0 2px 0px rgba(0,0,0,0);
            transition: box-shadow,.15s;
            background: #FECB00;
        }
        .text:hover{
                         box-shadow: 0 4px 12px 0 #d0d2d4;
                         transition: box-shadow,.15s;
        }
        .csr181{
            transition: 0.3s ease-in-out;
        }
        .csr181:hover{
            border-left: 2px solid #66cc33;
            background-color: rgba(102, 204, 51, 0.07);
            transition: 0.3s ease-in-out;
        }
        .csr181 li:hover .textcat{
            color: green;
        }
        .csr181 li{
            box-shadow: -6px 6px 19px rgba(0,0,0,0.25), 0 2px 0px rgba(0,0,0,0);
        }
        .textcatone{
            border-radius: 12px;
        }
        
        .csr178 {
            right: 13px;
            height: 12px;
            margin-left: 18px;
            visibility: hidden;
        }
        nav ul li:hover svg{
            visibility: visible;
            fill: #209F38;
            transition: 0.3s ease-in-out;
        }
        nav:hover .text{
            color: #209F38;
        }

        .csr40 {
            cursor: pointer;
            display: inline-block;
            font-size: 16px;
            transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            user-select: none;
            flex-shrink: 0;
        }
        .imgsubcat{
            margin-left: -3px;
            margin-right: 15px;
            right: 13px;
            height: 14px;
        }
        
        
        .imgcat {
          width: 23px;
          height: 11px;
          cursor: pointer;
          display: inline-block;
          position: relative;
          padding-left: 6px;
          transition: transform .3s
        }
        .svg{
            cursor: pointer;
        }
        
        .csr171{
                left: calc(50% - 16px);
                width: 0;
                border: 8px solid transparent;
                border-bottom-color: transparent;
                bottom: -25px;
                height: 0;
                opacity: 0;
                z-index: -1;
                position: absolute;
                transition: .5s bottom ease, .5s opacity ease;
                border-bottom-color: #66cc33;
            }

            .imgcart:hover{
            fill: #209F38;
            cursor: pointer;
        }
        

        .csr172{
            top: 30px;
            left: -16px;
            padding: 0;
            position: absolute;
            overflow: hidden;
            transition: .2s height linear, .1s opacity linear;
            border-top: 4px solid #66cc33;
            pointer-events: none;
            
        }
        .csr172:hover{
            display: block;
            
        }
        .csr168:hover .imgcat{
            fill: #209F38;
            cursor: pointer;
            -webkit-transform: rotate(180deg); // разворот элемента для разных бразуеров
            -moz-transform: rotate(180deg);
            -ms-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            transform: rotate(180deg);
            transition: 0.3s ease-in-out;
        }
        .catalog-icon{
                display: block;
                position: absolute;
                top: 13px;
                right: 8px;
                width: 20px;
                height: 20px;
                background: url(https://image.flaticon.com/icons/svg/545/545705.svg) no-repeat 0 0;
        }

        nav ul li:hover svg{
            fill: #209F38;
            transition: 0.3s ease-in-out;
        }

        body {
	background: #212121;
    font-family: Montserrat, sans-serif; 
	line-height: 32px;
	word-wrap:break-word !important;
	}

h1 {
	font-size: 60px;
	text-align: center;
	color: black;
}	

h3 {
	font-size: 30px;
	text-align: center;
	color: black;
}

h3 a{
    color: black;
}

a{
    color: black;
}

h1 {
	margin-top: 100px;
	text-align:center;
	font-size:60px;
	font-family: 'Bree Serif', 'serif';
	}

#container {
	margin: 0 auto;
}

p {
	text-align: center;
}

nav {
    transition: 0.3s ease-in-out;
}

nav ul {
        padding: 0;
        margin: 0;
        list-style: none;
        margin-left: 17px;
        position: relative;
        transition: 0.3s ease-in-out;
	}
	
nav ul li {
	display:block;
	background-color: #fff;
    transition: 0.3s ease-in-out;
	}

nav a {
	display: block;
    padding-left: 17px;
	color: black;
	line-height: 56px;
	text-decoration:none;
    font-family: Montserrat, sans-serif; 
    transition: 0.3s ease-in-out;
}



/* Hide Dropdowns by Default */
nav ul ul {
	display: none;
	position: absolute; 
	top: 56px; /* the height of the main nav */
    transition: 0.3s ease-in-out;
}
nav li:hover > .uLtag{
    border-top: 4px solid #66cc33;
    width: 270px;
    transition: all 0.4s;
}
nav li:hover > .uLtag{
    border-top: 4px solid #66cc33;
    transition: all 0.4s;
}
	
/* Display Dropdowns on Hover */
nav ul li:hover > ul {
	display:inherit;
    transition: 0.3s ease-in-out;
}
nav li:hover > ul li{
	display: inherit;
	-webkit-transition: .3s ease-in-out;
	transition: 0.3s ease-in-out;
    border-bottom: 0.01px solid rgb(252, 252, 252);
	}

nav a:hover{
    color: #209F38; 
    font-weight: 500;
}
	
/* Fisrt Tier Dropdown */
nav ul ul li {
	position: relative;
	top:-60px; 
	left:250px;
    width: 300px;
    transition: 0.3s ease-in-out;
}

/* Second, Third and more Tiers	*/
nav ul ul ul li {
	position: relative;
	top:-60px; 
	left:170px;
    transition: 0.3s ease-in-out;
}

nav li {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 270px;
  height: 4rem;
  transition: 0.3s ease-in-out;
}
nav li ul li ul{
    transition: all 0.4s;
}

	
/* Change this in order to change the Dropdown symbol */
li > a:only-child:after { content: ''; }
        
        
        
      `}</style>
          </React.Fragment>
    )
}

export default NavBarLow;