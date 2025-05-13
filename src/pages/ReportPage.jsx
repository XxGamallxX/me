import Footer from "../components/landingpageCom/Footer";
import Navbar from "../components/landingpageCom/NavBar";

import "./ReportPage.css";
import { useEffect, useState } from "react";

const ReportPage = () => {
  const [step, setStep] = useState(1);

  const [ReportData, setReportData] = useState({
    issuename: "",
    issuedegree: "",
    comment: "",
    streetName: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({
      ...ReportData,
      [name]: value,
    });
    console.log(ReportData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };


  const getlocation = () => {

  }

  return (
    <>
      <Navbar />
      <div className="BgReport container-fluid vh-100 d-grid align-items-center grid-report-layout mt-5">
        <div className="row-sm position-relative w-50 mx-auto  mt-5  ">
          <div className="progress-line "></div>
          <div className="progress-circles px-0">
            <div className="progress-bar-uncheck-circle"></div>
            <div className="progress-bar-uncheck-circle"></div>
            <div className="progress-bar-uncheck-circle"></div>
          </div>
        </div>
        <div className="row-sm d-flex justify-content-between mx-auto w-50 mb-3 ">
          <div>Step 1</div>
          <div>Step 2</div>
          <div>Step 3</div>
        </div>
        {step === 1 && (
          <div className=" form-container justify-content-center p-5 row  w-50 mx-auto align-self-start">
            <form onSubmit={handleSubmit} className="">
              <h1 className="text-center">
                <strong>Submit Your Report</strong>
              </h1>

              <div className="mt-3">
                <label htmlFor="issuename" className="form-label">
                  Issue Name
                </label>
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
                <label htmlFor="comment" className="form-label">
                  Issue Description
                </label>
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
                <button
                  type="submit"
                  className="Main-btn-small mx-auto px-4"
                  onClick={() => setStep(2)}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="bg-submitreport-container form-container justify-content-center p-5 row  w-50 mx-auto">
            <form onSubmit={handleSubmit}>
              <h5 className="fs-4">
                <b>Where is the issue?</b>
              </h5>
              <div className="mt-3">
                <button className="Main-btn w-100" onClick={getlocation}>get your location</button>
              </div>
              <div className="mt-3">
                <label htmlFor="streetName" className="form-label fs-4">
                  <b> Street Name</b>
                </label>
                <input
                  name="streetName"
                  className="form-control input-shadowbox"
                  required
                  placeholder="Street Name"
                ></input>
              </div>
              <div className="mt-1 d-flex justify-content-between">
                <select name="" id="" className="select-input">
                  <option value="">Region Name</option>
                </select>
                <select name="" id="" className="select-input">
                  <option value="">Government</option>
                </select>
              </div>
              <button
                type="submit"
                className="Main-btn-small mx-auto px-4"
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </form>
            <div></div>
          </div>
        )}
        {step === 3 && <div></div>}
      </div>
      <Footer />
    </>
  );
};

export default ReportPage;
