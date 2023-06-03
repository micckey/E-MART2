import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosApi from "../assets/axiosapi";

const Newproduct = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescripton] = useState('');
    const [category, setCategory] = useState('');
    const [availability, setAvailability] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [sellersId, setSellersID] = useState('');

    // Add image file handler
    const changeHandler = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader()
        let limit = 1024 * 1024 * 2
        if (file['size'] > limit) {
            Swal.fire({
                type: 'error',
                title: 'Ooops...',
                text: 'Something went wrong',
                footer: 'Why do I have this issue? '
            })
        }
        reader.onloadend = (file) => {
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
    }

    // Post request to create product
    const createProduct = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosApi.post('/api/add_product', {
                'name': name,
                'description': description,
                'image': image,
                'category': category,
                'availability': availability,
                'price': price,
                'sellerID': sellersId
            });

            console.log(response.data.message);
            Swal.fire({
                icon: 'success',
                title: 'Product added successfully'
            })

            navigate('/dashboard')


        } catch (error) {
            console.log(error);
            // Handle error response here
        }
    };

    const cancel = () => {
        navigate('/dashboard')
    }


    return (
        <div>
            <div className="container">
                <div className="createProducts">
                    <div className="titleBar">
                        <div className="titleItem">
                            <h1>Add Product</h1>
                        </div>
                        <div className="titleItem">
                            <button className="btn" onClick={cancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                    <div className="cardWrapper">
                        <div className="left">
                            <div className="card">
                                <p>Name</p>
                                <input type="text" value={name} onChange={(event) => { setName(event.target.value) }} />
                                <p>Description (Optional)</p>
                                <textarea cols="10" rows="5" value={description} onChange={(event) => { setDescripton(event.target.value) }}></textarea>

                                <div className="media">
                                    <ul className="imageList">
                                        <li className="imageItem">
                                            <div className="imgItem">
                                                <img src={image} alt="" width='117px' height='100px' />
                                            </div>
                                        </li>
                                        <li className="imageItem">
                                            <form className="itemForm">
                                                <label className="formLabel">Add Image</label>
                                                <input type="file" className="formInput" onChange={changeHandler} />
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="card">

                                <p>Category</p>
                                <div className="selectBox">
                                    <select name="" value={category} onChange={(event) => { setCategory(event.target.value) }}>
                                        <option value="">Select category  </option>
                                        <option value="Appliances ">Appliances</option>
                                        <option value="Computing">Computing</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Health n Beauty">Health n Beauty</option>
                                        <option value="Phones n Tablets">Phones n Tablets</option>
                                        <option value="Supermarkets">Supermarkets</option>
                                        <option value="TV and Audio">Fashion</option>
                                    </select>
                                </div>

                                <hr />

                                <p>Stock</p>
                                <input type="text" value={availability} onChange={(event) => { setAvailability(event.target.value) }} />
                                <hr />

                                <p>Price</p>
                                <input type="text" value={price} onChange={(event) => { setPrice(event.target.value) }} />
                                <hr />


                                <p>Seller</p>
                                <input type="text" value={sellersId} onChange={(event) => { setSellersID(event.target.value) }} />
                                <hr />

                            </div>
                        </div>

                        <button className="btn " onClick={(event) => createProduct(event)}>
                            Save
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newproduct