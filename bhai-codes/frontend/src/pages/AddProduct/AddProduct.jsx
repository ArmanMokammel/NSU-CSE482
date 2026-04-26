import React, { useState } from 'react';
import axios from 'axios'

const AddProduct = () => {
    const [form, setForm] = useState({
        name: "",
        description: "",
        image: "",
        quantity: ""
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:5000/api/products", form);
        console.log(res);
        alert('Done');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" name="name" className="form-control" id="productName" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" name="description" className="form-control" id="description" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="image">Image</label>
                    <input type="text" name="image" className="form-control" id="image" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="quantity">Quantity</label>
                    <input type="text" name="quantity" className="form-control" id="quantity" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;