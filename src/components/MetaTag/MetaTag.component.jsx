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

    </Helmet>
  );
}

MetaTag.propTypes = {
  metatagPage: PropTypes.string
};
