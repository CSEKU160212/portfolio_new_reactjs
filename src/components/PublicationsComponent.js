import React from "react";
import { Typography } from "antd";
import "../css/shared.css";


const {Title} = Typography;

const PublicationsComponent = (props) => {
    return <>
        <div className="container padding" ref={props.ownRef}>
            <div>
                <Title level={3} style={{color: "white", textAlign:"center"}}>Publications</Title>
            </div>
        </div>
    </>;
};

export default PublicationsComponent;
