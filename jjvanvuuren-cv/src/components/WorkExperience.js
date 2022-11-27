/* Import of the main stylesheet. */
import '../css/main.min.css';

/* Function of the WorkExperience component taking properties from the main App component. */
function WorkExperience(props) {
  return (
    <section className="work-experience-section">
      <h3>{props.company}</h3>
      <p>{props.position}</p>
      <p>{props.period}</p>
    </section>
  );
}

/* Export statement for import into the App.js file. */
export default WorkExperience;
