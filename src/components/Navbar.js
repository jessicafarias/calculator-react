import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div className="bg-black">
      <h1> MATH MAGICIAN </h1>
      <h2 className="regular"> CALCULATOR PROJECT </h2>
    </div>
    <div className="bg-black">
      <Link to="/home">Home</Link>
      <Link to="/quote">Quote</Link>
      <Link to="/calculator">Calculator</Link>
    </div>
  </div>
);

export default Navbar;
