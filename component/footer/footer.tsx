"use client";
import { Col, Row, Select } from "antd";
import Image from "next/image";
import React from "react";
import logo from "../../assets/images/LOGO-white.png";
import Link from "next/link";
import facbook from "../../assets/images/Frame75.png";
import youtube from "../../assets/images/Frame74.png";
import instagram from "../../assets/images/Instragarm.png";
import twitter from "../../assets/images/Twitter.png";
import linkedIn from "../../assets/images/Linkedin.png";
import downIos from "../../assets/images/down-ios.png";
import downAndroid from "../../assets/images/down-android.png";
import { DownOutlined } from "@ant-design/icons";
const Footer = () => {
  const handleChange = (value: string) => {
    console.log(value);
  };
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="foot-wrapper">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={9}>
              <div className="footer-info-ara">
                <div className="footer-img">
                  <Image src={logo} alt="logo" />
                </div>
                <p>
                  Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
                  Donec mattis odio at.
                </p>
                <div className="social-area">
                  <Link href="$" className="social-btn">
                    <Image src={facbook} alt="facebook" />
                  </Link>
                  <Link href="$" className="social-btn">
                    <Image src={instagram} alt="facebook" />
                  </Link>
                  <Link href="$" className="social-btn active">
                    <Image src={linkedIn} alt="facebook" />
                  </Link>
                  <Link href="$" className="social-btn">
                    <Image src={twitter} alt="facebook" />
                  </Link>
                  <Link href="$" className="social-btn">
                    <Image src={youtube} alt="facebook" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={15}>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={6}>
                  <div className="top-4-cat">
                    <h1>Top 4 Categorey</h1>
                    <ul>
                      <li>Development</li>
                      <li>Finance & Accounting</li>
                      <li>Design</li>
                      <li>Businesss</li>
                    </ul>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <div className="top-4-cat">
                    <h1>Quick Links</h1>
                    <ul>
                      <li>About</li>
                      <li>Become Instructor</li>
                      <li>Contact</li>
                      <li>Career</li>
                    </ul>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <div className="top-4-cat">
                    <h1>Support</h1>
                    <ul>
                      <li>Help Center</li>
                      <li>FAQ</li>
                      <li>Terms & Condition</li>
                      <li>Privacy and Policy</li>
                    </ul>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <div className="top-4-cat">
                    <h1>Download our App</h1>
                    <ul>
                      <li>
                        <Image src={downIos} alt="down ios" />
                      </li>
                      <li>
                        <Image src={downAndroid} alt="down" />
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className="wrapper">
        <div className="footer-copyright">
          <p>
            &copy; 2021 - Eduflex. Designed by <span>Templatecookie</span> All
            rights reserved.
          </p>
          <div className="bottom-btn">
            <Select
              defaultValue="Brows"
              style={{ width: 200, height: 35, borderRadius: "0px" }}
              suffixIcon={<DownOutlined style={{ color: "#fff" }} />}
              dropdownStyle={{ borderRadius: "0px" }}
              onChange={handleChange}
              options={[
                { value: "usd", label: "USD" },
                { value: "euro", label: "EURO" },
                { value: "bdt", label: "BDT" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
