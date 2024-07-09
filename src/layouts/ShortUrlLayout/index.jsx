import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLocale, selectTheme } from '@containers/App/selectors';

import Navbar from '@components/ShortUrlNavbar';

const ShortUrlLayout = ({ children, locale, theme, intl: { formatMessage } }) => (
  <>
    <Navbar title={formatMessage({ id: 'app_title_header' })} locale={locale} theme={theme} />
    {children}
  </>
);

const mapStateToProps = createStructuredSelector({
  locale: selectLocale,
  theme: selectTheme,
});

ShortUrlLayout.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  theme: PropTypes.string,
  intl: PropTypes.object,
};

export default injectIntl(connect(mapStateToProps)(ShortUrlLayout));
