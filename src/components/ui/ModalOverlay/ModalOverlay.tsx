import styles from './ModalOverlay.module.css';

export const ModalOverlayUI = ({
    onClick
}: {
    onClick: (e: React.MouseEvent) => void;
}) => (
    <div className={styles.overlay} onClick={onClick} data-cy='modalOverlay' />
);
