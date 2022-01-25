import React from 'react';
import { Typography } from 'antd';
import "../../css/shared.css"

const {Title} = Typography;

const ExperienceItemComponent = (props) => {
    const {data} = props;

  return (
      <div className='education_item align_center_all border' key={props.keydata} style={{color: "#FFF1CF"}} 
            onClick={()=> window.open(data.url?data.url:"#", "_blank")}>
            <div>
                <Title level={3} style={{color: "#FFD369", fontWeight:"bold"}}>{data.companyname}</Title>
            </div>
            <div>
                <span className="institute_location">{data&& data.location && <>{data.location}</>}</span>
                <span className="study_session">{data&& data.exp && <>{data.exp}</>}</span>
            </div>
            <div>
                <Title level={5} style={{color: "#FFF1CF"}}>{data.position}</Title>
            </div>
            {
                data && data.department && 
                <div>
                    <Title level={5} style={{color: "#FFF1CF"}}>{data.department}</Title>
                </div>
            }
            {
                data && data.stacks && <div>
                    <span style={{fontWeight: "bold"}}>{`Stacks: `}</span><span>{`${data.stacks}`}</span>
                </div>
            }
            {
                data && data.details && <div>
                    {data.details}
                </div>
            }
            
        </div>
  );
};

export default ExperienceItemComponent;
