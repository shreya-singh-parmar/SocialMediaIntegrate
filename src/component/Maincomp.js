import React, { useState } from 'react'
import { signInWithGoogle, signInWithFacebook } from "../firebase"

export default function Maincomp() {
  const [user, setUser] = useState({});
  const [isUserLogin, setIsUserLogin] = useState(false);
  const logOut = () => {
    setUser({});
    setIsUserLogin(false);
  }
  const withGoogle = async () => {
    try {
      const temp = await signInWithGoogle();
      console.log("temp:::", temp);
      setUser(temp);
      setIsUserLogin(true);
    } catch {
      setIsUserLogin(false);
    }
  }
  const withFacebook = async () => {
    try {
      const key = await signInWithFacebook();
      console.log("key:::", key);
      setUser(key);
      setIsUserLogin(true);
    } catch {
      setIsUserLogin(false);
    }
  }
  return (
    <>
      {
        !isUserLogin && (
          <>
            <h5 style=
              {{
                color: "black",
                fontSize: "2rem",
                textAlign: "center",
                fontStyle: "italic"
              }}
              className="card-title">
              Make connection, Have relation, Keep happiness</h5>
            <div className='container-fluid bg-dark mt-20 '>
              <div className="row d-flex justify-content-center py-4 " >
                <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6 mt-1 w-60">
                  <div className="image"
                    style={{ width: '100%', height: '100%' }}>
                    <div className="card bg-dark text-white"
                      style={{ width: '100%', height: '100%' }}>
                      <img
                        src="img/social10.jpg"
                        className="card-img "
                        alt="..."
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-5 col-lg-2"
                  style={{
                    marginLeft: "0",
                    backgroundColor: "white",
                    marginTop: "0"
                  }}>
                <h2 className="fw-bold mb-2 text-uppercase text-center mt-2"
                    style={{ fontStyle: "italic" }}>
                    Login</h2>
                  <p className="text-dark-50 mb-3">
                    Please enter your login and password!</p>
                  <form action="/">
                    <div className=" form-gruop form-outline form-dark mb-0">
                      <input type="email"
                        name="email"
                        id="email"
                        className="form-control form-control-lg"
                        autoComplete='off'
                        placeholder="Email"
                        required
                      />
                      <label className="form-label" htmlFor="email-id"></label>
                    </div>
                    <div className="form-group form-outline form-dark mb-0">
                      <input type="password"
                        name="passward"
                        id="passward"
                        className="form-control form-control-lg"
                        autoComplete='off'
                        placeholder="Password" required />
                      <label className="form-label" htmlFor="pass"></label>
                    </div>

                    <div className="d-flex justify-content-around align-items-center mb-4">
                      <div className="form-check text-dark">
                        <input className="form-check-input"
                          type="checkbox" value=""
                          id="form1Example3" />
                        <label className="form-check-label"
                          htmlFor="form1Example3"> Remember me </label>
                      </div>
                      <a href="/">Forgot password?</a>
                    </div>
                    <div className="text-center"
                      style={{ width: '100%' }}>
                      <a href="/">   <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                        style={{ width: '100%' }}>
                        Sign in
                      </button></a>
                    </div>
                  </form>
                  <div className='row'>
                    <div className='col-5 w-75% text-dark h-2'>
                      <hr />
                    </div>
                    <div className=" col-2 divider d-flex justify-content-center align-items-center my-2">
                      <p className="text-center fw-bold mx-3 mb-0 ">OR</p>
                    </div>
                    <div className='col-5 w-75% text-dark h-2'>
                      <hr />
                    </div>
                  </div>
                  <div className='facebook'>
                    <a className="btn btn-primary btn-lg btn-block"
                      style={{
                        backgroundColor: "#3b5998",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }} href="#"
                      role="button">
                      <div className="google-auth" onClick={withFacebook}>
                        <img src="img/facebooklogo.png" alt="facebook" width="30px" />
                        <span style={{ marginLeft: "1px" }}>
                          Continue with Facebook </span></div> </a>
                    <a className="btn btn-primary btn-lg btn-block"
                      style={{
                        backgroundColor: "#55acee",
                        marginTop: "2%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "3%"
                      }} href="#"
                      role="button">
                      <div className="google-auth" onClick={withGoogle}>
                        <img src="img/google.png" alt="googleEmpty" width="30px" />
                        <span style={{ marginLeft: "1px", }}>
                          Continue with Google</span></div> </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
      {
        isUserLogin && (
          <>
            <div className="card text-center
             d-flex align-items-center 
             justify-contain-center" 
             style={{ height: "50%",backgroundColor:"grey" }} >
              <div className="card"
               style={{ width: "30rem", 
               height: "32rem" }}>
                <div style={{ textAlign: "center", 
                display: "flex", alignItems: "center",
                 justifyContent: "center", marginTop: '6%' }}>
                  <img src={user.photoURL} 
                  className="card-img-top" alt="..." 
                  style={{ borderRadius: "50%"
                  ,width:"180px",
                  height:"180px" }} />
                </div>
                <div className="card-body mt-5">
                  <h3 className="card-title">userName: {user.displayName}</h3>
                  <h3 className='card-title mt-2'>Email: {user.email}</h3>
                  <button type="button" class="btn btn-danger mt-5 mb-4" onClick={logOut} >Log Out</button>
                </div>
              </div> </div>
          </>
        )
      }
    </>
  )
}