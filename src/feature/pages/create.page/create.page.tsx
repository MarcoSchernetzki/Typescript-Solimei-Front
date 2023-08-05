import { useLocation } from 'react-router-dom';
import CreateForm from '../../components/create.form/create.form';

function CreatePage() {
    const location = useLocation();
    return (
        <>
            <h1>
                {location.state === 'Añadir'
                    ? 'Añade una Propiedad'
                    : 'Modifica una Propiedad'}
            </h1>
            <div>
                <CreateForm />
            </div>
        </>
    );
}
export default CreatePage;
