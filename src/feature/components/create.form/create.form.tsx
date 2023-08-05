import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../users/hook/use.users';
import { useHouse } from '../../wishes/hook/use.wishes';
import { House, Location, PropertyType, Zone } from '../../wishes/model/house';
import {
    environments,
    locations,
    propertyTypes,
    zones,
} from '../../../infrastructure/data/data';

export function CreateForm() {
    const navigate = useNavigate();

    const { users } = useUsers();
    const { handleAdd, handleUpdate, houses } = useHouse();
    console.log(houses, '++');

    const [addFormState, setAddFormState] = useState({
        street: houses.selectedHouse ? houses.selectedHouse?.street : '',
        image: houses.selectedHouse ? houses.selectedHouse?.image : '',
        price: houses.selectedHouse ? houses.selectedHouse?.price : 0,
        zone: houses.selectedHouse ? houses.selectedHouse?.zone : ('' as Zone),
        location: houses.selectedHouse
            ? houses.selectedHouse?.location
            : ('' as Location),
        description: houses.selectedHouse
            ? houses.selectedHouse?.description
            : '',
        isAvailable: houses.selectedHouse
            ? houses.selectedHouse?.isAvailable
            : true,
        environments: houses.selectedHouse
            ? houses.selectedHouse?.environments
            : '',
        propertyType: houses.selectedHouse
            ? houses.selectedHouse?.propertyType
            : ('' as PropertyType),
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

        if (houses.selectedHouse) {
            return handleUpdate(
                houses.selectedHouse?.id as string,
                addFormState,
                users.token as string
            );
        }
        return handleAdd(addFormState as House, users.token as string);
    };

    return (
        <div>
            <form onSubmit={handleAddSubmit}>
                <label>
                    <input
                        type="text"
                        name="street"
                        required
                        placeholder="Direccion"
                        onInput={handleInput}
                        value={addFormState.street}
                    />
                </label>
                <label>
                    <input
                        type="url"
                        name="image"
                        placeholder="Imagen (url)"
                        onInput={handleInput}
                        value={addFormState.image}
                    />
                </label>
                <label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Precio (u$s)"
                        onInput={handleInput}
                        value={addFormState.price}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Descripcion"
                        onInput={handleInput}
                        value={addFormState.description}
                    />
                </label>
                <select
                    name="propertyType"
                    className="form-input select"
                    onInput={handleInput}
                >
                    {propertyTypes.map((item, index) => {
                        return (
                            <option
                                disabled={index === 0}
                                selected={
                                    index === 0 ||
                                    addFormState.propertyType === item
                                }
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
                                key={index}
                                disabled={index === 0}
                                selected={
                                    index === 0 || addFormState.zone === item
                                }
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
                                key={index}
                                disabled={index === 0}
                                selected={
                                    index === 0 ||
                                    addFormState.location === item
                                }
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
                    {environments.map((item, index) => {
                        return (
                            <option
                                key={index}
                                disabled={index === 0}
                                selected={
                                    index === 0 ||
                                    addFormState.environments === item
                                }
                            >
                                {item}
                            </option>
                        );
                    })}
                </select>
                <div className="buttons">
                    <button className="buttonAdd" type="submit">
                        Guardar
                    </button>
                    <button
                        className="buttonInspo"
                        onClick={() => {
                            navigate('/home');
                        }}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateForm;
