import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Icons from './components/Icons';
import { Container } from './components/style/Container';
import { useTranslation } from 'react-i18next';

export default function App () {

  const { t } = useTranslation('global');
  
  return (
    <Container fluid>
      <Helmet>
        <title>{t('titleweb')}</title>
      </Helmet>
      <Icons />
      <Header />
    </Container>
  )
}