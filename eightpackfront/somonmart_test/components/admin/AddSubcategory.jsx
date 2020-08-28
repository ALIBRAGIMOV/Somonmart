import { isAuth, getCookie } from '../../actions/auth';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import {createSubCategory, getCategories} from './apiAdmin'
import { set } from 'mongoose';
import { Typography, Button, IconButton, Input } from '@material-ui/core';
import PhotoCamera from "@material-ui/icons/Add";


const AddSubCategory = () => {

    const [values, setValues] = useState(
        {
        name: '',
        categories: [],
        category: '',
        error: '',
        formData: '',
        loading: false
        });

    const token = getCookie('token');
    const user = isAuth('user');

    const {  name, 
        categories, 
        category, 
        formData, 
        error, 
        loading } = values;
    
    // destructure user and token from localstorage

 

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    categories: data,
                    formData: new FormData()
                });
            }
        });
    };

    useEffect(() => {
        init();
    }, []);

    const handleChange = name => event => {
        const value =
        name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = (event) => {
        event.preventDefault();

        setValues({ ...values, error: "", loading: true });

        // make requet to api to creat category
        createSubCategory(user._id, token, formData)
        .then(data => {
            if(data.error){
                setValues({ ...values, error: data.error });
            }else{
                setValues({
                    ...values,
                    name: "",
                    category: "",
                    photo: ""
                })
            }
        });
    }


    const newSubCategoryForm = () => (
      <form onSubmit={clickSubmit}>
        <ul>
          <li>
            <Typography>Создать подкатегорию</Typography>
            <div className="form-group">
              <label className="btn btn-secondary">
                <input
                  onChange={handleChange("photo")}
                  type="file"
                  name="photo"
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  style={{ display: "none" }}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    color="secondary"
                    component="span"
                  >
                    Загрузка фото
                  </Button>
                </label>
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="secondary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </label>
            </div>
            <div>
              <Input
                onChange={handleChange("name")}
                type="text"
                className="form-control"
                value={name}
                autoFocus
                required
              />
              <Button
                variant="contained"
                color="secondary"
                component="span"
                style={{ marginLeft: 10 }}
              >
                Создать
              </Button>

              <div className="form-group" style={{marginTop: 20}}>
                <label className="text-muted">Выбрать категорию</label>
                <select
                  onChange={handleChange("category")}
                  className="form-control"
                >
                  <option>Click</option>
                  {categories &&
                    categories.map((c, i) => (
                      <option key={i} value={c._id}>
                        {c.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </li>
        </ul>
      </form>
    );
    return (
        <div>
            <div className="card">
            {newSubCategoryForm()}
            </div>
            
            
        </div>

    )

}

export default AddSubCategory;