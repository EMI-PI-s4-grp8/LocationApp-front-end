import React from 'react';
import { Badge, Button, Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

const Badges = () => {
    return (
        <div>
            <h1>connexion page</h1>
            <form>
                <label>
                    Nom :
    <input type="text" name="name" />
                </label>
                <br></br>
                <label>
                    password :
    <input type="password" name="paasword" />
                </label>
                <br></br>
                <input type="submit" value="Envoyer" />
            </form>

        </div>
    );
}

export default Badges;
