import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LoadMoreBtn } from './LoadMore.styled';

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <LoadMoreBtn type="button" onClick={this.props.onClick}>
        Load More
      </LoadMoreBtn>
    );
  }
}
