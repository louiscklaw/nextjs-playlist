import React from 'react';
import PropTypes from 'prop-types'

import { i18n, Link, withTranslation } from '../i18n'
// import { i18n, Link, withTranslation } from '../i18n'



function index ({ t }) {
  return(
    <div>
      index helloworld
      {t('h1')}
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
      <button onClick={() => i18n.changeLanguage('de')}>de</button>
      <Link href="/page1">{t('to-second-page')}</Link>
    </div>
  )
}

index.getInitialProps = async () => {
  console.log('getInitialProps test')
  return {
    namespacesRequired: ['common', 'footer'],
  }
}

index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(index)
// export default index