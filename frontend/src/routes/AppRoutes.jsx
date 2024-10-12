import { Route, Routes } from 'react-router-dom'
import routesConstants from '../constants/routeConstants'
import LayoutContainer from '../layout/LayoutContainer'
// Component Import
import ContactUs from '../components/ContactUs'

//Screen Import
import Home from '../screens/Home'
import FuneralService from '../screens/FuneralServicesDetails'
import Documents from '../screens/Documents'
import Services from '../screens/Services'
import About from '../screens/About'
import Cemeteris from '../screens/Cemeteries'
import FAQS from '../screens/FAQs'
import PageNotFound from '../screens/PageNotFound'
const AppRoutes = () => {
  return (
   <Routes>
    <Route path={routesConstants.ROOT} element={<LayoutContainer />} >
        <Route path={routesConstants.HOME} element={<Home />} />
        <Route path={routesConstants.CONTACT} element={<ContactUs/>} />
        <Route path={routesConstants.FUNERALSERVICEDETAILS} element={<FuneralService />} />
        <Route path={routesConstants.DOCUMENTS} element={<Documents />} />
        <Route path={routesConstants.SERVICES} element={<Services />} />
        <Route path={routesConstants.ABOUT} element={<About />} />
        <Route path={routesConstants.CEMETRIES} element={<Cemeteris />} />
        <Route path={routesConstants.FAQS} element={<FAQS />} />
    </Route>
    <Route path={routesConstants.PAGE_NOT_FOUND} element={<PageNotFound />} />
   </Routes>
  )
}

export default AppRoutes