import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { rootState } from '../../../infrastructure/store/store';
import { WishRepository } from '../service/wish.repository';
import * as ac from '../reducer/action.creator';
import { useNavigate } from 'react-router-dom';
import { House } from '../model/house';

export const useWishes = () => {
    const navigate = useNavigate();
    const wishes = useSelector((state: rootState) => state.wishes);
    const dispatcher = useDispatch();
    const apiWish = useMemo(() => new WishRepository(), []);

    const handleLoad = useCallback(
        () =>
            apiWish
                .getAllWishes()
                .then((wishes) =>
                    dispatcher(ac.loadActionCreator(wishes.wishes))
                )
                .catch((error: Error) =>
                    console.log(error.name, error.message)
                ),
        [apiWish, dispatcher]
    );

    const handleAdd = (newWish: House, token: string) => {
        apiWish
            .create(newWish, token)
            .then((wish) => {
                dispatcher(ac.addActionCreator(wish.wishes));
                navigate('/home');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (
        id: string,
        updateWish: Partial<House>,
        token: string
    ) => {
        apiWish
            .update(id, updateWish, token)
            .then((wish: House) => {
                dispatcher(ac.updateActionCreator(wish));
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

    const handleSelect = (wish: House) => {
        apiWish
            .getWish(wish.id)
            .then(() => {
                dispatcher(ac.selectActionCreator(wish));
                navigate('/details');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        wishes,
        handleAdd,
        handleUpdate,
        handleDelete,
        handleSelect,
        handleLoad,
    };
};
