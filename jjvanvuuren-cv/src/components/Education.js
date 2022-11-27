/* Import of main stylesheet. */
import '../css/main.min.css';

/* Main function for Education component. Taking in props from the main App component. */
function Education(props) {
  return (
    <section className="education-section">
      <h2>{props.qualification}</h2>
      <p>{props.institution}</p>
      <p>{props.period}</p>
    </section>
  );
}

/* Export statement for import into App.js */
export default Education;