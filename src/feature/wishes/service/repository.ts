import { House } from '../model/house';

export interface RepoWish {
    getWish: (id: string) => Promise<House>;
    findInspo: () => Promise<House[]>;
    create: (wish: Partial<House>, token: string) => Promise<{ houses: House }>;
    update: (
        id: string,
        partialWish: Partial<House>,
        token: string
    ) => Promise<House>;
    delete: (id: string, token: string) => Promise<string>;
}
