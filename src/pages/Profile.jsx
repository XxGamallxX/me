
import "./Profile.css"












export default function Profile() {

const userdata = {
    name : "mark" ,
    email : "mark@gmail.com",
    phone : "01209805254",
    birthdate : "1/9/2000" ,
}




    return (
        <>
        <div className="vh-100 d-grid justify-content-center align-items-center profile-grid-layout  BgReport">
            <div className=" bg-white mx-auto justify-between profile-container-left h-max-content">
                <div className=" col  ">
                    <h6 className="mb-0">{userdata.name}</h6>
                    <p className="mb-0">{userdata.email}</p>
                    <hr />
                  <div className="d-flex flex-column">
                    <button className="btn-profile-left bg-white text-start border-0 py-2 px-0"><img className="px-2" src="./Rafeeq/user-01.png" alt="" />My Profile</button>
                    <button className="btn-profile-left bg-white text-start border-0 py-2 px-0 mt-2"><img className="px-2" src="./Rafeeq/log-out-04.png" alt="" />Logout</button>
                    </div>
                </div>
            </div>

            <div className=" col w-75 p-5 bg-container-profile profile-container-right">
             
                <div className="bg-white p-2 profile-container-right ">
                  <h6 className="mb-0">{userdata.name}</h6>
                  <h6 className="mb-2">{userdata.email}</h6>
                  <hr className="mb-1 " />
                </div>

                <form className="pt-4 d-block ">
                    <div className="profile-container-right bg-white mb-3">
                        <input className="w-100 border-0 p-3 " type="text" placeholder="Name"></input>
                        <hr className="m-0 mx-2" />
                        <input className="w-100 border-0 p-3 " type="email"  placeholder="Email"></input>
                        <hr className="m-0 mx-2" />
                        <input className="w-100 border-0 p-3 " type="tel" placeholder="Phone"></input>
                        <hr className="m-0 mx-2" />
                        <input className="w-100 border-0 p-3 " type="date" placeholder="Birthdate"></input>
                        <hr className="m-0 mx-2" />
                    </div>
                    <button className="btn-profile border-0 mt-4 px-4 py-2 ">Save Changes</button>
                </form>

            </div>


        </div>
        
        
        
        
        </>
    )
}