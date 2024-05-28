import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import CoffeeLogo from "../assets/projects/Coffee-logo.jpg";
import GlassdoorJobReviews from "../assets/projects/Glassdoor-Job-Reviews.png";

export const HERO_CONTENT = `I am a versatile software developer with a solid background in both front-end and back-end technologies. I have successfully developed cross-platform applications and improved project efficiency in previous roles at Accenture and various tech internships. With a strong focus on user experience and proficiency in modern frameworks like React, Node.js, and Flutter, I consistently deliver robust and innovative software solutions.`;

export const ABOUT_TEXT = `I am a passionate Software Developer focused on developing innovative solutions across various platforms. Proficient in languages such as JavaScript, Python, and Java, and frameworks like React and Node.js, I have a proven track record of enhancing project efficiency and optimizing user experiences. My work includes a patent for a machine learning-based posture detection system, highlighting my commitment to cutting-edge technology and user-centric design.`;

export const EXPERIENCES = [
  {
    year: "May 2023 - Dec 2023",
    role: "Software Developer Intern",
    company: "ASANTe",
    description: `Developed cross-platform application using Flutter and Dart to improve overall user experience. Engineered the setup of authentication services for the app using Amazon Web Services (AWS) enhancing user interaction. Managed REST APIs to optimize client-server communication enhancing performance among application components. Effectively managed the project tasks and workflows using JIRA, ensuring efficient project progress monitoring.`,
    technologies: ["Flutter", "Dart", "REST APIs", "gRPC", "Amazon Web Services (AWS)"],
  },
  {
    year: "Jun 2021 - Dec 2021",
    role: "Software Developer",
    company: "Accenture",
    description: `Utilized Selenium in Java to test FTTP products, ensuring consistent delivery of exceptional telecom services to customers. Proficiently implemented Agile and Scrum methodologies to drive robust solutions, surpassing expectations and producing 10% reduction in production issues.`,
    technologies: ["Java", "Selenium", "Agile"],
  },
  {
    year: "Jan 2021 - May 2021",
    role: "Software Developer Intern",
    company: "Sattvarise Technologies",
    description: `Achieved a 25% increase in overall project efficiency by redesigning and debugging a Software Development Kit (SDK) using C++ to scope its potential for industry use. Conducted unit and target testing throughout the development process to ensure the robustness and reliability of the SDK.`,
    technologies: ["C++", "C#", "Unity", "Amazon Web Services (AWS)"],
  },
  {
    year: "May 2018 - Jul 2018",
    role: "Software Developer Intern",
    company: "Crest Test Systems",
    description: `Leveraged Python to prototype automation systems of office processes, resulting in an 8% increase in operational efficiency by collaborating with a cross-functional team.`,
    technologies: ["Python", "REST APIs"],
  },
];

export const PROJECTS = [
  {
    title: "Task Management Software",
    image: project1,
    description:
      `An innovative Task Board for efficient management of user tasks`,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "PostgreSQL", "REST"],
  },
  {
    title: "Crime Analysis App",
    image: project2,
    description:
      `A dynamic web application to explore crime data.`,
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
  },
  {
    title: "Friendly Neighborhood Car Dealership (FNCD) Simulation in Java",
    image: project3,
    description:
      // "A personal portfolio website showcasing projects, skills, and contact information.",
      "A simulation of a car dealership that allows users to buy, sell, repair, clean, and race cars.",
    technologies: ["Java", "UML", "Design Patterns", "Object Oriented Programming"],
  },
  {
    title: "Cafe Management System In Java",
    image: CoffeeLogo,
    description:
      "A cafe management system that allows users to order food and drinks, track orders, and manage inventory,",
    technologies: ["Java", "JFrame", "UML", "Design Patterns", "Object Oriented Programming"],
  },
  {
    title: "Dengue Fever Prediction using Machine Learning",
    image: project4,
    description:
      "A machine learning model that predicts the likelihood of dengue fever outbreaks based on weather data",
    technologies: ["Python", "SARIMAX", "ARIMA", "Support Vector Machine", "XGBoost", "Logistic Regression"],
  },
  {
    title: "Glassdoor Job Reviews using Data Science Techniques",
    image: GlassdoorJobReviews,
    description:
      "A data science project that analyzes job reviews on Glassdoor to identify trends and insights",
    technologies: ["Python", "Linear Regression"],
  },
];

export const CONTACT = {
  address: "Boulder, Colorado",
  phoneNo: "+1 720-560-1566",
  email: "omkar.yeole@colorado.edu",
};
