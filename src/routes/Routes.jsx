// import React, { Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';

// const Home      = lazy(() => import('./Home'));
// const About     = lazy(() => import('./About'));
// const Dashboard = lazy(() => import('./Dashboard'));
// const NotFound  = lazy(() => import('./NotFound'));



// export default function AppRoutes() {
//     return (
//       <Suspense fallback={<div className=''>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/Submit Report" element={<ReportPage />} />
//           <Route path="*" element={<Navigate to="/" />} />
//           <Route path='/Track Report' element={<TrackReport />} />
//         </Routes>
//       </Suspense>
//     );
//   }