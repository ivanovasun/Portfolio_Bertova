import { Link } from 'react-router-dom';
import styles from './WelcomeUI.module.css';

export const WelcomeUI = () => (
    <div className={styles.header}>
        <h1 className={styles.header__title}>
            Websites promote you 24/7:
            <br />
            No employee will do that
        </h1>
        <nav className={styles.header__nav}>
            <Link
                to='/projects_skills'
                className={styles.header__nav__button_link}
            >
                Проекты и навыки
            </Link>
        </nav>
    </div>
);
