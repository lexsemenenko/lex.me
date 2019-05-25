import React from 'react'
import Button from '../../elements/Button'
// import client from '../../api/contentful';
// import Dropdown from '../Dropdown';

const HomeAbout = () => {
  // constructor() {
  //   super();
  //   this.state = { aboutPage: [] };
  // }

  // componentDidMount() {
  //   client.getEntry('NzRZI1FImgLEWgXnJRRlO').then(entry => {
  //     this.setState({
  //       aboutPage: {
  //         title: entry.fields.title,
  //         intro: entry.fields.intro
  //       }
  //     });
  //   });
  // }

  return (
    <div className="group">
      <h2 className="h2 h2__block">
        <span>About</span>
      </h2>
      <div data-grid="columns: 12">
        <div data-grid-item="width: 12, width-large: 6">
          <p className="t-large">Lorem ipsum text here.</p>
          <Button
            onClick={() => {
              console.log('!!!!')
            }}
          >
            Button text
          </Button>
          <Button
            onClick={() => {
              console.log('!!!!')
            }}
            disabled
          />
          <Button active />
          <Button data-name="button" />
          <Button type="submit" />
          <Button href="test">Link</Button>
          <Button href="test" disabled>
            Link
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
