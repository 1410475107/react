import Home from './components/Home/Home';
import About from './components/About/About';
import Abouti from './components/About/Abouti';

const routers = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/abouti',
        component: Abouti
    }
];

export default routers;