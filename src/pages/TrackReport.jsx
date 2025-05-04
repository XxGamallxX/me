 
 
 
 

  import React, { useState } from 'react';

  const TrackReport = () => {
    const Reports = [
      { id: '1', name: 'Alice', email: 'alice@gmail.com' },
      { id: '2', name: 'Bob', email: 'bob@yahoo.com' },
      { id: '3', name: 'Charlie', email: 'charlie@gmail.com' },
      { id: '4', name: 'Dana', email: 'dana@yahoo.com' },
      { id: '5', name: 'Ethan', email: 'ethan@gmail.com' },
    ];


  return (



  <div className="BgReport container-fluid vh-100 d-flex align-items-center justify-content-center w-100">
    <div className="card form-container justify-content-center py-5 row flex-grow">
    {Reports.length === 0 ? (
    <h1>there is no Reports submitted yet</h1>
) : (
  <div>There is data</div>
)}

    </div>
  </div>
         
  )};
  
  export default TrackReport;







