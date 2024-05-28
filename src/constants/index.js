import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import CoffeeLogo from "../assets/projects/Coffee-logo.jpg";
import CarDearlership from "../assets/projects/Car_Dealership.jpg";
import PorfolioPhoto from "../assets/projects/O.png";
import GlassdoorJobReviews from "../assets/projects/Glassdoor-Job-Reviews.png";


export const HERO_CONTENT = `I am a versatile software developer with a solid background in both front-end and back-end technologies. I have successfully developed cross-platform applications and improved project efficiency in previous roles at Accenture and various tech internships. With a strong focus on user experience and proficiency in modern frameworks like React, Node.js, and Flutter, I consistently deliver robust and innovative software solutions.`;

export const ABOUT_TEXT = `As a Software and Machine Learning enthusiast, I am eager to apply my technical expertise and innovative problem-solving skills to impactful software development projects.

I have successfully led and contributed to various software development projects in different domains and platforms, using agile methodologies and modern software design principles. I am passionate about creating efficient and user-friendly software solutions that meet the needs and expectations of the users and the clients. I am actively seeking software engineer or software developer roles where I can leverage my skills and experience to deliver high-quality software products.`;

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

export const PATENT = [
  {
    year: "May 05, 2021",
    role: "A Machine learning based system for Incorrect Posture Detection",
    company: "Australian Innovation Patents (IP Australia 2021102966)",
    description: `Developed an innovative machine learning system in Python and integrated it with a web application to detect and prevent Upper Cross Postural Syndrome by analyzing and classifying user posture based on key body points, reducing the risk of spinal problems.`,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    link: "https://pericles.ipaustralia.gov.au/ols/auspat/applicationDetails.do?applicationNo=2021102966"
  },
];

export const PROJECTS = [
  {
    title: "Task Management Software",
    image: project1,
    description:
      `Task Management Software helps users efficiently manage their tasks using our web application. The software is designed to provide a user-friendly interface with essential features for task organization and management.`,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "PostgreSQL", "REST"],
    githubLink: "https://github.com/OmkarYeole/Task-Management-Software",
  },
  {
    title: "Crime Data Analysis",
    image: project2,
    description:
      `This project focuses on creating a web application to analyze and understand various crimes that occur across the United States. The goal is to empower users to make informed decisions about their safety by providing detailed crime data and trends. Additionally, the app allows users to share their crime-related experiences anonymously, promoting a community-driven approach to spreading awareness and enhancing public safety.`,
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MongoDB", "Heroku"],
    githubLink: "https://github.com/OmkarYeole/Crime-Data-Analysis",
  },
  {
    title: "Personal Portfolio",
    image: PorfolioPhoto,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    githubLink: "https://github.com/OmkarYeole/Omkar-Yeole-Portfolio",
  },
  {
    title: "Friendly Neighborhood Car Dealership (FNCD) Simulation in Java",
    image: CarDearlership,
    description:
      "The Friendly Neighborhood Car Dealership (FNCD) Simulation is a Java-based project that simulates the operations of a car dealership. Users can engage in activities such as buying, selling, repairing, cleaning, and racing cars. The simulation leverages Object-Oriented Programming (OOP) principles and incorporates several common software design patterns.",
    technologies: ["Java", "UML", "Design Patterns", "Unit Testing"],
    githubLink: "https://github.com/OmkarYeole/Friendly-Neighbourhood-Car-Dealership-using-OOP",
  },
  {
    title: "Cafe Management System In Java",
    image: CoffeeLogo,
    description:
      "The Cafe Management System is a Java-based application designed to streamline operations in a cafe setting. It provides a user-friendly interface for customers to place orders, track their order status, and allows cafe staff to track sales.",
    technologies: ["Java", "JFrame", "MySQL", "UML", "Design Patterns"],
    githubLink: "https://github.com/OmkarYeole/Cafe-Management-System-in-Java",
  },
  {
    title: "Dengue Fever Prediction using Machine Learning",
    image: project4,
    description:
      "This project focuses on the implementation of a Dengue Fever Prediction system, which aims to predict the number of Dengue fever cases in two cities based on various factors such as weather information, population data, and past Dengue incidence data. The project leverages machine learning techniques to provide accurate predictions that can help in early warning and prevention measures.",
    technologies: ["Python", "SARIMAX", "ARIMA", "Support Vector Machine", "XGBoost", "Logistic Regression", "Neural Networks"],
    githubLink: "https://github.com/OmkarYeole/Dengue-Fever-Prediction",
  },
  {
    title: "Glassdoor Job Reviews in Python",
    image: GlassdoorJobReviews,
    description:
      "This project focuses on analyzing Glassdoor job reviews to extract insights about companies' work environments, cultural values, and overall employee satisfaction. The analysis includes data cleaning, preprocessing, exploratory data analysis (EDA), sentiment analysis, and building a predictive model using linear regression.",
    technologies: ["Python", "Linear Regression", "Sentiment Analysis"],
    githubLink: "https://github.com/OmkarYeole/Glassdoor-Job-Reviews",
  },
];

export const CONTACT = {
  address: "Boulder, Colorado",
  phoneNo: "+1 720-560-1566",
  email: "omkar.yeole@colorado.edu",
};
