import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import HomeIcon from '@material-ui/icons/Home';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import SwitchToggle from '@mui-treasury/components/toggle/switch';
import RowToggle from '@mui-treasury/components/toggle/row';
import Menu from '@mui-treasury/components/menu/collapsible';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BusinessIcon from '@material-ui/icons/Business';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import ContactsIcon from '@material-ui/icons/Contacts';
import PeopleCardFooter from '@mui-treasury/components/cardFooter/people';
import { FixedSizeList } from 'react-window';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 330,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
    list: {
        width: 250,
        overflow: 'auto',
      },
      fullList: {
        width: 'auto',
      },
  }));

  

export default function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="Главная">
        <ListItemIcon style={{    justifyContent: 'flex-start'}}><HomeIcon/></ListItemIcon>
          <Link href="/">
          <ListItemText primary="Главная" />
          </Link>
          
        </ListItem>
      </List>
     
    </div>
  );

  return (
    <div >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
            
            <Menu
        renderToggle={({ onClick, collapsed }) => (
          <ListItem button onClick={onClick}>
            <ListItemText primary="Каталог товаров "/>
            <SwitchToggle toggled={collapsed} />
          </ListItem>
        )}
      >
        <List className={classes.root}>
        <ListItem button key="Био посуда и упаковка">
          <Link href="/">
          <ListItemText primary="Био посуда и упаковка" />
          </Link>
          <ListItemIcon style={{    justifyContent: 'flex-end'}}><ChevronRightIcon/></ListItemIcon>
          
          
        </ListItem>
        <ListItem button key="Бумажная одноразовая посуда">
          <Link href="/">
          <ListItemText primary="Бумажная одноразовая посуда" />
          </Link>
          <ListItemIcon style={{    justifyContent: 'flex-end'}}><ChevronRightIcon/></ListItemIcon>
          
          
        </ListItem>
        <ListItem button key="Бумажная упаковка">
          <Link href="/">
          <ListItemText primary="Бумажная упаковка" />
          </Link>
          <ListItemIcon style={{    justifyContent: 'flex-end'}}><ChevronRightIcon/></ListItemIcon>
          
          
        </ListItem>
        <ListItem button key="Бытовая химия">
          <Link href="/">
          <ListItemText primary="Бытовая химия" />
          </Link>
          <ListItemIcon style={{    justifyContent: 'flex-end'}}><ChevronRightIcon/></ListItemIcon>
          
          
        </ListItem>
        
        <ListItem button key="Ланчбоксы и подложки">
          <Link href="/">
          <ListItemText primary="Ланчбоксы и подложки" />
          </Link>
          <ListItemIcon style={{    justifyContent: 'flex-end'}}><ChevronRightIcon/></ListItemIcon>
          
          
        </ListItem>


        <ListItem button key="Одноразовые контейнеры и упаковка">
          <Link href="/">
          <ListItemText primary="Одноразовые контейнеры и упаковка" />
          </Link>
          <ListItemIcon style={{    justifyContent: 'flex-end'}}><ChevronRightIcon/></ListItemIcon>
          
          
        </ListItem>
        <ListItem button key="Пакеты из полиэтилена">
          <Link href="/">
          <ListItemText primary="Пакеты из полиэтилена" />
          </Link>
          <ListItemIcon style={{    justifyContent: 'flex-end'}}><ChevronRightIcon/></ListItemIcon>
          
          
        </ListItem>
        <ListItem button key="Пластиковая одноразовая посуда">
          <Link href="/">
          <ListItemText primary="Пластиковая одноразовая посуда" />
          </Link>
          <ListItemIcon style={{    justifyContent: 'flex-end'}}><ChevronRightIcon/></ListItemIcon>
          
          
        </ListItem>
        <ListItem button key="Пленки пищевые и хозяйственные">
          <Link href="/">
          <ListItemText primary="Пленки пищевые и хозяйственные" />
          </Link>
          <ListItemIcon style={{    justifyContent: 'flex-end'}}><ChevronRightIcon/></ListItemIcon>
          
          
        </ListItem>
        <ListItem button key="Расходные товары для магазинов">
          <Link href="/">
          <ListItemText primary="Расходные товары для магазинов" />
          </Link>
          <ListItemIcon style={{    justifyContent: 'flex-end'}}><ChevronRightIcon/></ListItemIcon>
          
          
        </ListItem>
        <ListItem button key="Санитарно-гигиенические товары">
          <Link href="/">
          <ListItemText primary="Санитарно-гигиенические товары" />
          </Link>
          <ListItemIcon style={{    justifyContent: 'flex-end'}}><ChevronRightIcon/></ListItemIcon>
          
          
        </ListItem>
        <ListItem button key="Средства индивидуальной защиты">
          <Link href="/">
          <ListItemText primary="Средства индивидуальной защиты" />
          </Link>
          <ListItemIcon style={{    justifyContent: 'flex-end'}}><ChevronRightIcon/></ListItemIcon>
          
          
        </ListItem>
        </List>
        

       
      </Menu>

      <List>
        <ListItem button key="О компании">
        <ListItemIcon style={{    justifyContent: 'flex-start'}}><BusinessIcon/></ListItemIcon>
          <Link href="/">
          <ListItemText primary="О компании" />
          </Link>
          
        </ListItem>
      </List>
      <PeopleCardFooter />
      <List>
        <ListItem button key="Доставка">
        <ListItemIcon style={{    justifyContent: 'flex-start'}}><AllInboxIcon/></ListItemIcon>
          <Link href="/">
          <ListItemText primary="Доставка" />
          </Link>
          
        </ListItem>
      </List>
      <PeopleCardFooter />

      <List>
        <ListItem button key="Контакты">
        <ListItemIcon style={{    justifyContent: 'flex-start'}}><ContactsIcon/></ListItemIcon>
          <Link href="/">
          <ListItemText primary="Контакты" />
          </Link>
          
        </ListItem>
      </List>
      
          </Drawer>
          
        </React.Fragment>
      ))}
    </div>
  );
}
