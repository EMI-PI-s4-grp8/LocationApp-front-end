import React, { useState, useEffect } from 'react';
import axios from "axios";
import LogementRow from '../../components/LogementRow/LogementRow';
import links from '../ui-components/Links4Axios/Links';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import FormEditLog from '../../components/FormEditLog/FormEditLog';

function Starter() {

    const deleteLogement = (id) => {
        alert("do you want really to delete it ??");
        axios.delete(`${links[0].linkPost+id}`)
        .then(d => {
     console.log(d);
     window.location.reload(false);
    })
    .catch(err => alert(err))}

    const [stateLogement, setLogement] = useState([])

    useEffect(() => {
        getLogement();
    }, []);

    const getLogement = () => {
        axios
            .get(links[0].linkGet)
            .then(data => {
                console.log(data.data);
                setLogement(data.data);
            })
            .catch(err => alert(err));
    };


    const deleteLogementsByIds = () => {
        alert("do you want really to delete all those elements ??");
        let arrayids = [];
        stateLogement.forEach(d => {
          if (d.select) {
            arrayids.push(d.id);
          }
        });
        console.log(arrayids);
        axios
          .delete(`${links[0].linkGet+arrayids}`)
          .then(data => {
            console.log(data);
            getLogement();
          })
          .catch(err => alert(err));
      };

    return (
        <div>
            <Router>
                {/* //for the elements that will be shown selon les paths */}
                <Switch>
                    <Route exact path="/">
                    <div>
                    <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          deleteLogementsByIds();
        }}
      >
        Delete ALL Customer
      </button>
            <table className="table">
                <thead>
                    <tr>
                    <th>
              <input
            //  value={stateLogement.id  || ''}  htmlFor=""
                type="checkbox"
                onChange={e => {
                  let value = e.target.checked;
                  setLogement(
                    stateLogement.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              />
            </th>
                        <th scope="col">intitule</th>
                        <th scope="col">description</th>
                        <th scope="col">adress</th>
                        <th scope="col">prix</th>
                        <th scope="col">capacite</th>
                        <th scope="col">image</th>
                    </tr>
                </thead>
                <tbody>
                        <LogementRow stateLogement={stateLogement} setLogement={setLogement} deleteLogement={deleteLogement} />

                        </tbody>
            </table>
        </div>
                    </Route>
                    <Route exact path="/starter/starter/edit/:id" render={props => <FormEditLog />}>
                       
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Starter;