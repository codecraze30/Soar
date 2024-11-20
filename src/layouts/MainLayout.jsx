import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const MainLayout = ({ children }) => {
  const location = useLocation();

  // Determine the top bar title based on the current route
  const getTopbarTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/settings':
        return 'Settings';
      // Add more cases for other routes as needed
      default:
        return '';
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Topbar title={getTopbarTitle()} />
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
