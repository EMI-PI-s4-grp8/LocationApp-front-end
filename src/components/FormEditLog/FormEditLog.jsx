import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import axios from "axios"
import links from '../../views/ui-components/Links4Axios/Links';
function FormEditLog(props) {
  const [stateLogement, setstateLogement] = useState({});

  useEffect(() => {
    //console.log(props.match.params);
    let id = props.match.params.id;
    getLogementById(id);
    console.log(links[0].linkPost+id);
  }, [])


  const getLogementById = (id) => {
    axios.get(`${links[0].linkPost+id}`).then(d => {
      //console.log(data);
      let logement = d.data;
      //setstateLogement(logement);
      setstateLogement({
        id: logement.id,
        intitule: logement.intitule,
        description: logement.description,
        prix: logement.prix,
        adress: logement.adress,
        capacite: logement.capacite,
        image: logement.image

      })


    }).catch(err => alert(err))
  }

  const putLogement = () => {
    axios.put(`${links[0].linkPost+stateLogement.id}`, stateLogement).then(d => {
     console.log(d);
     props.history.push("/");
  //    console.log(stateLogement.id);
    }).catch(err => alert(err))
  }
  return (
    <div>
      <div className="d-flex justify-content-center">

        <div className="row col-lg-4 col-lg-offset-4" style={{

          marginTop: "40px",
          backgroundColor: "#fff",
          padding: "20px",
          border: "solid 1px #ddd"
        }}>

          <h3 className="form-signin-heading">Modifier une annonce de logement</h3>
          <div className="panel-body">
            <form onSubmit={
              (e) => {
                e.preventDefault();
                putLogement();
              }
            } >
              <div className="form-group">
                <label className="control-label">intitule du logement:</label>
                <input 
                  onChange={(e) => {
                    let value = e.target.value;
                    setstateLogement({
                      prix: stateLogement.prix,
                      id: stateLogement.id,
                      intitule: value,
                      description: stateLogement.description,
                      adress: stateLogement.adress,
                      capacite: stateLogement.capacite,
                      image: stateLogement.image
                    });
                  }}
                  value={stateLogement.intitule || ''}
                  className="form-control" type="text" name="intitule"
                />
                <span className="text-danger" ></span>

              </div>
              <div className="form-group">
                <label className="control-label">prix:</label>
                <input
                  onChange={(e) => {
                    let value = e.target.value;
                    setstateLogement({
                      prix: value,
                      id: stateLogement.id,
                      intitule: stateLogement.intitule,
                      description: stateLogement.description,
                      adress: stateLogement.adress,
                      capacite: stateLogement.capacite,
                      image: stateLogement.image
                    });
                  }}
                  value={stateLogement.prix || ''} className="form-control" type="text" name="prix"
                />
                <span className="text-danger" ></span>

              </div>
              <div className="form-group">
                <label className="control-label">description:</label>
                <input
                  onChange={(e) => {
                    let value = e.target.value;
                    setstateLogement({
                      description: value,
                      id: stateLogement.id,
                      intitule: stateLogement.intitule,
                      prix: stateLogement.prix,
                      adress: stateLogement.adress,
                      capacite: stateLogement.capacite,
                      image: stateLogement.image
                    });
                  }}
                  value={stateLogement.description  || ''} className="form-control" type="text" name="description"
                />
                <span className="text-danger" ></span>
              </div>

              <div className="form-group">
                <label className="control-label">adresse:</label>
                <input
                  onChange={(e) => {
                    let value = e.target.value;
                    setstateLogement({
                      adress: value,
                      id: stateLogement.id,
                      intitule: stateLogement.intitule,
                      description: stateLogement.description,
                      prix: stateLogement.prix,
                      capacite: stateLogement.capacite,
                      image: stateLogement.image
                    });
                  }}
                  value={stateLogement.adress  || ''} className="form-control" type="text" name="adresse"
                />
                <span className="text-danger" ></span>
              </div>
              <div className="form-group">
                <label className="control-label">capacité:</label>
                <input
                  onChange={(e) => {
                    let value = e.target.value;
                    setstateLogement({
                      capacite: value,
                      id: stateLogement.id,
                      intitule: stateLogement.intitule,
                      description: stateLogement.description,
                      prix: stateLogement.prix,
                      adress: stateLogement.adress,
                      image: stateLogement.image
                    });
                  }}
                  value={stateLogement.capacite  || ''} className="form-control" type="text" name="capacite"
                />
                <span className="text-danger" ></span>
              </div>
              <div className="form-group">
                <label className="control-label">image:</label>
                <img alt={stateLogement.image } />
                <input
                  onChange={(e) => {
                    let value = e.target.value;
                  //  console.log(value);
                    setstateLogement({
                      image: value,
                      id: stateLogement.id,
                      intitule: stateLogement.intitule,
                      description: stateLogement.description,
                      prix: stateLogement.prix,
                      adress: stateLogement.adress,
                      capacite: stateLogement.capacite,
                      image: stateLogement.image
                    });
                  }}
                  className="form-control" type="file" name="picture"
                />
                <span className="text-danger" ></span>

              </div>
              <div>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(FormEditLog);
