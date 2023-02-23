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

const Portfoliocategory = ()=>{

    return(
        <React.Fragment>
            <div className="page-content">
            <MetaTags>
                <title>Portfolio category | Skote - React Admin & Dashboard Template</title>
            </MetaTags>
            <Container fluid={true}>
            <Breadcrumbs title="Form" breadcrumbItem="Portfolio category" />
                <Row className="justify-content-md-center">
                    <Col xl="6">
                    <Card>
                        <CardBody>
                        <h4 className="card-title">Add Portfolio category</h4>
                        {/* <p className="card-title-desc">
                            Provide valuable, actionable feedback to your users with
                            HTML5 form validation–available in all our supported
                            browsers.
                        </p> */}
                        <AvForm className="needs-validation" >
                            <Row>
                            <Col md="6" >
                                <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom01">
                                    Category Name
                                    </Label>
                                <AvField
                                    name="categoryname"
                                    placeholder="Category Name"
                                    type="text"
                                    errorMessage="Enter Category Name"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom01"
                                />
                                </FormGroup>
                            </Col>
                            {/* <Col md="6">
                                <FormGroup className="mb-3">
                                <Label htmlFor="validationCustom02">
                                    Points
                                    </Label>
                                <AvField
                                    name="points"
                                    placeholder="Points"
                                    type="text"
                                    errorMessage="Enter Points"
                                    className="form-control"
                                    validate={{ required: { value: true } }}
                                    id="validationCustom02"
                                />
                                </FormGroup>
                            </Col> */}
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
export default Portfoliocategory