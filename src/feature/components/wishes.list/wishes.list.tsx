import { useEffect } from 'react';
import { useUsers } from '../../users/hook/use.users';
import { useWishes } from '../../wishes/hook/use.wishes';
import './wishes.list.css';

export function WishesList() {
    const { users } = useUsers();
    const { handleLoad } = useWishes();
    useEffect(() => {
        handleLoad();
    }, [handleLoad, users]);

    if (!users) return <p>loading...</p>;
    return (
        <>
            <ul className="wishlist">
                <li></li>
            </ul>
        </>
    );
}
