import React from 'react'
import useId from "../hooks/useId";
const Homepage = React.lazy( () => import( '../pages/Home' ) )
const Properties = React.lazy( () => import( '../pages/Properties' ) )
// import Homepage from '../pages/Home'
// import Properties from '../pages/Properties'

export const navbar = [ {
    id: useId,
    element: <React.Suspense fallback={ <React.Fragment>Loading</React.Fragment> }>
        <Homepage />,
    </React.Suspense>,
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false
},
{
    id: useId,
    element: <React.Suspense fallback={ <React.Fragment>Loading</React.Fragment> }>

        <Properties />,
    </React.Suspense>,
    title: 'Properties',
    path: '/properties',
    private: false,
    hidden: false
},
{
    id: useId,
    element: <h1 >Signin</h1>,
    title: 'Sign In',
    path: '/signin',
    private: false,
    hidden: true
},
{
    id: useId,
    element: <h1 >Signup</h1>,
    title: 'Sign Up',
    path: '/signup',
    private: false,
    hidden: true
}
]