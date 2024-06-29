// App.js
import React, { useState } from 'react';
import Toaster from './Toaster/Toaster';
import "./App.css"

const App = () => {
  const [showToaster, setShowToaster] = useState(false);

  const handleShowToaster = () => {
    setShowToaster(true);
  };

  const handleCloseToaster = () => {
    setShowToaster(false);
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"300px"}}>
      <button className="button-63" role="button" onClick={handleShowToaster}>Show Error Message</button>
      {showToaster && (
        <Toaster message="This is an error message!" onClose={handleCloseToaster} />
      )}
    </div>
  );
};

export default App;
