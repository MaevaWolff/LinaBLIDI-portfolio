import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export default function MetaTag(props) {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>
        {`LINA BLIDI - DESIGNER UI/UX FREELANCE - ${props.metatagPage}`}
      </title>

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://linablidi.netlify.app/" />

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content="https://linablidi.netlify.app/" />


    </Helmet>
  );
}

MetaTag.propTypes = {
  metatagPage: PropTypes.string
};
