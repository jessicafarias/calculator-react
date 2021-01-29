import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="bg-image1">
    <div className="black">
      <div className="navbar">
        <div className="bg-black">
          <h1> MATH MAGICIAN </h1>
          <h2 className="regular"> CALCULATOR PROJECT </h2>
        </div>
        <div className="bg-black">
          <Link className="regular" to="/home">Home</Link>
          <Link className="regular" to="/calculator">Calculator</Link>
          <Link className="regular" to="/quote">Quote</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
