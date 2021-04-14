import React, { useState } from 'react';
import axios from "axios";
import "./RegisterForm.css"
import links from './Links4Axios/Links';
function AddLogement() {
//  // For Dismiss Button with Alert
//  const [visible, setVisible] = useState(true);
//  axios.get("http://localhost:8088/index1")
//  .then(Response => console.log(Response.data))
//      const onDismiss = () => {
//          setVisible(false);
//      }


    const submit = e =>{
        let intitule =  e.target[0].value;
        let prix =  e.target[1].value;
        let description =  e.target[2].value;
        let adress =  e.target[3].value;
        let capacite =  e.target[4].value;
        let image =  e.target[5].value;
   let data = {
       intitule,
       prix,
       description,
       adress,
       capacite,
       image
   };
   console.log(data);
        //we can add validation here
        // he used react rooter , roote ,Link .. https://www.youtube.com/watch?v=BM3xOXgxuk4&list=PLxnmNhAZjt7wHyMuaqkjXzKBBwAiCxIR7&index=14 
   // console.log(links[0].linkPost)
    postLogement(data);
    };

const postLogement = data => {
    axios
    .post(links[0].linkPost,data)
    .then(d => {
        console.log(d);
    })
    .catch(err => alert(err));
};
    return (
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
               submit(e);

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
    )
}

export default AddLogement;


