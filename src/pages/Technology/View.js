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
import { deleteTechnology, getTechnology } from "store/actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useEffect } from "react";
import { map } from "lodash"


const Technologyview = (props) => {
  console.log(props)
  const { technology, onGetTechnology, onDeleteTechnology } = props
  console.log(technology)
  
  useEffect(() => {
      onGetTechnology()
  }, [onGetTechnology])

  const handleDeleteTechnology = (technologyinfo) =>{
    onDeleteTechnology(technologyinfo)
    onGetTechnology()
  }

    return(
        <React.Fragment>
            <div className="page-content">
        <MetaTags>
          <title>Technology Tables | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Technology Tables" />
          <Row className="justify-content-md-center">
              <Col xl={12}>
                <Card>
                  <CardBody>
                    <div className="table-responsive">
                      <h4 className="card-title">List of Technology</h4>
                      {/* <p className="card-title-desc">Table cells in <code>&lt;tbody&gt;</code> inherit their alignment from <code>&lt;table&gt;</code> and are aligned to the the top by default. Use the vertical align classes to re-align where needed.</p> */}
                        <div className="button-items">
                        <Link to="/technology/add">
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
                              <th>Title</th>
                              <th>Logo</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {technology && technology.map((value,pos)=>(
                              <tr className="table-info" key={pos}>
                              <th scope="row">{pos+1}</th>
                              <td>{value.title}</td>
                              <td><img src={value.logo}></img></td>
                              <td>
                                <Link to={`/technology/${value._id}`}>
                                  <button type="button" className="btn btn-success sm">
                                  <i className="mdi mdi-pencil align-middle me-2 font-size-8"></i>
                                  Edit</button>
                                </Link>
                              
                                
                              <button type="button" className="btn btn-danger sm" style={{marginLeft:17}} onClick={()=>{handleDeleteTechnology(value)}}>
                              <i className="mdi mdi-trash-can align-middle me-2 font-size-8"></i>
                                Delete</button>
                              </td>
                            </tr>
                             ))}
                            
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
Technologyview.propTypes = {
  technology:PropTypes.array,
  onGetTechnology:PropTypes.func,
  onDeleteTechnology:PropTypes.func

}
console.log("technologydata")

const mapStateToProps = ({technologydata}) => ({
   technology: technologydata.technology,
})

const mapDispatchToProps = dispatch => ({
  onGetTechnology: () => dispatch(getTechnology()),
  onDeleteTechnology: technologyinfo => dispatch(deleteTechnology(technologyinfo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Technologyview))
// export default Technologyview
