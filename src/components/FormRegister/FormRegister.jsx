import React from 'react'

function FormRegister() {
    return (
        <div>
            <h1>
            Registration page
        </h1>



<div className="container">
<br /> 
<hr />





<div className="card bg-light">
<article className="card-body mx-auto" style={{maxWidth: "400px"}} >
	<h4 className="card-title mt-3 text-center">Create Account</h4>
	<p className="text-center">Get started with your free account</p>
	<p>
		<a href="" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i>   Login via facebook</a>
	</p>
	<p className="divider-text">
        <span className="bg-light">OR</span>
    </p>
	<form>
	<div className="form-group input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
		 </div>
        <input name="" className="form-control" placeholder="Full name" type="text" />
    </div>
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <input name="" className="form-control" placeholder="Email address" type="email" />
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
		</div>
		<select className="custom-select" style={{maxWidth: "120px"}}>
		    <option selected="">+212</option>
		    <option value="1">+972</option>
		    <option value="2">+198</option>
		    <option value="3">+701</option>
		</select>
    	<input name="" className="form-control" placeholder="Phone number" type="text"/>
    </div> 
    {/* <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-building"></i> </span>
		</div>
		<select className="form-control">
			<option selected=""> Select job type</option>
			<option>Designer</option>
			<option>Manager</option>
			<option>Accaunting</option>
		</select>
	</div>  */}
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" placeholder="Create password" type="password" />
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" placeholder="Repeat password" type="password" />
    </div>                                   
    <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
    </div>    
    <p className="text-center">Have an account? 	<a href="./LogIn#/ui-components/LogInPage">Log In</a>      </p>  
     {/* <Link to="./LogIn#/ui-components/LogInPage">Log In</Link>                                                         */}
</form>
</article>
</div> 

</div> 


<br></br>

<br></br>
        </div>
    )
}

export default FormRegister;
