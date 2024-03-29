// App.js
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Frontpage from './Frontpage';
import Phome from './Phome';
import Fhome from './faculty/Fhome';
import Dashboard from './Dashboard';
import Rejected from './Rejected';
import Accepted from './Accepted';
import Requested from './Requested';
import { UserProvider } from './UserContext'; // Import UserProvider from your context file
import Hhome from './hod/Hhome';
import Hodreject from './hod/Hodreject';
import Hodaccept from './hod/Hodaccept';
import Hodreq from './hod/Hodreq';
import Hodcreatereq from './hod/Hodcreatereq';
import Fcreatereq from './faculty/Fcreatereq';

const App = () => {
  const root = createBrowserRouter([
    {
      path: '/',
      element: <Frontpage />
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/fhome',
      element: <Fhome />
    },
    {
      path:'/phome',
      element:<Phome />
    },
    {
      path:'/reject',
      element:<Rejected />
    },
    {
      path:'/accept',
      element:<Accepted />
    },
    {
      path:'/new',
      element:<Requested />
    },
    {
      path:'/hhome',
      element:<Hhome />
    },
    {
      path:'/hreject',
      element:<Hodreject />
    },
    {
      path:'/haccept',
      element:<Hodaccept />
    },
    {
      path:'/hnew',
      element:<Hodreq />
    },{
      path:'/createreq',
      element:<Hodcreatereq />
  },
  {
    path:'/fnew',
    element:<Fcreatereq />
  }

  ]);

  return (
    <UserProvider> {/* Wrap your entire application with the UserProvider */}
      <div>
        <RouterProvider router={root} />
      </div>
    </UserProvider>
  );
};

export default App;
