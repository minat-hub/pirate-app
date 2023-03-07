import { Navigate, useRoutes } from 'react-router-dom';
import './App.css';
import RegisterLogin from './Pages/RegisterLogin';
import Dashboard from './Pages/Dashboard';
import NewPirate from './Pages/NewPirate';
import PirateDetails from './Pages/PirateDetails';
// import NewDashboard from './Pages/NewDashboard';

function App() {
  return useRoutes([
    // { path: '/landingpage', element: <Landing /> },
    { path: '/', element: <RegisterLogin /> },
    { path: '/pirates', element: <Dashboard /> },
    { path: '/pirates/new', element: <NewPirate /> },
    { path: '/pirates/:id', element: <PirateDetails /> },
    // { path: '/landingpage', element: <Newlanding /> }
    // { path: 'resetemail', element: <ResetPasswordEmail /> },
    { path: '*', element: <Navigate to="/404" replace /> }
    // { path: '*', element: <Navigate to="/dashboard" /> }
  ]);
}

export default App;
