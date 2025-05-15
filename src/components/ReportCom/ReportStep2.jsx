import { useState } from "react";

function ReportStep2() {
  const [imageUrl, setImageUrl] = useState("");

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
  return (
    <><form ></form>
      <div className="w-100 bg-white justify-center ">
        <div className="">
          <div
            className={`drop-zone ${isDragging ? "dragging" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="fileInput"
               onChange={(event) => {
                uploadImage(event.target.files);
              }}
              className="file-input"
            />
            <label htmlFor="fileInput" className="upload-label">
              <img src="/upload-icon.png" alt="Upload" />
              <span>
                {fileName || "Drag & drop or click to upload a photo"}
              </span>
            </label>
          </div>
          <div className="bg-danger col">helo</div>
        </div>
      </div>

      {/* <img src={imageUrl} alt="" /> */}
    </>
  );
}

export default ReportStep2;

