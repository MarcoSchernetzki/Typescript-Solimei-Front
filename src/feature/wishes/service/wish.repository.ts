import { House } from '../model/house';
import { RepoWish } from './repository';

export class HouseRepository implements RepoWish {
    url: string;
    constructor(url = '') {
        this.url = 'http://localhost:7700/house';
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    async getWish(id: string): Promise<House> {
        return fetch(`${this.url}/${id}`)
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    async getAllWishes(): Promise<{ houses: House[] }> {
        return fetch(`${this.url}`)
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    async findInspo(house: Partial<House>): Promise<House[]> {
        return fetch(`${this.url}/find`, {
            method: 'GET',
            body: JSON.stringify(house),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }

    async create(
        house: Partial<House>,
        token: string
    ): Promise<{ houses: House }> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(house),
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }

    async update(
        id: string,
        partialWish: Partial<House>,
        token: string
    ): Promise<House> {
        return fetch(`${this.url}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialWish),
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => data.wish)
            .catch((error) => {
                return `${error}`;
            });
    }

    async delete(id: string, token: string): Promise<string> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => data.id)
            .catch((error) => {
                return `${error}`;
            });
    }
}
