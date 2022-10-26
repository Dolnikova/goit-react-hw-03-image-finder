import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageSearch/ImageGallery/ImageGallery';
import Searchbar from './ImageSearch/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { fetchImages } from './api';

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    search: '',
    error: null,
    showModal: false,
    currentImageUrl: null,
    currentImageDescription: null,
    totalHits: null,
    isLoading: false,
  };

  handleSubmit = search => {
    this.setState({ search, page: 1, images: [] });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  openModal = e => {
    if (e.target.nodeName === 'IMG') {
      const currentImageUrl = e.target.dataset.large;
      const currentImageDescription = e.target.alt;
      this.setState({
        currentImageUrl,
        currentImageDescription,
      });
      this.toggleModal();
    }
    console.log(this.state.currentImageUrl, this.state.currentImageDescription);
  };

  nextPage = () => {
    window.scrollTo(0, 0);
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      fetchImages(this.state.search, this.state.page)
        .then(images => {
          if (images.totalHits === 0) {
            this.setState({ totalHits: 0 });
            return Promise.reject(
              toast.error(`There is no image with name ${this.state.search}`)
            );
          }
          this.setState({ images: images.hits, totalHits: images.totalHits });
        })
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const {
      images,
      totalHits,
      page,
      showModal,
      currentImageUrl,
      currentImageDescription,
    } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {!!images.length && (
          <>
            {console.log(currentImageUrl)}
            {showModal && (
              <Modal
                onClose={this.toggleModal}
                url={currentImageUrl}
                alt={currentImageDescription}
              />
            )}
            <ImageGallery hits={images} openModal={this.openModal} />
            {totalHits - page * 12 > 0 && (
              <Button onClick={this.nextPage}></Button>
            )}
          </>
        )}

        <ToastContainer />
      </>
    );
  }
}
