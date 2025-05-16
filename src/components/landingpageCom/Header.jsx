import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';


const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
      setIsLoggedIn(true);
    }
  }, []);



  

  return (

    <>
    {isLoggedIn ? (
      <>
      <Navbar/>
      <div className="container-fluid mt-6 vh-100 HomeBgImage d-flex justify-content-center align-items-center mt-fornav" id='Home'>
        <div className='container  my-min-content'>
          <h1 className='mb-5 my-color0A1F44'><strong>Rafeeq</strong></h1>
          <p className='my-m-0 h3 my-colorlightblue2'>Report road issues around you.</p>
          <p className='my-m-0 h3 my-colorlightblue2'>Track their progress in real-time.</p>
          <p className='my-m-0 h3 my-colorlightblue2'>Be part of the change.</p>
          <div className='mt-3 d-flex justify-content-end'>
            <button onClick={() => navigate('/Track-Report')} className='btn-landpage shadow-box-btn-landpage border-0 fs-4 my-3 p-2 px-4 my-black '><strong>Track Report</strong></button>
            <button onClick={() => navigate('/Submit-Report')} className='btn-landpage shadow-box-btn-landpage border-0  fs-4 my-3 p-2 text-white mx-5 bgF28C28 '><strong>Submit Report</strong></button>
          </div>

        </div>
      </div>
      </>
    ):(
    <>
      <Navbar/>
      <div className="container-fluid mt-6 vh-100 HomeBgImage d-flex justify-content-center align-items-center  " id='Home'>
      <div className='container  my-min-content'>
        <h1 className='mb-5 my-color0A1F44'><strong>Rafeeq</strong></h1>
        <p className='my-m-0 h3 fs-1 my-colorlightblue2'>Report road issues around you.</p>
        <p className='my-m-0 h3 fs-1 my-colorlightblue2'>Track their progress in real-time.</p>
        <p className='my-m-0 h3 fs-1 my-colorlightblue2'>Be part of the change.</p>
         <div className='my-min-content mt-5 d-flex mygap-2 flex-wrap'>
        <button className='Main-btn-small p-2 px-4  text-nowrap  border-20  font-36
        ' onClick={() => navigate('/login')}>Login</button>
         <button className='Main-btn-small  p-2 px-4  text-nowrap border-20 font-36 bgless-border
          ' onClick={() => navigate('/signup')}>Sign up</button>
         </div>
        </div>
      </div>
    </>
    )}
    </>
  );
};

export default Home ;