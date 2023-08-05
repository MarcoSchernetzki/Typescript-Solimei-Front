import { Navigate, Route, Routes } from 'react-router-dom';
import CreatePage from '../../../feature/pages/create.page/create.page';
import { HomePage } from '../../../feature/pages/homePage/homePage';
import LoginPage from '../../../feature/pages/login.page/login.page';
import RegisterPage from '../../../feature/pages/registerPage/register.page';
import { ServicesPage } from '../../../feature/pages/servicesPage/servicesPage';
import { AboutMePage } from '../../../feature/pages/aboutMePage/aboutMePage';
import { DetailsPage } from '../../../feature/pages/details.page/details.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="create" element={<CreatePage />}></Route>
            <Route path="details" element={<DetailsPage />}></Route>
            <Route path="propiedades" element={<ServicesPage />}></Route>
            <Route path="about-me" element={<AboutMePage />}></Route>
            <Route path="home" element={<HomePage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="" element={<HomePage />}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
