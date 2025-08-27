import { ReactNode } from 'react';
import styles from './ProjectsUI.module.css';
import ProjectItemUI, {
    ProjectItemUIProps
} from '../ProjectItemUI/ProjectItemUI';
import '../../../styles/shared';
import { Link } from 'react-router-dom';

export interface ProjectsUIProps {
    projects: ProjectItemUIProps[] | null;
    handleProjectClick: (project: ProjectItemUIProps) => void;
    currentSlide: number;
    prevSlide: () => void;
    nextSlide: () => void;
    children?: ReactNode;
}

const ProjectsUI = ({
    projects,
    handleProjectClick,
    currentSlide,
    prevSlide,
    nextSlide,
    children
}: ProjectsUIProps) => (
    <section className={styles.projects}>
        <div className='header_btn__display'>
            <h2 className='section_header' id='projects'>
                ПРОЕКТЫ
            </h2>
            <Link to='/' className='button_link'>
                Назад
            </Link>
        </div>
        <div className={`wrapper ${styles.wrapper_projects}`}>
            {projects ? (
                <>
                    {/* Десктопная версия */}
                    <div className={styles.projects__list}>
                        {projects.map((project, index) => (
                            <ProjectItemUI
                                key={index}
                                {...project}
                                onClick={() => handleProjectClick(project)}
                            />
                        ))}
                    </div>
                    {/* Мобильная версия - слайдер */}
                    <div className={styles.mobile_slider}>
                        <div
                            className={styles.slider_container}
                            onClick={() =>
                                handleProjectClick(projects[currentSlide])
                            }
                        >
                            <ProjectItemUI {...projects[currentSlide]} />
                        </div>
                        {/* Навигация слайдера */}
                        <div className={styles.slider_navigation}>
                            <button
                                className='button_link'
                                onClick={prevSlide}
                                aria-label='Предыдущий проект'
                            >
                                ←
                            </button>
                            <button
                                className='button_link'
                                onClick={nextSlide}
                                aria-label='Следующий проект'
                            >
                                →
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <p>Проекты не загрузились, попробуйте еще раз</p>
            )}
        </div>
        {children}
    </section>
);

export default ProjectsUI;
