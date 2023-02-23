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
import { addTechnology, getTechnologyInfo, updateTechnology } from "store/actions";
import { connect } from "react-redux";
import { useParams, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Technology = (props) => {
      const { technologyinfo, onGetTechnologyInfo } = props
     console.log(props)
    const [technologyList,setTechnologyList] = useState({})
    const [isEdit,setIsEdit] = useState(false)
    const [imageList,setImageList] = useState()

    const useparams = useParams()

    // const handletechnologysubmit = (e,values)=>{
    //     const {onAddTechnology} = props

    //     const newTechnology = {
    //         title:values["title"],
    //         logo:values["logo"]
    //     }
    //     onAddTechnology(newTechnology)
    // }
    
    useEffect(()=>{
        if(useparams.id){
           onGetTechnologyInfo(useparams.id)
           setIsEdit(true) 
        }else{
            setTechnologyList("")
            setImageList("")
        }
    },[onGetTechnologyInfo])

    useEffect(()=>{
        if(useparams.id){
            setTechnologyList({
                title:technologyinfo.title,
                logo:technologyinfo.logo
            })
        }
    },[technologyinfo])

    // const imageFilehandler = (e) => {
    //     if (e.target.files.length !== 0) {
    //         setImageList((e.target.files[0]))
    //         console.log((e.target.files[0]))
    //       }
    // }

   const handletechnologySubmit = async (event,values)=>{
     const {onAddTechnology,onUpdateTechnology} = props
        if(isEdit){
            const updateTechnology = ({
                id:technologyinfo._id,
                title:values.title,
                logo:imageList
            })
            await onUpdateTechnology(updateTechnology)
            setIsEdit(false)
        }else{
            setIsEdit(true)
            let formData = new FormData();
            formData.append("title",values["title"]);
            formData.append("logo",imageList)
            // const newTechnology = {
            //     title: values["title"],
            //     logo: imageList
            //   }
              console.log(formData)
              await onAddTechnology(formData)
              setIsEdit(false)        
        }   

    }

    const imageFilehandler = (e) => {
            setImageList(e.target.files[0])
            console.log(e.target.files[0])
    }

    return(
        <React.Fragment>
            <div className="page-content">
            <MetaTags>
                <title>Technology Table | Skote - React Admin & Dashboard Template</title>
            </MetaTags>
            <Container fluid={true}>
            <Breadcrumbs title="Form" breadcrumbItem="Technology" />
                <Row className="justify-content-md-center">
                    <Col xl="6">
                    <Card>
                        <CardBody>
                        <h4 className="card-title">Add Technology</h4>
                                    {/* {error.length ?(<Alert color="danger">
                                        {error.map((value,pos)=>{
                                            return(<p key={pos}>{value}</p>) 
                                        })}
                                    </Alert>):null} */}
                        {/* <p className="card-title-desc">
                            Provide valuable, actionable feedback to your users with
                            HTML5 form validation–available in all our supported
                            browsers.
                        </p> */}
                        <AvForm className="needs-validation" onValidSubmit = {handletechnologySubmit}>
                            <Row>
                            <Col md="6" >
                                <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom01">
                                    Title
                                    </Label>
                                <AvField
                                    name="title"
                                    placeholder="Title"
                                    type="text"
                                    errorMessage="Enter Title Name"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom01"
                                    value={technologyList.title || ""}
                                />
                                </FormGroup>
                            </Col>
                            {/* <Col md="6">
                                <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom02">
                                    Last name
                                    </Label>
                                <AvField
                                    name="lastname"
                                    placeholder="Last name"
                                    type="text"
                                    errorMessage="Enter Last name"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom02"
                                />
                                </FormGroup>
                            </Col> */}
                            </Row>
                            <Row>
                            <Col md="8">
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
                                    value={technologyList.logo || ""}
                                    onChange={imageFilehandler} 
                                />
                                </FormGroup>
                            </Col>
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

// Technology.propTypes = {
//     users:propTypes.array,
// };

// const mapStateToProps = ({technologies})=>({
//     users:technologies.users
// })

// const mapDispatchToProps = dispatch =>({
//     onAddTechnology: technology => dispatch(addTechnologysuccess(technology))
// })
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(withRouter(Technology))

Technology.propTypes = {
    technologyinfo: PropTypes.object,
    error: PropTypes.array,
    onAddTechnology: PropTypes.func,
    onUpdateTechnology: PropTypes.func,
    onGetTechnology: PropTypes.func
}

const mapStateToProps = ({technologydata}) =>({
    technologyinfo:technologydata.technologyinfo,
    error:technologydata.error
})

const mapDispatchToProps = dispatch =>({
        onAddTechnology: technologyinfo => dispatch(addTechnology(technologyinfo)),
        onUpdateTechnology: technologyinfo => dispatch(updateTechnology(technologyinfo)),
        onGetTechnologyInfo: id => dispatch(getTechnologyInfo(id))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Technology))