/* Import of main stylesheet */
import '../css/main.min.css';

/* Main function for the About component. */
function About() {

  return (
    /* className added for styling purposes. */
    <section className="about-section">
      <h2>👤 About</h2>
      <p>My career started as a BSc student majoring in chemistry and biochemistry at the University of the Witwatersrand. It was also there that I held my first scientific position as a laboratory assistant in the organic chemistry department. Following this I was offered a position in a leading pathology laboratory in South Africa and spent the next 22 years working in clinical pathology.</p>
      <br />
      <p>Computer programming has been a hobby of mine since my teens and while working in pathology I soon realised that my heart yearns to work in the web and software development industry. I finally decided to take the plunge and resigned from my pathology career to pursue my dream full time.</p>
      <br />
      <p>At the beginning of January 2022 I enrolled in a Immersive Full Stack and Software Engineering boot camp at HyperionDev and was first assigned the voluntary role of student champion and the full time employment as a coding mentor subsequent to that. I am currently working full time and completing the boot camp part time. </p>
    </section>
  );
}

/* Export statement for import into App.js */
export default About;