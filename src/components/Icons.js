import { useTranslation } from "react-i18next";
import './sass/Icons.sass';

export default function Icons () {

    const { i18n } = useTranslation('global');

    return (
        <div className="icons">
            <button className="icons-btn" type="button" onClick={() => i18n.changeLanguage('es')}>ES</button>
            <button className="icons-btn" type="button" onClick={() => i18n.changeLanguage('en')}>EN</button>
        </div>
    )
}