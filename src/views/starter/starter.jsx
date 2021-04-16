import React, { useState, useEffect } from 'react';
import axios from "axios";
import LogementRow from '../../components/LogementRow/LogementRow';
import links from '../ui-components/Links4Axios/Links';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import FormEditLog from '../../components/FormEditLog/FormEditLog';
import Spinner from '../../components/Spinner/Spinner';
import RatingApp from '../../components/RatingApp/RatingApp';

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


   
    //     const [ spinner, setSpinner ] = useState(true);
      
    //     // It will be executed before rendering
      
    //     useEffect(() => {
    //       setTimeout(() => setSpinner(false), 1000)
    //     }, []);
      
    //     // [] means like componentDidMount
    //   return !spinner && <div>aiojakam</div>


//I need to use a hook for managing the state of application 

//     const [isLoaded, setIsLoaded] = useState(true);

//   const handleIsLoadedToggle = () => {
//     setIsLoaded(currentIsLoaded => !currentIsLoaded)
//   };
         
    return (
        
         <div> 
         
         {/* {isLoaded &&      <Spinner />} */}
        <Spinner />
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
        Supprimer toutes les logements selectionnes
      </button>


      
{/*       
      <Link to={`/starter/starter/rate`}>
      <button
        className="btn btn-info btn-sm m-2"
        onClick={() => {
        }}
      >
      Evaluer Notre Application
      </button>    </Link>
                    <Route exact path="/starter/starter/rate" render={props => <RatingApp/>}>
                     <button
        className="btn btn-info btn-sm m-2"
        onClick={() => {
        }}
      >
      Evaluer Notre Application
      </button>  
                    </Route> */}
      
            <table className="table">
                <thead>
                    <tr>
                    <th>
              <input
              //I have a WARN here , where I check any checkbox , it works ,, but I didn't find the solution 
              //I had the same WARN in FormEdit , but I fix it by || ""
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
