import React from "react"
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom";

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

const Portfoliocategoryview = ()=>{
    return(
        <React.Fragment>
            <div className="page-content">
        <MetaTags>
          <title>Portfolio category Table | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Portfolio category Table" />
          <Row className="justify-content-md-center">
              <Col xl={12}>
                <Card>
                  <CardBody>
                    <div className="table-responsive">
                      <h4 className="card-title">List of Portfolio categories </h4>
                      {/* <p className="card-title-desc">Table cells in <code>&lt;tbody&gt;</code> inherit their alignment from <code>&lt;table&gt;</code> and are aligned to the the top by default. Use the vertical align classes to re-align where needed.</p> */}
                        <div className="button-items">
                        <Link to="/portfoliocategory/add">
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
                              <th>Category Name</th>
                              <th>Active/Inactive</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table-info">
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>
                              <button type="button" className="btn btn-success sm">
                              <i className="mdi mdi-pencil align-middle me-2 font-size-8"></i>
                                Edit</button>
                                
                              <button type="button" className="btn btn-danger sm" style={{marginLeft:17}}>
                              <i className="mdi mdi-trash-can align-middle me-2 font-size-8"></i>
                                Delete</button>
                              </td>
                            </tr>
                            <tr>
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
                            </tr>
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
export default Portfoliocategoryview