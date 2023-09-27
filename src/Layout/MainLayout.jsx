import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Donation from '../components/Donation/Donation';
import Statistics from '../components/Statistics/Statistics';
import DitemDetail from '../Pages/DonateDetail/DitemDetail';
import ErrorPage from '../components/Errorpage/Errorpage';


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                loader:()=> fetch('../data.json'),
                element:<Home></Home>
            },
            {
                path:'/donation',
                element:<Donation></Donation>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/donationdetail/:id',
                loader:()=> fetch('../data.json'),
                element:<DitemDetail></DitemDetail>
            }
        ]
    }
   
])

export default Routes;