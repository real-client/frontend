import { Route, Navigate } from 'react-router-dom';

function PrivateSuperAdmin({ children }) {
  // Add your authentication logic here
  const isAuthenticated = true;

  return (
    <Route
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateSuperAdmin;