import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import CollapsibleMenuDemo from '../components/LeftMenu/MainLeft'


const linkStyle = {
  marginRight: 15
}


const useStyles = makeStyles((theme) => ({
    allbleat:{
        margin: '0px 20px 0px 20px'
    },root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


export default function About() {
    const classes = useStyles();
    const router = useRouter();
    const NavLink = props => <Breadcrumb.Item componentClass={Link} {...props} />;
  return (
    <Layout>



        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <CollapsibleMenuDemo />
                </Grid>
                <Grid item xs>
                    <Grid container>
                        <Grid item >
                            //my
                        </Grid>
                        
                    </Grid>
                </Grid>
                
                {NavLink}
            </Grid>
        </div>
    </Layout>
  );
}