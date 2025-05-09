import Footer from "../components/landingpageCom/Footer";
import "./ReportPage.css";
import {useEffect , useState } from "react";


const ReportPage = () => {
  const [step, setStep] = useState(1);

  const [ReportData, setReportData] = useState({
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
    console.log(ReportData)
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
        <div className="BgReport container-fluid vh-100 d-grid align-items-center grid-report-layout ">
          <div className="row-sm position-relative w-50 mx-auto h-fit-content mt-5  ">
            <div className="progress-line "></div>
            <div className="progress-circles px-0">
              <div className="progress-bar-uncheck-circle"></div>
              <div className="progress-bar-uncheck-circle"></div>
              <div className="progress-bar-uncheck-circle"></div>
            </div>
          </div>
      {step === 1 && (
          <div className=" form-container justify-content-center p-5 row  w-50 mx-auto ">
            <form onSubmit={handleSubmit} className="">
              <h1 className="text-center"><strong>Submit Your Report</strong></h1>

              <div className="mt-3">
                <label htmlFor="issuename" className="form-label">Issue Name</label>
                <input
                  type="text"
                  id="issuename"
                  name="issuename"
                  onChange={handleChange}
                  className="form-control input-shadowbox"
                  value={ReportData.issuename}
                  required
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
                  required
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
                  required
                />
              </div>

              <div className="d-flex justify-content-center pt-4">
                <button type="submit" className="Main-btn-small mx-auto px-4" onClick={() => setStep(2)}>Next</button>
              </div>
            </form>
          </div>
        
      )}

      {step === 2 && (
        
          <div className="form-container justify-content-center p-5 row  w-50 mx-auto">
            

            <form onSubmit={handleSubmit}>
              <h5 className="">Where is the issue?</h5>
              <div className="mt-3">
                <img src="" alt="map" />
                <button className="Main-btn">get your location</button>



              </div>
              <div className="mt-3">
                <label htmlFor="streetName" className="form-label">street name</label>
                <input
                 name="streetName"
                className="form-control input-shadowbox"
                required
                >

                </input>


              </div>
              <div className="mt-3">
                
              </div>
            </form>
              <div>

              </div>
          </div>
      )}
      </div>
      <Footer/>
    </>
  );
};

export default ReportPage;
