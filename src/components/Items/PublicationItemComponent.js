import React from 'react';
import { Typography } from "antd";
import "../../css/shared.css";

const { Title } = Typography;

const PublicationItemComponent = (props) => {
  const {data} = props;

  return (
    <>
      <div
        onClick={() => window.open(data.doiUrl ? data.doiUrl : "#", "_blank")}
        className="publication_item"
        style={{paddingBottom: "30px"}}
      >
        <Title
          level={3}
          style={{
            color: "#FFD369",
            fontWeight: "bold",
            textAlign: "center",
          }}
          key={data.key}
        >
          {data.title}
        </Title>
        <div style={{ color: "whitesmoke" }}>
          {data.abstract && (
            <p className="publication_item_content_p">
              <span
                style={{ fontSize: "130%", color: "#FFC900" }}
              >{`Abstract: `}</span>
              {`${data.abstract}`}
            </p>
          )}

          {data.publishedIn && (
            <p className="publication_item_content_p">
              <span style={{ color: "#FFC900" }}>{`Published In: `}</span>
              {`${data.publishedIn}`}
            </p>
          )}
          {data.conferenceDate && (
            <p className="publication_item_content_p">
              <span style={{ color: "#FFC900" }}>{`Date Of Conference: `}</span>
              {`${data.conferenceDate}`}
            </p>
          )}

          {data.addedToIeeeDate && (
            <p className="publication_item_content_p">
              <span
                style={{ color: "#FFC900" }}
              >{`Date Added to IEEE Xplore: `}</span>
              {`${data.addedToIeeeDate}`}
            </p>
          )}
          {data.doi && (
            <p className="publication_item_content_p">
              <span style={{ color: "#FFC900" }}>{`DOI: `}</span>
              {`${data.doi}`}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default PublicationItemComponent