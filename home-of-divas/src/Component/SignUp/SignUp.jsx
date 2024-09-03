"use client";
import { useState } from 'react';
import styles from './SignUp.module.css';
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import { useGlobalContext } from '../Context';

const SignUp = ({ setSignup }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    gender: "Male",
    password: "",
    pwdRepeat: "",
    dBirth: ""
  });

  const [loginStage, setLogInStage] = useState("Login");

  const userControl = async () => {

    try {
      setLoading(true);
      const endpoint = loginStage === "Login" ? "api/users/login" : "api/users/signup";
      const response = await axios.post(endpoint, data);
      console.log("DATA:", data);
      if (response.data.success) {
        console.log("Full Response:", response);
        localStorage.setItem("token", response.data.token);
        const user = response.data.user;
        localStorage.setItem("User Data", JSON.stringify(user));
        setSignup(false);
        setData({
          fName: "",
          lName: "",
          email: "",
          gender: "Male",
          password: "",
          pwdRepeat: "",
          dBirth: ""
        });
        window.location.replace("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    userControl();
  };

  return (
    <div className={styles['log-sign-con']}>
      <div className={styles['log-sign']}>
        <div onClick={() => setSignup(false)}><RxCross2 className={styles.icon} /></div>
        <h4>{loginStage === "Signup" ? "Signup" : "Login"}</h4>
        <form onSubmit={handleFormSubmission}>
          {loginStage === "Signup" && (
            <>
              <input
                onChange={handleOnChange}
                value={data.fName}
                name="fName"
                type="text"
                placeholder='First Name'
                required
              />
              <input
                onChange={handleOnChange}
                value={data.lName}
                name="lName"
                type="text"
                placeholder='Last Name'
                required
              />
            </>
          )}
          <input
            onChange={handleOnChange}
            value={data.email}
            name="email"
            type="email"
            placeholder='Email'
            required
          />
          <input
            onChange={handleOnChange}
            value={data.password}
            name="password"
            type="password"
            placeholder='Password'
            required
          />
          {loginStage === "Signup" && (
            <>
              <input
                onChange={handleOnChange}
                value={data.pwdRepeat}
                name="pwdRepeat"
                type="password"
                placeholder='Repeat Password'
                required
              />
              <select onChange={handleOnChange} name="gender" value={data.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                onChange={handleOnChange}
                value={data.dBirth}
                name="dBirth"
                type="date"
                required
              />
            </>
          )}
          {loading ? (
            <button className={styles.loading_gif}>
              <span>PROCESSING</span>
              <img src='/loading_gif.gif' alt="Loading" />
            </button>
          ) : (
            <button type='submit'>{loginStage === "Signup" ? "Sign Up" : 'Login'}</button>
          )}
        </form>
        <div className={styles["login-status"]}>
          {loginStage === "Signup" ? (
            <p className={styles['create-already']}>Already have an account? <span onClick={() => setLogInStage("Login")}>Login</span></p>
          ) : (
            <p className={styles['create-already']}>Create a new account? <span onClick={() => setLogInStage("Signup")}>Click here</span></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
