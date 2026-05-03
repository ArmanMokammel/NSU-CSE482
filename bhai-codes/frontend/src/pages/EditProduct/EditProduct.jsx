
import React, { useState, useEffect, use } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router';

const EditProduct = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        description: "",
        image: "",
        quantity: ""
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`).then((response) => {
            setForm(response.data);
        })
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.put(`http://localhost:5000/api/products/${id}`, form);
        console.log(res);
        alert('Done');
        navigate('/product-list');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" name="name" className="form-control" id="productName" value={form.name || ""} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" name="description" className="form-control" id="description" value={form.description || ""} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="image">Image</label>
                    <input type="text" name="image" className="form-control" id="image" value={form.image || ""} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="quantity">Quantity</label>
                    <input type="text" name="quantity" className="form-control" id="quantity" value={form.quantity || ""} onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Update Product</button>
            </form>
        </div>
    );
};

export default EditProduct;