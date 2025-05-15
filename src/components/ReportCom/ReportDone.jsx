import { useNavigate } from "react-router-dom";








const ReportDone = () => {
const navigate = useNavigate();
    return (
      <div className="d-flex justify-content-center align-items-center ">
        <div className="text-center border p-5 rounded form-container shadow min-w-100" id="my-container">
          <p className="font-20"><strong>Thank you for your contribution.</strong></p>
          <p className="font-20">Your report has been received and is now under review by the responsible authorities. You will be notified once the status of your report is updated.</p>
          <button className="Main-btn w-90" onClick={() => navigate("/Landing-page")}>Done</button>
        </div>
      </div>
    );
  };
  
  export default ReportDone;