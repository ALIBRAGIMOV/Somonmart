import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import React, { useEffect } from 'react';
import { isAuth, signin, authenticate } from '../../actions/auth';
import Router from 'next/router';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '20px',
      marginLeft: '45px',
    },
    margin: {
        marginLeft: '5px',
        height: '55px',
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

  export default function InputAdornments() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      email: '',
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
      error: false,
      loading: false,
      redirectToReferrer: false
    });

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const { email, password, loading, error, redirectToReferrer } = values;

  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        const user = { email, password };
        signin(user).then({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 1) {
                        Router.push(`/adminuse/[admin]/[admindash]`, `/adminuse/admin/${isAuth().name}`);
                    } else {
                        Router.push(`/`);
                    }
                });
            }
        });
    };
  
    return (
      <div className={classes.root}>
        <div>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" 
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email} />
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
                    onChange={handleChange("password")}
                    type={values.showPassword ? 'text' : 'password'}
                    className="form-control"
                    value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end" 
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <Button onClick={clickSubmit} variant="contained" size="large" color="primary" className={classes.margin}>
          Вход
        </Button>
        
        
        </div>
      </div>
    );
  }
  

  