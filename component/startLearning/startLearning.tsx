import { Col, Row } from "antd";
import React from "react";

const StartLearning = () => {
  return (
    <div className="start-learning">
      <div className="foot-wrapper">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={14} lg={14} xl={14}>
            <div className="learning-about">
              <div className="title">
                <h1>
                  Start learning with 67.1k <br /> Students around the world.
                </h1>
              </div>
              <div className="btn-are">
                <button className="join">Join The Family</button>
                <button className="browse">Browse All Courses</button>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={10} lg={10} xl={10}>
            <div className="learning-info-are">
              <div className="learning-desc">
                <h1>6.3k</h1>
                <p>Online Courses</p>
              </div>
              <div className="learning-desc">
                <h1>79k</h1>
                <p>Certified Instructor</p>
              </div>
              <div className="learning-desc">
                <h1>65%</h1>
                <p>Success Rate</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StartLearning;
