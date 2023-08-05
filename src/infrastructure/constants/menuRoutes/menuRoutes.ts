export const menuRoutes = [
    {
        text: 'Ingresar',
        path: '/register',
    },
    {
        text: 'Home',
        path: '/home',
    },
    {
        text: 'Propiedades',
        path: '/propiedades',
    },
    {
        text: 'Quienes somos',
        path: '/about-me',
    },
];
export const menuRoutesAdmin = [
    {
        text: 'Ingresar',
        path: '/register',
    },
    {
        text: 'Home',
        path: '/home',
    },
    {
        text: 'Añadir',
        path: '/create',
    },
    {
        text: 'Propiedades',
        path: '/propiedades',
    },
    {
        text: 'Quienes somos',
        path: '/about-me',
    },
];

export type menuRoutesI = {
    text: string;
    path: string;
};
