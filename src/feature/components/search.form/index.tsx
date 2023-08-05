import './style.css';
import { SyntheticEvent, useState } from 'react';
import { useHouse } from '../../wishes/hook/use.wishes';
import { useUsers } from '../../users/hook/use.users';
import { House } from '../../wishes/model/house';
import {
    locations,
    propertyTypes,
    zones,
} from '../../../infrastructure/data/data';

export const SearchForm = () => {
    const { users } = useUsers();
    const { handleAdd } = useHouse();
    const [addFormState, setAddFormState] = useState({
        street: '',
        image: '',
        price: 0,
        zone: '',
        location: '',
        description: '',
        isAvailable: true,
        environments: '',
        propertyType: '',
    });

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setAddFormState({
            ...addFormState,
            [element.name]: element.value,
        });
    };

    const handleAddSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd(addFormState as House, users.token as string);
    };
    return (
        <div className="container-search">
            <p className="search-tittle">Busque propiedades en Ituzaingó</p>
            <p className="search-subtitle">Encuentre su próximo hogar</p>
            <form onSubmit={handleAddSubmit}>
                <select
                    name="propertyType"
                    className="form-input select"
                    onInput={handleInput}
                >
                    {propertyTypes.map((item, index) => {
                        return (
                            <option
                                disabled={index === 0}
                                selected={index === 0}
                            >
                                {item}
                            </option>
                        );
                    })}
                </select>
                <select
                    name="zone"
                    className="form-input select"
                    onInput={handleInput}
                >
                    {zones.map((item, index) => {
                        return (
                            <option
                                disabled={index === 0}
                                selected={index === 0}
                            >
                                {item}
                            </option>
                        );
                    })}
                </select>
                <select
                    name="location"
                    className="form-input select"
                    onInput={handleInput}
                >
                    {locations.map((item, index) => {
                        return (
                            <option
                                disabled={index === 0}
                                selected={index === 0}
                            >
                                {item}
                            </option>
                        );
                    })}
                </select>
                <select
                    name="environments"
                    className="form-input select"
                    onInput={handleInput}
                >
                    <option disabled selected>
                        Selecciona la cantidad de ambientes
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button className="buttonSearch" type="submit">
                    Buscar
                </button>
            </form>
        </div>
    );
};
