import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export default class MetaTag extends Component {
  render() {
    return (
      <Helmet>
        <meta charSet='utf-8' />
        <title>
          {`LINA BLIDI - DESIGNER UI/UX FREELANCE - ${this.props.metatagPage}`}
        </title>
        <meta name='description' content='Nested component' />
      </Helmet>
    );
  }
}

MetaTag.propTypes = {
  metatagPage: PropTypes.string
};
