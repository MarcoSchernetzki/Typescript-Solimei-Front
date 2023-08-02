import { useRef } from 'react';
import { Portals } from '../portals';
import { CSSTransition } from 'react-transition-group';
import './modal.css';

export const Modal = ({
    children,
    isOpen = false,
    className = '',
    handleClose,
}: {
    children: JSX.Element;
    isOpen: boolean;
    className?: string;
    handleClose: () => void;
}) => {
    const nodeRef = useRef(null);
    return (
        <Portals wrapperId="portal-modal-container">
            <CSSTransition
                nodeRef={nodeRef}
                in={isOpen}
                timeout={{ enter: 0, exit: 300 }}
                classNames="modal"
                unmountOnExit
            >
                <div
                    ref={nodeRef}
                    className={`container-wrapper ${className}`}
                    onClick={handleClose}
                >
                    <div
                        className="wrapper-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            </CSSTransition>
        </Portals>
    );
};
