import { useState } from 'react';
import { Modal } from '../../core/modal/modal';
import styles from './footer.module.css';

export const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    return (
        <>
            <footer className={styles.footer}>
                <img
                    src="../../../../assets/logo-andry-gota.svg"
                    alt="Andry Morales logo"
                    width="40px"
                />
                <div className={styles.footer_container}>
                    <a
                        href="https://wa.me/5491150069706?text=Hola,%20me%20gustaría%20recibir%20información%20sobre..."
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className={styles.social__icon}
                            src="../../../../assets/footer/logo-whatsapp.svg"
                            alt="whatsapp"
                            width="25px"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/solimeipropiedades/related_profiles/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className={styles.social__icon}
                            src="../../../../assets/footer/logo-insta.svg"
                            alt="instagram"
                            width="25px"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/solimeipropiedades/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className={styles.social__icon}
                            src="../../../../assets/footer/logo-facebook.svg"
                            alt="facebook"
                            width="25px"
                            height="27px"
                        />
                    </a>
                    <a
                        href="https://www.google.com.ar/maps/place/Gral.+F%C3%A9lix+Olaz%C3%A1bal+951,+B1714FZO+Ituzaing%C3%B3,+Provincia+de+Buenos+Aires,+Argentina/@-34.6573054,-58.6719527,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcbf6087cd4c6b:0xfc026062c5721bbb!8m2!3d-34.6573098!4d-58.6693778!16s%2Fg%2F11pwj707j1?entry=ttu"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className={styles.social__icon}
                            src="../../../../assets/footer/location.svg"
                            alt="ubicacion"
                            width="25px"
                            height="27px"
                        />
                    </a>
                    <img
                        className={styles.social__icon}
                        src="../../../../assets/footer/clock.svg"
                        alt="email"
                        width="25px"
                        onClick={handleClick}
                    />
                </div>
            </footer>
            <Modal isOpen={isOpen} handleClose={handleClick}>
                <div>
                    <h2 style={{ margin: '0 auto 15px' }}>Veni a visitarnos</h2>
                    <p style={{ margin: '0' }}>
                        <strong>lun a vier:</strong> 09:30 a 13:00hs, y 16:00 a
                        19:00hs
                    </p>
                    <p style={{ margin: '0' }}>
                        <strong>sabado:</strong> 10:00 a 12:30hs
                    </p>
                    <p style={{ margin: '0' }}>
                        <strong>domingo:</strong> cerrado
                    </p>
                    <p style={{ margin: '10px auto 0' }}>
                        <strong>Correo:</strong> solimeipropiedades@yahoo.com.ar
                    </p>
                    <p style={{ margin: '0' }}>
                        <strong>Tel:</strong> 4661-1872
                    </p>
                </div>
            </Modal>
        </>
    );
};
