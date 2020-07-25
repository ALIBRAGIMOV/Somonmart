
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector, useDispatch } from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: '10px',
        marginRight: '25px'
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
    const matches = useMediaQuery('(max-width:1023.98px)');
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
                <Link href="/">
                    <div className="csr168" onMouseEnter={() => setIsShown(true)}
                                            onMouseLeave={() => setIsShown(false)}
                                            
                                            >
                    <nav>

                       <ul className="uLtag">
                
                <div className="csr181"
                
                >
                    <li>
                    
                    <Link href="/ssg">
                    
                      <a className="textcatone" ><svg className="imgsubcat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 
                      5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 
                    10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562
                     4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151
                      1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 
                    .67.297.673.709.005.802.004 7.091.003 12.29z"/></svg>Одноразовая посуда<svg className="csr40 csr178" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><path transform="rotate(0 12 12)" fill="#333" d="M6.74975256,23.9998764 C6.55775256,23.9998764 6.36475256,23.9268764 6.21875256,23.7788764 C5.92575256,23.4848764 5.92775256,23.0108764 6.22075256,22.7188764 C8.76875256,20.1828764 14.2287526,13.8078764 15.7707526,11.9998764 
                    C14.2337526,10.1908764 8.79275256,3.81687644 6.24275256,1.28187644 C5.94975256,0.989876442 5.94775256,0.514876442 
                    6.23975256,0.220876442 C6.53175256,-0.0731235577 7.00775256,-0.0731235577 7.30175256,0.217876442 C10.3177526,3.21787644 
                    17.0417526,11.1798764 17.3267526,11.5168764 C17.5627526,11.7968764 17.5627526,12.2068764 17.3257526,12.4858764 C17.0397526,12.8228764 10.2917526,20.7818764
                     7.27875256,23.7808764 C7.13275256,23.9268764 6.94075256,23.9998764 6.74975256,23.9998764"></path></svg> 
                     
                     </a>
                    </Link>
                    <div 
                    className="subUl"
                    
                    style={{
                        position: 'relative',
                        height: '564px',
                        top: '-60px',
                        z_index: 1000,
                        width: '270px',
                        opacity: 1,
                        left: '253px'
                        }}
                        
                        > 
                        
                    <ul className="uLtag2">
                        <Link href="/ssr">
                         <li className="uLtag3"><a>Пластиковые контейнеры</a></li>
                        </Link>
                    
                    <li><a href="#">Бумажные стаканы</a></li>
                    <li style={{    height: '452px',
                                    background: '#f4f4f4',
                                    }}>
                        <a href="#">Пластиковые стаканы</a>
                    </li>
                </ul>
                    </div>
                    
                    </li>
                </div>
                <div className="csr181">
                    <li>
                    
                    <Link href="/about">
                    
                      <a className="textcat"><svg className="imgsubcat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 
                      5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 
                    10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562
                     4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151
                      1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 
                    .67.297.673.709.005.802.004 7.091.003 12.29z"/></svg>Лотки и подложки<svg className="csr40 csr178" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><path transform="rotate(0 12 12)" fill="#333" d="M6.74975256,23.9998764 C6.55775256,23.9998764 6.36475256,23.9268764 6.21875256,23.7788764 C5.92575256,23.4848764 5.92775256,23.0108764 6.22075256,22.7188764 C8.76875256,20.1828764 14.2287526,13.8078764 15.7707526,11.9998764 
                    C14.2337526,10.1908764 8.79275256,3.81687644 6.24275256,1.28187644 C5.94975256,0.989876442 5.94775256,0.514876442 
                    6.23975256,0.220876442 C6.53175256,-0.0731235577 7.00775256,-0.0731235577 7.30175256,0.217876442 C10.3177526,3.21787644 
                    17.0417526,11.1798764 17.3267526,11.5168764 C17.5627526,11.7968764 17.5627526,12.2068764 17.3257526,12.4858764 C17.0397526,12.8228764 10.2917526,20.7818764
                     7.27875256,23.7808764 C7.13275256,23.9268764 6.94075256,23.9998764 6.74975256,23.9998764"></path></svg> 
                     
                     </a>
                    </Link>
                    <div 
                    className="subUl"
                    
                    style={{
                        position: 'relative',
                        height: '564px',
                        top: '-60px',
                        z_index: 1000,
                        width: '270px',
                        opacity: 1,
                        left: '253px'
                        }}
                        
                        >
                    <ul className="uLtag2">
                        <Link href="/ssr">
                         <li className="uLtag3"><a>Пластиковые контейнеры</a></li>
                        </Link>
                    
                    <li><a href="#">Бумажные стаканы</a></li>
                    <li style={{    height: '394px',
                                    background: '#f4f4f4',
                                    }}>
                        <a href="#">Пластиковые стаканы</a>
                    </li>
                </ul>
                </div>
                    </li>
                </div>
                
                <div className="csr181">
                    <li>
                    
                    <Link href="/about">
                    
                      <a className="textcat"><svg className="imgsubcat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 
                      5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 
                    10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562
                     4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151
                      1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 
                    .67.297.673.709.005.802.004 7.091.003 12.29z"/></svg>Лотки и подложки<svg className="csr40 csr178" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><path transform="rotate(0 12 12)" fill="#333" d="M6.74975256,23.9998764 C6.55775256,23.9998764 6.36475256,23.9268764 6.21875256,23.7788764 C5.92575256,23.4848764 5.92775256,23.0108764 6.22075256,22.7188764 C8.76875256,20.1828764 14.2287526,13.8078764 15.7707526,11.9998764 
                    C14.2337526,10.1908764 8.79275256,3.81687644 6.24275256,1.28187644 C5.94975256,0.989876442 5.94775256,0.514876442 
                    6.23975256,0.220876442 C6.53175256,-0.0731235577 7.00775256,-0.0731235577 7.30175256,0.217876442 C10.3177526,3.21787644 
                    17.0417526,11.1798764 17.3267526,11.5168764 C17.5627526,11.7968764 17.5627526,12.2068764 17.3257526,12.4858764 C17.0397526,12.8228764 10.2917526,20.7818764
                     7.27875256,23.7808764 C7.13275256,23.9268764 6.94075256,23.9998764 6.74975256,23.9998764"></path></svg> 
                     
                     </a>
                    </Link>
                    <div 
                    className="subUl"
                    
                    style={{
                        position: 'relative',
                        height: '564px',
                        top: '-60px',
                        z_index: 1000,
                        width: '270px',
                        opacity: 1,
                        left: '253px'
                        }}
                        
                        >
                    <ul className="uLtag2">
                        <Link href="/ssr">
                         <li className="uLtag3"><a>Пластиковые контейнеры</a></li>
                        </Link>
                    
                    <li><a href="#">Бумажные стаканы</a></li>
                    <li style={{    height: '344px',
                                    background: '#f4f4f4',
                                    }}>
                        <a href="#">Пластиковые стаканы</a>
                    </li>
                </ul>
                </div>
                    </li>
                </div>
                
                <div className="csr181">
                    <li>
                    
                    <Link href="/about">
                    
                      <a className="textcat"><svg className="imgsubcat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 
                      5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 
                    10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562
                     4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151
                      1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 
                    .67.297.673.709.005.802.004 7.091.003 12.29z"/></svg>Лотки и подложки<svg className="csr40 csr178" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><path transform="rotate(0 12 12)" fill="#333" d="M6.74975256,23.9998764 C6.55775256,23.9998764 6.36475256,23.9268764 6.21875256,23.7788764 C5.92575256,23.4848764 5.92775256,23.0108764 6.22075256,22.7188764 C8.76875256,20.1828764 14.2287526,13.8078764 15.7707526,11.9998764 
                    C14.2337526,10.1908764 8.79275256,3.81687644 6.24275256,1.28187644 C5.94975256,0.989876442 5.94775256,0.514876442 
                    6.23975256,0.220876442 C6.53175256,-0.0731235577 7.00775256,-0.0731235577 7.30175256,0.217876442 C10.3177526,3.21787644 
                    17.0417526,11.1798764 17.3267526,11.5168764 C17.5627526,11.7968764 17.5627526,12.2068764 17.3257526,12.4858764 C17.0397526,12.8228764 10.2917526,20.7818764
                     7.27875256,23.7808764 C7.13275256,23.9268764 6.94075256,23.9998764 6.74975256,23.9998764"></path></svg> 
                     
                     </a>
                    </Link>
                    <div 
                    className="subUl"
                    
                    style={{
                        position: 'relative',
                        height: '564px',
                        top: '-60px',
                        z_index: 1000,
                        width: '270px',
                        opacity: 1,
                        left: '253px'
                        }}
                        
                        >
                    <ul className="uLtag2">
                        <Link href="/ssr">
                         <li className="uLtag3"><a>Пластиковые контейнеры</a></li>
                        </Link>
                    
                    <li><a href="#">Бумажные стаканы</a></li>
                    <li style={{    height: '284px',
                                    background: '#f4f4f4',
                                    }}>
                        <a href="#">Пластиковые стаканы</a>
                    </li>
                </ul>
                </div>
                    </li>
                </div>
                <div className="csr181">
                    <li>
                    
                    <Link href="/about">
                    
                      <a className="textcat"><svg className="imgsubcat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 
                      5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 
                    10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562
                     4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151
                      1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 
                    .67.297.673.709.005.802.004 7.091.003 12.29z"/></svg>Лотки и подложки<svg className="csr40 csr178" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><path transform="rotate(0 12 12)" fill="#333" d="M6.74975256,23.9998764 C6.55775256,23.9998764 6.36475256,23.9268764 6.21875256,23.7788764 C5.92575256,23.4848764 5.92775256,23.0108764 6.22075256,22.7188764 C8.76875256,20.1828764 14.2287526,13.8078764 15.7707526,11.9998764 
                    C14.2337526,10.1908764 8.79275256,3.81687644 6.24275256,1.28187644 C5.94975256,0.989876442 5.94775256,0.514876442 
                    6.23975256,0.220876442 C6.53175256,-0.0731235577 7.00775256,-0.0731235577 7.30175256,0.217876442 C10.3177526,3.21787644 
                    17.0417526,11.1798764 17.3267526,11.5168764 C17.5627526,11.7968764 17.5627526,12.2068764 17.3257526,12.4858764 C17.0397526,12.8228764 10.2917526,20.7818764
                     7.27875256,23.7808764 C7.13275256,23.9268764 6.94075256,23.9998764 6.74975256,23.9998764"></path></svg> 
                     
                     </a>
                    </Link>
                    <div 
                    className="subUl"
                    
                    style={{
                        position: 'relative',
                        height: '564px',
                        top: '-60px',
                        z_index: 1000,
                        width: '270px',
                        opacity: 1,
                        left: '253px'
                        }}
                        
                        >
                    <ul className="uLtag2">
                        <Link href="/ssr">
                         <li className="uLtag3"><a>Пластиковые контейнеры</a></li>
                        </Link>
                    
                    <li><a href="#">Бумажные стаканы</a></li>
                    <li style={{    height: '228px',
                                    background: '#f4f4f4',
                                    }}>
                        <a href="#">Пластиковые стаканы</a>
                    </li>
                </ul>
                </div>
                    </li>
                </div>
                <div className="csr181">
                    <li>
                    
                    <Link href="/about">
                    
                      <a className="textcat"><svg className="imgsubcat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 
                      5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 
                    10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562
                     4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151
                      1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 
                    .67.297.673.709.005.802.004 7.091.003 12.29z"/></svg>Лотки и подложки<svg className="csr40 csr178" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><path transform="rotate(0 12 12)" fill="#333" d="M6.74975256,23.9998764 C6.55775256,23.9998764 6.36475256,23.9268764 6.21875256,23.7788764 C5.92575256,23.4848764 5.92775256,23.0108764 6.22075256,22.7188764 C8.76875256,20.1828764 14.2287526,13.8078764 15.7707526,11.9998764 
                    C14.2337526,10.1908764 8.79275256,3.81687644 6.24275256,1.28187644 C5.94975256,0.989876442 5.94775256,0.514876442 
                    6.23975256,0.220876442 C6.53175256,-0.0731235577 7.00775256,-0.0731235577 7.30175256,0.217876442 C10.3177526,3.21787644 
                    17.0417526,11.1798764 17.3267526,11.5168764 C17.5627526,11.7968764 17.5627526,12.2068764 17.3257526,12.4858764 C17.0397526,12.8228764 10.2917526,20.7818764
                     7.27875256,23.7808764 C7.13275256,23.9268764 6.94075256,23.9998764 6.74975256,23.9998764"></path></svg> 
                     
                     </a>
                    </Link>
                    <div 
                    className="subUl"
                    
                    style={{
                        position: 'relative',
                        height: '564px',
                        top: '-60px',
                        z_index: 1000,
                        width: '270px',
                        opacity: 1,
                        left: '253px'
                        }}
                        
                        >
                    <ul className="uLtag2">
                        <Link href="/ssr">
                         <li className="uLtag3"><a>Пластиковые контейнеры</a></li>
                        </Link>
                    
                    <li><a href="#">Бумажные стаканы</a></li>
                    <li style={{    height: '172px',
                                    background: '#f4f4f4',
                                    }}>
                        <a href="#">Пластиковые стаканы</a>
                    </li>
                </ul>
                </div>
                    </li>
                </div>
                <div className="csr181">
                    <li>
                    
                    <Link href="/about">
                    
                      <a className="textcat">
                          <svg className="imgsubcat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 
                      5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 
                    10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562
                     4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151
                      1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 
                    .67.297.673.709.005.802.004 7.091.003 12.29z"/></svg>Лотки и подложки<svg className="csr40 csr178" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><path transform="rotate(0 12 12)" fill="#333" d="M6.74975256,23.9998764 C6.55775256,23.9998764 6.36475256,23.9268764 6.21875256,23.7788764 C5.92575256,23.4848764 5.92775256,23.0108764 6.22075256,22.7188764 C8.76875256,20.1828764 14.2287526,13.8078764 15.7707526,11.9998764 
                    C14.2337526,10.1908764 8.79275256,3.81687644 6.24275256,1.28187644 C5.94975256,0.989876442 5.94775256,0.514876442 
                    6.23975256,0.220876442 C6.53175256,-0.0731235577 7.00775256,-0.0731235577 7.30175256,0.217876442 C10.3177526,3.21787644 
                    17.0417526,11.1798764 17.3267526,11.5168764 C17.5627526,11.7968764 17.5627526,12.2068764 17.3257526,12.4858764 C17.0397526,12.8228764 10.2917526,20.7818764
                     7.27875256,23.7808764 C7.13275256,23.9268764 6.94075256,23.9998764 6.74975256,23.9998764"></path></svg> 
                     
                     </a>
                    </Link>
                    <div 
                    className="subUl"
                    
                    style={{
                        position: 'relative',
                        height: '564px',
                        top: '-60px',
                        z_index: 1000,
                        width: '270px',
                        opacity: 1,
                        left: '253px'
                        }}
                        
                        >
                    <ul className="uLtag2">
                        <Link href="/ssr">
                         <li className="uLtag3"><a>Пластиковые контейнеры</a></li>
                        </Link>
                    
                    <li><a href="#">Бумажные стаканы</a></li>
                    <li style={{    height: '118px',
                                    background: '#f4f4f4',
                                    }}>
                        <a href="#">Пластиковые стаканы</a>
                    </li>
                </ul>
                </div>
                    </li>
                </div>
                <div className="csr181">
                    <li>
                    
                    <Link href="/about">
                    
                      <a className="textcat"><svg className="imgsubcat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 
                      5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 
                    10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562
                     4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151
                      1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 
                    .67.297.673.709.005.802.004 7.091.003 12.29z"/></svg>Лотки и подложки<svg className="csr40 csr178" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><path transform="rotate(0 12 12)" fill="#333" d="M6.74975256,23.9998764 C6.55775256,23.9998764 6.36475256,23.9268764 6.21875256,23.7788764 C5.92575256,23.4848764 5.92775256,23.0108764 6.22075256,22.7188764 C8.76875256,20.1828764 14.2287526,13.8078764 15.7707526,11.9998764 
                    C14.2337526,10.1908764 8.79275256,3.81687644 6.24275256,1.28187644 C5.94975256,0.989876442 5.94775256,0.514876442 
                    6.23975256,0.220876442 C6.53175256,-0.0731235577 7.00775256,-0.0731235577 7.30175256,0.217876442 C10.3177526,3.21787644 
                    17.0417526,11.1798764 17.3267526,11.5168764 C17.5627526,11.7968764 17.5627526,12.2068764 17.3257526,12.4858764 C17.0397526,12.8228764 10.2917526,20.7818764
                     7.27875256,23.7808764 C7.13275256,23.9268764 6.94075256,23.9998764 6.74975256,23.9998764"></path></svg> 
                     
                     </a>
                    </Link>
                    <div 
                    className="subUl"
                    
                    style={{
                        position: 'relative',
                        height: '564px',
                        top: '-60px',
                        z_index: 1000,
                        width: '270px',
                        opacity: 1,
                        left: '253px'
                        }}>
                    <ul className="uLtag2">
                        <Link href="/ssr">
                         <li className="uLtag3"><a>Пластиковые контейнеры</a></li>
                        </Link>
                    
                    <li><a href="#">Бумажные стаканы</a></li>
                    <li style={{    height: '118px',
                                    background: '#f4f4f4',
                                    }}>
                        <a href="#">Пластиковые стаканы</a>
                    </li>
                </ul>
                </div>
                    </li>
                </div>


                <div className="csr181">
                    <li>
                    
                    <Link href="/about">
                    
                      <a className="textcat"><svg className="imgsubcat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 
                      5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 
                    10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562
                     4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151
                      1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 
                    .67.297.673.709.005.802.004 7.091.003 12.29z"/></svg>Лотки и подложки<svg className="csr40 csr178" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><path transform="rotate(0 12 12)" fill="#333" d="M6.74975256,23.9998764 C6.55775256,23.9998764 6.36475256,23.9268764 6.21875256,23.7788764 C5.92575256,23.4848764 5.92775256,23.0108764 6.22075256,22.7188764 C8.76875256,20.1828764 14.2287526,13.8078764 15.7707526,11.9998764 
                    C14.2337526,10.1908764 8.79275256,3.81687644 6.24275256,1.28187644 C5.94975256,0.989876442 5.94775256,0.514876442 
                    6.23975256,0.220876442 C6.53175256,-0.0731235577 7.00775256,-0.0731235577 7.30175256,0.217876442 C10.3177526,3.21787644 
                    17.0417526,11.1798764 17.3267526,11.5168764 C17.5627526,11.7968764 17.5627526,12.2068764 17.3257526,12.4858764 C17.0397526,12.8228764 10.2917526,20.7818764
                     7.27875256,23.7808764 C7.13275256,23.9268764 6.94075256,23.9998764 6.74975256,23.9998764"></path></svg> 
                     
                     </a>
                    </Link>
                    <div 
                    className="subUl"
                    
                    style={{
                        position: 'relative',
                        height: '564px',
                        top: '-60px',
                        z_index: 1000,
                        width: '270px',
                        opacity: 1,
                        left: '253px'
                        }}
                        
                        >
                    <ul className="uLtag2">
                        <Link href="/ssr">
                         <li className="uLtag3"><a>Пластиковые контейнеры</a></li>
                        </Link>
                    
                    <li><a href="#">Бумажные стаканы</a></li>
                    <li style={{    height: '118px',
                                    background: '#f4f4f4',
                                    }}>
                        <a href="#">Пластиковые стаканы</a>
                    </li>
                </ul>
                </div>
                    </li>
                </div>
                <div className="csr181">
                    <li>
                    
                    <Link href="/about">
                    
                      <a className="textcat"><svg className="imgsubcat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 
                      5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 
                    10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562
                     4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151
                      1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 
                    .67.297.673.709.005.802.004 7.091.003 12.29z"/></svg>Лотки и подложки<svg className="csr40 csr178" focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24"><path transform="rotate(0 12 12)" fill="#333" d="M6.74975256,23.9998764 C6.55775256,23.9998764 6.36475256,23.9268764 6.21875256,23.7788764 C5.92575256,23.4848764 5.92775256,23.0108764 6.22075256,22.7188764 C8.76875256,20.1828764 14.2287526,13.8078764 15.7707526,11.9998764 
                    C14.2337526,10.1908764 8.79275256,3.81687644 6.24275256,1.28187644 C5.94975256,0.989876442 5.94775256,0.514876442 
                    6.23975256,0.220876442 C6.53175256,-0.0731235577 7.00775256,-0.0731235577 7.30175256,0.217876442 C10.3177526,3.21787644 
                    17.0417526,11.1798764 17.3267526,11.5168764 C17.5627526,11.7968764 17.5627526,12.2068764 17.3257526,12.4858764 C17.0397526,12.8228764 10.2917526,20.7818764
                     7.27875256,23.7808764 C7.13275256,23.9268764 6.94075256,23.9998764 6.74975256,23.9998764"></path></svg> 
                     
                     </a>
                    </Link>
                    <div 
                    className="subUl"
                    
                    style={{
                        position: 'relative',
                        height: '564px',
                        top: '-60px',
                        z_index: 1000,
                        width: '270px',
                        opacity: 1,
                        left: '253px'
                        }}
                        
                        >
                    <ul className="uLtag2">
                        <Link href="/ssr">
                         <li className="uLtag3"><a>Пластиковые контейнеры</a></li>
                        </Link>
                    
                    <li><a href="#">Бумажные стаканы</a></li>
                    <li style={{    height: '118px',
                                    background: '#f4f4f4',
                                    }}>
                        <a href="#">Пластиковые стаканы</a>
                    </li>
                </ul>
                </div>
                    </li>
                </div>

                


                          </ul>
                    </nav>
                    
                    
                    
                    <div className="csr171"></div>
                    
                    </div>
                
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
            background: #f4f4f4;
            width: 270px;
            border: 1px solid #eaeaea;
            border-radius: 6px;
            box-shadow: -2px 2px 9px rgba(0,0,0,0.25), 0 2px 0px rgba(0,0,0,0);

        }
        .uLtag3{
            border-top: 4px solid #66cc33;
            border-radius: 6px;
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
        .text{
            font-family: Montserrat, sans-serif; 
            font-weight: 400;
            font-size: 16px;
            cursor: pointer;
            color: black;
            transition: 0.3s ease-in-out;
            
        }
        .text:hover{
            color: #209F38;
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
            

        }
        .csr181 li:hover{
            box-shadow: -6px 6px 19px rgba(0,0,0,0.25), 0 2px 0px rgba(0,0,0,0);

        }
        .textcatone{
            border-radius: 12px;
        }
        .subUl{
            display: none;
            z-index: 9999999;
            
        }
        .uLtag2{
            background: #f4f4f4;
            width: 268px;
        }
        a:hover .subUl{
            display: block;
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
        .csr168{
            width: 252px;
            height: 573px;
            cursor: pointer;
            padding: 3px 0;
            position: relative;
            align-items: center;
            margin-right: 2.8vw;
            transition: 0.3s ease-in-out;
            margin-bottom: 10px;
            border-radius: 6px;
        }
        
        .csr171{
                left: calc(50% - 16px);
                width: 0;
                border: 8px solid transparent;
                border-radius: 6px;
                border-bottom-color: transparent;
                bottom: -25px;
                height: 0;
                opacity: 0;
                
                position: absolute;
                transition: .5s bottom ease, .5s opacity ease;
                border-bottom-color: #eaeaea;
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
    font-size: 15px;
}



/* Hide Dropdowns by Default */
nav ul ul {
	display: none;
	position: absolute; 
    transition: 0.3s ease-in-out;
}
nav li:hover > .uLtag{
    /*border-top: 4px solid #66cc33;*/
    width: 270px;
    transition: all 0.4s;
}
nav li:hover > .uLtag{
   /* border-top: 4px solid #66cc33;*/
    transition: all 0.4s;
}
	
/* Display Dropdowns on Hover */
nav ul li:hover > div ul {
	display:inherit;
    transition: 0.3s ease-in-out;
    border-radius: 8px;
}
nav ul li:hover > div{
            display: block;
            transition: 0.3s ease-in-out;
        }
nav li:hover > ul li{
	display: inherit;
	-webkit-transition: .3s ease-in-out;
	transition: 0.3s ease-in-out;
	}

nav a:hover{
    color: #209F38; 
    font-weight: 500;
}
	
/* Fisrt Tier Dropdown */
nav ul ul li {
	position: relative;
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
  height: 4rem;
  transition: 0.3s ease-in-out;
  border-bottom: 1px solid #eaeaea;
  border-radius: 6px;
}
nav li a {
    
}
nav li a{

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