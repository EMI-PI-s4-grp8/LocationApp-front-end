import React, { useState } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';
import { Badge, Button,  Row, Col } from 'reactstrap';
import {
    ButtonGroup,
} from 'reactstrap';
import {

    CardImg,
    CardImgOverlay,
    CardText,

    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,

} from 'reactstrap';

import { Container } from 'reactstrap';



import { Pagination,
PaginationItem,
PaginationLink } from 'reactstrap';

import {
    Popover,
    PopoverHeader,
    PopoverBody,
} from 'reactstrap';

import {
    Tooltip,
} from 'reactstrap';
import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';
import img4 from '../../assets/images/big/img4.jpg';
import img5 from '../../assets/images/big/img5.jpg';
import img6 from '../../assets/images/big/img6.jpg';
import img7 from '../../assets/images/background/img5.jpg';




const PopoverItem = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <span>
            <Button className="mr-1" color="secondary" id={`Popover-${props.id}`} onClick={toggle.bind(null)}>
                {props.item.text}
            </Button>
            <Popover placement={props.item.placement} isOpen={popoverOpen} target={`Popover-${props.id}`} toggle={toggle.bind(null)}>
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
            </Popover>
        </span>
    );
}

const TooltipItem = props => {
    const { item, id } = props;
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <span>
            <Button className="mr-1" color="secondary" id={"Tooltip-" + id}>
                {item.text}
            </Button>
            <Tooltip
                placement={item.placement}
                isOpen={tooltipOpen}
                target={"Tooltip-" + id}
                toggle={toggle}
            >
                Tooltip Content!
      </Tooltip>
        </span>
    );
};


const BootstrapDocs = () => {
    // For Dismiss Button with Alert
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
    }

    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState(null);

    const onRadioBtnClick = (rSelected) => {
        setRSelected(rSelected);
    }

    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
            cSelected.push(selected);
        } else {
            cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    }

    const [popoverOpen, setPopoverOpen] = useState(false);


    const popovers = [
        {
            'placement': 'top',
            'text': 'Top'
        },
        {
            'placement': 'bottom',
            'text': 'Bottom'
        },
        {
            'placement': 'left',
            'text': 'Left'
        },
        {
            'placement': 'right',
            'text': 'Right'
        }
    ];





    return (
        <div>

        <h1>
            Alerts
        </h1>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* Card-1*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2"> </i>
            Alert
          </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                        <Alert color="primary">
                            This is a primary alert— check it out!
              </Alert>
                        <Alert color="secondary">
                            This is a secondary alert— check it out!
              </Alert>
                        <Alert color="success">
                            This is a success alert— check it out!
              </Alert>
                        <Alert color="danger">
                            This is a danger alert— check it out!
              </Alert>
                        <Alert color="warning">
                            This is a warning alert— check it out!
              </Alert>
                        <Alert color="info">This is a info alert— check it out!</Alert>
                        <Alert color="light">This is a light alert— check it out!</Alert>
                        <Alert color="dark">This is a dark alert</Alert>
                    </div>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-2*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
            Alert with Links
          </CardTitle>
                <CardBody className="">
                    <div>
                        <Alert color="primary">
                            This is a primary alert with
                <a href="/" className="alert-link">
                                an example link
                </a>
                . Give it a click if you like.
              </Alert>
                        <Alert color="secondary">
                            This is a secondary alert with
                <a href="/" className="alert-link">
                                an example link
                </a>
                . Give it a click if you like.
              </Alert>
                        <Alert color="success">
                            This is a success alert with
                <a href="/" className="alert-link">
                                an example link
                </a>
                . Give it a click if you like.
              </Alert>
                        <Alert color="danger">
                            This is a danger alert with
                <a href="/" className="alert-link">
                                an example link
                </a>
                . Give it a click if you like.
              </Alert>
                        <Alert color="warning">
                            This is a warning alert with
                <a href="/" className="alert-link">
                                an example link
                </a>
                . Give it a click if you like.
              </Alert>
                        <Alert color="info">
                            This is a info alert with
                <a href="/" className="alert-link">
                                an example link
                </a>
                . Give it a click if you like.
              </Alert>
                        <Alert color="light">
                            This is a light alert with
                <a href="/" className="alert-link">
                                an example link
                </a>
                . Give it a click if you like.
              </Alert>
                        <Alert color="dark">
                            This is a dark alert with
                <a href="/" className="alert-link">
                                an example link
                </a>
                . Give it a click if you like.
              </Alert>
                    </div>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-3*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
            Alert with Additional content
          </CardTitle>
                <CardBody className="">
                    <div>
                        <Alert color="success">
                            <h4 className="alert-heading">Well done!</h4>
                            <p>
                                Aww yeah, you successfully read this important alert message.
                                This example text is going to run a bit longer so that you can
                                see how spacing within an alert works with this kind of
                                content.
                </p>
                            <hr />
                            <p className="mb-0">
                                Whenever you need to, be sure to use margin utilities to keep
                                things nice and tidy.
                </p>
                        </Alert>
                    </div>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-4*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
            Alert with Dissmissing
          </CardTitle>
                <CardBody className="">
                    <div>
                        <Alert
                            color="info"
                            isOpen={visible}
                            toggle={onDismiss.bind(null)}
                        >
                            I am an alert and I can be dismissed!
              </Alert>
                    </div>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-5*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
            Alert with Uncontrolled [disable] Alerts
          </CardTitle>
                <CardBody className="">
                    <div>
                        <UncontrolledAlert color="info">
                            I am an alert and I can be dismissed!
              </UncontrolledAlert>
                    </div>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-6*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-comment-processing-outline mr-2" />
            Alerts without fade
          </CardTitle>
                <CardBody className="">
                    <div>
                        <Alert
                            color="primary"
                            isOpen={visible}
                            toggle={onDismiss.bind(null)}
                            fade={false}
                        >
                            I am a primary alert and I can be dismissed without animating!
              </Alert>
                        <UncontrolledAlert color="warning" fade={false}>
                            I am an alert and I can be dismissed without animating!
              </UncontrolledAlert>
                    </div>
                </CardBody>
            </Card>

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
     
            {/* --------------------------------------------------------------------------------*/}
     
   
   
   
   
   
   
   
   
   
   
   
   
   
   
     <br></br> 
 <h1>
     Textures
 </h1>
 










 {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col xs="12" md="12" sm="12">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-arrange-send-backward mr-2"> </i>
                            Badges
                        </CardTitle>
                        <CardBody className="">
                            <div>
                                <h1>
                                    Heading <Badge color="secondary">New</Badge>
                                </h1>
                                <h2>
                                    Heading <Badge color="secondary">New</Badge>
                                </h2>
                                <h3>
                                    Heading <Badge color="secondary">New</Badge>
                                </h3>
                                <h4>
                                    Heading <Badge color="secondary">New</Badge>
                                </h4>
                                <h5>
                                    Heading <Badge color="secondary">New</Badge>
                                </h5>
                                <h6>
                                    Heading <Badge color="secondary">New</Badge>
                                </h6>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="12" sm="12">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-2*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-arrange-send-backward mr-2"> </i>
                Badges with Button
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <Button color="primary" outline>
                                    Notifications <Badge color="secondary">1</Badge>
                                </Button>
                                <Button color="secondary" className="ml-3" outline>
                                    Notifications <Badge color="secondary">2</Badge>
                                </Button>
                                <Button color="info" className="ml-3" outline>
                                    Notifications <Badge color="secondary">3</Badge>
                                </Button>
                                <Button color="warning" className="ml-3" outline>
                                    Notifications <Badge color="secondary">4</Badge>
                                </Button>
                                <Button color="danger" className="ml-3" outline>
                                    Notifications <Badge color="secondary">5</Badge>
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-3*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-arrange-send-backward mr-2"> </i>
                Badges with Contextual variations
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <Badge color="primary">Primary</Badge>
                                <Badge color="secondary" className="ml-3">
                                    Secondary
                  </Badge>
                                <Badge color="success" className="ml-3">
                                    Success
                  </Badge>
                                <Badge color="danger" className="ml-3">
                                    Danger
                  </Badge>
                                <Badge color="warning" className="ml-3">
                                    Warning
                  </Badge>
                                <Badge color="info" className="ml-3">
                                    Info
                  </Badge>
                                <Badge color="light" className="ml-3">
                                    Light
                  </Badge>
                                <Badge color="dark" className="ml-3">
                                    Dark
                  </Badge>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-4*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-arrange-send-backward mr-2"> </i>
                Badges with Pills
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <Badge color="primary" pill>
                                    Primary
                  </Badge>
                                <Badge color="secondary" className="ml-3" pill>
                                    Secondary
                  </Badge>
                                <Badge color="success" className="ml-3" pill>
                                    Success
                  </Badge>
                                <Badge color="danger" className="ml-3" pill>
                                    Danger
                  </Badge>
                                <Badge color="warning" className="ml-3" pill>
                                    Warning
                  </Badge>
                                <Badge color="info" className="ml-3" pill>
                                    Info
                  </Badge>
                                <Badge color="light" className="ml-3" pill>
                                    Light
                  </Badge>
                                <Badge color="dark" className="ml-3" pill>
                                    Dark
                  </Badge>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-5*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-arrange-send-backward mr-2"> </i>
                Badges with Links
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <Badge href="" color="primary">
                                    Primary
                  </Badge>
                                <Badge href="" color="secondary" className="ml-3">
                                    Secondary
                  </Badge>
                                <Badge href="" color="success" className="ml-3">
                                    Success
                  </Badge>
                                <Badge href="" color="danger" className="ml-3">
                                    Danger
                  </Badge>
                                <Badge href="" color="warning" className="ml-3">
                                    Warning
                  </Badge>
                                <Badge href="" color="info" className="ml-3">
                                    Info
                  </Badge>
                                <Badge href="" color="light" className="ml-3">
                                    Light
                  </Badge>
                                <Badge href="" color="dark" className="ml-3">
                                    Dark
                  </Badge>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
     
     
     
     
     
     
     
     
     
     
     
     
     
     
       <br></br>
       <h1>
           Buttons
       </h1>









                   {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-toggle-switch mr-2"> </i>
                Buttons
              </CardTitle>
                        <CardBody className="">
                            <div className="button-group">
                                <Button className="btn" color="primary">
                                    primary
                  </Button>
                                <Button className="btn" color="secondary">
                                    secondary
                  </Button>
                                <Button className="btn" color="success">
                                    success
                  </Button>
                                <Button className="btn" color="info">
                                    info
                  </Button>
                                <Button className="btn" color="warning">
                                    warning
                  </Button>
                                <Button className="btn" color="danger">
                                    danger
                  </Button>
                                <Button className="btn" color="link">
                                    link
                  </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-2*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-toggle-switch mr-2"> </i>
                Outline Buttons
              </CardTitle>
                        <CardBody className="">
                            <div className="button-group">
                                <Button className="btn" outline color="primary">
                                    primary
                  </Button>
                                <Button className="btn" outline color="secondary">
                                    secondary
                  </Button>
                                <Button className="btn" outline color="success">
                                    success
                  </Button>
                                <Button className="btn" outline color="info">
                                    info
                  </Button>
                                <Button className="btn" outline color="warning">
                                    warning
                  </Button>
                                <Button className="btn" outline color="danger">
                                    danger
                  </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-3*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-toggle-switch mr-2"> </i>
                Large Size Buttons
              </CardTitle>
                        <CardBody className="">
                            <div className="button-group">
                                <Button className="btn" color="primary" size="lg">
                                    Large Button
                  </Button>
                                <Button className="btn" color="secondary" size="lg">
                                    Large Button
                  </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-4*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-toggle-switch mr-2"> </i>
                Small Size Buttons
              </CardTitle>
                        <CardBody className="">
                            <div className="button-group">
                                <Button className="btn" color="primary" size="sm">
                                    Small Button
                  </Button>
                                <Button className="btn" color="secondary" size="sm">
                                    Small Button
                  </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-6*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-toggle-switch mr-2"> </i>
                Active State Buttons
              </CardTitle>
                        <CardBody className="">
                            <div className="button-group">
                                <Button className="btn" color="primary" size="lg" active>
                                    Primary link
                  </Button>
                                <Button className="btn" color="secondary" size="lg" active>
                                    Link
                  </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-7*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-toggle-switch mr-2"> </i>
                Disabled State Buttons
              </CardTitle>
                        <CardBody className="">
                            <div className="button-group">
                                <Button className="btn" color="primary" size="lg" disabled>
                                    Primary button
                  </Button>
                                <Button className="btn" color="secondary" size="lg" disabled>
                                    Button
                  </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-5*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-toggle-switch mr-2"> </i>
                Block Buttons
              </CardTitle>
                        <CardBody className="">
                            <div className="button-group">
                                <Button className="btn" color="primary" size="lg" block>
                                    Block level button
                  </Button>
                                <Button className="btn" color="secondary" size="lg" block>
                                    Block level button
                  </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-6*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-toggle-switch mr-2"> </i>
                Checkbox(Stateful Buttons)
              </CardTitle>
                        <CardBody className="">
                            <h5>Checkbox Buttons</h5>
                            <ButtonGroup>
                                <Button
                                    color="primary"
                                    onClick={() => onCheckboxBtnClick(1)}
                                    active={cSelected.includes(1)}
                                >
                                    One
                  </Button>
                                <Button
                                    color="primary"
                                    onClick={() => onCheckboxBtnClick(2)}
                                    active={cSelected.includes(2)}
                                >
                                    Two
                  </Button>
                                <Button
                                    color="primary"
                                    onClick={() => onCheckboxBtnClick(3)}
                                    active={cSelected.includes(3)}
                                >
                                    Three
                  </Button>
                            </ButtonGroup>
                            <p className="mb-0">
                                Selected: {JSON.stringify(cSelected)}
                            </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-6*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-toggle-switch mr-2"> </i>
                Radio Buttons (Stateful Buttons)
              </CardTitle>
                        <CardBody className="">
                            <h5>Radio Buttons</h5>
                            <ButtonGroup>
                                <Button
                                    color="primary"
                                    onClick={() => onRadioBtnClick(1)}
                                    active={rSelected === 1}
                                >
                                    One
                  </Button>
                                <Button
                                    color="primary"
                                    onClick={() => onRadioBtnClick(2)}
                                    active={rSelected === 2}
                                >
                                    Two
                  </Button>
                                <Button
                                    color="primary"
                                    onClick={() => onRadioBtnClick(3)}
                                    active={rSelected === 3}
                                >
                                    Three
                  </Button>
                            </ButtonGroup>
                            <p className="mb-0">Selected: {rSelected}</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
  
  
  
  
  
  
  
  
  
  





  
   <br></br>
   <h1>Cards</h1>















 {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <h5 className="mb-3">Basic Cards</h5>
            <Row>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={img1} />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={img2} />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={img3} />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <h5 className="mb-3">Cards Content Types</h5>
            <Row>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                        </CardBody>
                        <img width="100%" src={img4} alt="" />
                        <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                            <CardLink href="#">Card Link</CardLink>
                            <CardLink href="#">Another Link</CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                        </CardBody>
                        <img width="100%" src={img5} alt="" />
                        <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                            <CardLink href="#">Card Link</CardLink>
                            <CardLink href="#">Another Link</CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                        </CardBody>
                        <img width="100%" src={img6} alt="" />
                        <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                            <CardLink href="#">Card Link</CardLink>
                            <CardLink href="#">Another Link</CardLink>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <h5 className="mb-3">Cards Sizing</h5>
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
            </Row>
            <h5 className="mb-3">Cards with Text alignment</h5>
            <Row>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body className="text-center">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body className="text-right">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
            </Row>
            <h5 className="mb-3">Cards with Header and Footer</h5>
            <Row>
                <Col sm="6">
                    <Card>
                        <CardHeader>Header</CardHeader>
                        <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </CardBody>
                        <CardFooter>Footer</CardFooter>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardHeader tag="h5">Featured</CardHeader>
                        <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </CardBody>
                        <CardFooter className="text-muted">Footer</CardFooter>
                    </Card>
                </Col>
            </Row>
            <h5 className="mb-3">Cards with Image Caption</h5>
            <Row>
                <Col sm="6">
                    <Card>
                        <CardImg top width="100%" src={img4} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardBody>
                        <CardImg bottom width="100%" src={img4} alt="Card image cap" />
                    </Card>
                </Col>
            </Row>
            <h5 className="mb-3">Cards Image with Overlay </h5>
            <Row>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card inverse>
                        <CardImg width="100%" src={img7} alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card inverse>
                        <CardImg width="100%" src={img7} alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardImgOverlay>
                    </Card>
                </Col>
            </Row>
            <h5 className="mb-3">Cards with Background Color</h5>
            <Row>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body inverse style={{
                        'backgroundColor': '#333',
                        'borderColor': '#333'
                    }}>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button className="bg-white text-dark">Button</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body inverse color="primary">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button className="bg-white text-dark">Button</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body inverse color="success">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button className="bg-white text-dark">Button</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body inverse color="info">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button className="bg-white text-dark">Button</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body inverse color="warning">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button className="bg-white text-dark">Button</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body inverse color="danger">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button className="bg-white text-dark">Button</Button>
                    </Card>
                </Col>
            </Row>
            <h5 className="mb-3">Cards with Borderline Color</h5>
            <Row>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body outline color="secondary" className="border">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="secondary">Button</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body outline color="primary" className="border">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="primary">Button</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body outline color="success" className="border">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="success">Button</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body outline color="info" className="border">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="info">Button</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body outline color="warning" className="border">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="warning">Button</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body outline color="danger" className="border">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="danger">Button</Button>
                    </Card>
                </Col>
            </Row>
            <h5 className="mb-3">Card Group</h5>
            <CardGroup>
                <Card>
                    <CardImg top width="100%" src={img4} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={img5} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={img6} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </CardGroup>
            <h5 className="mb-3">Card Deck</h5>
            <CardDeck>
                <Card>
                    <CardImg top width="100%" src={img1} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={img2} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src={img3} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </CardDeck>
            <h5 className="mb-3 mt-4">Card Columns</h5>
            <CardColumns>
                <Card>
                    <CardImg top width="100%" src={img1} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card body inverse color="primary">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="secondary">Button</Button>
                </Card>
                <Card>
                    <CardImg top width="100%" src={img7} alt="Card image cap" />
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card body inverse style={{
                    'backgroundColor': '#333',
                    'borderColor': '#333'
                }}>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                </Card>
                <Card>
                    <CardImg top width="100%" src={img1} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card body inverse color="primary">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="secondary">Button</Button>
                </Card>
            </CardColumns>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
     















     <br>
        

     </br>
<h1>Layoutes</h1>














 {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-apps mr-2"> </i>
            Grid Layout
          </CardTitle>
                <CardBody className="">
                    <Container>
                        <Row>
                            <Col>
                                <div className="bg-light p-2 border">.col</div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <div className="bg-light p-2 border">.col</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">.col</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">.col</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">.col</div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs="3">
                                <div className="bg-light p-2 border">.col-3</div>
                            </Col>
                            <Col xs="auto">
                                <div className="bg-light p-2 border">
                                    .col-auto - variable width content
                  </div>
                            </Col>
                            <Col xs="3">
                                <div className="bg-light p-2 border">.col-3</div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs="6">
                                <div className="bg-light p-2 border">.col-6</div>
                            </Col>
                            <Col xs="6">
                                <div className="bg-light p-2 border">.col-6</div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs="6" sm="4">
                                <div className="bg-light p-2 border">.col-6 .col-sm-4</div>
                            </Col>
                            <Col xs="6" sm="4">
                                <div className="bg-light p-2 border">.col-6 .col-sm-4</div>
                            </Col>
                            <Col sm="4">
                                <div className="bg-light p-2 border">.col-sm-4</div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm={{
                                'offset': 1,
                                'order': 2,
                                'size': 6
                            }}>
                                <div className="bg-light p-2 border">
                                    .col-sm-6 .col-sm-order-2 .col-sm-offset-2
                  </div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm="12" md={{
                                'offset': 2,
                                'size': 8
                            }}>
                                <div className="bg-light p-2 border">
                                    .col-sm-12 .col-md-6 .col-md-offset-3
                  </div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm={{
                                'offset': 1,
                                'size': 'auto'
                            }}>
                                <div className="bg-light p-2 border">
                                    .col-sm .col-sm-offset-1
                  </div>
                            </Col>
                            <Col sm={{
                                'offset': 1,
                                'size': 'auto'
                            }}>
                                <div className="bg-light p-2 border">
                                    .col-sm .col-sm-offset-1
                  </div>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}













<br></br>
   <h1>Pagination</h1>

















      {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col xs="12" md="6">
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-priority-high mr-2"> </i>
                Pagination
              </CardTitle>

                        <CardBody className="">
                            <Pagination aria-label="Page navigation example">
                                <PaginationItem>
                                    <PaginationLink previous href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">4</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">5</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink next href="#" />
                                </PaginationItem>
                            </Pagination>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-priority-high mr-2"> </i>
                Disabled and active states
              </CardTitle>

                        <CardBody className="">
                            <Pagination aria-label="Page navigation example">
                                <PaginationItem disabled>
                                    <PaginationLink previous href="#" />
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">4</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">5</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink next href="#" />
                                </PaginationItem>
                            </Pagination>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-priority-high mr-2"> </i>
                Sizing
              </CardTitle>

                        <CardBody className="">
                            <Pagination size="lg" aria-label="Page navigation example">
                                <PaginationItem>
                                    <PaginationLink previous href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink next href="#" />
                                </PaginationItem>
                            </Pagination>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-priority-high mr-2"> </i>
                Sizing
              </CardTitle>

                        <CardBody className="">
                            <Pagination size="sm" aria-label="Page navigation example">
                                <PaginationItem>
                                    <PaginationLink previous href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink next href="#" />
                                </PaginationItem>
                            </Pagination>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
   



















  <br></br>
   <h1>popover</h1>
  











        <Row>
            <Col xs="12" md="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-priority-high mr-2"> </i>
            Popovers
            </CardTitle>
                    <CardBody>
                        {popovers.map((popover, i) => <PopoverItem key={i} item={popover} id={i} />)}
                    </CardBody>
                </Card>
            </Col>
        </Row>
   


























   <br></br>
   <h1>tooltip (les petits indicateurs sur les btn) </h1>

















            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-image-filter-vintage mr-2"> </i>
                    Tooltip
                </CardTitle>
                <CardBody className="">
                    <>
                        {[
                            {
                                placement: "top",
                                text: "Top"
                            },
                            {
                                placement: "bottom",
                                text: "Bottom"
                            },
                            {
                                placement: "left",
                                text: "Left"
                            },
                            {
                                placement: "right",
                                text: "Right"
                            }
                        ].map((tooltip, i) => {
                            return <TooltipItem key={i} item={tooltip} id={i} />;
                        })}
                    </>
                </CardBody>
            </Card>
            {/* -------------------------------------------------------------------------------- */}
            {/* Row */}
            {/* -------------------------------------------------------------------------------- */}

        </div>
    );
}

export default BootstrapDocs;
 
 
 
 
 
 
