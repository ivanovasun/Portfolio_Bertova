import { FC, memo, useEffect, useState } from 'react';
import { ProjectItemUIProps } from '../ProjectItemUI/ProjectItemUI';
import styles from './ProjectsDetailsUI.module.css';
import { useParams } from 'react-router-dom';
import { projectsList } from '../../../utills/projects';

interface ProjectsDetailsProps {
    projectsData?: ProjectItemUIProps;
}

const ProjectsDetailsUI: FC<ProjectsDetailsProps> = memo(({ projectsData }) => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<ProjectItemUIProps | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (projectsData) {
            setProject(projectsData);
        } else if (id) {
            // Ищем проект по ID
            const foundProject = projectsList.find(
                (p) => p.id === parseInt(id)
            );
            if (foundProject) {
                setProject(foundProject);
            }
        }
    }, [id, projectsData]);

    if (!project) {
        return <div>Проект не найден</div>;
    }

    const { link_img, description_key_word, description, link_gh, link } =
        project;

    return (
        <div className={styles.container}>
            <img
                src={link_img}
                className={styles.modal__image}
                loading='lazy'
                alt={description_key_word}
            />
            <button
                type='button'
                className={`${styles.modal__function__button} ${isOpen ? styles.modal__function__button_open : ''}`}
                aria-label='Стрелка для открытия попапа с дополнительной информацией'
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    className={styles.modal__open_arrow}
                    width='68'
                    height='68'
                    viewBox='0 0 68 68 '
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path d='M62.6763 0H33.7283L1.23382e-05 33.9939H28.7355L62.6763 0Z ' />
                    <path d='M62.6763 67.9878H33.7283L1.23382e-05 33.9939H28.7355L62.6763 67.9878Z' />
                </svg>
            </button>
            <div
                className={`${styles.modal__wrapper} ${isOpen ? styles.modal__wrapper_is_open : ''}`}
            >
                <button
                    type='button'
                    className={`${styles.modal__function__button} ${styles.modal__function__button_close}`}
                    aria-label='Стрелка для закрытия попапа с дополнительной информацией'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className={styles.modal__close_arrow}
                        width='68'
                        height='68'
                        viewBox='0 0 68 68'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M5.32373 0H34.2717L68 33.9939H39.2645L5.32373 0Z' />
                        <path d='M5.32373 67.9878H34.2717L68 33.9939H39.2645L5.32373 67.9878Z' />
                    </svg>
                </button>
                <p className={styles.modal__caption}>{description}</p>
                <div className={styles.modal__link_wrapper}>
                    <a
                        href={link_gh}
                        target='_blank'
                        className={styles.modal__img_gh_link}
                        rel='noopener noreferrer'
                    >
                        <img
                            src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                            className={styles.modal__img_gh}
                        />
                    </a>
                    <a
                        href={link}
                        target='_blank'
                        className={styles.modal__link_wb}
                        rel='noopener noreferrer'
                    >
                        website
                    </a>
                </div>
            </div>
        </div>
    );
});

export default ProjectsDetailsUI;
