import styles from './HeaderUI.module.css';
import clsx from 'clsx';
export interface HeaderUIProps {
    currentTheme: string;
    onThemeChange: (theme: string) => void;
    onClick: () => void;
}

export const HeaderUI = ({
    currentTheme,
    onThemeChange,
    onClick
}: HeaderUIProps) => (
    <header className={styles.header}>
        <button className={styles.logo} onClick={onClick}>
            Portfolio
        </button>
        <ul className={styles.theme_menu__list}>
            <li className={styles.theme_menu__item}>
                <button
                    type='button'
                    className={clsx(
                        styles.theme_menu__button,
                        styles.theme_menu_button_type_dark,
                        currentTheme === 'dark' &&
                            styles.theme_menu__button_active
                    )}
                    onClick={() => onThemeChange('dark')}
                    disabled={currentTheme === 'dark'}
                >
                    Сдержанная
                </button>
            </li>
            <li className={styles.theme_menu__item}>
                <button
                    type='button'
                    className={clsx(
                        styles.theme_menu__button,
                        styles.theme_menu_button_type_light,
                        currentTheme === 'light' &&
                            styles.theme_menu__button_active
                    )}
                    onClick={() => onThemeChange('light')}
                    disabled={currentTheme === 'light'}
                >
                    Яркая
                </button>
            </li>
        </ul>
    </header>
);

export default HeaderUI;
