import React from "react";
import { Container, Row, Col } from "reactstrap";
import profileImg from "./assets/dp.jpg";

import "./styles.css";

export default function Resume() {
  return (
    <Container className="resume" fluid>
      <Row>
        <Col xs={3} className="p-4">
          <img src={profileImg} alt="profile-img" className="profile-image" />
        </Col>
        <Col xs={9} className="pb-2 pt-2 pr-2 pl-0">
          <div className="summery">
            <h3>Sovan Jana</h3>
            <h4>Frontend Developer</h4>
            <p>
              Frontend Developer with a demonstrated history of working in the
              development industry. Experienced in JAVA, JavaScript ,
              TypeScript, ReactJS, NodeJS and GraphQL. People know me as a
              simple and polite person and someone who can come up with new
              ideas and solutions. I embrace the opportunity to learn new things
              and believe in working smartly, efficiently and be productive.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="personal-details">
        <div className="personal-detail email">
          <p>janasovan@gmail.com</p>
        </div>
        <div className="personal-detail phone">
          <p>+91 9732510596</p>
        </div>
        <div className="personal-detail address">
          <p>C/5/1, Block C, Baghajatin, Kolkata - 700092, WB, India</p>
        </div>
      </Row>

      <SectionHeader title="SKILLS" />

      <div className="skills">
        {skills.map((skill, i) => (
          <span className="skill-chip" key={i}>
            {skill}
          </span>
        ))}
      </div>

      <SectionHeader title="WORK EXPERIENCE" />

      {companies.map((company, i) => (
        <SectionDetail {...company} />
      ))}

      <SectionHeader title="EDUCATION DETAILS" />

      {educations.map((edu, i) => (
        <SectionDetail {...edu} />
      ))}

      <SectionHeader title="PROJECTS UNDERTAKEN" />

      {projects.map((project, i) => (
        <SectionDetail {...project} />
      ))}

      <SectionHeader title="ACHIEVEMENTS" />

      <Row className="achievements">
        <ul>
          {achievements.map((achievement, i) => (
            <li>{achievement}</li>
          ))}
        </ul>
      </Row>

      <SectionHeader title="LANGUAGES" />

      <Row className="languages">
        <ul>
          {languages.map((lang, i) => (
            <li>
              <p>
                <span>{lang.name}</span>
                {` - ${lang.cando.map(txt => txt).join(", ")}`}
              </p>
            </li>
          ))}
        </ul>
      </Row>

      <SectionHeader title="INTERESTS" />

      <Row className="interests">
        <ul>
          {interests.map((interest, i) => (
            <li key={i} style={{ whiteSpace: "nowrap" }}>
              {interest}
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  );
}

const achievements = [
  "Have participated and took second place in the intra-school quiz competition.",
  "Have been a member of the departmental football team in inter college football competition.",
  "Have been a member of a departmental Badminton team of my college.",
  "Have participated in phoenix ’12 & ’13 (tech fest)."
];

const interests = [
  "Playing Football and Table Tennis in leisure times. A fan of FC Barcelona.",
  "Reading Newspaper",
  "Exploring New Technologies",
  "Solving Mathematics problem"
];

const languages = [
  {
    name: "English",
    cando: ["Reading", "Writing", "Speaking"]
  },
  {
    name: "Hindi",
    cando: ["Reading", "Speaking"]
  },
  {
    name: "Bengali",
    cando: ["Reading", "Writing", "Speaking"]
  }
];

const projects = [
  // {
  //   id: 0,
  //   heading: "Infinity IT Lagoon (March, 2015 - September, 2015)",
  //   list: [
  //     "Type: Dynamic Website",
  //     "Official website of Infinity It Lagoon.",
  //     "A dynamic website made with HTML5, CSS3, jQuery and JavaScript."
  //   ]
  // },
  {
    id: 1,
    heading: "RestaurantPOS (January, 2017 - December, 2017)",
    list: [
      "Type: A Progressive Web Application and Desktop Application",
      "A complete solution to Restaurant Management System.",
      "Application made with JavaScript, ReactJS, Redux, GraphQL, MySQL, HTML5, CSS3, Bootstrap and Firestore."
    ]
  },
  {
    id: 2,
    heading: "QuizShow (April, 2017 - present)",
    list: [
      "Type: A Progressive Web Application",
      "A Realtime Quiz with admin dashboard, statistics and customizable options.",
      "Application made with JavaScript, ReactJS, Gatsby, Redux, Firestore, GraphQL, HTML5, CSS3, Bootstrap and SVG."
    ]
  },
  {
    id: 3,
    heading: "Kompanero (January, 2018 - May, 2018)",
    list: [
      "Type: Progressive Web Application",
      "A blazing fast eCommerce application for client",
      "Application made with JavaScript, ReactJS, Gatsby, Firestore, GraphQL, Shopify, HTML5, CSS3, Bootstrap and SVG."
    ]
  },
  {
    id: 4,
    heading: "Decorum (June, 2018 - present)",
    list: [
      "Type: Web Application",
      "A combined application for order management, store management and distributor management.",
      "Application made with JavaScript, ReactJS, Redux, Firestore, Cloud Function, HTML5, CSS3, Material Design and SVG."
    ]
  },
  // {
  //   id: 5,
  //   heading: "WIt By Bit - Official (December, 2017 - April, 2018)",
  //   list: [
  //     "Type: Web Application",
  //     "Application made with JavaScript, ReactJS, Gatsby, Firestore, GraphQL, HTML5, CSS3, Bootstrap and SVG."
  //   ]
  // },
  {
    id: 6,
    heading: "The India Story (April, 2018 - August, 2018)",
    list: [
      "Type: Progressive Web Applicatioon",
      "A static Web application for Neotia Group",
      "Application made with JavaScript, ReactJS, Gatsby, GraphQL, HTML5, CSS3, Bootstrap and SVG."
    ]
  },
  {
    id: 7,
    heading: "Labour Compliance (July, 2018 - present)",
    list: [
      "Type: Web Application (a World Bank project)",
      "A complete solution of labour management and compliance system.",
      "Application made with JavaScript, ReactJS, Firestore, Cloud Function, HTML5, CSS3 and Bootstrap."
    ]
  }
];

const educations = [
  {
    id: 0,
    heading: "Bachelor Of Technology in Information Technology",
    subheading: "Future Institute of Engineering and Management",
    midsub: "Kolkata, India",
    supersub: "August 2009 - August 2013",
    list: [
      "Secured 7.2 CGPA",
      "Course Included: Compiler Design, Automata, Networking, JAVA, C, Data Structures & Algorithms, DBMS, Operating System etc."
    ]
  }
];

const companies = [
  {
    id: 0,
    heading: "Junior Software Developer",
    subheading: "Honcho Commercial Pvt. Ltd.",
    midsub: "Kolkata, India",
    supersub: "May 2015 - September 2015",
    list: [
      "Role: Web Developer",
      "Requirement Gathering and evaluating client feedback.",
      "Working with senior developers, designers and managers to design algorithms and flowcharts and produce clean, efficient code based on specifications.",
      "Developing components as well as debugging, testing and Reviewing codes developed by others"
    ]
  },
  {
    id: 1,
    heading: "Software Development Engineer",
    subheading: "Wit By Bit",
    midsub: "Kolkata, India",
    supersub: "December 2016 - present",
    list: [
      "Role: Full Stack Developer",
      "Worked on Express.js, Node,js, Electron and developed an API as well as to GET and POST data using No SQL Database and queries for web application and desktop application. ",
      "Designed and Developed the Admin section of the website using CSS, JavaScript, React, Redux, Pug, Bootstrap, Material Design.",
      "Developing components as well as debugging, testing and Reviewing codes.",
      "Participate into the scrum meetings and do the technical specification.",
      "Responsible for the assigned tasks deliverables "
    ]
  }
];

function SectionDetail({ heading, subheading, midsub, supersub, list }) {
  return (
    <Row className="sectionDetail">
      <Col>
        {heading && <h3 className="heading">{heading}</h3>}
        {subheading && <h5 className="subheading">{subheading}</h5>}
        {midsub && <h6 className="midsub">{midsub}</h6>}
        {supersub && <p className="supersub">{supersub}</p>}
        {list && (
          <ul className="section-list">
            {list.map((item, i) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </Col>
    </Row>
  );
}

function SectionHeader({ title }) {
  return (
    <Row className="sectionHeader">
      <h2>{title}</h2>
    </Row>
  );
}

const skills = [
  "JavaScript",
  "ES6",
  "React",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Redux",
  "Java",
  "NodeJS",
  "GraphQL",
  "GatsbyJS",
  "MySQL",
  "C",
  "Spring",
  "Hybernate",
  "AngularJS",
  "Git",
  "CSS Modules",
  "JSON"
];
