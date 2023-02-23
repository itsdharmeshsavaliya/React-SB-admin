import React from "react"
import { useEffect } from "react";
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
import PropTypes from 'prop-types'
import { deleteFuture, getFuture } from "store/future/actions";
import { connect } from "react-redux";

const Futureview = (props)=>{
  const {future,onGetFuture,onDeleteFuture,futureinfo} = props

  useEffect(()=>{
    onGetFuture()
  },[onGetFuture,futureinfo],future)

  const handleDeleteCareer = (futureinfo) => {
    onDeleteFuture(futureinfo)
    onGetFuture()
  }

    return(
        <React.Fragment>
            <div className="page-content">
        <MetaTags>
          <title>Future Tables | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Future Table" />
          <Row className="justify-content-md-center">
              <Col xl={12}>
                <Card>
                  <CardBody>
                    <div className="table-responsive">
                      <h4 className="card-title">List of Futures</h4>
                      {/* <p className="card-title-desc">Table cells in <code>&lt;tbody&gt;</code> inherit their alignment from <code>&lt;table&gt;</code> and are aligned to the the top by default. Use the vertical align classes to re-align where needed.</p> */}
                        <div className="button-items">
                        <Link to="/future/add">
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
                              <th>Years of experience</th>
                              <th>Websites delivered</th>
                              <th>Countries served</th>
                              <th>Satisfied clients</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            { future && future.map((val,pos)=>{
                              return(
                                <tr className="table-info" key={pos}>
                                  <th scope="row">{pos+1}</th>
                                  <td>{val.years_of_experience}</td>
                                  <td>{val.websites_delivered}</td>
                                  <td>{val.countries_served}</td>
                                  <td>{val.satisfied_clients}</td>
                                  <td>
                                    <Link to={`future/${val._id}`}>
                                      <button type="button" className="btn btn-success sm">
                                      <i className="mdi mdi-pencil align-middle me-2 font-size-8"></i>
                                      Edit</button>
                                    </Link>
                                  
                                  <button type="button" className="btn btn-danger sm" style={{marginLeft:17}} onClick = {()=> handleDeleteCareer(val)}>
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

Futureview.propTypes = {
  future:PropTypes.array,
  onGetFuture:PropTypes.func,
  onDeleteFuture:PropTypes.func
}

const mapStateToProps = ({futures}) => ({
  future:futures.future,
  futureinfo:futures.futureinfo
})

const mapDispatchToProps = (dispatch) => ({
  onGetFuture: () => dispatch(getFuture()),
  onDeleteFuture: futureinfo => dispatch(deleteFuture(futureinfo)) 
})  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Futureview))