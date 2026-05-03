import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        alert('Done');
        fetchProducts();
    }

    return (
        <div>
            {products.map((product) => (
                <div key={product._id} className="card" style={{ width: "18rem" }}>
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Quantity: {product.quantity}</p>
                        <a onClick={() => navigate(`/edit-product/${product._id}`)} className="btn btn-primary m02">Edit</a>
                        <a onClick={() => handleDelete(product._id)} className="btn btn-danger m-2">Delete</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;