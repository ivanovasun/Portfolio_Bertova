import { useState, useCallback } from 'react';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);

    const openModal = useCallback(() => {
        setIsAnimated(true);
        setTimeout(() => setIsOpen(true), 10);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        setTimeout(() => setIsAnimated(false), 600);
    }, []);

    return {
        isOpen,
        isAnimated,
        openModal,
        closeModal
    };
};
