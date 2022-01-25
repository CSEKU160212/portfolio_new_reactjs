import React from "react";
import "../css/shared.css";
import ExperienceItemComponent from "./Items/ExperienceItemComponent";
import { Typography } from "antd";


const {Title} = Typography;

const experienceList = [
    {
        companyname: "aamra Technologies Limited",
        position: "Programmer",
        department: "POS Service Department",
        exp: "December 2020 - Present",
        stacks: "ReactJs (Frontend), Laravel (REST API), Oracle Database",
        location: "Safura Tower, 20 Kemal Ataturk Ave, Dhaka 1213", 
        details: "",
        url: "https://www.aamratechnologies.com/"
    }
]

const ExperiencesComponent = (props) => {
    return (
        <>
            <div className="container padding" ref={props.ownRef}>
                <div>
                    <Title level={3} style={{color: "white", textAlign:"center"}}>Experience</Title>
                </div>
                <div>
                    {
                        experienceList.map((item, index)=>{
                            return <ExperienceItemComponent key={index} keydata={item.key} data={item} />
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default ExperiencesComponent;
