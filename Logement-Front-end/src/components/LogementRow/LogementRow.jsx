import React from 'react'

function LogementRow(props) {
    return   props.stateLogement.map(d => (
        <tr key={d.id}>
     <th scope="row">{d.id}</th>
          <td>{d.intitule}</td>
          <td>{d.description}</td>
          <td>{d.prix}</td>
          <td>{d.image}</td>
    <td><button type="button" className="btn btn-outline-primary">Modifier</button></td>
        <td><button type="button" className="btn btn-outline-danger">Supprimer</button></td>
        </tr>
    ))
    
}

export default LogementRow;
