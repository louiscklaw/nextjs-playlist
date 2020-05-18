import React from 'react';
import PropTypes from 'prop-types'

import { i18n, Link, withTranslation } from '../i18n'
// import { i18n, Link, withTranslation } from '../i18n'



function page1 ({ t }) {
  return(
    <div>
      page1 helloworld
      {t('h1')}
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
      <button onClick={() => i18n.changeLanguage('de')}>de</button>
      <Link href="/index">{t('to-second-page')}</Link>
    </div>
  )
}

page1.getInitialProps = async () => {
  console.log('getInitialProps test')
  return {
    namespacesRequired: ['common', 'footer'],
  }
}

page1.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(page1)
// export default index