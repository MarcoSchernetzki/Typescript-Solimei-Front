import { ServicesList } from './servicesList/servicesList';
import './servicesPage.css';

export const ServicesPage = () => {
    return (
        <div className="container-services">
            <h2 className="services-tittle">Busca tu Hogar</h2>
            <ServicesList />
            <ServicesList />
            <ServicesList />
        </div>
    );
};
