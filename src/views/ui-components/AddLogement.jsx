import React, { useState } from 'react';
import axios from "axios";
import "./RegisterForm.css"
import links from './Links4Axios/Links';
import FormAddLog from '../../components/FormAddLog/FormAddLog';
import { withRouter } from "react-router-dom";
function EditLogement() {
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
  //  browserHistory.push('/');
   // props.history.push("/");
  

    };

const postLogement = data => {
    axios
    .post(links[0].linkPost,data)
    .then(d => {
        console.log(d);
 alert("Logement Added !")

    })
    .catch(err => alert(err));
};
    return (
      <div>

<FormAddLog submit={submit} />

      </div>

    )
}

export default withRouter(EditLogement);


