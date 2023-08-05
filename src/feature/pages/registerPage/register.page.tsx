import { Link } from 'react-router-dom';
import RegisterForm from '../../components/registerForm/register.form';
import './register.page.css';

function RegisterPage() {
    return (
        <>
            <h1>Registro</h1>
            <RegisterForm />
            <div className="div">
                <Link to={'/login'} className="link">
                    ¿Tienes cuenta? Identifícate
                </Link>
            </div>
        </>
    );
}
export default RegisterPage;
