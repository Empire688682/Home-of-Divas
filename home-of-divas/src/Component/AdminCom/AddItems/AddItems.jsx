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
    itemDescription: '',
    category: '',
    price: '',
  });

  const [images, setImages] = useState({
    main: null,
    image1: null,
    image2: null,
    image3: null,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onImageChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast.error(`Image ${key} is too large. Maximum size is 5MB.`);
        return;
      }
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        toast.error(`Invalid file type for ${key}. Please use JPEG, PNG, or GIF.`);
        return;
      }
      setImages({ ...images, [key]: file });
    }
  };

  const validateForm = () => {
    if (!data.name || !data.itemDescription || !data.category || !data.price || !images.main) {
      toast.error('Please fill all required fields and upload a main image.');
      return false;
    }
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('itemDescription', data.itemDescription);
      formData.append('category', data.category);
      formData.append('price', data.price);
      Object.entries(images).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      const response = await axios.post('api/products/uploadProduct', formData, {
        headers: { "Content-Type": 'multipart/form-data' }
      });

      if (response.data.message) {
        toast.success(response.data.message);
        setData({ name: '', itemDescription: '', category: '', price: '' });
        setImages({ main: null, image1: null, image2: null, image3: null });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'An error occurred while adding the item';
      toast.error(errorMessage);
    }
  };

  return (
    <div className={styles.add_Items}>
      <ToastContainer />
      <form className={styles.addForm} onSubmit={submitHandler}>
        {['main', 'image1', 'image2', 'image3'].map((key) => (
          <div key={key} className={`${styles.add_img_con} ${styles.flex_col}`}>
            <p>{key === 'main' ? 'Product Main Image' : `Upload image ${key.slice(-1)}`}</p>
            <label htmlFor={key}>
              <div className={styles.img_Con}>
                <Image
                  src={images[key] ? URL.createObjectURL(images[key]) : '/upload_area.svg'}
                  alt="Uploaded Preview"
                  fill
                />
              </div>
            </label>
            <input
              onChange={(e) => onImageChange(e, key)}
              hidden
              type="file"
              id={key}
              accept="image/*"
            />
          </div>
        ))}
        <div className={`${styles.add_name_con} ${styles.flex_col}`}>
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            required
            placeholder="Type here"
          />
        </div>
        <div className={`${styles.add_name_con} ${styles.flex_col}`}>
          <p>Product Description</p>
          <input
            onChange={onChangeHandler}
            value={data.itemDescription}
            type="text"
            name="itemDescription"
            required
            placeholder="Type here"
          />
        </div>
        <div className={styles.add_category_price_con}>
          <div className={`${styles.add_category_con} ${styles.flex_col}`}>
            <p>Product category</p>
            <select
              name="category"
              onChange={onChangeHandler}
              value={data.category}
              required
            >
              <option value="">Select a category</option>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="Kids">Kids</option>
              <option value="Materials">Materials</option>
            </select>
          </div>
          <div className={`${styles.add_price_con} ${styles.flex_col}`}>
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              required
              placeholder="10000"
              min="0"
            />
          </div>
        </div>
        <button className={styles.add_button} type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddItems;