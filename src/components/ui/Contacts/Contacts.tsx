import styles from './Contacts.module.css';
import '../../../styles/shared';
import { useState } from 'react';

const ContactsUI = () => {
    const [isCopied, setIsCopied] = useState(false);

    const copyEmailToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('s.bertova893@mail.ru');
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Ошибка копирования: ', err);
        }
    };
    return (
        <section className={styles.contacts}>
            <h2 className='section_header' id='contacts'>
                КОНТАКТ ДЛЯ СВЯЗИ
            </h2>
            <div className={`wrapper ${styles.wrapper_contact}`}>
                <p
                    className={styles.contacts_card}
                    onClick={copyEmailToClipboard}
                    style={{ cursor: 'pointer' }}
                >
                    s.bertova893@mail.ru
                    {isCopied && ' ✓'}
                </p>
            </div>
            {isCopied && (
                <small className={styles.copy_status}>
                    Скопировано в буфер!
                </small>
            )}
        </section>
    );
};
export default ContactsUI;
