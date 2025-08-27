import styles from './PageContainer.module.css';
import { ReactNode } from 'react';

interface PageContainerProps {
    children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => (
    <div className={styles.main_page__display}>{children}</div>
);

export default PageContainer;
