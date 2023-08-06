export const menuRoutes = [
    {
        text: 'Ingresar',
        path: '/register',
        isAdmin: false,
    },
    {
        text: 'Home',
        path: '/home',
        isAdmin: false,
    },
    {
        text: 'Añadir',
        path: '/create',
        isAdmin: true,
    },
    {
        text: 'Propiedades',
        path: '/propiedades',
        isAdmin: false,
    },
    {
        text: 'Quienes somos',
        path: '/about-me',
        isAdmin: false,
    },
    {
        text: 'Cerrar session',
        path: '/logout',
        isAdmin: false,
    },
];

export type menuRoutesI = {
    text: string;
    path: string;
    isAdmin: boolean;
};
