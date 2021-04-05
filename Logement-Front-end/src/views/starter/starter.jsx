import React ,{useState,useEffect} from 'react';
import axios from "axios";
import {
    Row,
    Col
} from 'reactstrap';
import { SalesSummary, Projects, Feeds, SocialCards } from '../../components/dashboard-components';
import LogementRow from '../../components/LogementRow/LogementRow';

function Starter()  {
    const [stateLogement, setLogement] = useState([])
   
   
    useEffect(() => {

    getLogement();

   },[] );

   const getLogement = () =>{
       axios
       .get("http://localhost:8082/logements")
       .then(data=> {
           console.log(data.data);
           setLogement(data.data);
       })
        .catch(err => alert(err));
   };






    return (
        <div>
   {/* { console.log(stateLogement.[0])} */}

<table className="table"> 
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">intitule</th>
      <th scope="col">description</th>
      <th scope="col">prix</th>
      <th scope="col">image</th>
    </tr>
  </thead>
  <tbody>
  <LogementRow stateLogement={stateLogement} />

     
   
  </tbody>
</table>
            {/* <Row>
                <Col sm={6} lg={8}>
                    <SalesSummary />
                </Col>
                <Col sm={6} lg={4}>
                    <Feeds />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Projects />
                </Col>
            </Row>*/}



            {/* <SocialCards /> 
            <SocialCards />  */}
        </div>
    );
}

export default Starter;