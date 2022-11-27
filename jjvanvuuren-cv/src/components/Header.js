/* Import statement for main stylesheet */
import '../css/main.min.css';
/* Import of the profile photo for the Header component. */
import profilePic from '../images/profile-image-1.jpg'

/* The main function of the Header component taking properties from the main App component. */
function Header(props) {

  return (
    <header className="header">
        <div className="heading-text">
          <h1>{props.name}</h1>
          <h2>{props.profession}</h2>
          <h3>📧 {props.email}</h3>
          <h3>🌇 {props.location}</h3>
        </div>
        <img src={profilePic} className="profilePic" alt="Profile" />
    </header>
  );
}

export default Header;
