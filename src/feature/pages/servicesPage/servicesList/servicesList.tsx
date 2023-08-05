import { data } from '../../../../infrastructure/data/data';
import { House } from '../../../wishes/model/house';
import { ServiceItem } from '../serviceItem/serviceItem';
import './servicesList.css';

export const ServicesList = () => {
    return (
        <div className="container-services-list">
            <ul className="services-list">
                {data.map((item: House) => (
                    <ServiceItem key={item.id} item={item}></ServiceItem>
                ))}
            </ul>
            <div className="tittle-items">
                <p>Casas</p>
                <img
                    src="../../../../assets/arrow-right.svg"
                    alt="arrow"
                    width="30px"
                />
            </div>
            <p className="service-subtitle">
                Si necesitas mucho espacio, busca un alojamiento entero que no
                compartas con otros huéspedes.
            </p>
        </div>
    );
};
