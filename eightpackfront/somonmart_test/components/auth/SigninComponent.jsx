import { useState, useEffect } from 'react';
import { signin, isAuth, authenticate } from '../../actions/auth';
import Router from 'next/router';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import InputAdornments from './Signinform'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



const SigninComponent = () => {
    const [values, setValues] = useState({
        email: "eminem@mail.com",
        password: "123qwe",
        error: false,
        loading: false,
        redirectToReferrer: false,
    });

    useEffect(() => {
        isAuth() && Router.push(`/userus/[user]/[userdash]`);
    }, []);


    const { email, password, loading, error, redirectToReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
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
                        Router.push(`/[admin]/[admindash]`);
                    } else {
                        Router.push(`/`);
                    }
                });
            }
        });
    };

    const showError = () => (
        <div
        style={{ display: error ? "" : "none" }}
        >
           <Alert severity="error">{error}</Alert> 
        </div>
    );

    const showLoading = () => (
        loading && (<div><h2>Loading...</h2></div>)
    );
    
 

    const signInForm = () => (
        <form>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
    );

    

    return (
        <React.Fragment>
            <InputAdornments />
        </React.Fragment>
    );
};

export default SigninComponent;