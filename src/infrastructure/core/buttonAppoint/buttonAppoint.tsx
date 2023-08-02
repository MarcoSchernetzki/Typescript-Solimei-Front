import './buttonAppoint.css';
export const ButtonAppoint = () => {
    return (
        <button
            className="button-appoint"
            placeholder="pedir cita"
            onClick={() => {
                window.location.assign(
                    'https://widget.treatwell.es/establecimiento/100043880/servicios/'
                );
            }}
        >
            Pedir Cita
        </button>
    );
};
