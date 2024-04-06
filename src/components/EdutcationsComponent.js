import React from "react";
import "../css/shared.css";
import { Typography } from "antd";
import EducationItemComponent from "./Items/EducationItemComponent";
import { section } from "../staticData/sections";

const {Title} = Typography;

const educationList = [
    {
        institute: "Khulna University, Bangladesh", 
        degree: "BSc. in Computer Science & Engineering",
        session: "January 2016 - January 2020", 
        point: "3.10", 
        key:"university",
        gpasystem: "CGPA",
        location: "Khulna‐9208, Bangladesh",
        url:"https://ku.ac.bd/",
        details: ["Thesis Topic: Design and Development of Bengali WordNet Based on Princeton English WordNet"] 
    },
    {
        institute: "New Govt. Degree College, Rajshahi",
        degree: "Higher Secondary School", 
        session: "July 2013 - Jun 2015", 
        key:"college", 
        location: "Rajshahi, Bangladesh",
        url: "https://ngdc-raj.ac.bd/",
        details: ["HSc: GPA 5.00 out of 5"] 
    },
    {
        institute: "Momena Ali Biggan School",
        degree: "Secondary School", 
        session: "January 2008 - March 2013", 
        key:"seconday-school", 
        location: "Ullapara, Sirajganj",
        url: "https://momenaalibigganschool.blogspot.com/",
        details: ["SSC: GPA 5.00 out of 5", "JSC: GPA 5.00 out of 5"] 
    },
    {
        institute: "Kayempur Govt. Primary School",
        degree: "Primary School", 
        session: "January 2001 - December 2007", 
        key:"primary-school", 
        location: "Shahzadpur, Sirajganj",
    },
]

const EdutcationComponent = (props) => {
    return (
        <>
            <div className="container padding pageContent" id={section.education} ref={props.ownRef}>
                <div>
                    <Title level={3} style={{color: "white", textAlign:"center"}}>Education</Title>
                </div>
                <div>
                    {
                        educationList.map((item, index)=>{
                            return <EducationItemComponent key={index} keydata={item.key} data={item} />
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default EdutcationComponent;
