import React from "react"
import { useEffect } from "react";
import MetaTags from 'react-meta-tags';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types"

import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { connect } from "react-redux";
import { deleteCareerForm, getCareerForm } from "store/actions";

const Careerformview = (props)=>{
  const {careerform,onGetCareerForm,onDeleteCareerForm,careerforminfo} = props

  useEffect(()=>{
    onGetCareerForm()
  },[onGetCareerForm,careerforminfo],careerform)

  const handleDeleteCareerForm = (careerforminfo) =>{
    onDeleteCareerForm(careerforminfo)
    onGetCareerForm()
  }

    return(
        <React.Fragment>
            <div className="page-content">
        <MetaTags>
          <title>Career form Table | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Career Form Table" />
          <Row className="justify-content-md-center">
              <Col xl={12}>
                <Card>
                  <CardBody>
                    <div className="table-responsive">
                      <h4 className="card-title">List of Career Form </h4>
                      {/* <p className="card-title-desc">Table cells in <code>&lt;tbody&gt;</code> inherit their alignment from <code>&lt;table&gt;</code> and are aligned to the the top by default. Use the vertical align classes to re-align where needed.</p> */}
                        <div className="button-items">
                        <Link to="/careerform/add">
                            <button
                            type="button"
                            className="btn btn-primary "
                            >
                            <i className="bx bx-plus font-size-16 align-middle me-2"></i>{" "}
                            Add
                            </button>
                            </Link>
                        </div>
                        <br/> 
                      <div className="table-responsive">
                        <Table className="align-middle mb-0">

                          <thead className="table-light">
                            <tr>
                              <th>#</th>
                              <th>Category</th>
                              <th>Points</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {careerform && careerform.map((value,pos)=>{
                              return(
                                <tr className="table-info" key={pos}>
                                  <th scope="row">{pos+1}</th>
                                  <td>{value.category}</td>
                                  <td>{value.points}</td>
                                  <td>
                                    <Link to={`/careerform/${value._id}`}>
                                      <button type="button" className="btn btn-success sm">
                                      <i className="mdi mdi-pencil align-middle me-2 font-size-8"></i>
                                      Edit</button>
                                    </Link>
                                  
                                    
                                  <button type="button" className="btn btn-danger sm" style={{marginLeft:17}} onClick={()=> handleDeleteCareerForm(value)}>
                                  <i className="mdi mdi-trash-can align-middle me-2 font-size-8"></i>
                                    Delete</button>
                                  </td>
                                </tr>
                              )
                            })}
                            
                            {/* <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>
                                <button type="button" className="btn btn-light btn-sm">View</button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>
                                <button type="button" className="btn btn-light btn-sm">View</button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>
                                <button type="button" className="btn btn-light btn-sm">View</button>
                              </td>
                            </tr> */}
                          </tbody>
                        </Table>
                      </div>

                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        </React.Fragment>
    )
}

Careerformview.propTypes = {
  careerform:PropTypes.array,
  onGetCareerForm:PropTypes.func,
  onDeleteCareerForm:PropTypes.func
}

const mapStateToProps = ({careerforms}) => ({
  careerform: careerforms.careerform,
  careerforminfo: careerforms.careerforminfo
})

const mapDispatchToProps = dispatch => ({
  onGetCareerForm: () => dispatch(getCareerForm()),
  onDeleteCareerForm: careerforminfo => dispatch(deleteCareerForm(careerforminfo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Careerformview))
// export default Careerformview