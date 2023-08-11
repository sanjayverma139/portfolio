import React from "react";
import { MdSchool } from "react-icons/md";
import { LiaSchoolSolid } from "react-icons/lia";
import { PiCertificateFill } from "react-icons/pi";

const Data = [
  {
    id: 1,
    category: "education",
    icon: <MdSchool style={{ color: "#ff1a34" }} size={40} />,
    year: "2021 - Present",
    title: "Bachelor of Computer Applications",
    desc: "Learned Concepts of Cyber Security , Java  , Operating System , Linux , Web Devlopment , DSA , UI/UX",
  },

  {
    id: 2,
    category: "education",
    icon: <LiaSchoolSolid style={{ color: "#ff1a34" }} size={40} />,
    year: "2019 - 2021",
    title: "Secondry Education ",
    desc: "Main Sujects:-Maths , Physics , Chemistry . Scored 92% in finals. Affiliated by State Government",
  },

  {
    id: 3,
    category: "education",
    icon: <PiCertificateFill style={{ color: "#ff1a34" }} size={40} />,
    year: "2008-2019",
    title: "Primary Education",
    desc: " Main Subjects:- Social Studies, Basic Science , Mathematics . Scored 79% in finals. Affiliated by Central Government ",
  },
];

export default Data;
