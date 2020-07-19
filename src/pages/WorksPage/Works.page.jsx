import React, { Component } from 'react';
import works from '../../data/works.json';

import GridsBackground from '../../components/GridsBackground/GridsBackground.component';

import WorksHero from '../../components/WorksHero/WorksHero.component';
import WorksDetails from '../../components/WorksDetails/WorksDetails.component';

export default class WorksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.location.search.substr(6)
    };
  }
  render() {
    const name = this.state.name;
    // const worksData = name[name];
    console.log(name);
    console.log(works.filter(el => el.name === name)[0].colors);

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
        <WorksDetails
          worksTime={works.filter(el => el.name === name)[0].time}
          worksDate={works.filter(el => el.name === name)[0].date}
          worksName={works.filter(el => el.name === name)[0].name}
          worksColor1={works.filter(el => el.name === name)[0].color1}
          worksColor2={works.filter(el => el.name === name)[0].color2}
          worksColor3={works.filter(el => el.name === name)[0].color3}
          worksPartners={works.filter(el => el.name === name)[0].partners}
        />
      </div>
    );
  }
}
