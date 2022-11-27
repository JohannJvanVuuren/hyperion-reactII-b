/* Importing the main style sheet and individual components. */
import './css/main.min.css';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Spacer from './components/Spacer';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {

  /* An object of the subject of this CV for the Header component. */
  const person = [
    {
      name: 'Johann Jansen van Vuuren',
      profession: 'Full Stack Web Developer and Coding Mentor',
      email: 'vanvuurenjohann124@gmail.com',
      location: 'Ekuhuleni, South AFrica',
    },
  ];

  /* The work experience object for use in the WorkExperience component.  */
  const workExperience = [
    {
      company: 'HyperionDev',
      position: 'Coding Mentor',
      period: 'August 2022 - present',
    },
    {
      company: 'Ampath National Laboratories',
      position: 'Area Marketer and IT Superuser',
      period: '2016 - 2020',
    },
    {
      company: 'Ampath National Laboratories',
      position: 'Hospital Marketer',
      period: '2006 - 2016',
    },
    {
      company: 'Ampath National Laboratories',
      position: 'Client Services Manager',
      period: '2003 - 2006',
    },
    {
      company: 'Ampath National Laboratories',
      position: 'Laboratory Night Manager',
      period: '2000 - 2003',
    },
    {
      company: 'Ampath National Laboratories',
      position: 'Coordinating Technologist',
      period: '1998 - 2000',
    },
    {
      company: 'East Rand Medicine Supplies',
      position: "Pharmacist's Assistance (Casual) ",
      period: '1993 - 1998',
    },
  ];

  /* The education object for use in the Education component. */
  const education = [
    {
      qualification: 'Senior Certificate (Matric)',
      institution: 'Hoërskool Alberton',
      period: '1992',
    },
    {
      qualification: 'Bachelor of Science',
      institution: 'University of the Witwatersrand',
      period: '1995',
    },
    {
      qualification: 'Certificate in Warfarin Anticoagulation Management',
      institution: 'University of the Witwatersrand, Medical School',
      period: 2007,
    },
  ];

  /* The skills object for use in the Skills component. */
  const skills = [
    { skill: 'HTML' },
    { skill: 'CSS / SCSS' },
    { skill: 'JavaScript' },
    { skill: 'Java' },
    { skill: 'Relational Database Design' },
    { skill: 'MySQL / JDBC' },
    { skill: 'PHP' },
    { skill: 'Laravel' },
    { skill: 'React.js' },
    { skill: 'Marketing and Public Relations' },
    { skill: 'Management and Leadership' },
  ];

  /* The spacers object for use in the Spacers component which creates headings and space between the different sections. */
  const spacers = [
    { label: '🏢Work Experience' },
    { label: '🎓Education' },
    { label: '🥋Skills'}
  ];

  /* Returning of the components from this function for rendering in index.js. */
  return (
    /*The main parent diff for the App component. The names of the individual components are self-explanatory so I will not be commenting on each of them. */
    <div className="App"> */
      <Header
        name={person[0].name}
        profession={person[0].profession}
        email={person[0].email}
        location={person[0].location}
      />
      <About />
      {/* The work experience spacer */}
      <Spacer label={spacers[0].label} />
      <div className="work-grid">
        <WorkExperience
          company={workExperience[0].company}
          position={workExperience[0].position}
          period={workExperience[0].period}
        />
        <WorkExperience
          company={workExperience[1].company}
          position={workExperience[1].position}
          period={workExperience[1].period}
        />
        <WorkExperience
          company={workExperience[2].company}
          position={workExperience[2].position}
          period={workExperience[2].period}
        />
        <WorkExperience
          company={workExperience[3].company}
          position={workExperience[3].position}
          period={workExperience[3].period}
        />
        <WorkExperience
          company={workExperience[4].company}
          position={workExperience[4].position}
          period={workExperience[4].period}
        />
        <WorkExperience
          company={workExperience[5].company}
          position={workExperience[5].position}
          period={workExperience[5].period}
        />
        <WorkExperience
          company={workExperience[6].company}
          position={workExperience[6].position}
          period={workExperience[6].period}
        />
      </div>
      {/* The education spacer */}
      <Spacer label={spacers[1].label} />
      <div className="education-grid">
        <Education
          qualification={education[0].qualification}
          institution={education[0].institution}
          period={education[0].period}
        />
        <Education
          qualification={education[1].qualification}
          institution={education[1].institution}
          period={education[1].period}
        />
        <Education
          qualification={education[2].qualification}
          institution={education[2].institution}
          period={education[2].period}
        />
      </div>
      {/* The skills spacer. */}
      <Spacer label={spacers[2].label} />
      <div className="skills-grid">
        <Skills skill={skills[0].skill} />
        <Skills skill={skills[1].skill} />
        <Skills skill={skills[2].skill} />
        <Skills skill={skills[3].skill} />
        <Skills skill={skills[4].skill} />
        <Skills skill={skills[5].skill} />
        <Skills skill={skills[6].skill} />
        <Skills skill={skills[7].skill} />
        <Skills skill={skills[8].skill} />
        <Skills skill={skills[9].skill} />
        <Skills skill={skills[10].skill} />
      </div>
    </div>
  );
}

/* Export statement for import into index.js */
export default App;
