/* Import of the main stylesheet. */
import '../css/main.min.css';

/* The main function of the Skills component taking properties from the main App component. */
function Skills(props) {
  return (
    <section className="skills-sections">
      <h2>{props.skill}</h2>     
    </section>
  );
}

/*Export statement for import into the App.js file. */
export default Skills;