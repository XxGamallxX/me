import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';


const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
//delete
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
      setIsLoggedIn(true);
    }
  }, []);



  

  return (
    // <div className="container-fluid mt-6 vh-100" id='Home'>
    //   <div className="row justify-content-center">
    //     <div className="col-md-8 text-center">
    //       <h1 className="mb-4">Road Damage Reporting System</h1>
    //       <p className="lead mb-4">
    //         Help improve our roads by reporting damage and issues you encounter.
    //       </p>
    //       {isLoggedIn ? (
    //         <div>
    //           <p className="mb-4">Welcome, {user.fullName}!</p>
    //           <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
    //             <button
    //               className="btn btn-primary btn-lg px-4 gap-3"
    //               onClick={() => navigate('/report')}
    //             >
    //               Submit Report
    //             </button>
    //             {/* <button
    //               className="btn btn-outline-secondary btn-lg px-4"
    //               onClick={handleLogout}
    //             >
    //               Logout
    //             </button> */}
    //           </div>
    //         </div>
    //       ) : (
    //         <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
    //           <button
    //             className="btn btn-primary btn-lg px-4 gap-3"
    //             onClick={() => navigate('/login')}
    //           >
    //             Login
    //           </button>
    //           <button
    //             className="btn btn-outline-secondary btn-lg px-4"
    //             onClick={() => navigate('/signup')}
    //           >
    //             Sign Up
    //           </button>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <>
    {isLoggedIn ? (
      <>
      <Navbar/>
      <div className="container-fluid mt-6 vh-100 HomeBgImage d-flex justify-content-center align-items-center" id='Home'>
        <div className='container  my-min-content'>
          <h1 className='mb-5 my-colorlightblue1'><strong>Rafeeq</strong></h1>
          <p className='my-m-0 h3 my-colorlightblue2'>Report road issues around you.</p>
          <p className='my-m-0 h3 my-colorlightblue2'>Track their progress in real-time.</p>
          <p className='my-m-0 h3 my-colorlightblue2'>Be part of the change.</p>
          <div className='mt-3 d-flex justify-content-between'>
            <button onClick={() => navigate('/Track Report')} className='btn-landpage shadow-box-btn-landpage h1 my-3 p-3 my-black '><strong>Track Report</strong></button>
            <button onClick={() => navigate('/Submit Report')} className='btn-landpage shadow-box-btn-landpage h1 my-3 my-black'><strong>Submit Report</strong></button>
          </div>

        </div>
      </div>
      </>
    ):(
    <>
      <Navbar/>
      <div className="container-fluid mt-6 vh-100 HomeBgImage d-flex justify-content-center align-items-center" id='Home'>
      <div className='container  my-min-content'>
        <h1 className='mb-5 my-colorlightblue1'><strong>Rafeeq</strong></h1>
        <p className='my-m-0 h3 my-colorlightblue2'>Report road issues around you.</p>
        <p className='my-m-0 h3 my-colorlightblue2'>Track their progress in real-time.</p>
        <p className='my-m-0 h3 my-colorlightblue2'>Be part of the change.</p>
         <div className='my-min-content text-nowrap'>
         <button className='Main-btn p-2 btn-font text-nowrap my-min-content m-3  ' onClick={() => navigate('/signup')}>Sign up</button>
        <button className='Main-btn p-2 btn-font text-nowrap my-min-content m-3  ' onClick={() => navigate('/login')}>Login</button>
         </div>
        </div>
      </div>
    </>
    )}
    </>
  );
};

export default Home ;