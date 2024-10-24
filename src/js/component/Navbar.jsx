import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '15px', backgroundColor: "grey", color: "white" }}>
      <div style={{ fontSize: '15px', textAlign: 'left', }}>
        Start Bootstrap
      </div>
      <div style={{ fontSize: '15px', textAlign: 'right', }}>
      <ul>
        <span>Home  </span>
        <span>About </span>
        <span>Services </span>
        <span>Contact  </span>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
