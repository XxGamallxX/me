// import React, { Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';


// const LandingPage  = lazy(() => import('./pages/LandingPage'));
// const LoginPage  = lazy(() => import('./pages/LoginPage'));
// const SignupPage  = lazy(() => import('./pages/SignupPage'));
// const ReportPage = lazy(() => import( './pages/ReportPage'));
// const TrackReport = lazy(() => import('./pages/TrackReport'));

 

 


// export default function AppRoutes() {
//     return (
//       <Suspense fallback={<div className=''>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/Submit Report" element={<ReportPage />} />
//           <Route path='/Track Report' element={<TrackReport />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </Suspense>
//     );
//   }