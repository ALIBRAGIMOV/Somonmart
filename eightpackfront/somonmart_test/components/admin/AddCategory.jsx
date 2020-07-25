import { isAuth, getCookie } from '../../actions/auth';
import Link from 'next/link';
import {useState} from 'react';
import {createCategory} from './apiAdmin'

const AddCategory = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [successs, setSuccess] = useState(false); 

    // destructure user and token from localstorage

    const token = getCookie('token');
    const user = isAuth('user');

    const handleChange = (e) => {
        setError('');
        setName(e.target.value);
    }

    const clickSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        // make requet to api to creat category
        createCategory(user._id, token, {name}).then(data => {
            if(data.error){
                setError(data.error)
            }else{
                setError('')
                setSuccess(true);
            }
        });
    }

    const showSucces = () => {
        if(successs){
            return <h3>{name} категория создана</h3>
        }
    }

    const showError = () => {
        if(error){
            return <h3>{name} is shoul be unique</h3>
        }
    }

    const newCategoryForm = () => (
        <form onSubmit={clickSubmit}>
            <div>
                <label>
                    Name
                </label>
                <input type="text" 
                className="form-control" 
                onChange={handleChange} 
                value={name} 
                autoFocus 
                required />
                <button>Create Category</button>
            </div>
            
        </form>
    );
    return (
        <div>
            <div className="card">
            {showError()}
            {showSucces()}
            {newCategoryForm()}
            </div>
            
            
        </div>

    )

}

export default AddCategory;