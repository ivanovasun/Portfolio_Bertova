import styles from './SkillItemUI.module.css';

export interface SkillItemProps {
    src: string;
    alt: string;
    clName: string;
    adClName?: string;
}

const SkillItemUI = (skilLData: SkillItemProps) => (
    <img
        src={skilLData.src}
        className={`${styles[skilLData.clName]} ${
            skilLData.adClName ? styles[skilLData.adClName] : ''
        }`}
        alt={skilLData.alt}
        loading='lazy'
    />
);

export default SkillItemUI;
