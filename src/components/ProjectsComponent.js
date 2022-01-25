import React from "react";
import { Typography } from "antd";
import "../css/shared.css";

const {Title} = Typography;

const ProjectsComponent = (props) => {
    return <>
        <div className="container padding" ref={props.ownRef}>
            <div>
                <Title level={3} style={{color: "white", textAlign:"center"}}>Projects</Title>
            </div>
        </div>
    </>;
};

export default ProjectsComponent;
