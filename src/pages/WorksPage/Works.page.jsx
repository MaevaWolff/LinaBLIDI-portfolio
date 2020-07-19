import React, { Component } from 'react';
import works from '../../data/works.json';

import GridsBackground from '../../components/GridsBackground/GridsBackground.component';

import WorksHero from '../../components/WorksHero/WorksHero.component';

export default class WorksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.location.search.substr(6)
    };
  }

  render() {
    const name = this.state.name;
    console.log(name);

    return (
      <div className='works'>
        <GridsBackground />
        <WorksHero
          worksName={works.filter(el => el.name === name)[0].name}
          worksHashtag={works.filter(el => el.name === name)[0].hashtag}
          worksDescription={works.filter(el => el.name === name)[0].description}
          worksLink={works.filter(el => el.name === name)[0].link}
          worksHero={works.filter(el => el.name === name)[0].heroImage}
        />
      </div>
    );
  }
}
