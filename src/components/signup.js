import React from 'react'
import { NavLink } from 'react-router-dom'
import signpicture from '../images/signup.jpg'
// import "../functions.js"

function Signup() {
    return (
        <>
            <div className="form-heading">
                <h1>Sign Up Form</h1>
            </div>
            <section className="signup-section">
                {/* <div className="sigup-form"> */}
                <form action="">

                    <div className="form-group">
                        <label htmlFor="name">
                            <i class="zmdi zmdi-account"></i>
                        </label>
                        <input type="text" placeholder="Enter Your Name" autoComplete="off" name="name" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">
                            <i class="zmdi zmdi-pin-account"></i>
                        </label>
                        <input type="text" placeholder="U-name (abc@123)" autoComplete="off" name="username" id="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            <i class="zmdi zmdi-email"></i>
                        </label>
                        <input type="text" placeholder="Enter Your email" autoComplete="off" name="email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Phonenumber">
                            <i class="zmdi zmdi-smartphone-iphone"></i>
                        </label>
                        <input type="text" placeholder="Phone Number" autoComplete="off" name="Phonenumber" id="Phonenumber" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">
                            <i class="zmdi zmdi-male-female"></i>
                        </label>
                        <select name="mycity" id="city" placeholder="---Select---">
                            <option value="Select" selected>---Select---</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            <i class="zmdi zmdi-key"></i>
                        </label>
                        <input type="password" placeholder="Password" autoComplete="off" name="password" id="password" />
                        {/* <button onClick="showpass()">
                                <i class="zmdi zmdi-eye"></i>
                            </button> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpassword">
                            <i class="zmdi zmdi-lock"></i>
                        </label>
                        <input type="password" placeholder="Confirm Password" autoComplete="off" name="cpassword" id="cpassword" />
                    </div>
                    <div className="form-group form-button">
                        <input type="submit" name="signup" id="signup" className="signup" value="Register" />
                    </div>
                </form>
                <figure className="form-image">
                    <img src={signpicture} alt="Sign in Picture" />
                    <NavLink to="/login" classname="login-link">If already registered(Click Here)</NavLink>
                </figure>
                {/* </div> */}
            </section>
        </>
    )
}

export default Signup
