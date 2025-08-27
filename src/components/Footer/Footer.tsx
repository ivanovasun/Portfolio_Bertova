import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p className={styles.footer__paragraph}>
                © 2024 - {currentYear} Бертова Светлана
            </p>
        </footer>
    );
};

export default Footer;
