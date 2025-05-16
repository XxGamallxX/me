import { useState } from 'react';
import MediaQuery from 'react-responsive';
import { NavLink, useNavigate } from 'react-router-dom';

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@(gmail\.com|yahoo\.com)$/;
    return email.length <= 40 && pattern.test(email);
  };

  const isValidPhone = (phone) => {
    const pattern = /^(010|011|012|015)\d{8}$/;
    return pattern.test(phone);
  };

  const handleNext = (e) => {
    e.preventDefault();

    // Validate first step
    if (!formData.fullName.trim()) {
      alert('Full name is required');
      return;
    }
    if (!isValidEmail(formData.email)) {
      alert('Email must be a valid gmail.com or yahoo.com address, max 40 characters');
      return;
    }
    if (!isValidPhone(formData.phone)) {
      alert('Phone must be egyption number and with 11 digits');
      return;
    }
    if (!formData.yearOfBirth) {
      alert('Please select your year of birth');
      return;
    }

    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      phone: formData.phone,
      yearOfBirth: formData.yearOfBirth,
    });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful! Please login.');
    navigate('/login');
  };

  return (
    <>
      <div className='myauthbg d-flex align-items-center justify-content-center'>
        <MediaQuery minWidth={1224}>
          <h1 className='m-3 mt-5 align-self-start text-white position-absolute top-right-text'><strong>RAFEEQ</strong></h1>
        </MediaQuery>

        {step === 1 ? (
          <div className='w-60 pt-4 h-90 form-container d-flex my-auto justify-content-center align-items-center overflow-auto'>
            <div className='w-75 h-max-content'>
              <form onSubmit={handleNext}>
                <h3><strong>Welcome to Rafeeq!</strong></h3>
                <h5 className='py-4'>Together, we fix what matters. Sign up and get started.</h5>

                <div className='mb-3'>
                  <label htmlFor='fullName' className='color-1F2937'>Full Name</label>
                  <input
                    type='text'
                    className='form-control my-input'
                    id='fullName'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='email' className='color-1F2937'>Email address</label>
                  <input
                    type='email'
                    className='form-control my-input'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='phone' className='color-1F2937'>Phone Number</label>
                  <input
                    type='tel'
                    className='form-control my-input'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='yearOfBirth' className='color-1F2937'>Year of Birth</label>
                  <select
                    className='form-select'
                    id='yearOfBirth'
                    name='yearOfBirth'
                    value={formData.yearOfBirth}
                    onChange={handleChange}
                    required
                  >
                    <option value=''>Select Year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div className='d-grid my-3'>
                  <button type='submit' className='Main-btn mx-auto '>Next</button>
                </div>

                <div className='d-flex justify-content-center mt-1'>
                  <p className='text-center mb-0'>
                    Already have an account?{' '}
                    <NavLink to='/login' className='text-decoration-none color-1F2937'>Login</NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className='w-60 h-75 form-container d-flex my-auto justify-content-center align-items-center'>
            <div className='w-75 h-max-content'>
              <form onSubmit={handleSubmit} className='min-w-100'>
                <div className='mb-3'>
                  <h2><strong>Password</strong></h2>
                  <label htmlFor='password' className='my-label'>Password</label>
                  <input
                    type='password'
                    className='form-control my-input'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='confirmPassword' className='my-label'>Confirm Password</label>
                  <input
                    type='password'
                    className='form-control my-input'
                    id='confirmPassword'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='d-grid gap-2'>
                  <button type='button' className='Main-btn mx-auto' onClick={() => setStep(1)}>
                    Back
                  </button>
                  <button type='submit' className='Main-btn mx-auto'>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SignupPage;
