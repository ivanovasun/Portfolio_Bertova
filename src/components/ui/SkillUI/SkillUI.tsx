import styles from './SkillUI.module.css';
import SkillItemUI, { SkillItemProps } from '../SkillItemUI/SkillItemUI';
import '../../../styles/shared';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface SkillUIProps {
    steck: SkillItemProps[] | null;
    programs: SkillItemProps[] | null;
}

const SkillUI = ({ steck, programs }: SkillUIProps) => {
    const [currentSteckSlide, setCurrentSteckSlide] = useState(0);
    const [currentProgramsSlide, setCurrentProgramsSlide] = useState(0);

    const nextSlide = (type: 'steck' | 'programs') => {
        if (type === 'steck' && steck) {
            setCurrentSteckSlide((prev) => (prev + 1) % steck.length);
        } else if (type === 'programs' && programs) {
            setCurrentProgramsSlide((prev) => (prev + 1) % programs.length);
        }
    };

    const prevSlide = (type: 'steck' | 'programs') => {
        if (type === 'steck' && steck) {
            setCurrentSteckSlide(
                (prev) => (prev - 1 + steck.length) % steck.length
            );
        } else if (type === 'programs' && programs) {
            setCurrentProgramsSlide(
                (prev) => (prev - 1 + programs.length) % programs.length
            );
        }
    };

    return (
        <article className={styles.skills}>
            <div className='header_btn__display'>
                <h2 className='section_header' id='skills'>
                    НАВЫКИ
                </h2>
                <Link to='/' className='button_link'>
                    Назад
                </Link>
            </div>

            <div className={styles.skills__additional_wrapper}>
                <div className={`wrapper ${styles.wrapper_skills}`}>
                    <h3 className={styles.skills__paragraph}>Стек</h3>
                    {steck ? (
                        <>
                            <div className={styles.skills__stec}>
                                {steck.map((item, index) => (
                                    <SkillItemUI key={index} {...item} />
                                ))}
                            </div>
                            {/* Мобильный слайдер для стека */}
                            <div className={styles.mobile_slider}>
                                <div className={styles.slider_container}>
                                    <SkillItemUI
                                        {...steck[currentSteckSlide]}
                                    />
                                </div>

                                <div className={styles.slider_navigation}>
                                    <button
                                        className='button_link'
                                        onClick={() => prevSlide('steck')}
                                        aria-label='Предыдущий навык'
                                    >
                                        ←
                                    </button>
                                    <button
                                        className='button_link'
                                        onClick={() => nextSlide('steck')}
                                        aria-label='Следующий навык'
                                    >
                                        →
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Стек не загрузился, попробуйте еще раз</p>
                    )}
                </div>
                <div className={`wrapper ${styles.wrapper_skills}`}>
                    <h3 className={styles.skills__paragraph}>Программы</h3>
                    {programs ? (
                        <>
                            <div className={styles.skills__program}>
                                {programs.map((item, index) => (
                                    <SkillItemUI key={index} {...item} />
                                ))}
                            </div>

                            {/* Мобильный слайдер для программ */}
                            <div className={styles.mobile_slider}>
                                <div className={styles.slider_container}>
                                    <SkillItemUI
                                        {...programs[currentProgramsSlide]}
                                    />
                                </div>

                                <div className={styles.slider_navigation}>
                                    <button
                                        className='button_link'
                                        onClick={() => prevSlide('programs')}
                                        aria-label='Предыдущая программа'
                                    >
                                        ←
                                    </button>
                                    <button
                                        className='button_link'
                                        onClick={() => nextSlide('programs')}
                                        aria-label='Следующая программа'
                                    >
                                        →
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Программы не загрузился, попробуйте еще раз</p>
                    )}
                </div>
            </div>
        </article>
    );
};

export default SkillUI;
