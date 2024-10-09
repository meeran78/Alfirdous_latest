import { Route, Routes } from 'react-router-dom'
import routesConstants from '../constants/routeConstants'
import LayoutContainer from '../layout/LayoutContainer'
// Component Import
import ContactUs from '../components/ContactUs'

//Screen Import
import Home from '../screens/Home'

import PageNotFound from '../screens/PageNotFound'
const AppRoutes = () => {
  return (
   <Routes>
    <Route path={routesConstants.ROOT} element={<LayoutContainer />} >
        <Route path={routesConstants.HOME} element={<Home />} />
        {/* <Route path={routesConstants.SERVICES} element={} /> */}
        <Route path={routesConstants.CONTACT} element={<ContactUs/>} />

    </Route>
    <Route path={routesConstants.PAGE_NOT_FOUND} element={<PageNotFound />} />
   </Routes>
  )
}

export default AppRoutes