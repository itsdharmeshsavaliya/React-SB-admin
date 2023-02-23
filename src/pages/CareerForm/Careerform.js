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
import PropTypes from 'prop-types'
import { addCareerForm, getCareerFormInfo, updateCareerForm } from "store/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
// import { isEmpty } from "lodash";
 
const Careerform = props =>{
    const {careerforminfo,onGetCareerFormInfo,error} = props
    const [careerformList,setCareerformList] = useState({})
    const [isEdit,setIsEdit] = useState(false)
    const [inputList,setInputList] = useState([""]);
    // console.log(careerforminfo.points)

    const useparams = useParams();

    // useEffect(()=>{
    //     if(!useparams.id){
    //         console.log("here")
    //         // console.log(careerforminfo)
    //         setCareerformList("")
    //         setInputList([""])
    //     }
    // },[])
    
// useEffect(()=>{
//     if(isEmpty(careerforminfo)){
//         console.log("here1")
//         // setCareerformList(careerforminfo)
//     }else{
//         setInputList(careerforminfo.points)
//         setCareerformList({
//             category:careerforminfo.category
//         })
//     }
// },[careerforminfo,inputList])

useEffect(()=>{    
    if(useparams.id){
        onGetCareerFormInfo(useparams.id)
        setIsEdit(true)        
    }else{
        setIsEdit(false)
        setCareerformList("")
        setInputList([""])
    }
},[onGetCareerFormInfo])

useEffect(()=>{
    if(useparams.id){
        setInputList(careerforminfo.points)
        setCareerformList({
            category:careerforminfo.category
        })
    }
},[careerforminfo])

const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index]= value;
    setInputList(list);
  };

  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList,""]);
  };

    const handleValidCareerFormSubmit = (e,values) =>{
        const {onAddCareerForm,onUpdateCareerForm} = props
        if(isEdit){
            const updateCareerForm = {
                id:careerforminfo._id,
                category:values.category,
                points:inputList
            }
            onUpdateCareerForm(updateCareerForm)
            setIsEdit(false)
        }else{
            const newCareerform = {
                category:values["category"],
                points:inputList
            }
            onAddCareerForm(newCareerform)
            setIsEdit(false)
        } 
    }

    return(
        <React.Fragment>
            <div className="page-content">
            <MetaTags>
                <title>Careerform | Skote - React Admin & Dashboard Template</title>
            </MetaTags>
            <Container fluid={true}>
            <Breadcrumbs title="Form" breadcrumbItem="Career Form" />
                <Row className="justify-content-md-center">
                    <Col xl="6">
                    <Card>
                        <CardBody>
                        <h4 className="card-title">Add Career Form</h4>
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
                        <AvForm className="needs-validation" onValidSubmit={handleValidCareerFormSubmit} >
                            <Row>
                            <Col md="12" >
                                <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom01">
                                    Category
                                    </Label>
                                <AvField
                                    name="category"
                                    placeholder="Category"
                                    type="text"
                                    errorMessage="Enter Category"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom01"
                                    value={careerformList.category || ""}
                                />
                                </FormGroup>
                            </Col>
                            <Col md="12">
                                <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom02">
                                    Points
                                    </Label>
                                    {inputList && inputList.map((x,i)=>{
                                        return(
                                            <>
                                            <AvField
                                                name="points"
                                                placeholder="Points"
                                                type="textarea"
                                                errorMessage="Enter Points"
                                                className="form-control"
                                                validate={{ required: { value: true } }}
                                                id="validationCustom02"
                                                value={careerformList.points || x}
                                                onChange={e => handleInputChange(e, i)}
                                            />
                                            {inputList.length !== 1 && <Button color="primary" onClick={() => handleRemoveClick(i)}>Delete</Button>}
                                            {inputList.length - 1 === i && <Button color="primary" onClick={handleAddClick}>Add</Button>}
                                            </>
                                        )
                                    })}
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

Careerform.propTypes = {
    careerforminfo:PropTypes.object,
    error:PropTypes.array,
    onAddCareerForm:PropTypes.func,
    onUpdateCareerForm:PropTypes.func,
    onGetCareerFormInfo:PropTypes.func
}

const mapStateToProps = ({careerforms}) => ({
    careerforminfo:careerforms.careerforminfo,
    error:careerforms.error
})

const mapDispatchToProps = dispatch => ({
    onAddCareerForm : careerforminfo => dispatch(addCareerForm(careerforminfo)),
    onUpdateCareerForm: careerforminfo => dispatch(updateCareerForm(careerforminfo)),
    onGetCareerFormInfo: id => dispatch(getCareerFormInfo(id))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Careerform))