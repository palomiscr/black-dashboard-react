/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classNames from "classnames";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  CardFooter,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import {UserDashboardDoughnutChart} from "../components/DoughnutChart/DoughnutChart";
import {
  chartExample1,
  chartExample2,
  chartExample3
} from "variables/charts.js"; // You can modify these to fit your data

function UserDashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("performance");

  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  
  return (
    <div className="content" style={{ backgroundColor: "#000000" }}>
     {/* Row with Three Cards for Key Statistics */}
     <Row>
        <Col lg="4" md="6">
        <Card className="card-chart card-chart-pie"  style={{ backgroundColor: "#002328", color: "#009FE3" }}>
          <CardHeader>
            <h5 className="card-category">Average Score</h5>
          </CardHeader>
          <CardBody style={{ minHeight: '250px' }}>
              <UserDashboardDoughnutChart/>
          </CardBody>
        </Card>
        </Col>

        <Col lg="4" md="6">{/*las simulation stats*/}
          <Card className="card-stats"  style={{ backgroundColor: "#002328", color: "#009FE3" }}>
          <CardHeader>
              <h5 className="card-category">Last Simulation</h5>
          </CardHeader>
          <CardBody className="d-flex justify-content-center align-items-center" style={{ minHeight: '250px', padding: '15px' }}>
            <div className="statistics" style={{ width: '100%', paddingLeft: '20px' }}>
              <Row>
                {/* Column 1 - Procedure */}
                <Col xs="6" sm="6" md="6" lg="6">
                  <div className="grid-item">
                    <p className="card-category" style={{ marginBottom: '0.5rem' }}>Procedure</p>
                    <p style={{ marginBottom: '0' }}>Intra_X</p>
                  </div>
                </Col>

                {/* Column 2 - Date */}
                <Col xs="6" sm="6" md="6" lg="6">
                  <div className="grid-item">
                    <p className="card-category" style={{ marginBottom: '0.5rem' }}>Date</p>
                    <p style={{ marginBottom: '0' }}>26/09/24</p>
                  </div>
                </Col>
              </Row>

              <Row className="mt-3">
                {/* Column 3 - Score */}
                <Col xs="6" sm="6" md="6" lg="6">
                  <div className="grid-item">
                    <p className="card-category" style={{ marginBottom: '0.5rem' }}>Score</p>
                    <p style={{ marginBottom: '0' }}>8/10</p>
                  </div>
                </Col>

                {/* Add another column if needed for more info */}
                <Col xs="6" sm="6" md="6" lg="6">
                  {/* This column is left blank for now, or you can add more content */}
                </Col>
              </Row>
            </div>
          </CardBody>
          </Card>
        </Col>

        <Col lg="4" md="6">
          <Card className="card-chart"  style={{ backgroundColor: "#002328", color: "#009FE3" }}>
            <CardHeader>
              <h5 className="card-category">Overall Progress</h5>
            </CardHeader>
            <CardBody >
              <div className="chart-area">
                <Bar
                  data={{
                    labels: ["Sessions"],
                    datasets: [
                      {
                        label: "Completed",
                        data: [5], // Number of sessions completed
                        backgroundColor: ["#1f8ef1"],
                      },
                      {
                        label: "Goal",
                        data: [10], // Total sessions to complete
                        backgroundColor: ["transparent"],
                        borderColor: "#d048b6",
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            suggestedMin: 0,
                            suggestedMax: 10,
                            stepSize: 0,
                          },
                        },
                      ],
                    },
                    legend: { display: false },
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>{/* Last session metrics Point Accuracy Card */}

        {/* Entry Point Accuracy Card */}
        <Col lg="4" md="6">
          <Card className="card-stats"  style={{ backgroundColor: "#002328", color: "#009FE3" }}>
            <CardBody>
              <Row>
                <Col xs="5">
                  <div
                    className="info-icon text-center"
                    style={{
                      backgroundColor: '#00CC96', // Accent color bubble (Green)
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <i
                      className="tim-icons icon-pin"
                      style={{ color: '#fff', fontSize: '24px' }} // Icon in white
                    ></i>
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers text-right">
                    <p className="card-category">Entry Point Accuracy</p>
                    <h3 className="card-title">87%</h3>
                  </div>
                </Col>
              </Row>
            </CardBody>
            <CardFooter style={{ padding: '0' }}>
              <hr style={{ borderColor: '#2b3553', margin: '5px 15px' }} />
              <div className="stats" style={{ margin: '10px 15px' }}>
                <i className="tim-icons icon-refresh-01"></i> Correct, close to 85% tolerance
              </div>
            </CardFooter>
          </Card>
        </Col>

        {/* Target Area Precision Card */}
        <Col lg="4" md="6">
          <Card className="card-stats"  style={{ backgroundColor: "#002328", color: "#009FE3" }}>
            <CardBody>
              <Row>
                <Col xs="5">
                  <div
                    className="info-icon text-center"
                    style={{
                      backgroundColor: '#F9E700', // Accent color bubble (Yellow)
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <i
                      className="tim-icons icon-tap-02"
                      style={{ color: '#fff', fontSize: '24px' }} // Icon in white
                    ></i>
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers text-right">
                    <p className="card-category">Target Area Precision</p>
                    <h3 className="card-title">94%</h3>
                  </div>
                </Col>
              </Row>
            </CardBody>
            <CardFooter style={{ padding: '0' }}>
              <hr style={{ borderColor: '#2b3553', margin: '5px 15px' }} />
              <div className="stats" style={{ margin: '10px 15px' }}>
                <i className="tim-icons icon-sound-wave"></i> Inside tolerance zone
              </div>
            </CardFooter>
          </Card>
        </Col>

        {/* Trajectory Path Validation Card */}
        <Col lg="4" md="6">
          <Card className="card-stats"  style={{ backgroundColor: "#002328", color: "#009FE3" }}>
            <CardBody>
              <Row>
                <Col xs="5">
                  <div
                    className="info-icon text-center"
                    style={{
                      backgroundColor: '#009FE3', // Accent color bubble (Blue)
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <i
                      className="tim-icons icon-vector"
                      style={{ color: '#fff', fontSize: '24px' }} // Icon in white
                    ></i>
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers text-right">
                    <p className="card-category">Trajectory Path Validation</p>
                    <h3 className="card-title">95%</h3>
                  </div>
                </Col>
              </Row>
            </CardBody>
            <CardFooter style={{ padding: '0' }}>
              <hr style={{ borderColor: '#2b3553', margin: '5px 15px' }} />
              <div className="stats" style={{ margin: '10px 15px' }}>
                <i className="tim-icons icon-pencil"></i> Path Scored
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>


      <Row>{/*performance graph overview and session list*/}
        <Col xs="12">
          <Card className="card-chart"  style={{ backgroundColor: "#002328", color: "#009FE3" }}>
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <h5 className="card-category">Simulation Progress</h5>
                  <CardTitle tag="h2">User Performance Overview</CardTitle>
                </Col>
                <Col sm="6">
                  <ButtonGroup
                    className="btn-group-toggle float-right"
                    data-toggle="buttons"
                  >
                    <Button
                      tag="label"
                      className={classNames("btn-simple", {
                        active: bigChartData === "performance",
                      })}
                      color="info"
                      id="0"
                      size="sm"
                      onClick={() => setBgChartData("performance")}
                    >
                      Performance
                    </Button>
                    <Button
                      tag="label"
                      className={classNames("btn-simple", {
                        active: bigChartData === "accuracy",
                      })}
                      color="info"
                      id="1"
                      size="sm"
                      onClick={() => setBgChartData("accuracy")}
                    >
                      Accuracy
                    </Button>
                    <Button
                      tag="label"
                      className={classNames("btn-simple", {
                        active: bigChartData === "time_spent",
                      })}
                      color="info"
                      id="2"
                      size="sm"
                      onClick={() => setBgChartData("time_spent")}
                    >
                      Time Spent
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line
                    data={(canvas) => {
                      const chartData = chartExample1[bigChartData].data(canvas);
                      return {
                        ...chartData,
                        datasets: chartData.datasets ? chartData.datasets : [], // Ensure datasets is defined
                      };
                    }}
                    options={chartExample1[bigChartData].options}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>{/*completed sessions table*/}
        <Col lg="6" md="12">
          <Card className="card-tasks"  style={{ backgroundColor: "#002328", color: "#009FE3" }}>
            <CardHeader>
              <h6 className="title d-inline">Completed Sessions</h6>
              <p className="card-category d-inline"> last week</p>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Session Name</th>
                    <th>Completion Time</th>
                    <th>Accuracy</th>
                    <th>Score</th>
                    <th>Action</th> {/* New column for action button */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Spinal Fusion</td>
                    <td>02:15:30</td>
                    <td>95%</td>
                    <td>85</td>
                    <td>
                      <Button
                        style={{
                          backgroundColor: 'transparent', // No background color
                          border: 'none', // No border line
                          color: '#009FE3' // Set text color to blue
                        }}
                        size="sm"
                      >
                        View Report
                      </Button>
                    </td> {/* Action Button */}
                  </tr>
                  <tr>
                    <td>Laminectomy</td>
                    <td>01:45:20</td>
                    <td>90%</td>
                    <td>82</td>
                    <td>
                      <Button
                        style={{
                          backgroundColor: 'transparent', // No background color
                          border: 'none', // No border line
                          color: '#009FE3' // Set text color to blue
                        }}
                        size="sm"
                      >
                        View Report
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Disc Replacement</td>
                    <td>02:05:10</td>
                    <td>92%</td>
                    <td>87</td>
                    <td>
                      <Button
                        style={{
                          backgroundColor: 'transparent', // No background color
                          border: 'none', // No border line
                          color: '#009FE3' // Set text color to blue
                        }}
                        size="sm"
                      >
                        View Report
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Scoliosis Correction</td>
                    <td>03:30:50</td>
                    <td>88%</td>
                    <td>78</td>
                    <td>
                      <Button
                        style={{
                          backgroundColor: '#002328', // No background color
                          border: 'none', // No border line
                          color: '#009FE3' // Set text color to blue
                        }}
                        size="sm"
                      >
                        View Report
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Vertebroplasty</td>
                    <td>00:55:45</td>
                    <td>96%</td>
                    <td>90</td>
                    <td>
                      <Button
                        style={{
                          backgroundColor: 'transparent', // No background color
                          border: 'none', // No border line
                          color: '#009FE3' // Set text color to blue
                        }}
                        size="sm"
                      >
                        View Report
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Kyphoplasty</td>
                    <td>01:20:35</td>
                    <td>93%</td>
                    <td>86</td>
                    <td>
                      <Button
                        style={{
                          backgroundColor: 'transparent', // No background color
                          border: 'none', // No border line
                          color: '#009FE3' // Set text color to blue
                        }}
                        size="sm"
                      >
                        View Report
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Discectomy</td>
                    <td>01:10:50</td>
                    <td>89%</td>
                    <td>80</td>
                    <td>
                      <Button
                        style={{
                          backgroundColor: 'transparent', // No background color
                          border: 'none', // No border line
                          color: '#009FE3' // Set text color to blue
                        }}
                        size="sm"
                      >
                        View Report
                      </Button>
                    </td>
                  </tr>
                </tbody>



              </Table>
            </CardBody>
          </Card>
        </Col>

        <Col lg="6" md="12">
          <Card  style={{ backgroundColor: "#002328", color: "#009FE3" }}>
            <CardHeader>
              <CardTitle tag="h4">Feedback & Performance Summary</CardTitle>
            </CardHeader>
            <CardBody style={{ minHeight: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <p className="text-center">Your overall performance is improving with consistent accuracy in implant placement. Keep focusing on minimizing the time per procedure while maintaining precision.</p>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default UserDashboard;
