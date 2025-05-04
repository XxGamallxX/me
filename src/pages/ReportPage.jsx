import {useEffect , useState } from "react";
import "./ReportPage.css";
import ReportStep1 from "../components/ReportCom/ReportStep1";
import { v4 as uuidv4 } from 'uuid';

const ReportPage = () => {
  const [step, setStep] = useState(1);

  const [ReportData, setReportData] = useState({
    reportid: uuidv4(),
    issuename: "",
    issuedegree: "",
    comment: "",
    streetName: "",
    link: "",

  });
  // Ensure step is 1 when component mounts
  // useEffect(() => {
  //   setStep(1);
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({
      ...ReportData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const isValid = await validateStep1Async();
    // if (isValid) {
    //   setStep(2);
    // } else {
    //   alert("Validation failed. Please check your input.");
    // }
  };

  // const validateStep1Async = async () => {
  //   try {
  //     const response = await fetch("https://api.example.com/check-report", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(ReportData),
  //     });

  //     const data = await response.json();
  //     return data.success;
  //   } catch (error) {
  //     alert("Network error during validation.");
  //     return false;
  //   }
  // };

  return (
    <>
      {step === 1 && (
        <div className="BgReport container-fluid vh-100 d-flex align-items-center justify-content-center w-100">
          <div className="card form-container justify-content-center py-5 row flex-grow">
            <form onSubmit={handleSubmit}>
              <h1><strong>Submit Your Report</strong></h1>

              <div className="mt-3">
                <label htmlFor="issuename" className="form-label">Issue Name</label>
                <input
                  type="text"
                  id="issuename"
                  name="issuename"
                  onChange={handleChange}
                  className="form-control input-shadowbox"
                  value={ReportData.issuename}
                />
              </div>

              <div className="mt-3">
                <label htmlFor="issuedegree">Issue Degree</label>
                <select
                  className="input-shadowbox form-select"
                  name="issuedegree"
                  id="issuedegree"
                  value={ReportData.issuedegree}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div className="mt-3">
                <label htmlFor="comment" className="form-label">Issue Description</label>
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  className="form-control input-shadowbox"
                  onChange={handleChange}
                  value={ReportData.comment}
                />
              </div>

              <div className="d-flex justify-content-center pt-4">
                <button type="submit" className="Main-btn mx-auto" onClick={() => setStep(2)}>Next</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="BgReport container-fluid vh-100 d-flex align-items-center justify-content-center w-100">
          <div className="card form-container justify-content-center py-5 row flex-grow">
            

            <form onSubmit={handleSubmit}>
              <h1>Submit Your Report</h1>
              <div className="mt-3">
                <img src="" alt="map" />
                <button className="Main-btn">get your location</button>



              </div>
              <div className="mt-3">
                <label htmlFor="streetName" className="form-label">street name</label>
                <input
                 name="streetName"
                className="form-control input-shadowbox"
                
                >

                </input>


              </div>
              <div className="mt-3">



              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportPage;
