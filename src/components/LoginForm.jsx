import React, { useState } from "react";

let slide = false

export default function LoginForm() {
     const [sign, setSign] = useState("Sign Up")
     const [text, setText] = useState("Don't have an account")
     const [btnText, setBtnText] = useState("sign In")
     const [textTop, setTextTop] = useState("Please sign in")
     const [dis, setDis] = useState("none")

     const slideForm = () => {
          if (!slide) {
               document.querySelector(".slide").style.transform = "translateX(122.5%)";
               document.querySelector(".slide").style.borderRadius = "50% 25px 25px 50%";
               document.querySelector(".slideText").style.transform = "translateX(46.5%)";
               document.querySelector(".slideBtn").style.transform = "translateX(262.5%)";
               document.querySelector(".login").style.transform = "translateX(-82%)";
               setSign("Login")
               setText("Have an account")
               setTimeout(() => {
                    setBtnText("Sign Up")
                    setTextTop("Please sign up")
                    setDis("block")
               }, 250)
               slide = true
          } else {
               document.querySelector(".slide").style.transform = "translateX(0%)";
               document.querySelector(".slide").style.borderRadius = "25px 50% 50% 25px";
               document.querySelector(".slideText").style.transform = "translateX(0%)";
               document.querySelector(".slideBtn").style.transform = "translateX(0%)";
               document.querySelector(".login").style.transform = "translateX(0%)";
               setSign("Sign Up")
               setText("Don't have an account")
               setTimeout(() => {
                    setBtnText("Sign In")
                    setTextTop("Please sign in")
                    setDis("none")
               }, 250)
               slide = false
          }
     }

     return (
          <>
               <div className="slide">
                    <p className="slideText">{text}</p>
                    <button className="slideBtn" onClick={slideForm}>{sign}</button>
               </div>
               <div className="login">
                    <form>
                         <h1 className="h3 mb-3 fw-normal">{textTop}</h1>
                         <div style={{ display: dis }} className="form-floating">
                              <input
                                   type="username"
                                   className="form-control"
                                   id="floatingUsername"
                                   placeholder="Username"
                              />
                              <label htmlFor="floatingInput">Username</label>
                         </div>
                         <div className="form-floating">
                              <input
                                   type="email"
                                   className="form-control"
                                   id="floatingInput"
                                   placeholder="name@example.com"
                              />
                              <label htmlFor="floatingInput">Email address</label>
                         </div>
                         <div className="form-floating">
                              <input
                                   type="password"
                                   className="form-control"
                                   id="floatingPassword"
                                   placeholder="Password"
                              />
                              <label htmlFor="floatingPassword">Password</label>
                         </div>
                         <button style={{ backgroundColor: "#9EDDFF" }} className="button btn w-100 py-2" type="submit">
                              {btnText}
                         </button>
                    </form>
               </div>
          </>
     );
}