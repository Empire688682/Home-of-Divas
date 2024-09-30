"use client";
import { useState } from 'react';
import styles from './SignUp.module.css';
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    gender: "Male",
    password: "",
    pwdRepeat: "",
    dBirth: "1999-01-01"
  });

  const [loginStage, setLogInStage] = useState("Signup");
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);

  const userControl = async () => {
    try {
      setLoading(true);
      const endpoint = loginStage === "Signup" ? "api/users/signup" : "api/users/login";
      const response = await axios.post(endpoint, data);
      if (response.data.success) {
        localStorage.setItem("Divastoken", response.data.token);
        const user = response.data.user;
        localStorage.setItem("Divasuserdata",JSON.stringify(user));
        setData({
          fName: "",
          lName: "",
          email: "",
          gender: "Male",
          password: "",
          pwdRepeat: "",
          dBirth: ""
        });
        window.location.reload();
        router.push('/shop');
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

  const handleSigupCrossIcon = () =>{
    router.push('/');
  }

  return (
    <div className={styles['log-sign-con']}>
      <div className={styles['log-sign']}>
        <div onClick={handleSigupCrossIcon}><RxCross2 className={styles.icon} /></div>
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
         <div>
         <input
            onChange={handleOnChange}
            value={data.password}
            name="password"
            type={showPass? "text":"password"}
            placeholder='Password'
            required
          />
          <small onClick={() => setShowPass(!showPass)} className={styles.eyeIcon}>
              {!showPass ? <FaEyeSlash /> : <IoEyeSharp />}
            </small>
         </div>
          {loginStage === "Signup" && (
            <>
              <div>
              <input
                onChange={handleOnChange}
                value={data.pwdRepeat}
                name="pwdRepeat"
                type={showPass? "text":"password"}
                placeholder='Repeat Password'
                required
              />
              <small onClick={() => setShowPass(!showPass)} className={styles.eyeIcon}>
              {!showPass ? <FaEyeSlash /> : <IoEyeSharp />}
            </small>
              </div>
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
