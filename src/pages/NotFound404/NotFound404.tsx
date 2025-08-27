import styles from './NotFound404.module.css';
import '../../styles/shared';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NotFound404 = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <section className={styles.cat}>
            <div
                className={`${styles.toogle_btn} ${isDarkMode ? styles.switch_on : ''}`}
                onClick={toggleTheme}
            >
                <div className={styles.toogle_btn__sun} />
                <div className={styles.toogle_btn__moon} />
            </div>
            <div
                className={`${styles.window} ${isDarkMode ? styles.theme_moon : ''}`}
            >
                <div className={styles.window__moon} />
                <div className={styles.window__sun} />
                <div className={styles.cat__header}>
                    <div
                        className={`${styles.cat__header_eye} ${styles.cat__header_eye_left}`}
                    >
                        <div className={styles.cat__header_eye_pupil} />
                    </div>
                    <div
                        className={`${styles.cat__header_eye} ${styles.cat__header_eye_right}`}
                    >
                        <div className={styles.cat__header_eye_pupil} />
                    </div>
                    <div className={styles.cat__header_nose} />
                </div>
            </div>
            <p className={styles.cat__paragraph}>
                Страница не найдена. Ошибка 404.
            </p>
            <Link to='/' className='button_link'>
                {' '}
                Назад{' '}
            </Link>
        </section>
    );
};

export default NotFound404;
