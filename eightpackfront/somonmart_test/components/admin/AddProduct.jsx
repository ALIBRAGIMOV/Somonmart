import { isAuth, getCookie } from '../../actions/auth';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import { createProduct, getSubcategories } from './apiAdmin';

const  AddProduct = () => {

 
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        subcategories: [],
        subcategory: '', 
        shipping: '',
        quantity: '',
        loading: false,
        error: '',
        createdProduct: '',
        formData: ''
    })
    
    const token = getCookie('token');
    const user = isAuth('user');

    const { name, 
        description, 
        price, 
        subcategories, 
        subcategory, 
        shipping, 
        quantity, 
        loading,
        error,
        createdProduct,
        formData} = values

    

        // load subcategories and set form data
    const init = () => {
        getSubcategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    subcategories: data,
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
            name === "photo" || name === "photoTwo" || name === "photoThree" ? event.target.files[0] : event.target.value;
            formData.set(name, value);
            setValues({ ...values, [name]: value });
        };
    const clickSubmit = event => {

        event.preventDefault();

        setValues({ ...values, error: "", loading: true });

        createProduct(user._id, token, formData)
        .then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: "",
                    description: "",
                    photo: "",
                    price: "",
                    quantity: "",
                    loading: false,
                    createdProduct: data.name
                });
            }
        });
    };

    const newPostForm = () => (

        <form onSubmit={clickSubmit}> 

            <h4>Post Photo Product</h4>

            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" multiple />
                </label>
            </div>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photoTwo')} type="file" name="photoTwo" accept="image/*" multiple />
                </label>
            </div>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photoThree')} type="file" name="photoThree" accept="image/*" multiple />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
            </div>

            <div>
                <label>Description</label>
                <textarea onChange={handleChange('description')} 
                type="text" value={description}></textarea>
            </div>

            <div className="form-group">
                <label className="text-muted">Price</label>
                <input
                    onChange={handleChange("price")}
                    type="number"
                    className="form-control"
                    value={price}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Subcategory</label>
                <select onChange={handleChange('subcategory')} className="form-control">
                    <option>Please select</option>
                    {subcategories &&
                        subcategories.map((s, i) => (
                            <option key={i} value={s._id}>
                                {s.name}
                            </option>
                        ))}
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Shipping</label>
                <select onChange={handleChange('shipping')} className="form-control">
                    <option>Please select</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>

            <div>
                <label>Quantity</label>
                <input onChange={handleChange('quantity')} 
                type="number" value={quantity}></input>
            </div>

            <button> Create Product </button>

        </form>
    )

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdProduct ? '' : 'none' }}>
            <h2>{`${createdProduct}`} is created!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    return (
        <div>
        <div className="card">
        {showLoading()}
        {showSuccess()}
        {showError()}
        {newPostForm()}
        </div>
    </div>
    )
}

export default AddProduct;