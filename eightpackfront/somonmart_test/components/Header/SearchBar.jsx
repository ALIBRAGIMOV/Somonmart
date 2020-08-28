import React, { useState, useEffect }  from 'react';
import { getSubcategories, list} from "../apiCore";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router'
import Cardz from '../Card/Cardz'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 983,
    border: '1px solid #209F38',
    marginLeft: 15,
    borderRadius: 30,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontFamily: 'Montserrat, sans-serif',
    border: 'none',
    borderRadius: 30,
    outline: 'none'
  },

  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar() {
  const classes = useStyles();
  const router = useRouter()

  const [data, setData] = useState({
    subcategories: [],
    subcategory: '',
    search: '',
    results: [],
    searched: false

  });

  const {subcategories, subcategory, search, results, searched} = data

  useEffect(() => {
    loadsubCategories();
  }, [])

  const loadsubCategories = () => {
    getSubcategories().then(data => {
      if(data.error) {
        console.log(data.error)
      }else {
        setData({...data, subcategories: data})
      }
    })
  }

  

  const searchData = () => {
    // console.log(search, category);
    if (search) {
        list({ search: search || undefined, subcategory: subcategory }).then(
            response => {
                if (response.error) {
                    console.log(response.error);
                } else {
                    setData({ ...data, results: response, searched: true });
                }
            }
        );
    }
};
 
  const searchSubmit = e => {
    e.preventDefault();
    searchData();
    router.push({
      pathname: "/about",
      query: { product: 'og' },
    });
};
const searchMessage = (searched, results) => {
  if (searched && results.length > 0) {
      return `Found ${results.length} products`;
  }
  if (searched && results.length < 1) {
      return `No products found`;
  }
};


const searchedProducts = (results = []) => {
  return (
      <div>
          <h2 className="mt-4 mb-4">
              {searchMessage(searched, results)}
          </h2>

          <div className="row">
              {results.map((product, i) => (
                  <div className="col-4 mb-3">
                      <Cardz  key={i} product={product} />
                  </div>
              ))}
          </div>
      </div>
  );
};


const handleChange = name => event => {
  setData({ ...data, [name]: event.target.value, searched: false });
  
};

const searchForm = () => (
  <form onSubmit={searchSubmit}>
<Paper component="form" className={classes.root}>

          <input         type="search"
                className="input"
                className={classes.input}
                placeholder="Поиск среди 4670 товаров"
                onChange={handleChange("search")}
  />
          <div
              className="btn input-group-append"
              style={{ border: "none" }}
          >
<IconButton type="submit" className={classes.iconButton} aria-label="search">
  <SearchIcon />
</IconButton>            </div>
          </Paper>
  </form>
)
const handleResult = (event) =>{
  
  event.preventDefault()
  onChange={handleResult}
}


  return (
    <React.Fragment>
      <div className="row">
        <div>{searchForm()}</div>
        <div>{searchedProducts(results)}</div>
      </div>
    </React.Fragment>
  );
}
/*
<Paper component="form" className={classes.root}>
<Input
  className={classes.input}
  placeholder="Поиск среди 4670 товаров"
  onChange={handleChange("search")}
/>
<input         type="search"
                className={classes.input}
                placeholder="Поиск среди 4670 товаров"
                onChange={handleChange("search")}
  />

<IconButton type="submit" className={classes.iconButton} aria-label="search">
  <SearchIcon />
</IconButton>      
</Paper>
*/