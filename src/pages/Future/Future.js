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
import { useParams, withRouter } from "react-router-dom";
import PropTypes from "prop-types"
import { addFuture, getFutureInfo, updateFuture } from "store/actions";
import { connect } from "react-redux";

const Future = (props)=>{
    const {futureinfo,onGetFutureInfo,error} = props
    const [futureList,setFutureList] = useState({})
    const [isEdit,setIsEdit] = useState(false)
    const useparams = useParams()
    console.log(error)

    useEffect(()=>{
        if(useparams.id){
            onGetFutureInfo(useparams.id)
            setIsEdit(true)
        }else{
            setIsEdit(false)
            setFutureList("")
        }
    },[onGetFutureInfo])

    useEffect(()=>{
        if(useparams.id){
            setFutureList({
                years_of_experience:futureinfo.years_of_experience,
                websites_delivered:futureinfo.websites_delivered,
                countries_served:futureinfo.countries_served,
                satisfied_clients:futureinfo.satisfied_clients
            })
        }
    },[futureinfo])

    const handleValidFutureSubmit = (e,values) =>{
        const {onAddFuture,onUpdateFuture} = props
        if(isEdit){
            const updateFuture = {
                id:futureinfo._id,
                years_of_experience:values.years_of_experience,
                websites_delivered:values.websites_delivered,
                countries_served:values.countries_served,
                satisfied_clients:values.countries_served
            }
            onUpdateFuture(updateFuture)
            setIsEdit(false)
            
        }else{
            const newFuture = {
                years_of_experience:values["years_of_experience"],
                websites_delivered:values["websites_delivered"],
                countries_served:values["countries_served"],
                satisfied_clients:values["satisfied_clients"]
            }
            onAddFuture(newFuture)
            setIsEdit(false)
        }
    }
    
    return(
        <React.Fragment>
            <div className="page-content">
            <MetaTags>
                <title>Future Table | Skote - React Admin & Dashboard Template</title>
            </MetaTags>
            <Container fluid={true}>
            <Breadcrumbs title="Form" breadcrumbItem="Future" />
                <Row className="justify-content-md-center">
                    <Col xl="6">
                    <Card>
                        <CardBody>
                        <h4 className="card-title">Add Future</h4>
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
                        <AvForm className="needs-validation" onValidSubmit={handleValidFutureSubmit} >
                            <Row>
                            <Col md="6" >
                                <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom01">
                                    Years of experience
                                    </Label>
                                <AvField
                                    name="years_of_experience"
                                    placeholder="Years of experience"
                                    type="text"
                                    errorMessage="Enter Years of experience"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom01"
                                    value={futureList.years_of_experience || ""}
                                />
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom02">
                                    Websites delivered
                                    </Label>
                                <AvField
                                    name="websites_delivered"
                                    placeholder="Websites delivered"
                                    type="text"
                                    errorMessage="Enter Websites delivered"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom02"
                                    value={futureList.websites_delivered || ""}
                                />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Col md="6" >
                                <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom01">
                                    Countries served
                                    </Label>
                                <AvField
                                    name="countries_served"
                                    placeholder="Countries served"
                                    type="text"
                                    errorMessage="Enter Countries served"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom01"
                                    value={futureList.countries_served || ""}
                                />
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom02">
                                    Satisfied clients
                                    </Label>
                                <AvField
                                    name="satisfied_clients"
                                    placeholder="Satisfied clients"
                                    type="text"
                                    errorMessage="Enter Satisfied clients"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom02"
                                    value={futureList.satisfied_clients || ""}
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
                            {/* <Row>
                            <Col lg="12">
                                <FormGroup className="mb-3">
                                <div className="form-check">
                                    <Input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="invalidCheck"
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
                            </Row> */}
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

Future.propTypes = {
    futureinfo:PropTypes.object,
    error:PropTypes.array,
    onAddFuture: PropTypes.func,
    onUpdateFuture: PropTypes.func,
    onGetFutureInfo:PropTypes.func,
}

const mapStateToProps = ({futures}) => ({
    futureinfo: futures.futureinfo,
    error: futures.error
})

const mapDispatchToProps = dispatch => ({
    onAddFuture: futureinfo => dispatch(addFuture(futureinfo)),
    onUpdateFuture: futureinfo => dispatch(updateFuture(futureinfo)),
    onGetFutureInfo: id => dispatch(getFutureInfo(id))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Future))