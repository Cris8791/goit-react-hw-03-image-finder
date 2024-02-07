// ImageGalleryItem.jsx
import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
import Loader from '../Loader/Loader';

class ImageGalleryItem extends Component {
  state = {
    loading: false, // Adăugăm un state local pentru încărcare
  };

  handleImageLoad = () => {
    this.setState({ loading: false }); // Actualizăm starea când imaginea s-a încărcat
  };

  render() {
    const { image, onClick } = this.props;
    const { loading } = this.state; // Extragem starea locală

    return (
      <li className={styles.GalleryItem} onClick={() => onClick(image)}>
        {loading && <Loader />}{' '}
        {/* Afisăm Loader-ul dacă imaginea se încarcă */}
        <img
          className={styles.ImageGalleryItem}
          src={image.webformatURL}
          alt=""
          onLoad={this.handleImageLoad} // Apelăm funcția când imaginea se încarcă complet
          style={{ display: loading ? 'none' : 'block' }} // Ascundem imaginea când se încarcă Loader-ul
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
