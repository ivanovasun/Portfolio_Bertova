import { useState, useEffect } from 'react';
import HeaderUI from '../ui/HeaderUI/HeaderUI';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

export interface HeaderContainerProps {
    imgSrcL?: string;
    imgSrcD?: string;
    img?: HTMLImageElement;
}

export const HeaderContainer = ({
    imgSrcL,
    imgSrcD,
    img
}: HeaderContainerProps) => {
    const [currentTheme, setCurrentTheme] = useState<string>(
        () => localStorage.getItem('theme') || 'light'
    );

    const navigate = useNavigate();

    // Инициализация темы при монтировании компонента
    useEffect(() => {
        initTheme();
    }, []);

    // Эффект для применения темы при изменении currentTheme
    useEffect(() => {
        changeTheme(currentTheme);
    }, [currentTheme]);

    const changeTheme = (theme: string) => {
        document.body.className = 'page';
        document.body.classList.add(`theme_${theme}`);
        localStorage.setItem('theme', theme);

        // Обновление изображения, если передано
        if (img && imgSrcL && imgSrcD) {
            img.src = theme === 'light' ? imgSrcL : imgSrcD;
        }
    };

    const initTheme = () => {
        const theme = localStorage.getItem('theme');
        if (theme) {
            setCurrentTheme(theme);
        }
    };

    const handleThemeChange = (theme: string) => {
        setCurrentTheme(theme);
    };

    const handleBackToMain = () => {
        navigate('/');
    };

    return (
        <div className={styles.header__position}>
            <HeaderUI
                currentTheme={currentTheme}
                onThemeChange={handleThemeChange}
                onClick={handleBackToMain}
            />
        </div>
    );
};

// Хук для управления темой (опционально)
export const useTheme = () => {
    const [currentTheme, setCurrentTheme] = useState<string>(
        () => localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme) {
            setCurrentTheme(theme);
            applyTheme(theme);
        }
    }, []);

    const applyTheme = (theme: string) => {
        document.body.className = 'page';
        document.body.classList.add(`theme_${theme}`);
        localStorage.setItem('theme', theme);
    };

    const changeTheme = (theme: string) => {
        setCurrentTheme(theme);
        applyTheme(theme);
    };

    return {
        currentTheme,
        changeTheme
    };
};
