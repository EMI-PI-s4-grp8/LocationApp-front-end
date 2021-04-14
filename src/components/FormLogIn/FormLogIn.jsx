import React from 'react'

function FormLogIn() {
    return (
        <div>
        <h1>connexion page</h1>
   
   <div className="container">
   <br /> 
   <hr />
   
   <div className="card bg-light">
   <article className="card-body mx-auto" style={{maxWidth: "400px"}} >
       <h4 className="card-title mt-3 text-center">Log in to your Account</h4>
   
       <p>
           <a href="" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i>   Login via facebook</a>
       </p>
       <p className="divider-text">
           <span className="bg-light">OR</span>
       </p>
       <form>
       <div className="form-group input-group">
           <div className="input-group-prepend">
               <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
            </div>
           <input name="" className="form-control" placeholder="Email address" type="email" />
       </div> 
       
       <div className="form-group input-group">
           <div className="input-group-prepend">
               <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
           </div>
           <input className="form-control" placeholder="Create password" type="password" />
       </div> 
                                    
       <div className="form-group">
           <button type="submit" className="btn btn-primary btn-block"> Log In </button>
       </div>    
       <p className="text-center">You dont't Have an account? <a href="./LogIn#/ui-components/RegisterPage">Register Now</a> </p>                                                                 
   </form>
   </article>
   </div> 
   
   </div> 
   
   
   <br></br>
   
   <br></br>
   
        </div>
    )
}

export default FormLogIn;
