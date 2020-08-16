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
      <meta name="description" content="Hey, I'm Lina Blidi a UI UX Designer, student and freelance from Paris :relaxed:" />

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://linablidi.netlify.app/" />
      <meta property="og:title" content="Lina Blidi Portfolio"></meta>
      <meta property="og:description" content="Hey, I'm Lina Blidi a UI UX Designer, student and freelance from Paris :relaxed:"></meta>
      <meta property="og:image" content="../../assets/cover.png" />

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content="https://linablidi.netlify.app/" />
      <meta property="twitter:title" content="Lina Blidi Portfolio"></meta>
      <meta property="twitter:description" content="Hey, I'm Lina Blidi a UI UX Designer, student and freelance from Paris :relaxed:"></meta>
      <meta property="twitter:image" content="../../assets/cover.png" />

    </Helmet>
  );
}

MetaTag.propTypes = {
  metatagPage: PropTypes.string
};
