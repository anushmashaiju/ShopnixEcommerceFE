import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppNavbar from './Navbar';

const ProductCategory = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/products');
    };

    return (
        <><AppNavbar />
            <div className="container mt-5 pt-4">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Let's add a type, Category and Sub-category</h2>
                        <form>
                            <div className="form-group">
                                <label>Add a product type</label>
                                <input type="text" className="form-control" placeholder="eg. books" />
                            </div>
                            <div className="form-group">
                                <label>Add a category (optional)</label>
                                <input type="text" className="form-control" placeholder="eg. Academic book" />
                            </div>
                            <div className="form-group">
                                <label>Add a sub-category (optional)</label>
                                <input type="text" className="form-control" placeholder="eg. medical book" />
                            </div>
                            <div className="form-group d-flex justify-content-end">
                                <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>

                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="Images/3.PNG" alt="Product Flow" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCategory;
