import { FC } from 'react';
import styles from './ProjectItemUI.module.css';

export interface ProjectItemUIProps {
    id: number;
    link_img: string;
    description_key_word: string;
    description: string;
    link_gh: string;
    link: string;
}

interface ProjectItemUIComponentProps extends ProjectItemUIProps {
    onClick?: () => void;
}

const ProjectItemUI: FC<ProjectItemUIComponentProps> = ({
    onClick,
    ...props
}) => (
    <div
        className={`${styles.projects__list_item} ${styles.card}`}
        onClick={onClick}
    >
        <img
            className={styles.card__image}
            src={props.link_img}
            loading='lazy'
            alt={props.description}
        />
        <div className={styles.card__list_item_content}>
            <p className={styles.card__list_item_content_paragraph}>
                {props.description_key_word}
            </p>
            <div className={styles.wrapper__projects_link}>
                <a
                    href={props.link_gh}
                    target='_blank'
                    className={styles.card__list_item_content_link_gh}
                    rel='noopener noreferrer'
                >
                    <img
                        src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                        className={styles.card__list_item_content_gh}
                        loading='lazy'
                    />
                </a>
                <a
                    href={props.link}
                    target='_blank'
                    className={styles.card__list_item_content_link_wb}
                    rel='noopener noreferrer'
                >
                    <span>website</span>
                </a>
            </div>
        </div>
    </div>
);

export default ProjectItemUI;
