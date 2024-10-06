'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './AddItems.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItems = () => {
  const [data, setData] = useState({
    name: '',
    category: '',
    price: '',
  });

  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onchangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!image) {
      setError('Please select an image');
      return;
    }
    addItem();
  };

  const addItem = async () => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('category', data.category);
      formData.append('price', data.price);
      formData.append('image', image);
      formData.append('image1', image1);
      formData.append('image2', image2);
      formData.append('image3', image3);

      const response = await axios.post('api/products/uploadProduct', formData,
        { headers: { "Content-Type": 'multipart/form-data' } });

      if (response.data.message) {
        setSuccess(response.data.message);
        setError('');
        setData({
          name: '',
          category: '',
          price: '',
        });
        setImage(null);
        toast.success("Product added successfully");
      }
    } catch (error) {
      console.error("ERROR:", error);
      setError(error.response?.data?.error || 'An error occurred while adding the item');
      setSuccess('');
      toast.error("Failed to add product");
    }
  };

  return (
    <div className={`${styles.add_Items}`}>
      <ToastContainer style={{ width: '80%' }} />
      <form className={`${styles.addForm}`} onSubmit={submitHandler}>
        <div className={`${styles.add_img_con} ${styles.flex_col}`}>
          <p>Product D image</p>
          <label htmlFor="image">
            <div className={styles.img_Con}>
              <Image
                src={image ? URL.createObjectURL(image) : '/profile_icon.png'}
                alt="Uploaded Preview"
                fill
              />
            </div>
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            hidden={true}
            type="file"
            id="image"
            accept="image/*"
          />
        </div>
        <div className={`${styles.add_img_con} ${styles.flex_col}`}>
          <p>Upload image 1</p>
          <label htmlFor="image1">
            <div className={styles.img_Con}>
              <Image
                src={image1 ? URL.createObjectURL(image1) : '/profile_icon.png'}
                alt="Uploaded Preview"
                fill
              />
            </div>
          </label>
          <input
            onChange={(e) => setImage1(e.target.files[0])}
            hidden={true}
            type="file"
            id="image1"
            accept="image/*"
          />
        </div>
        <div className={`${styles.add_img_con} ${styles.flex_col}`}>
          <p>Upload image 2</p>
          <label htmlFor="image2">
            <div className={styles.img_Con}>
              <Image
                src={image2 ? URL.createObjectURL(image2) : '/profile_icon.png'}
                alt="Uploaded Preview"
                fill
              />
            </div>
          </label>
          <input
            onChange={(e) => setImage2(e.target.files[0])}
            hidden={true}
            type="file"
            id="image2"
            accept="image/*"
          />
        </div>
        <div className={`${styles.add_img_con} ${styles.flex_col}`}>
          <p>Upload image 3</p>
          <label htmlFor="image3">
            <div className={styles.img_Con}>
              <Image
                src={image3 ? URL.createObjectURL(image3) : '/profile_icon.png'}
                alt="Uploaded Preview"
                fill
              />
            </div>
          </label>
          <input
            onChange={(e) => setImage3(e.target.files[0])}
            hidden={true}
            type="file"
            id="image3"
            accept="image/*"
          />
        </div>
        <div className={`${styles.add_name_con} ${styles.flex_col}`}>
          <p>Product name</p>
          <input
            onChange={onchangeHandler}
            value={data.name}
            type="text"
            name="name"
            required
            placeholder="Type here"
          />
        </div>
        <div className={`${styles.add_category_price_con}`}>
          <div className={`${styles.add_category_con} ${styles.flex_col}`}>
            <p>Product category</p>
            <select
              name="category"
              onChange={onchangeHandler}
              value={data.category}
            >
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="Kids">Kids</option>
              <option value="Materials">Materials</option>
            </select>
          </div>
          <div className={`${styles.add_price_con} ${styles.flex_col}`}>
            <p>Product price</p>
            <input
              onChange={onchangeHandler}
              value={data.price}
              type="number"
              name="price"
              required
              placeholder="#10000"
            />
          </div>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <button className={`${styles.add_button}`} type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddItems;