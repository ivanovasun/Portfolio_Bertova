import { FC, memo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalUI, ModalUIProps } from '../ui/Modal/ModalUI';

const modalRoot = document.getElementById('modals');

export const Modal: FC<ModalUIProps> = memo(
    ({ onClose, children, isAnimated, isOpen }) => {
        useEffect(() => {
            const handleEsc = (e: KeyboardEvent) => {
                e.key === 'Escape' && onClose();
            };

            document.addEventListener('keydown', handleEsc);
            return () => {
                document.removeEventListener('keydown', handleEsc);
            };
        }, [onClose]);

        return ReactDOM.createPortal(
            <ModalUI isAnimated={isAnimated} onClose={onClose} isOpen={isOpen}>
                {children}
            </ModalUI>,
            modalRoot as HTMLDivElement
        );
    }
);
