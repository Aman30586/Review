import React from 'react'
import { NavLink } from 'react-router-dom'
import loginpicture from "../images/signup.jpg"

function Login() {
    return (
        <>
            <div className="form-heading">
                <h1>Log In Here...</h1>
            </div>
            <section className="signup-section">
                <form action="">
                <div className="form-group">
                        <label htmlFor="username">
                            <i class="zmdi zmdi-pin-account"></i>
                        </label>
                        <input type="text" placeholder="Username" autoComplete="off" name="username" id="username" />
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
                    <div className="form-group form-button">
                        <input type="submit" name="signup" id="signup" className="signup" value="Log In" />
                    </div>
                </form>
                <figure className="form-image">
                    <img src={loginpicture} alt="Log in Picture" />
                    <NavLink to="/signup" classname="login-link">To regiter Yourself(Click Here)</NavLink>
                </figure>
            </section>
            {/* <p class="text-center">Login with your social media account</p>
            <div class="text-center social-btn">
                <NavLink to="/" class="btn btn-secondary"><i class="fa fa-facebook"></i>&nbsp; Facebook</NavLink>
                <NavLink to="/" class="btn btn-info"><i class="fa fa-twitter"></i>&nbsp; Twitter</NavLink>
                <NavLink to="/" class="btn btn-danger"><i class="fa fa-google"></i>&nbsp; Google</NavLink>
            </div>
            <p class="text-center text-muted small">Don't have an account? <NavLink to="/signup">Sign up here!</NavLink></p> */}
        </>
    )
}

export default Login
