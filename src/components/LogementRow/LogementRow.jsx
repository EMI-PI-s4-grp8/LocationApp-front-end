import React from 'react'
import { Link } from 'react-router-dom';

function LogementRow(props) {


    return props.stateLogement.map(d => (
        <tr key={d.id}>
            {/* <th scope="row"><input type="checkbox" /></th> */}
            <td>
            
                <input
                // value={props.stateLogement.id  || ''} htmlFor=""
          type="checkbox"
          checked={d.select}
          onChange={e => {
            let value = e.target.checked;
            props.setLogement(
              props.stateLogement.map(sd => {
                if (sd.id === d.id) {
                  sd.select = value;
                }
                return sd;
              })
            );
          }}
        />
            </td>
            <td>{d.intitule}</td>
            <td>{d.description}</td>
            <td>{d.adress}</td>
            <td>{d.prix}</td>
            <td>{d.capacite}</td>
            <td>{d.image}</td>
            <td>
                <Link to={`/starter/starter/edit/${d.id}`}>
                    <button type="button" className="btn btn-outline-primary">Modifier</button>
                </Link>
            </td>
            <td>
                {/* <Link to={`/starter/starter/delete/${d.id}`}> */}
                <button type="button" className="btn btn-outline-danger" onClick={e => {
                    props.deleteLogement(d.id);
                }}>
                    Supprimer
                                    </button>
                {/* </Link> */}
            </td>
        </tr>
    )
    );



}

export default LogementRow;
