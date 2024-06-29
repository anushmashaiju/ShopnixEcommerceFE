import React, { useState } from 'react';
import './Products.css';
import { useNavigate } from 'react-router-dom';
import AppNavbar from './Navbar';

function Products() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [skuCode, setSkuCode] = useState('');
  const [hasSkuCode, setHasSkuCode] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProductImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleNext = () => {
    navigate('/home');
  };
  const handleBack = () => {
    navigate('/category');
  };
  return (
    <><AppNavbar />
      <div className="basic-details-container">
        <div className="form-section">
          <h2>Lets add your first product</h2>
          <div className="form-group">
            <label>Product name</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Product Description</label>
            <textarea
              className="form-control"
              placeholder=""
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Add Image(s)</label>
            <input type="file" className="form-control-file" onChange={handleImageChange} />
            {productImage && <img src={productImage} alt="Product" className="img-thumbnail mt-2" />}
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={hasSkuCode}
              onChange={() => setHasSkuCode(!hasSkuCode)}
            />
            <label className="form-check-label">this product has an SKU code</label>
            {hasSkuCode && (
              <input
                type="text"
                className="form-control mt-2"
                placeholder="eg: PROD00001"
                value={skuCode}
                onChange={(e) => setSkuCode(e.target.value)}
              />
            )}
          </div>
          <div className="pricing-details">
            <h3>Pricing Details</h3>
            <div className="form-group">
              <input type="checkbox" id="inclusive-gst" />
              <label htmlFor="inclusive-gst">price inclusive of GST</label>
            </div>
            <div className="form-group">
              <label>Net price</label>
              <input type="text" placeholder="eg: 80" />
            </div>
            <div className="form-group">
              <label>List price</label>
              <input type="text" placeholder="eg: 100" />
            </div>
            <div className="form-group">
              <label>Discount percentage</label>
              <input type="text" placeholder="eg: 20" />
            </div>
            <div className="form-group">
              <label>GST rate</label>
              <input type="text" placeholder="eg: 18" />
            </div>
            <div className="form-group">
              <label>Shipping charges (if any)</label>
              <input type="text" placeholder="eg: 40" />
            </div>
            <div className="form-group">
              <label>Stock level</label>
              <input type="text" placeholder="eg: 110" />
            </div>
            <div className="form-group d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={handleBack}>Back</button>
              <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
            </div>
          </div>
        </div>
        <div className="preview-section">
          <div className="card">
            {productImage && <img src={productImage} className="card-img-top" alt="Product Preview" />}
            <div className="card-body">
              <h5 className="card-title">{productName || 'Product title'}</h5>
              <p className="card-text">
                {productDescription ||
                  'Esse miim eiusmod amet et incididunt magna consectetur laborum. Ipsum et cillum do exercitation nostrud nostrud ex. Consequat Lorem nostrud sint adipisicing amet ipsum cupidatat Lorem adipisicing veniam officia duis excepteur Lorem labore. Non eu non.'}
              </p>
              <p className="card-price">R$ 100 R$ 90</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
