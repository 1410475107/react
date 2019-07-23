import Home from './components/Home/Home';
import About from './components/About/About';
import Abouti from './components/About/Abouti';
import BookList from  './components/Book/BookList';
import BookInfo from  './components/Book/BookInfo';

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
    },
    {
        path: '/blist',
        component: BookList
    },
    {
        // path: '/binfo/:bid',
        path: '/binfo',
        component: BookInfo
    }
];

export default routers;