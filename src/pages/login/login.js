import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import { useCookies } from "react-cookie";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import picture from "./image/centreMine.png";
import { useNavigate } from "react-router-dom";

// admin login
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [cookies, setCookie] = useCookies(["token"]);
    const [inputsFilled, setInputsFilled] = useState({
        email: false,
        password: false,
    });

    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setInputsFilled((prev) => ({
            ...prev,
            email: Boolean(event.target.value.trim()),
        }));
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setInputsFilled((prev) => ({
            ...prev,
            password: Boolean(event.target.value.trim()),
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/admin/login", { email, password })
        .then((response) => {
            const data = response.data;
            if (data && data.token) {
                // Successful login
                // console.log(response)
                localStorage.setItem("email", email || "");
              localStorage.setItem("token", "true");
              toast.success("Success Login !", {
                position: toast.POSITION.TOP_RIGHT,
              });
              setTimeout(() => {
                navigate("/dashbord");
              }, 2000);
            } else {
              // Invalid email or password
              throw new Error("Invalid email or password");
            }
        })
          .catch((error) => {
            console.error("Error logging in:", error);
            toast.error("Invalid email or password", {
                position: toast.POSITION.TOP_RIGHT,
            });
          });
      };
      

    return (
        <>
        
            <div className="container">
            <ToastContainer/>
                <div className="left-side">
                    <img className="logo1" src={picture} height={250} width={370} alt="logo" />
                    <h2 className="logo-title">CentreMine</h2>
                </div>
                <div className="right-side">
                    <form className="login-form">
                        <h1 className="login-title">Login</h1>

                        <div
                            className={`email-wrapper ${
                                email ? "has-value" : ""
                            }`}
                        >
                            <input
                                type="email"
                                className="input-email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                            <label
                                className={`email ${
                                    inputsFilled.email ? "input-filled" : ""
                                }`}
                                htmlFor="email"
                            >
                                Email
                            </label>
                        </div>
                        <div
                            className={`pass-wrapper ${
                                password ? "has-value" : ""
                            }`}
                        >
                            <input
                                type="password"
                                className="input-pass"
                                id="pass"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            <label
                                className={`pass ${
                                    inputsFilled.password ? "input-filled" : ""
                                }`}
                                htmlFor="pass"
                            >
                                Password
                            </label>
                        </div>

                        <button className="btn-login" onClick={handleLogin}>
                            {" "}
                            Login
                            <span></span>
                        </button>
                        <button className="btn-login">
                            <a href="/signup">Sign Up Now</a>
                        </button>
                    </form>

                    
                </div>
            </div>
        </>
    );
}

export default Login;
