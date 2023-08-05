import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../users/hook/use.users';
import { useHouse } from '../../wishes/hook/use.wishes';
import './details.page.css';

export const DetailsPage = () => {
    const navigate = useNavigate();

    const { users } = useUsers();
    const { houses, handleDelete, handleSelect } = useHouse();
    const houseStorage = JSON.parse(
        localStorage.getItem('selectedHouse') as string
    );

    useEffect(() => {
        if (!houses.selectedHouse && houseStorage)
            return handleSelect(houseStorage);
    }, []);

    if (!houses.selectedHouse) return <p>loading...</p>;
    return (
        <>
            <div className="container-details">
                <img
                    src={houses.selectedHouse.image}
                    alt={houses.selectedHouse.street}
                    width="320px"
                    className="details-image"
                />
                <div className="container-description">
                    <span className="tittle-bottom" />
                    <p className="details-tittle">
                        {houses.selectedHouse.street}
                    </p>
                    <div className="details-description">
                        {houses.selectedHouse.description}
                    </div>
                    <p className="details-duration">
                        {houses.selectedHouse.isAvailable
                            ? 'Disponible'
                            : 'No esta disponible'}
                    </p>
                    <div className="details-price">
                        u$s {houses.selectedHouse.price},00
                    </div>
                    <div className="buttons">
                        <button
                            className="buttonInspo"
                            onClick={(e) => {
                                navigate('/home');
                                e.preventDefault();
                                handleDelete(
                                    houses.selectedHouse?.id as string,
                                    users.token as string
                                );
                            }}
                        >
                            Eliminar
                        </button>
                        <button
                            className="buttonInspo"
                            onClick={() => {
                                navigate('/create', { state: 'update' });
                            }}
                        >
                            Editar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
