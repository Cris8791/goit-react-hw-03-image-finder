import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

const API_KEY = '40947481-13c540b45e3fd4f57e1ee7dde';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    modalImage: '',
    totalHits: 0,
  };

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] }, () => {
      this.fetchImages();
    });
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  fetchImages = () => {
    console.log('fetchImages is called');
    const { query, page } = this.state;
    const apiUrl = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    console.log('Apel către API și URL:', apiUrl); // Verifică URL-ul cererii

    axios
      .get(apiUrl)
      .then(response => {
        console.log('Răspuns API:', response.data); // Afișează întregul răspuns de la API
        console.log('Datele imaginilor:', response.data.hits); // Acesta este noul console.log adăugat

        const newImages = response.data.hits.map(image => ({
          id: image.id,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL,
        }));

        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          page: prevState.page + 1,
          isLoading: false,
          totalHits: response.data.totalHits,
        }));
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = image => {
    console.log('Image clicked', image);
    this.setState({ showModal: true, modalImage: image });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, isLoading, showModal, modalImage } = this.state;

    return (
      <div className="App">
        <Searchbar
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          query={this.state.query}
        />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {this.state.images.length < this.state.totalHits && (
          <Button onLoadMore={this.handleLoadMore} />
        )}

        {showModal && <Modal image={modalImage} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;
