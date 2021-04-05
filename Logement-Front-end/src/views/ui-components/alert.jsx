import React, { useState } from 'react';
import axios from "axios";
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';



const Alerts = () => {
    // For Dismiss Button with Alert
    const [visible, setVisible] = useState(true);
axios.get("http://localhost:8088/index1")
.then(Response => console.log(Response.data))
    const onDismiss = () => {
        setVisible(false);
    }

    return (
        <div>
        <p>

        
            Alert Page
        </p>
        </div>
    );
}

export default Alerts;
