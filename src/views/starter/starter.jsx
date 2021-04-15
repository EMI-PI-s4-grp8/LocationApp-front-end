import React, { useState, useEffect } from 'react';
import axios from "axios";
import LogementRow from '../../components/LogementRow/LogementRow';
import links from '../ui-components/Links4Axios/Links';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import FormEditLog from '../../components/FormEditLog/FormEditLog';

function Starter() {

    const deleteLogement = () => {
        alert("do you want really to delete it ??");
        axios.delete(`https://logement-app-api.herokuapp.com/logement/${id}`)
        .then(d => {
     
    }).catch(err => alert(err))
        console.log("teesst");

    }
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

    return (
        <div>
            <Router>
                {/* //for the elements that will be shown selon les paths */}
                <Switch>
                    <Route exact path="/">
                        <LogementRow stateLogement={stateLogement} deleteLogement={deleteLogement} />
                    </Route>
                    <Route exact path="/starter/starter/edit/:id" render={props => <FormEditLog />}>
                       
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Starter;