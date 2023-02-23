import React, { useState } from "react"
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
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useParams, withRouter } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { addTalentFaq, getTalentFaqInfo, updateTalentFaq } from "store/actions";
import { connect } from "react-redux";

const Talentfaq = (props)=>{
    const {talentfaqinfo,onGetTalentFaqInfo,error} = props
    const [talentfaqList,setTalentFaqList] = useState({})
    const [isEdit,setIsEdit] = useState(false)
    const useparams = useParams()

    useEffect(()=>{
        if(useparams.id){
            onGetTalentFaqInfo(useparams.id)
            setIsEdit(true)
        }else{
            setIsEdit(false)
            setTalentFaqList("")
        }
    },[onGetTalentFaqInfo])

    useEffect(()=>{
        if(useparams.id){
            setTalentFaqList({
                title:talentfaqinfo.title,
                description:talentfaqinfo.description
            })
        }
    },[talentfaqinfo])

    const handleValidTalentFaqSubmit = (e,values) =>{
        const {onAddTalentFaq,onUpdateTalentFaq} = props
        if(isEdit){
            const updateTalentFaq = {
                id:talentfaqinfo._id,
                title:values.title,
                description:values.description
            }
            onUpdateTalentFaq(updateTalentFaq)
            console.log(talentfaqinfo)
            setIsEdit(false)
        }else{
            const newTalentFaq = {
                title:values["title"],
                description:values["description"]
            }
            onAddTalentFaq(newTalentFaq)
            console.log(onAddTalentFaq)
            setIsEdit(false)
        }
    }

    return(
        <React.Fragment>
            <div className="page-content">
            <MetaTags>
                <title>Telent faq | Skote - React Admin & Dashboard Template</title>
            </MetaTags>
            <Container fluid={true}>
            <Breadcrumbs title="Form" breadcrumbItem="Telent faq" />
                <Row className="justify-content-md-center">
                    <Col xl="6">
                    <Card>
                        <CardBody>
                        <h4 className="card-title">Add Telent faq</h4>
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
                        <AvForm className="needs-validation" onValidSubmit={handleValidTalentFaqSubmit} >
                            <Row>
                            <Col md="12" >
                                <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom01">
                                    Title
                                    </Label>
                                <AvField
                                    name="title"
                                    placeholder="title"
                                    type="text"
                                    errorMessage="Enter Title"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom01"
                                    value={talentfaqList.title || ""}
                                />
                                </FormGroup>
                            </Col>
                            <Col md="12">
                                <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom02">
                                    Description
                                    </Label>
                                <AvField
                                    name="description"
                                    placeholder="Description"
                                    type="textarea"
                                    errorMessage="Enter Description"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom02"
                                    value={talentfaqList.description || ""}
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
                                    Agree to terms and conditions
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

Talentfaq.proptypes = {
    talentfaqinfo:PropTypes.object,
    error:PropTypes.array,
    onAddTalentFaq:PropTypes.func,
    onUpdateTalentFaq:PropTypes.func,
    onGetTalentFaqInfo:PropTypes.func
}

const mapStateToProps = ({talentfaqs}) =>({
    talentfaqinfo:talentfaqs.talentfaqinfo,
    error:talentfaqs.error
})

const mapDispatchToProps = dispatch =>({
    onAddTalentFaq : talentfaqinfo => dispatch(addTalentFaq(talentfaqinfo)),
    onUpdateTalentFaq : talentfaqinfo => dispatch(updateTalentFaq(talentfaqinfo)),
    onGetTalentFaqInfo : id => dispatch(getTalentFaqInfo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Talentfaq))