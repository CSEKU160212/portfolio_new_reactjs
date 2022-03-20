import { MailOutlined, PhoneOutlined } from "@ant-design/icons/lib/icons";
import {
    faFacebookSquare,
    faGithubSquare,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "antd";
import React, {useState, useEffect} from "react";
import classes from "../css/home.module.css";
import "../css/shared.css";
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations'

const animationType = keyframes`${bounceIn}`;

const NameAnimation = styled.span`
  animation: 2s ${animationType};
`;

const { Title } = Typography;


const jobTitles = ["a Programmer", "a Developer"];

const HomeComponent = (props) => {
    const [titleToggle, setTitleToggle] = useState(true);

    useEffect(() => {
      const intervalID = setInterval(() =>  {
        setTitleToggle((titleToggle)=>!titleToggle);
    }, 2000);

    return () => clearInterval(intervalID);
    }, []);
    
    return (
      <>
        <div
          className={`${classes.flex_container} container`}
          ref={props.ownRef}
        >
          <div
            className={`${classes.flex_item} ${classes.padding}`}
            style={{ color: "white" }}
          >
            <div style={{ fontSize: "16px" }}>Hello I'm</div>
            <Title
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "48px",
                marginBottom: "5px",
              }}
            >
              <NameAnimation>
                MD. <span style={{ color: "#E60965" }}>ABDUL LOTIF</span>
              </NameAnimation>
            </Title>
            <Title level={1} style={{ color: "white", marginTop: "0px" }}>
              {titleToggle ? <>{jobTitles[0]}</> : <>{jobTitles[1]}</>}
            </Title>
            <div>
              <div>
                POS Service Department,{" "}
                <a href={"https://www.aamratechnologies.com/"}>
                  {" "}
                  aamra Technologies Limited{" "}
                </a>
              </div>
            </div>
            <div
              className={classes.contact_info}
              style={{ paddingTop: "10px" }}
            >
              <div>
                <a
                  href={`mailTo:"lotif1612@gmail.com"`}
                  style={{ color: "white" }}
                >
                  <MailOutlined />
                  <span style={{ paddingLeft: "10px" }}>
                    lotif1612@gmail.com
                  </span>
                </a>
              </div>
              <div>
                <a style={{ color: "white" }} href={`callto:"+8801717-059192"`}>
                  <PhoneOutlined />
                  <span style={{ paddingLeft: "10px" }}>+8801717-059192</span>
                </a>
              </div>
              <div>
                <a
                  style={{ color: "white" }}
                  href={`https://www.google.com/maps/place/Whistle/@23.7821194,90.4239839,19.5z/data=!4m13!1m7!3m6!1s0x3755c79734fd1965:0xc406cd2071fad212!2sGulshan+Badda+Link+Rd,+Dhaka+1212!3b1!8m2!3d23.780707!4d90.4211305!3m4!1s0x3755c796e67aeac9:0xa4a2d38d0cd30d94!8m2!3d23.7823699!4d90.424779`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span style={{ paddingLeft: "10px" }}>
                    Middle Badda, Gulshan, Dhaka
                  </span>
                </a>
              </div>
            </div>
            <div className={classes.social_media}>
              <a
                className={classes.social_media_item}
                href="https://www.facebook.com/llotif.13/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              </a>
              <a
                className={classes.social_media_item}
                href="https://www.linkedin.com/in/cseku160212/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
              <a
                className={classes.social_media_item}
                href="https://github.com/CSEKU160212/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
              </a>
            </div>
          </div>
          <div className={classes.flex_item} style={{ textAlign: "center" }}>
            <img
              src={"/admin/lotif1.png"}
              height={300}
              width={300}
              style={{
                borderRadius: "50%",
                border: "1px solid grey",
              }}
              alt="Md. Abdul Lotif"
              className="image_item"
            />
          </div>
        </div>
      </>
    );
};

export default HomeComponent;
