import { Link } from 'react-router-dom';
import LoginForm from '../../components/login.form/login.form';
import './login.page.css';

function LoginPage() {
    return (
        <>
            <h1>Acceso</h1>
            <LoginForm />
            <Link to={'/register'} className="link">
                Crear cuenta
            </Link>
        </>
    );
}
export default LoginPage;
