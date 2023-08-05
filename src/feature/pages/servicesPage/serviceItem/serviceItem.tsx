import { useHouse } from '../../../wishes/hook/use.wishes';
import { House } from '../../../wishes/model/house';
import './serviceItem.css';

export const ServiceItem = ({ item }: { item: House }) => {
    const { handleSelect } = useHouse();
    return (
        <li
            key={item.id}
            className="container-service-item"
            onClick={(e) => {
                e.preventDefault();
                handleSelect(item);
            }}
        >
            <img
                className="service-image"
                src={item.image}
                alt={item.street}
                width="320px"
                height="auto"
            />
            {/* <p className="service-name">{item.street}</p> */}
        </li>
    );
};
