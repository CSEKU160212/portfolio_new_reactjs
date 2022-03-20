import React from "react";
import { Typography, Carousel } from "antd";
import "../css/shared.css";
import PublicationItemComponent from "./Items/PublicationItemComponent";

const {Title} = Typography;

const publicationList = [
  {
    title: "BNNet: Towards A Comprehensive Bangla WordNet",
    abstract: `
        Advanced Natural Language Processing applications are highly dependant on 
        the handiness of linguistic assets such as WordNet. Despite being a popular 
        language in the world, Bangla has an inadequacy of many linguistic resources. 
        Currently available resources are either inadequate for useful operation or 
        not easily accessible for the research community. 
        Constructing a Bangla WordNet again is a significant hurdle as it requires the 
        critical integration of bilingual English-Bangla resources. 
        In this paper, we take the hurdle to combine freely available online materials 
        to build comprehensive English-Bangla and Bangla-English bi-lingual resources. 
        We further build a Bangla WordNet, BNNet, using these resources and map it with 
        the Princeton English WordNet. We again provide useful user interfaces and RESTful API 
        to access and manipulate the Bangla WordNet as well as develop an English-Bangla 
        similarity checker using the proposed system, BNNet.
    `,
    conferenceDate: "19-21 Dec. 2020",
    addedToIeeeDate: "06 April 2021",
    doi: "10.1109/ICCIT51783.2020.9392650",
    doiUrl: "https://ieeexplore.ieee.org/document/9392650",
    publishedIn:
      "2020 23rd International Conference on Computer and Information Technology (ICCIT)",
    key: "bnnet",
  }
];

const PublicationsComponent = (props) => {
    return (
      <>
        <div className="container padding" ref={props.ownRef}>
          <div>
            <Title level={3} style={{ color: "white", textAlign: "center" }}>
              Publications
            </Title>
            <div
              className="publication_items_div align_center_all border publication"
              key={props.keydata}
              style={{
                color: "#FFF1CF",
                cursor: "default",
                paddingBottom: "0px",
              }}
            >
              <Carousel
                autoplay
                easing="linear"
                swipeToSlide={true}
                swipe={true}
              >
                {publicationList.map((item, index) => {
                  return <PublicationItemComponent key={index} data={item} />;
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </>
    );
};

export default PublicationsComponent;
