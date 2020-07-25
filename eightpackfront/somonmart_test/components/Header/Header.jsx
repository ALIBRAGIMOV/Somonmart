import React from 'react';
import { makeStyles } from '@material-ui/core';
import Link from 'next/link'
import SearchBar from './SearchBar'
import Grid from '@material-ui/core/Grid';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    img:{
        width: '260px',
        marginLeft: '23px',
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
    phones:{
        marginTop: '20px',
        marginLeft: '44px'
    },
    main:{
        marginTop: '25px',
        marginLeft: '10px'
    },
    search:{
        marginLeft: '115px'
    }
}));

const Header = () => {

    const matches = useMediaQuery('(max-width:1170px)');
    const classes = useStyles();

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
                <Link href="/">
                    <a>
                        <img className={classes.img} src="../static/somon.png" />
                    </a>
                </Link>
            </Grid>
            <Grid item xs={7}>
                <div className={classes.search} > 
                     <SearchBar />
                </div>
                 
            </Grid>
            <Grid item xs>
                    <div className={classes.phones}>
                    <a className={classes.phone} href="tel:+79256042494">
                        <i><PhonelinkRingIcon /></i>+7(925)-604-24-94 <br />Телефон для связи</a>
                        </div>
                </Grid>
            </Grid>
        </div>
          )}
          </div>
          </React.Fragment>
    )
}

export default Header;