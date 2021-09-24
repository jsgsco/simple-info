import { Container } from './style/Container';
import { useTranslation } from 'react-i18next';

import './sass/Header.sass';

export default function Header () {

    const { t } = useTranslation('global');

    return (
        <div className="header">
            <Container className="animation">
                <h1 className="header-title">{t('about.title')} <span>{t('about.name')}</span> </h1>
                <h2 className="header-subtitle">{t('about.branch')}</h2>
                <div className="header-info">
                    <p>{t('about.info')} <span>{t('about.work')}</span></p>
                    <p>{t('about.subinfo')}</p>
                </div>
                <div className="header-social">
                    <a href="https://www.facebook.com/jhondev2" className="header-social-btn" target="_blank" rel="noreferrer"> <i className="bi bi-facebook"></i> Facebook </a>
                    <a href="https://github.com/jsgsco" className="header-social-btn" target="_blank" rel="noreferrer"> <i className="bi bi-facebook"></i> GitHub </a>
                    <a href="https://www.linkedin.com/in/jsgsco" className="header-social-btn" target="_blank" rel="noreferrer"> <i className="bi bi-facebook"></i> LinkedIn </a>
                </div>
            </Container>
        </div>
    )
}