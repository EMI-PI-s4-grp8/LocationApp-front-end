import React from 'react'
import { withRouter } from 'react-router';

function FormAddLog(props) {
    return (
        <div>
            <div className="d-flex justify-content-center">
            
            <div className="row col-lg-4 col-lg-offset-4" style={{

   marginTop: "40px",
   backgroundColor: "#fff",
   padding:"20px",
   border: "solid 1px #ddd"
            }}>
			  
              <h3 className="form-signin-heading">Ajouter une annonce de logement</h3>
     <div className="panel-body">
       <form  onSubmit={
           (e) => {
               e.preventDefault();
               props.submit(e);
             //  props.history.push("/");


           }
       } >
         <div className="form-group">
           <label className="control-label">intitule du logement:</label>
           <input className="form-control" type="text" name="intitule"
           />
           <span className="text-danger" ></span>
           
         </div>
         <div className="form-group">
           <label className="control-label">prix:</label>
           <input className="form-control" type="text" name="prix"
            />
           <span className="text-danger" ></span>
           
         </div>
         <div className="form-group">
           <label className="control-label">description:</label>
           <input className="form-control" type="text" name="description"
           />
           <span className="text-danger" ></span>
         </div>
         
         <div className="form-group">
           <label className="control-label">adresse:</label>
           <input className="form-control" type="text" name="adresse"
           />
           <span className="text-danger" ></span>
         </div>
         <div className="form-group">
           <label className="control-label">capacité:</label>
           <input className="form-control" type="text" name="capacite"
           />
           <span className="text-danger" ></span>
         </div>
         <div className="form-group">
           <label className="control-label">image:</label>
           <input className="form-control" type="file" name="picture"
           />
           <span className="text-danger" ></span>
           
         </div>
         <div>
           <button type="submit"  className="btn btn-primary">Save</button>
         </div>
       </form>
     </div>
   </div>
        </div>


        </div>
    )
}

export default withRouter( FormAddLog) ;
