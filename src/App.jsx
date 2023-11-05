import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { db } from './firebase/firebase';
import RootLayout from './components/RootLayout';
import Dashboard from './components/Dashboard/Dashboard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'login',
                element: <p>You have logged in</p>
            }
        ]
    }

]);


function App () {

    return (
        <RouterProvider router={router} />
    )
}

export default App
