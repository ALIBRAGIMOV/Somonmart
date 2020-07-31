import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import SwitchToggle from '@mui-treasury/components/toggle/switch';
import RowToggle from '@mui-treasury/components/toggle/row';
import Menu from '@mui-treasury/components/menu/collapsible';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Link from 'next/link'


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 340,
      fontFamily: 'Montserrat, sans-serif',
        fontWeight: '400',
      marginLeft: '20px',
      marginTop: '20px',
      backgroundColor: theme.palette.background.paper,
      borderRadius: '5px',
      border: '1px black solid',
      [theme.breakpoints.down('sm')]:{
        display: 'none'
    }
    },
    catalog:{
      background: '#ededed',
      borderRadius: '5px',
      fontWeight: '500',
    },
    menu:{
      background: '#ededed',
      textDecoration: 'none'
    }
    
  }));

const CollapsibleMenuDemo = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListItem button className={classes.catalog}>
            <MenuIcon />
          Каталог товаров
        </ListItem>
        
      }
    ></List>
      <Menu

        className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick}>
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>
          <Link href="/ssg">
          <a>List item 1</a>
          
          </Link></ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
      className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick}>
            Total custom component <SwitchToggle className={classes.switch} toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
      className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick}>
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
      className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick}>
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
      className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick} >
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
      className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick}>
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
      className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick}>
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
      className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick}>
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
      className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick}>
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
      className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick}>
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
      className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick}>
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      <Menu
      className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick}>
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      
      <Menu
      className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick} >
           <Link href="/ssg" > Total custom componenty </Link><SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
      
      <Menu
      className={classes.menu}
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button 
          onMouseEnter={onClick}
          onClick={onClick}>
            Total custom component <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <ListItem button>List item 1</ListItem>
        <ListItem button>List item 2</ListItem>
        <ListItem button>List item 3</ListItem>
      </Menu>
    </div>
  );
};

export default CollapsibleMenuDemo;