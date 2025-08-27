import firstCaseImg from '../images/game_abs';
import secondCaseImg from '../images/ptni.png';
import therdCaseImg from '../images/3prj.png';

export const projectsList = [
    {
        id: 1,
        link_img: firstCaseImg,
        description_key_word: 'Интерактивная игра',
        description:
            'Адаптивная верстка интерактивной игры, в которой игрок выбирает одну из трёх закрытых карточек с призом, спрятанным за одной из них. Перед выбором карточки перемешиваются, после чего игрок делает свой выбор',
        link_gh: 'https://github.com/ivanovasun/Guess_the_Card.git',
        link: 'https://ivanovasun.github.io/Guess_the_Card/'
    },
    {
        id: 2,
        link_img: secondCaseImg,
        description_key_word: 'Онлайн форма для заполнения',
        description:
            'Адаптивная верстка сайта, позволяющего автоматически генерировать и заполнять форму для подачи заявок на гранты',
        link_gh: `${console.log('Под NDA')}`,
        link: 'https://ptnigen.almazovcentre.ru/'
    },
    {
        id: 3,
        link_img: therdCaseImg,
        description_key_word: 'Интерактивное приглашение',
        description:
            'Разработка архитектуры и создание интерактивного онлайн-приглашения на свадьбу',
        link_gh: 'https://github.com/ivanovasun/BertovsWedding.git',
        link: 'https://ivanovasun.github.io/BertovsWedding/'
    }
];
