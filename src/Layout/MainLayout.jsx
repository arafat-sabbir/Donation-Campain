import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Donation from '../components/Donation/Donation';
import Statistics from '../components/Statistics/Statistics';
import Donatedetail from '../Pages/DonateDetail/Donatedetail';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
                path:'/home/:id',
                loader:()=> fetch('../data.json'),
                element:<Donatedetail></Donatedetail>
            }
        ]
    }
   
])

export default Routes;