import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  "./SignupPage.css";
import { v4 as uuidv4 } from 'uuid';



const SignupPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    yearOfBirth: '',
    password: '',
    confirmPassword: '',
  });
  

  // Generate years for dropdown (current year to 100 years ago)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 101 }, (_, i) => currentYear - i);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      // Validate first step
      if (!formData.fullName || !formData.email || !formData.phone || !formData.yearOfBirth) {
        alert('Please fill in all fields');
        return;
      }
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Store user data in localStorage
    // delete
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      phone: formData.phone,
      yearOfBirth: formData.yearOfBirth
    });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful! Please login.');
    navigate('/login');
  };

  return (
  <>
    <div className='myauthbg '>
    <div className="container pt-4 "> 
       <h3 className='m-3 position-absolute'>Rafeeq</h3>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card form-container">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Sign Up</h2>

                {step === 1 ? (
                  <form onSubmit={handleNext}>
                    <h3>Welcome to Rafeeq!</h3>
                    <h5 >Together, we fix what matters. Sign up and get started. </h5>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="yearOfBirth" className="form-label">Year of Birth</label>
                      <select
                        className="form-select"
                        id="yearOfBirth"
                        name="yearOfBirth"
                        value={formData.yearOfBirth}
                        onChange={handleChange}
                        required
                        >
                        <option value="">Select Year</option>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn Main-btn mx-auto">Next</button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div className="d-grid gap-2">
                      <button type="button" className="btn Main-btn mx-auto" onClick={() => setStep(1)}>
                        Back
                      </button>
                      <button type="submit" className="btn Main-btn mx-auto">
                        Sign Up
                      </button>
                    </div>
                  </form>
                )}
                <div className="text-center mt-3">
                  <p>
                    Already have an account?
                    <button
                      className="btn btn-link"
                      onClick={() => navigate('/login')}
                      >
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

  );
};

export default SignupPage; 