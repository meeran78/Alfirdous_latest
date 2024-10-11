const routesConstants = {
    ROOT:'/',
    HOME: '/',
    SERVICES: '/services',
    ABOUT: '/about',
    CEMETRIES: '/cemetries',
    FORMS: '/forms',
    FAQS: '/faqs',
    CONTACT: '/contactus',
    LOGIN: '/login',
    SIGNUP: '/signup',
    SIGNUP_SUCCESS: '/signup-success',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    PROFILE: '/profile',
    PAGE_NOT_FOUND: '*',
    
}
const routes =[
    {
        name: 'Home',
        path: routesConstants.HOME,
        id: 1
    },
    {
        name: 'Services',
        path: routesConstants.SERVICES,
        id: 2
    },
    {
        name: 'About',
        path: routesConstants.ABOUT,
        id: 3
    },
    {
        name: 'Cemeteries',
        path: routesConstants.CEMETRIES,
        id: 4
    },
    {
        name: 'Forms',
        path: routesConstants.FORMS,
        id: 5
    },
]

export default routesConstants

