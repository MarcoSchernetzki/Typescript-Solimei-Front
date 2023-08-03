import './style.css';
import { SyntheticEvent, useState } from 'react';
import { useWishes } from '../../wishes/hook/use.wishes';
import { useUsers } from '../../users/hook/use.users';
import { House } from '../../wishes/model/house';

export const SearchForm = () => {
    const { users } = useUsers();
    const { handleAdd } = useWishes();
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
                <label>
                    <input
                        type="text"
                        name="propertyType"
                        required
                        placeholder="Tipo de Inmueble"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="te"
                        name="zone"
                        placeholder="Zona"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Localidad"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="environments"
                        placeholder="Ambientes"
                        onInput={handleInput}
                    />
                </label>
                <button className="buttonSearch" type="submit">
                    Buscar
                </button>
            </form>
        </div>
    );
};
