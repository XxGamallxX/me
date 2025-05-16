import Footer from "../components/landingpageCom/Footer";
import Navbar from "../components/landingpageCom/NavBar";
import ReportDone from "../components/ReportCom/ReportDone";

import "./ReportPage.css";
import { useState } from "react";

const ReportPage = () => {
  const [step, setStep] = useState(1);
  const [imageUrl, setImageUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [Errors, setErrors] = useState({});

  const [ReportData, setReportData] = useState({
    issuename: "",
    issuedegree: "",
    comment: "",
    streetName: "",
    link: imageUrl,
    latitude: "",
    longitude: "",
    governement: "",
    region: "" ,
  });


  //handle data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({
      ...ReportData,
      [name]: value,
    });
    console.log(ReportData);
  };

  const validateStep1 = () => {
  const newErrors = {};
  if (!ReportData.issuename.trim()) {
    newErrors.issuename = "Issue name is required";
    console.log(ReportData);
    return;
  }
  if (!ReportData.comment.trim()) {
    newErrors.comment = "Issue description is required";
    return;
  }

setStep(2)
  
};

const validateStep2 = () => {
  const newErrors = {};
  if (!ReportData.streetName.trim()) {
    newErrors.streetName = "Street name is required";
  }
  if (!ReportData.region.trim()) {
    newErrors.region = "Region is required";
  }
  if (!ReportData.governement.trim()) {
    newErrors.governement = "Government is required";
  }
  if (!ReportData.latitude.trim() || !ReportData.latitude.trim() ) {
    newErrors.governement = "something went wrong ,please set your again ";
  }
  
};

const validateStep3 = () => {
  const newErrors = {};
  if (!imageUrl) {
    newErrors.imageUrl = "Image is required";
  }
  
};


  const handleSubmit = async (e) => {
    e.preventDefault();

  };



  //image section

  async function uploadImage(files) {
    console.log(files);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "ghdr54sw6s");

    fetch("https://api.cloudinary.com/v1_1/dx74fe71q/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setImageUrl(data.url))
      .catch((error) => console.error(error));
      
  }



  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e ) => {
   e.preventDefault();
  setIsDragging(false);
  const files = e.dataTransfer.files;
  if (files && files.length > 0) {
    uploadImage(files);
    const file = files[0];
     // if setFileName is used
    async function uploadImage(files) {
    console.log(files);

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "ghdr54sw6s");

    fetch("https://api.cloudinary.com/v1_1/dx74fe71q/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setImageUrl(data.url))
      .catch((error) => console.error(error));
      console.log(imageUrl)
  }

  }
  };


  //get location

  const getlocation = (e) => {
  e.preventDefault(); 
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser.");
  }
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      setReportData(prev => ({
        ...prev,
        latitude: latitude.toString(),     
        longitude: longitude.toString(),   
      }));
      console.log("Location saved to state:", { latitude, longitude });
    },
    (err) => {
      console.error("Error getting location:", err);
      alert("Unable to retrieve your location. Please allow location access.");
    }
  );
};

  return (
    <>
      <Navbar />
      <div className="BgReport container-fluid vh-100 d-grid align-items-center grid-report-layout  mt-fornav">
        <div className="row-sm position-relative w-65 mx-auto  mt-5  ">
          <div className="progress-line "></div>
          <div className="progress-circles px-0">
            <div className={step >=1 ? "progress-bar-check-circle" : "progress-bar-uncheck-circle"}></div>
            <div className={step >=2 ? "progress-bar-check-circle" : "progress-bar-uncheck-circle"}></div>
            <div className={step === 3 ? "progress-bar-check-circle" : "progress-bar-uncheck-circle"}></div>
          </div>
        </div>
        <div className="row-sm d-flex justify-content-between mx-auto w-65 mb-3 ">
          <div>Step 1</div>
          <div>Step 2</div>
          <div>Step 3</div>
        </div>
        {step === 1 && (
          <div className="d-flex form-container justify-content-center p-5 row  w-65 mx-auto align-self-start h-75">
            <form onSubmit={validateStep1} className="justify-self-center">
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
                  className="form-control input-report1"
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
                  className="form-control input-report1"
                  onChange={handleChange}
                  value={ReportData.comment}
                  required
                />
              </div>

              <div className="d-flex justify-content-center pt-4">
                <button
                  type="submit"
                  className="Main-btn-small mx-auto px-4"
                  
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <>
          <div
            className={`drop-zone  ${isDragging ? "dragging" : ""} row justify-content-center align-self-start mygap-100 w-75 mx-auto`}
            
          >
            <div className="image-input-container col-md-5 "
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}>
              <input
                type="file"
                id="fileInput"
                onChange={(event)=> {uploadImage(event.target.files)}}
                className="file-input"
              />
              <label htmlFor="fileInput" className="d-flex flex-column crusor-pointer p-5" >
                <img src="/Rafeeq/material-symbols_upload (1).png" alt="Upload icon"  className="img-icon-size mx-auto"/>
                <span className="text-center border-20 my-color0A1F44 fw-bold fs-4 my-4">Upload photo here</span>
                <span className="text-center border-20 fs-5 my-3 mb-4 mt-0">or</span>
                <div className="text-center  fs-5 "><span className="p-2 bg-white border-20 d-inline-block">Browse</span></div>
              </label>
            </div>

            <div className="col-md-5 image-input-container">
              <div className="text-center mt-5 mb-4"><img src="/Rafeeq/camera.png" alt="Camera icon" className="" /></div>
              <div className="text-center  fs-5 "><span className="p-2 bg-white border-20 d-inline-block">Take photo</span></div>
            </div>
          <div className="row justify-content-center w-fit"><button type="submit" className="Main-btn-small">next</button></div>
          </div>
            
          </>
        )}
        {step === 3 && (
          <div className="row align-self-start justify-content-center " style={{ columnGap: "3px" }}>
              <div className="col-md-5 form-container my-colorCCE3FF ">
                <img
                  src="./Rafeeq/location.jpg"
                  alt=""
                  className="w-100 mt-2 p-2  form-container"
                />
              </div>

              <div className="bg-submitreport-container form-container  p-5 col-md-5 ">
                <form onSubmit={handleSubmit} className="mt-5">
                  <h5 className="fs-4">
                    <b>Where is the issue?</b>
                  </h5>
                  <div className="mt-3">
                    <button
                      className="Main-btn w-100 py-2 rounded-pill "
                      onClick={getlocation}
                    >
                      Set your location
                    </button>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="streetName" className="form-label fs-4">
                      <b> Street Name</b>
                    </label>
                    <input
                      name="streetName"
                      className="form-control input-shadowbox2 py-3"
                      required
                      placeholder="Street Name"
                    ></input>
                  </div>
                  <div className="mt-1 d-flex  gap">
                    <select
                      name=""
                      id=""
                      className="select-input flex-grow-1 border-0 input-shadowbox2 custom-select py-3"
                    >
                      <option disabled selected hidden value="">Region Name </option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="select-input flex-grow-1 border-0 gap input-shadowbox2 custom-select py-3"
                    >
                      <option value="">Government</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <button
                      type="submit"
                      className="Main-btn mx-auto px-4 w-100 "
                      onClick={() => setStep(3)}
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          
        )}
        {step===4 &&(
          <ReportDone/>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ReportPage;
