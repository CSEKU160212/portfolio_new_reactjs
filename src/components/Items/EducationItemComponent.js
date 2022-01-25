import React from 'react';
import "../../css/shared.css"
import { Typography } from 'antd';

const {Title} = Typography;

const EducationItemComponent = (props) => {
    const {data} = props;
    return( 
        <div className='education_item align_center_all border' key={props.keydata} style={{color: "#FFF1CF"}} 
            onClick={()=> window.open(data.url?data.url:"#", "_blank")}>
            <div>
                <Title level={3} style={{color: "#FFD369", fontWeight:"bold"}}>{data.institute}</Title>
            </div>
            <div>
                <span className="institute_location">{data&& data.location && <>{data.location}</>}</span>
                <span className="study_session">{data&& data.session && <>{data.session}</>}</span>
            </div>
            <div>
                <Title level={5} style={{color: "#FFF1CF"}}>{data.degree}</Title>
            </div>
            <div>
                {
                    data && data.gpasystem?<li>{data.gpasystem}: {data.point}</li>:null
                }
                {
                    data && data.details && data.details.map((item, index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </div>
        </div>
    );
};

export default EducationItemComponent;
