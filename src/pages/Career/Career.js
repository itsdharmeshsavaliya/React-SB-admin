import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';

import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  CardSubtitle,
  Label,
  Input,
  Container,
  CustomInput,
  Alert,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import { addCareer, getCareerInfo, updateCareer } from "store/actions";
import { connect } from "react-redux";
import { withRouter , useHistory , useLocation, useParams} from "react-router-dom";

const Career = props =>{
    const {careerinfo,onGetCareerInfo,error} = props
    const [careerList,setCareerList] = useState({})
    const [isEdit,setIsEdit] = useState(false)

    const history = useHistory();
    const location = useLocation();
    const useparams = useParams();

    // console.log(useparams.id)
    console.log(location.pathname)
    
    useEffect(()=>{
        if(!useparams.id){
            setCareerList("")
        }
    })

    useEffect(()=>{
        if(isEmpty(careerinfo)){
            setCareerList(careerinfo)            
        }else{
            setCareerList({
                language_icon:careerinfo.language_icon,
                title:careerinfo.title,
                experience:careerinfo.experience,
                position:careerinfo.position,
                status:careerinfo.status
            })
        }
    },[careerinfo])

    
    useEffect(()=>{
        setIsEdit(false)
        if(useparams.id){
            onGetCareerInfo(useparams.id)
            console.log(onGetCareerInfo)  
            setIsEdit(true)   
        }
    },[onGetCareerInfo])

    const handleValidCareerSubmit = (e,values) =>{
        const {onAddCareer , onUpdateCareer} = props        
        if(isEdit){
            const updateCareer = {
                id:careerinfo._id,
                language_icon:values.language_icon,
                title:values.title,
                experience:values.experience,
                position:values.position,
                status:values.status
            }
            console.log("obj");
            console.log(updateCareer)
            onUpdateCareer(updateCareer)

            setIsEdit(false)
            // history.push('/career')
            
        }else {
            const newCareer = {
                language_icon:values["language_icon"],
                title: values["title"],
                experience: values["experience"],
                position: values["position"],
                status: values["status"]
            } 
            onAddCareer(newCareer)
            // history.push('/career')
            console.log(props.error.length)
            setIsEdit(false)
            // if(props.error.length === 0){
            //     history.push('/career')
            // }
        }
    }
    
    return(
        <React.Fragment>
            <div className="page-content">
            <MetaTags>
                <title>Career Table | Skote - React Admin & Dashboard Template</title>
            </MetaTags>
            <Container fluid={true}>
            <Breadcrumbs title="Form" breadcrumbItem="Career" />
                <Row className="justify-content-md-center">
                    <Col xl="6">
                        <Card>
                            <CardBody>
                                <h4 className="card-title">Add Career</h4>
                                    {error.length ?(<Alert color="danger">
                                        {error.map((value,pos)=>{
                                            return(<p key={pos}>{value}</p>) 
                                        })}
                                    </Alert>):null}
                                {/* <p className="card-title-desc">
                                    Provide valuable, actionable feedback to your users with
                                    HTML5 form validation–available in all our supported
                                    browsers.
                                </p> */}
                                <AvForm className="needs-validation" onValidSubmit={handleValidCareerSubmit} >
                                    <Row>
                                    <Col md="6" >
                                        <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom01">
                                            Language icon
                                            </Label>
                                        <AvField
                                            name="language_icon"
                                            placeholder="language_icon"
                                            type="text"
                                            errorMessage="Enter Language icon"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom01"
                                            value={careerList.language_icon || ""}
                                        />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom02">
                                            Title
                                            </Label>
                                        <AvField
                                            name="title"
                                            placeholder="Title"
                                            type="text"
                                            errorMessage="Enter Title"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom02"
                                            value={careerList.title || ""}
                                        />
                                        </FormGroup>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col md="6" >
                                        <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom01">
                                            Experience
                                            </Label>
                                        <AvField
                                            name="experience"
                                            placeholder="Experience"
                                            type="text"
                                            errorMessage="Enter Experience"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom01"
                                            value={careerList.experience || ""}
                                        />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom02">
                                            Position
                                            </Label>
                                        <AvField
                                            name="position"
                                            placeholder="Position"
                                            type="text"
                                            errorMessage="Enter Position"
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom02"
                                            value={careerList.position || ""}
                                        />
                                        </FormGroup>
                                    </Col>
                                    </Row>
                                    <Row>
                                    {/* <Col md="4">
                                        <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom03">Logo</Label>
                                        <AvField
                                            name="logo"
                                            placeholder="logo"
                                            type="file"
                                            errorMessage=" Please select Logo."
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom03"
                                        />
                                        </FormGroup>
                                    </Col> */}
                                    {/* <Col md="4">
                                        <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom04">State</Label>
                                        <AvField
                                            name="state"
                                            placeholder="State"
                                            type="text"
                                            errorMessage="Please provide a valid state."
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom04"
                                        />
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup className="mb-3">
                                        <Label htmlFor="validationCustom05">Zip</Label>
                                        <AvField
                                            name="zip"
                                            placeholder="Zip Code"
                                            type="text"
                                            errorMessage=" Please provide a valid zip."
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="validationCustom05"
                                        />
                                        </FormGroup>
                                    </Col> */}
                                    </Row>
                                    <Row>
                                    <Col lg="12">
                                        <FormGroup className="mb-3">
                                        <div className="form-check">
                                            
                                            <AvField
                                            name="status"
                                            type="checkbox"
                                            className="form-check-input"
                                            id="invalidCheck"
                                            // validate={{ required: { value: true } }}
                                            // id="validationCustom03"
                                            value={careerList.status || ""}
                                            />
                                            <Label
                                            className="form-check-label"
                                            htmlFor="invalidCheck"
                                            >{" "}
                                            is active?
                                            
                                        </Label>
                                        </div>
                                        </FormGroup>
                                    </Col>
                                    </Row>
                                    <Button color="primary" type="submit">
                                    Submit form
                                    </Button>
                                </AvForm>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}
Career.propTypes = {
    careerinfo:PropTypes.object,
    error:PropTypes.array,
    // id:PropTypes.array,
    onAddCareer:PropTypes.func,
    onUpdateCareer:PropTypes.func,
    onGetCareerInfo:PropTypes.func,
}

const mapStateToProps = ({careers}) =>({
    careerinfo:careers.careerinfo,
    error:careers.error
    // id:careers.id
})

const mapDispatchToProps = dispatch => ({
    onAddCareer: (careerinfo) => dispatch(addCareer(careerinfo)),
    onUpdateCareer: careerinfo => dispatch(updateCareer(careerinfo)),
    onGetCareerInfo: (id) => dispatch(getCareerInfo(id)),
    // onUpdateCareer: career => dispatch(updateCareer(career))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Career))

// export default Career