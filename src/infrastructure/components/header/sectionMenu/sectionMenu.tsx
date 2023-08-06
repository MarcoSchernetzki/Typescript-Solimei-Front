import { useState } from 'react';
import { NavigateOptions, useNavigate } from 'react-router-dom';
import { menuRoutesI } from '../../../constants/menuRoutes/menuRoutes';
import './sectionMenu.css';
import { useSelector } from 'react-redux';
import { rootState } from '../../../store/store';
import { Modal } from '../../../core/modal/modal';
import { useUsers } from '../../../../feature/users/hook/use.users';

export const SectionMenu = ({
    sections,
    setIsOpen,
}: {
    sections: Array<menuRoutesI>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const navigate = useNavigate();
    const user = useSelector((state: rootState) => state.users.user);
    const [openModal, setOpenModal] = useState(false);
    const { handleLogout } = useUsers();
    const handleClick = (path: string, state: NavigateOptions) => {
        if (path === '/logout') {
            return setOpenModal(true);
        }
        navigate(path, state);
        setIsOpen(false);
    };
    return (
        sections && (
            <>
                <ul className="menu-ul">
                    {sections.map((item) => {
                        if (
                            (item.isAdmin && user?.role !== 'admin') ||
                            (item.text === 'Ingresar' && user) ||
                            (item.text === 'Cerrar session' && !user)
                        ) {
                            return;
                        }
                        return (
                            <li
                                className="menu-li"
                                key={item.text}
                                onClick={() =>
                                    handleClick(item.path, { state: item.text })
                                }
                            >
                                <p>{item.text}</p>
                            </li>
                        );
                    })}
                </ul>
                <Modal
                    isOpen={openModal}
                    handleClose={() => setOpenModal(false)}
                >
                    <div>
                        <h2 style={{ margin: '0 auto 15px' }}>
                            Estas seguro que quieres cerrar session?
                        </h2>
                        <div className="container-buttons">
                            <button
                                className="buttonInspo"
                                onClick={() => {
                                    handleLogout();
                                    setOpenModal(false);
                                    setIsOpen(false);
                                }}
                            >
                                Aceptar
                            </button>
                            <button
                                className="buttonInspo"
                                onClick={() => {
                                    setOpenModal(false);
                                }}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </Modal>
            </>
        )
    );
};
