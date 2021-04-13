//https://bootsnipp.com/tags/login/4
import React from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'reactstrap';

const Badges = () => {
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
    <p className="text-center">You dont't Have an account? <a href="./badge#/ui-components/button">Register Now</a> </p>                                                                 
</form>
</article>
</div> 

</div> 


<br></br>

<br></br>

     </div>
    






    );
}

export default Badges;
           

    
// <div>
// <h1>connexion page</h1>
// <form>
// <div className="mb-3">
// <label for="exampleInputEmail1" className="form-label">Email address</label>
// <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
// <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
// </div>
// <div className="mb-3">
// <label for="exampleInputPassword1" className="form-label">Password</label>
// <input type="password" className="form-control" id="exampleInputPassword1" />
// </div>
// <div className="mb-3 form-check">
// <input type="checkbox" className="form-check-input" id="exampleCheck1" />
// <label className="form-check-label" for="exampleCheck1">Check me out</label>
// </div>
// <button type="submit" className="btn btn-primary">Submit</button>
// </form>
// </div>