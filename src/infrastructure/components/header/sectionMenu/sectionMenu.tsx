import { useNavigate } from 'react-router-dom';
import { menuRoutesI } from '../../../constants/menuRoutes/menuRoutes';
import './sectionMenu.css';

export const SectionMenu = ({
    sections,
    setIsOpen,
}: {
    sections: Array<menuRoutesI>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const navigate = useNavigate();
    const handleClick = (path: string) => {
        navigate(path);
        setIsOpen(false);
    };
    return (
        sections && (
            <ul className="menu-ul">
                {sections.map((item) => {
                    return (
                        <li
                            className="menu-li"
                            key={item.text}
                            onClick={() => handleClick(item.path)}
                        >
                            <p>{item.text}</p>
                        </li>
                    );
                })}
            </ul>
        )
    );
};
