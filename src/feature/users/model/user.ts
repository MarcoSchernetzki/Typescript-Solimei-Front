export type Role = 'user' | 'admin';

export type UserI = {
    id: string;
    name: string;
    email: string;
    passwd: string;
    role: Role;
};

export type ProtoUserI = {
    name: string;
    email: string;
    passwd: string;
    role: Role;
    id?: string;
};

export type UserToken = {
    user: UserI;
    token: string;
};
