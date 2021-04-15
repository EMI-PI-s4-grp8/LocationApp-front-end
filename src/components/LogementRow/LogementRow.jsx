import React from 'react'
import { Link } from 'react-router-dom';

function LogementRow(props) {


    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        {/* <th><input type="checkbox" /> </th> */}
                        <th scope="col">intitule</th>
                        <th scope="col">description</th>
                        <th scope="col">adress</th>
                        <th scope="col">prix</th>
                        <th scope="col">capacite</th>
                        <th scope="col">image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.stateLogement.map(d => (
                            <tr key={d.id}>
                                {/* <th scope="row"><input type="checkbox" /></th> */}
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
                        ))}
                </tbody>
            </table>
        </div>
    );



}

export default LogementRow;
