import { useState } from 'react';
import { ProjectItemUIProps } from '../ui/ProjectItemUI/ProjectItemUI';
import ProjectsUI from '../ui/ProjectsUI/ProjectsUI';
import { useLocation, useNavigate } from 'react-router-dom';

export interface ProjectsUIProps {
    projects: ProjectItemUIProps[] | null;
}

const Projects = ({ projects }: ProjectsUIProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    const nextSlide = () => {
        if (projects) {
            setCurrentSlide((prev) => (prev + 1) % projects.length);
        }
    };

    const prevSlide = () => {
        if (projects) {
            setCurrentSlide(
                (prev) => (prev - 1 + projects.length) % projects.length
            );
        }
    };

    const handleProjectClick = (project: ProjectItemUIProps) => {
        // Сохраняем текущее местоположение как background
        navigate(`/projects_skills/${project.id}`, {
            state: { background: location }
        });
    };

    return (
        <ProjectsUI
            projects={projects}
            handleProjectClick={handleProjectClick}
            currentSlide={currentSlide}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
        />
    );
};

export default Projects;
