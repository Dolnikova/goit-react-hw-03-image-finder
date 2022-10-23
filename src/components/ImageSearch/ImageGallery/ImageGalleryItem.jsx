import React, { Component } from 'react';
import { ImageItem } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { webformatURL, tags, largeImageURL, onClick } = this.props;
    return (
      <ImageItem onClick={onClick}>
        <img
          src={webformatURL}
          alt={tags}
          data-large={largeImageURL}
          width="600px"
          height="350px"
        />
      </ImageItem>
    );
  }
}
