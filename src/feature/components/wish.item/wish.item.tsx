import { useWishes } from '../../wishes/hook/use.wishes';
import { House } from '../../wishes/model/house';

export function WishItem({ item }: { item: House }) {
    const { handleSelect } = useWishes();

    return (
        <>
            <div className="container">
                <img
                    className="image"
                    src={item.image}
                    alt={item.street}
                    width="150px"
                    height="150px"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSelect(item);
                    }}
                />
            </div>
        </>
    );
}
