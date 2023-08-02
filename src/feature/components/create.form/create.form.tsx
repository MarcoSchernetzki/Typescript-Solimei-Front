import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../users/hook/use.users';
import { useWishes } from '../../wishes/hook/use.wishes';
import { House } from '../../wishes/model/house';

export function CreateForm() {
    const navigate = useNavigate();

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
        <div>
            <form onSubmit={handleAddSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Nombre"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="url"
                        name="image"
                        placeholder="Imagen (url)"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="origin"
                        placeholder="¿Dónde conseguirlo? (url)"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="price"
                        placeholder="Precio aproximado (€)"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="comments"
                        placeholder="Comentarios (marca/talla/tamaño/color/etc.)"
                        onInput={handleInput}
                    />
                </label>
                <label>
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
                </label>
            </form>
        </div>
    );
}

export default CreateForm;
