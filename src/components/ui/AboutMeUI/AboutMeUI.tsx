import styles from './AboutMe.module.css';
import '../../../styles/shared';

const AboutMeUI = () => (
    <article className={styles.about_me}>
        <h2 className='section_header'>ОБО МНЕ</h2>
        <div className={styles.about_me__display}>
            <div className={`wrapper ${styles.wrapper_about_me}`}>
                <p className={styles.about_me__quotation_text}>
                    Выбрала фронтенд, потому что именно в нем логика кода
                    встречается с творчеством дизайна. В данный момент больше
                    всего использую React, так как его компонентный подход
                    позволяет мне строить интерфейсы как из кубиков Лего. Каждый
                    проект для меня — это новый вызов и возможность создать
                    что-то, что будет не только функциональным, но и
                    по-настоящему удобным для людей
                </p>
            </div>
            <div className={`wrapper ${styles.wrapper_about_me}`}>
                <p className={styles.about_me__quotation_text}>
                    Люблю создавать красивые и функциональные вещи, улучшающие
                    процессы в компании, и фронтенд
                </p>
                <div className={styles.wrapper__img__quotation}>
                    <p className={styles.about_me__quotation_author}>
                        Автор
                        <br />
                        Бертова Светлана
                    </p>
                    <div className={styles.about_me__quotation_img} />
                </div>
            </div>
        </div>
    </article>
);

export default AboutMeUI;
