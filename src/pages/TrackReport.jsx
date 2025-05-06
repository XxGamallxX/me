   import React, { useState } from 'react';
 
 
 


   // Sample data: array of issue objects




   const reports = [
     {
       issuename: 'Air Pollution',
       issuedegree: 'High',
       comment: 'Needs immediate attention',
       region: 'Cairo',
       government: 'Ministry of Environment',
     },
     {
       issuename: 'Traffic Congestion',
       issuedegree: 'Medium',
       comment: 'Peak hours problematic',
       region: 'Giza',
       government: 'Transport Authority',
     },
     
   ];


//   async function getreports (

//   const getreportdata = await fetch("https://localhost:7218/api/user/{id}/reports"),
// .then(res => res.json())
// .then(console.log);



// )

  

  const TrackReport = () => {
















  return (



  <div className="BgReport container-fluid vh-100 d-flex align-items-center justify-content-center min-w-100 border-0">
  <div className=" form-container justify-content-center py-5 row flex-grow bg-transparent w-75">
    {reports.length === 0 ? (



    <h1>there is no Reports submitted yet</h1>


) : (
<>

  <div className='d-flex my-TrackReportCard align-items-center '>
    <img src="./Rafeeq/back-btn.png" alt="back button" className='h6 m-0 crusor-pointer' />
    <h3 className='m-0 px-1'><strong >Track Report</strong></h3>
  </div>
  <div className=''>
         {reports.map((issue, index) => (
           <div key={index} className='my-TrackReportCard p-3 my-3'>
             <h3>{issue.issuename}</h3>
             <p>{issue.issuedegree}</p>
             <p>{issue.comment}</p>
             <p>
               {issue.government}, {issue.region}
             </p>
           </div>
         ))}
       </div>
</>





)}

    </div>
  </div>
         
  )};
  
  export default TrackReport;







