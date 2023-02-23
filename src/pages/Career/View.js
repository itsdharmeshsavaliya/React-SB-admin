import React from "react"
import MetaTags from 'react-meta-tags';
import { Link, withRouter } from "react-router-dom";

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

import { deleteCareer, getCareer } from "store/career/actions";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Careerview = (props) =>{
  const {career,onGetCareer,onDeleteCareer,careerinfo} = props
  console.log(careerinfo)

  useEffect(()=>{
    onGetCareer()
    console.log(onGetCareer())
    
  },[onGetCareer,careerinfo],career)
  
  const handleDeleteCareer = (careerinfo) =>{
    // const {onDeleteCareer} = props
    console.log(careerinfo)
    onDeleteCareer(careerinfo)
  
  //  window.location.reload(false)
    onGetCareer()
  }
  
    return(
        <React.Fragment>
            <div className="page-content">
        <MetaTags>
          <title>Career Tables | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Career Table" />
          <Row className="justify-content-md-center">
              <Col xl={12}>
                <Card>
                  <CardBody>
                    <div className="table-responsive">
                      <h4 className="card-title">List of Careers</h4>
                      {/* <p className="card-title-desc">Table cells in <code>&lt;tbody&gt;</code> inherit their alignment from <code>&lt;table&gt;</code> and are aligned to the the top by default. Use the vertical align classes to re-align where needed.</p> */}
                        <div className="button-items">
                        <Link to="/career/add">
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
                              <th>Language icon</th>
                              <th>Title</th>
                              <th>Experience</th>
                              <th>Position</th>
                              <th>Active/Inactive</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {career && career.map((value,pos)=>{
                              
                              return(
                                <tr className="table-info" key={pos}>
                                  <th scope="row">{pos+1}</th>
                                  <td>{value.language_icon}</td>
                                  <td>{value.title}</td>
                                  <td>{value.experience}</td>
                                  <td>{value.position}</td>
                                  <td>{(value.status === true ? "Active" : "Inactive")}</td>
                                  <td>
                                    <Link to={`/career/${value._id}`}>
                                  <button type="button" className="btn btn-success sm" >
                                  <i className="mdi mdi-pencil align-middle me-2 font-size-8"></i>
                                    Edit</button>
                                    </Link>
                                    
                                  <button type="button" className="btn btn-danger sm" style={{marginLeft:17}} onClick={() => handleDeleteCareer(value)}>
                                  <i className="mdi mdi-trash-can align-middle me-2 font-size-8"></i>
                                    Delete</button>
                                  </td>
                                </tr>
                              )
                            })}
                            
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

Careerview.propTypes = {
  career:PropTypes.array,
  onGetCareer:PropTypes.func,
  onDeleteCareer:PropTypes.func
}

const mapStateToProps = ({careers}) => ({
  career: careers.career,
  careerinfo:careers.careerinfo
})

const mapDispatchToProps = dispatch => ({
  onGetCareer:() => dispatch(getCareer()),
  onDeleteCareer: careerinfo => dispatch(deleteCareer(careerinfo))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Careerview))
//export default Careerview