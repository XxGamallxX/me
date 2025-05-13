

const reports = [
  {
    issuename: "Air Pollution",
    issuedegree: "High",
    comment: "Needs immediate attention",
    region: "Cairo",
    government: "Ministry of Environment",
  },
  {
    issuename: "Traffic Congestion",
    issuedegree: "Medium",
    comment: "Peak hours problematic",
    region: "Giza",
    government: "Transport Authority",
  },

  {
    issuename: "Air Pollution",
    issuedegree: "High",
    comment: "Needs immediate attention",
    region: "Cairo",
    government: "Ministry of Environment",
  },
  {
    issuename: "Traffic Congestion",
    issuedegree: "Medium",
    comment: "Peak hours problematic",
    region: "Giza",
    government: "Transport Authority",
  },
];

//   async function getreports (

//   const getreportdata = await fetch("https://localhost:7218/api/user/{id}/reports"),
// .then(res => res.json())
// .then(console.log(res));

// )

const TrackReport = () => {
  return (
    <div className="BgReport container-fluid vh-100 d-flex align-items-center justify-content-center min-w-100 border-0">
      <div className=" form-container justify-content-center py-5 row flex-grow bg-transparent w-75">
        <div className="d-flex my-TrackReportCardnav align-items-center mb-3 ">
          <img
            src="./Rafeeq/back-btn.png"
            alt="back button"
            className="h6 m-0 crusor-pointer"
          />
          <h2 className="m-0 px-2 py-1 my-color0A1F44 my-text-shadow">
            <strong>Track Report</strong>
          </h2>
        </div>
        {reports.length === 0 ? (
          <div className="my-TrackReportCard p-3 my-3 vh-50">
            <h1 className="text-center mt-4">No Report submitted</h1>
          </div>
        ) : (
          <>
            <div className="overflow-scroll vh-75">
              {reports.map((issue, index) => (
                <div key={index} className="my-TrackReportCard p-3 my-3 pb-5">
                  <h4 className="fw-bold">{issue.issuename}</h4>
                  <p className="fs-4 fw-light">{issue.issuedegree}</p>
                  <p className="fs-4 fw-light">{issue.comment}</p>
                  <p className="fs-4 fw-light">
                    {issue.government}, {issue.region}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TrackReport;
