import React, { use, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router';
import { useAuth } from "../../contexts/AuthContext";

const AddProduct = () => {

    const navigate = useNavigate();
    const { currentUser } = useAuth();

    const [form, setForm] = useState({
        name: "",
        description: "",
        image: "",
        quantity: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Get the ID token from the authenticated user
            const token = await currentUser.getIdToken();
            // Send request with token in Authorization header
            const response = await axios.post(
                "http://localhost:5000/api/products",
                form,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                },
            );
            console.log("Product added:", response.data);
            setForm({
                name: "",
                description: "",
                image: "",
                quantity: ""
            });
        } catch (error) {
            console.error("Error adding product:", error);
        }
        console.log(form);
        alert('Done');
        navigate('/product-list');
    }

    const handleImageInput = (e) => {
        const img = e.target.files[0];

        if (img) {
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                const base64Image = loadEvent.target.result;
                setForm((prevForm) => ({ ...prevForm, image: base64Image }));
                console.log(base64Image)
            }
            reader.readAsDataURL(img);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" name="name" className="form-control" id="productName" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" name="description" className="form-control" id="description" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="image">Image</label>
                    <input type="file" accept="image/*" name="image" className="form-control" id="image" onChange={handleImageInput} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="quantity">Quantity</label>
                    <input type="text" name="quantity" className="form-control" id="quantity" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;