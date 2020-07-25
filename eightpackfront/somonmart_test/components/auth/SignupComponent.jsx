import { useState, useEffect } from 'react';
import { signup} from '../../actions/auth';
import Router from 'next/router';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  


const SignupComponent = () => {

    const classes = useStyles();

    const [values, setValues] = useState({
        name: "iali",
        email: "ali@mail.ru",
        password: "123asd",
        error: "",
        success: false
    });

    const { name, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: 'false', [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: 'false' });
        signup({ name, email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: "",
                    email: "",
                    password: "",
                    error: "",
                    success: true
                });
            }
        });
    };

    const showError = () => (
        <div
        style={{ display: error ? "" : "none" }}
        >
                   <Alert severity="warning">{error}</Alert>

        </div>
    );

    const showSuccess = () => (
        <div
        style={{ display: success ? "" : "none" }}
        >
           <Alert severity="success">New account create! Please <Link href="/signin">SignIn</Link></Alert> 
        </div>
    );


    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={handleChange("name")}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>

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
            {showError()}
            {showSuccess()}
            {signUpForm()}
            
        </React.Fragment>
    );
};

export default SignupComponent;