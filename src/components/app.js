'use strict';

const React = require('react/addons');
const _ = require('lodash');
const Masonry = require('react-masonry-component')(React);

const masonryOptions = {
  isFitWidth: true,
  columnWidth: 300
};

// CSS
require('../styles/index.scss');

var App = React.createClass({
  render() {
    return (
      <Masonry
        className={'elements'}
        options={masonryOptions}>
        {_.times(10, () => {
          return <div className="element__wrapper"><div className="element"></div></div>;
        })}
      </Masonry>
    );
  }
});

React.render(<App/>, document.getElementById('content')); // jshint ignore:line

module.exports = App;
