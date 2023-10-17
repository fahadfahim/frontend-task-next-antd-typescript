"use client";
import Image from "next/image";
import React from "react";
import logo from "../../assets/images/LOGO.png";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
const SecondNav = () => {
  const handleChange = (value: string) => {
    console.log("value", value);
  };
  return (
    <div className="sec-nav">
      <div className="sec-wrapper">
        <div className="sec-left">
          <div className="logo">
            <Image src={logo} alt="E-tutor" />
          </div>
          <div className="sec-search-filter">
            <div className="sec-select">
              <Select
                defaultValue="Brows"
                style={{ width: 200, height: 35, borderRadius: "0px" }}
                dropdownStyle={{ borderRadius: "0px" }}
                onChange={handleChange}
                options={[
                  { value: "usd", label: "USD" },
                  { value: "euro", label: "EURO" },
                  { value: "bdt", label: "BDT" },
                ]}
              />
            </div>
            <div className="sec-search">
              <Input
                size="middle"
                addonBefore={<SearchOutlined />}
                placeholder="What do you want to learn..."
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="sec-right">
          <div className="btn-wrapper">
            <div className="cart-btn-wrapper">
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.26904 9.75C5.2678 8.86051 5.44262 7.97957 5.78343 7.15796C6.12424 6.33635 6.6243 5.59031 7.25477 4.96286C7.88525 4.33541 8.63368 3.83895 9.45693 3.5021C10.2802 3.16525 11.1619 2.99467 12.0514 3.00019C15.763 3.02778 18.7317 6.11282 18.7317 9.83474V10.5C18.7317 13.8577 19.4342 15.8062 20.0529 16.8711C20.1196 16.9849 20.1551 17.1142 20.1558 17.2461C20.1565 17.378 20.1224 17.5077 20.0569 17.6222C19.9915 17.7367 19.8971 17.8319 19.7831 17.8982C19.6691 17.9646 19.5397 17.9997 19.4078 18H4.59222C4.46034 17.9997 4.33087 17.9645 4.21689 17.8982C4.1029 17.8318 4.00844 17.7366 3.94301 17.6221C3.87759 17.5076 3.84352 17.3778 3.84425 17.2459C3.84498 17.1141 3.88048 16.9847 3.94716 16.8709C4.56622 15.806 5.26904 13.8575 5.26904 10.5L5.26904 9.75Z"
                    stroke="#1D2026"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18"
                    stroke="#1D2026"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 20.25C12 20.25 2.625 15 2.625 8.625C2.62519 7.49825 3.01561 6.40634 3.72989 5.53492C4.44416 4.6635 5.4382 4.06635 6.54299 3.84501C7.64778 3.62366 8.79514 3.79178 9.78999 4.32078C10.7848 4.84978 11.5658 5.70701 12 6.74672L12 6.74673C12.4342 5.70701 13.2152 4.84979 14.21 4.32078C15.2049 3.79178 16.3522 3.62366 17.457 3.84501C18.5618 4.06635 19.5558 4.6635 20.2701 5.53492C20.9844 6.40634 21.3748 7.49825 21.375 8.625C21.375 15 12 20.25 12 20.25Z"
                    stroke="#1D2026"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z"
                    fill="#1D2026"
                    stroke="#1D2026"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                    fill="#1D2026"
                  />
                  <path
                    d="M3.96429 6.75H20.7857L18.3108 15.4121C18.2213 15.7255 18.0321 16.0012 17.7718 16.1975C17.5116 16.3938 17.1945 16.5 16.8685 16.5H7.88145C7.55549 16.5 7.23839 16.3938 6.97816 16.1975C6.71792 16.0012 6.52872 15.7255 6.43917 15.4121L3.04827 3.54396C3.0035 3.38725 2.90889 3.24939 2.77878 3.15124C2.64866 3.05309 2.49011 3 2.32713 3H0.75"
                    stroke="#1D2026"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="create-sign">
              <Link href="#" className="create-acc">
                Create Account
              </Link>
              <Link href="#" className="sign-in">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondNav;
