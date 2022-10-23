import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { ImageHolder } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
  static propTypes = {
    hits: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
  };

  render() {
    const { hits, openModal } = this.props;
    return (
      <ImageHolder>
        {hits.map(({ webformatURL, tags, largeImageURL, id }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onClick={openModal}
          />
        ))}
      </ImageHolder>
    );
  }
}
