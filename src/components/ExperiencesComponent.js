import React from "react";
import "../css/shared.css";
import ExperienceItemComponent from "./Items/ExperienceItemComponent";
import { Typography } from "antd";
import { section } from "../staticData/sections";


const {Title} = Typography;

const experienceList = [
    {
        companyname: "IDLC Finance Limited",
        position: "Software Engineer",
        department: "IT Department",
        exp: "February 2022 - Present",
        stacks: ".Net Core, SQL, Stored Procedure",
        location: "DR Tower (4th), 65/2/2 Culvert Rd, Dhaka 1000", 
        details: "",
        url: "https://www.idlc.com/"
    },
    {
        companyname: "aamra Technologies Limited",
        position: "Senior Programmer",
        department: "POS Service Department",
        exp: "September 2022 - February 2024",
        stacks: "ReactJs (Frontend), Laravel (REST API), Oracle Database",
        location: "Safura Tower, 20 Kemal Ataturk Ave, Dhaka 1213", 
        details: "",
        url: "https://www.aamratechnologies.com/"
    },
    {
        companyname: "aamra Technologies Limited",
        position: "Programmer",
        department: "POS Service Department",
        exp: "December 2020 - September 2022",
        stacks: "ReactJs (Frontend), Laravel (REST API), Oracle Database",
        location: "Safura Tower, 20 Kemal Ataturk Ave, Dhaka 1213", 
        details: "",
        url: "https://www.aamratechnologies.com/"
    }
]

const ExperiencesComponent = (props) => {
    return (
        <>
            <div className="container padding pageContent" id={section.experiences} ref={props.ownRef}>
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
