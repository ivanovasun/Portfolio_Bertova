import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import '../../fonts/font.css';
import '../../styles/animation';
import { stecList } from '../../utills/skillList';
import { programsList } from '../../utills/skillList';
import { projectsList } from '../../utills/projects';
import SkillUI from '../ui/SkillUI/SkillUI';
import { HeaderContainer } from '../Header/Header';
import Footer from '../Footer/Footer';
import PageContainer from '../../pages/PageContainer/PageContainer';
import { WelcomeUI } from '../ui/WelcomeUI/WelcomeUI';
import AboutMeUI from '../ui/AboutMeUI/AboutMeUI';
import ContactsUI from '../ui/Contacts/Contacts';
import Projects from '../Projects/Projects';
import ProjectsDetailsUI from '../ui/ProjectsDetails/ProjectsDetailsUI';
import { Modal } from '../Modal/Modal';
import NotFound404 from '../../pages/NotFound404/NotFound404';

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const background = location.state?.background;

    const handleCloseModal = () => {
        navigate(background || '/', { replace: true });
    };

    return (
        <div className='page'>
            <HeaderContainer />
            <Routes location={background || location}>
                <Route
                    path='/'
                    element={
                        <PageContainer>
                            <WelcomeUI />
                            <AboutMeUI />
                            <ContactsUI />
                        </PageContainer>
                    }
                />

                <Route
                    path='/projects_skills'
                    element={
                        <PageContainer>
                            <Projects projects={projectsList} />
                            <SkillUI steck={stecList} programs={programsList} />
                        </PageContainer>
                    }
                />
                <Route
                    path='/projects_skills/:id'
                    element={
                        <PageContainer>
                            <ProjectsDetailsUI />
                        </PageContainer>
                    }
                />
                <Route path='*' element={<NotFound404 />} />
            </Routes>
            {/* Модальное окно для проектов */}
            {background && (
                <Routes>
                    <Route
                        path='/projects_skills/:id'
                        element={
                            <Modal onClose={handleCloseModal} isAnimated isOpen>
                                <ProjectsDetailsUI />
                            </Modal>
                        }
                    />
                </Routes>
            )}
            <Footer />
        </div>
    );
};

export default App;
