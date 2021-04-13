import React from 'react'

function LogementRow(props) {
  

    return   props.stateLogement.map(d => (
        <tr key={d.id}>
        {/* <td> <input  type="checkbox" /></td> */}
     {/* <th scope="row">{d.id}<input  type="checkbox" /></th> */}
     <th scope="row"><input  type="checkbox" /></th>
          <td>{d.intitule}</td>
          <td>{d.description}</td>
          <td>{d.prix}</td>
          <td>{d.image}</td>
    <td><button type="button" className="btn btn-outline-primary">Modifier</button></td>
        <td><button type="button"  className="btn btn-outline-danger" onClick={e =>{
         props.deleteLogement();}}
        
        >Supprimer</button></td>
        </tr>
    ))
    
}

export default LogementRow;
