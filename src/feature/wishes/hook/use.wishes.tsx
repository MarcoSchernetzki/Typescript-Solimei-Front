import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { rootState } from '../../../infrastructure/store/store';
import { HouseRepository } from '../service/wish.repository';
import * as ac from '../reducer/action.creator';
import { useNavigate } from 'react-router-dom';
import { House } from '../model/house';

export const useHouse = () => {
    const navigate = useNavigate();
    const houses = useSelector((state: rootState) => state.houses);
    const dispatcher = useDispatch();
    const apiWish = useMemo(() => new HouseRepository(), []);

    const handleLoad = useCallback(
        () =>
            apiWish
                .getAllWishes()
                .then((houses) =>
                    dispatcher(ac.loadActionCreator(houses.houses))
                )
                .catch((error: Error) =>
                    console.log(error.name, error.message)
                ),
        [apiWish, dispatcher]
    );

    const handleAdd = (newWish: House, token: string) => {
        apiWish
            .create(newWish, token)
            .then((house) => {
                dispatcher(ac.addActionCreator(house.houses));
                navigate('/home');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (
        id: string,
        updateHouse: Partial<House>,
        token: string
    ) => {
        apiWish
            .update(id, updateHouse, token)
            .then((house) => {
                dispatcher(ac.updateActionCreator(house));
                navigate('/home');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: string, token: string) => {
        apiWish
            .delete(id, token)
            .then((dataId) => {
                dispatcher(ac.deleteActionCreator(dataId));
                navigate('/home');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleSelect = (house: House) => {
        localStorage.setItem('selectedHouse', JSON.stringify(house));
        apiWish
            .getWish(house.id)
            .then(() => {
                dispatcher(ac.selectActionCreator(house));
                navigate('/details');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };
    const handleSearch = (house: House) => {
        localStorage.setItem('selectedHouse', JSON.stringify(house));
        apiWish
            .findInspo(house)
            .then(() => {
                dispatcher(ac.selectActionCreator(house));
                navigate('/details');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        houses,
        handleAdd,
        handleUpdate,
        handleDelete,
        handleSelect,
        handleLoad,
    };
};
