'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './AddItems.module.css';

const AddItems = () => {
  const [data, setData] = useState({
    name: '',
    category: 'Women',
    price: '',
  });

  const [image, setImage] = useState(null);
  const [emptyField, setEmptyField] = useState(false);

  const onchangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!data.name || !data.price) {
      setEmptyField(true);
    } else {
      setEmptyField(false);
      console.log('Form submitted:', data);
    }
  };

  return (
    <div className={`${styles.add_Items}`}>
      <form className={`${styles.addForm}`} onSubmit={submitHandler}>
        <div className={`${styles.add_img_con} ${styles.flex_col}`}>
          <p>Upload image</p>
          <label htmlFor="image">
           <div className={styles.img_Con}>
           <Image
              src={image ? URL.createObjectURL(image) : '/profile_icon.png'}
              alt="Uploaded Preview"
              fill
            />
           </div>
          </label>
          {emptyField && <small>Please fill the empty fields</small>}
          <input
            onChange={(e) => setImage(e.target.files[0])}
            hidden={true}
            type="file"
            id="image"
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
        <button className={`${styles.add_button}`} type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddItems;
