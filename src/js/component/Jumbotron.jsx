import React from 'react';

const Jumbotron = () => {
  return (
    <div className= "container-sm p-3 width text-black text-left"
    style={{ width: '1000px', padding: '20px', fontSize: '20px' , background: 'lightgrey'}}>
      <h1>A Warm Welcome!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, eligendi, in quo sunt
        possimus non incidunt odit vero aliquid similique quaerat.
      </p>
      <button style={{ padding: '10px 20px', backgroundColor: "blue", color: "white", border: 'none' }}>
        Call to action!
      </button>
    </div>
  );
};

export default Jumbotron;
