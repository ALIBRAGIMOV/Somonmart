import { isAuth, getCookie } from '../../actions/auth';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import {createSubCategory, getCategories} from './apiAdmin'
import { set } from 'mongoose';

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
             <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
                </label>
            </div>
            <div>
            <label className="text-muted">Название</label>
                <input onChange={handleChange('name')} 
                type="text" 
                className="form-control" 
                value={name} />
                <div className="form-group">
                <label className="text-muted">Category</label>
                <select onChange={handleChange('category')} className="form-control">
                    <option>Please select</option>
                    {categories &&
                        categories.map((c, i) => (
                            <option key={i} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                </select>
            </div>
                <button>Создать подкатегорию</button>
                
            </div>
            
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