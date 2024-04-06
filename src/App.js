import { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons/lib/icons";
import { Drawer, Spin } from "antd";
import React, { Suspense, useEffect, useRef, useState } from "react";
import "./App.css";
import "./css/nav.css";
import { section } from "./staticData/sections";

const HomeComponent = React.lazy(() => import("./components/HomeComponent"));
const EdutcationComponent = React.lazy(() =>
  import("./components/EdutcationsComponent")
);
const ExperiencesComponent = React.lazy(() =>
  import("./components/ExperiencesComponent")
);
const ProjectsComponent = React.lazy(() =>
  import("./components/ProjectsComponent")
);
const PublicationComponent = React.lazy(() =>
  import("./components/PublicationsComponent")
);
const SkillsComponent = React.lazy(() =>
  import("./components/SkillsComponent")
);

// const ContactsComponent = React.lazy(() =>
//     import("./components/ContactsComponents")
// );

const AboutComponent = React.lazy(() => import("./components/AboutComponent"));

const loading = (
  <div className="loader">
    <Spin size="large" />
  </div>
);

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const App = () => {
  const [visible, setVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const eduRef = useRef(null);
  const aboutRef = useRef(null);
  // const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const publicationsRef = useRef(null);
  const skillsRef = useRef(null);
  // const activityRef = useRef(null);

  const toggleDrawer = (value) => {
    setVisible(!value);
  };

  useEffect(()=>{

  const handleScroll = () => {
    const currentSection = findCurrentSection();
    console.log(currentSection);
    setActiveMenu(currentSection);
  };

  const findCurrentSection = () => {
    const sections = Array.from(document.getElementsByClassName('pageContent')); // Assuming your sections use <section> tag
    const windowHeight = window.innerHeight;

    for (let section of sections) {
      const { top, bottom } = section.getBoundingClientRect();

      console.log({top, bottom})

      if (top < 0 && bottom >= windowHeight) {
        return section.id;
      }
    }

    return null;
  };


  window.addEventListener("scroll", changeNavbarStyle);
  window.addEventListener('scroll', handleScroll);
  })

  const executeScroll = (ref, secionName) => {
    scrollToRef(ref);
    setActiveMenu(secionName);
  };


  const [navbarStyleChange, setNavbarStyleChange] = useState(false);

  const changeNavbarStyle = () => {
    if (window.scrollY >= 80) setNavbarStyleChange(true);
    else setNavbarStyleChange(false);
  };

  return (
    <>
      <Suspense fallback={loading}>
        <header className="App-header">
          <div className="App">
            <div
              style={{
                width: "100%",
                height: "fit-content",
                color: "whitesmoke",
              }}
              className={
                navbarStyleChange
                  ? "navbarOnScroll navfixed"
                  : "navbar navfixed"
              }
            >
              <div className="menu-icon">
                <MenuOutlined onClick={() => toggleDrawer(visible)} />
              </div>
              <ul className="topnav">
                <li
                  className={
                    "nav-item " +
                    (activeMenu === section.home ? "item_active" : "")
                  }
                >
                  <div
                    className="nav-link"
                    onClick={() => executeScroll(homeRef, section.home)}
                  >
                    Home
                  </div>
                </li>
                <li
                  className={
                    "nav-item " +
                    (activeMenu === section.skills ? "item_active" : "")
                  }
                >
                  <div
                    className="nav-link"
                    onClick={() => executeScroll(skillsRef, section.skills)}
                  >
                    Skills
                  </div>
                </li>
                <li
                  className={
                    "nav-item " +
                    (activeMenu === section.experiences ? "item_active" : "")
                  }
                >
                  <div
                    className="nav-link"
                    onClick={() =>
                      executeScroll(experienceRef, section.experiences)
                    }
                  >
                    Experiences
                  </div>
                </li>
                <li
                  className={
                    "nav-item " +
                    (activeMenu === section.education ? "item_active" : "")
                  }
                >
                  <div
                    className="nav-link "
                    onClick={() => executeScroll(eduRef, section.education)}
                  >
                    Education
                  </div>
                </li>
                
                <li
                  className={
                    "nav-item " +
                    (activeMenu === section.projects ? "item_active" : "")
                  }
                >
                  <div
                    className="nav-link"
                    onClick={() => executeScroll(projectsRef, section.projects)}
                  >
                    Projects
                  </div>
                </li>
                <li
                  className={
                    "nav-item " +
                    (activeMenu === section.publications ? "item_active" : "")
                  }
                >
                  <div
                    className="nav-link"
                    onClick={() =>
                      executeScroll(publicationsRef, section.publications)
                    }
                  >
                    Publications
                  </div>
                </li>
                {/* <li className="nav-item">
                                    <div className="nav-link" onClick={()=>executeScroll(activityRef)}>Activity</div>
                                </li> */}
                {/* <li className="nav-item">
                                    <div className="nav-link" onClick={()=>executeScroll(contactRef)}>Contact</div>
                                </li> */}
              </ul>
            </div>
          </div>
          <div style={{ paddingBottom: "20px" }}>
            <HomeComponent ownRef={homeRef} />
            <AboutComponent ownRef={aboutRef} />
            <SkillsComponent ownRef={skillsRef} />
            <ExperiencesComponent ownRef={experienceRef} />
            <EdutcationComponent ownRef={eduRef} />
            <ProjectsComponent ownRef={projectsRef} />
            <PublicationComponent ownRef={publicationsRef} />
            {/* <ContactsComponent ownRef={contactRef} /> */}
          </div>
        </header>

        <Drawer
          title="Md. Abdul Lotif"
          placement="left"
          closable={true}
          closeIcon={<CloseCircleOutlined />}
          onClose={() => toggleDrawer(visible)}
          visible={visible}
          key={"left"}
          width={"fit-content"}
          drawerStyle={{
            marginTop: "65px",
            height: "auto",
            letterSpacing: "2px",
          }}
        >
          <div className="drawer-item" onClick={() => executeScroll(homeRef)}>
            Home
          </div>
          <div className="drawer-item" onClick={() => executeScroll(skillsRef)}>
            Skills
          </div>
          <div className="drawer-item" onClick={() => executeScroll(eduRef)}>
            Education
          </div>
          <div
            className="drawer-item"
            onClick={() => executeScroll(experienceRef)}
          >
            Experiences
          </div>
          <div
            className="drawer-item"
            onClick={() => executeScroll(projectsRef)}
          >
            Projects
          </div>
          <div
            className="drawer-item"
            onClick={() => executeScroll(publicationsRef)}
          >
            Publications
          </div>
          {/* <div className="drawer-item" onClick={()=>executeScroll(contactRef)}>Contact</div> */}
          {/* 
                        <div className="nav-link">Activity</div>
                     */}
        </Drawer>
      </Suspense>
    </>
  );
};

export default App;
