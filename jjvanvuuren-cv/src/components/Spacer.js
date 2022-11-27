/* Import of the main stylesheet. */
import '../css/main.min.css';

/* The Spacer component function taking properties from the main App component */
function Spacer(props) {

  return (
    <section className="spacer-section">
      <h2>{props.label}</h2>      
    </section>
  );
}

/* Export statement for import into the App.js file. */
export default Spacer;