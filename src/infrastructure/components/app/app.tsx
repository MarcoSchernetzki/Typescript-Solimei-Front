import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/routes';
import './app.css';

export const App = () => {
    return (
        <Layout>
            <main>
                <AppRoutes />
            </main>
        </Layout>
    );
};
