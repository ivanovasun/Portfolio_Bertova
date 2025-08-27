import { FC, memo, ReactNode } from 'react';

import styles from './ModalUI.module.css';
import { ModalOverlayUI } from '../ModalOverlay/ModalOverlay';

export interface ModalUIProps {
    onClose: () => void;
    children: ReactNode;
    isAnimated?: boolean;
    isOpen?: boolean;
}

export const ModalUI: FC<ModalUIProps> = memo(
    ({ onClose, children, isAnimated = false, isOpen = false }) => (
        <>
            <div
                className={`${styles.modal} ${isAnimated ? styles.modal_is_animated : ''} ${isOpen ? styles.modal_is_opened : ''}`}
            >
                <div className={styles.modal__content} data-cy='modal'>
                    <button
                        type='button'
                        className={styles.modal__close}
                        onClick={onClose}
                        aria-label='Иконка для закрытия попапа'
                    />
                    <>{children}</>
                </div>
            </div>
            <ModalOverlayUI onClick={onClose} />
        </>
    )
);
