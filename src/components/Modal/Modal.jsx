// Modal.jsx
import React, { Component } from 'react';
import styles from './Modal.module.css';
import Loader from '../Loader/Loader'; // Importăm Loader-ul

class Modal extends Component {
  state = {
    loading: true, // Adăugăm un state local pentru încărcare
  };

  componentDidMount() {
    this.preloadImage(this.props.image.largeImageURL);
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  preloadImage = url => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      this.setState({ loading: false }); // Actualizăm starea când imaginea s-a încărcat
    };
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { loading } = this.state; // Extragem starea locală

    return (
      <div className={styles.overlay} onClick={this.props.onClose}>
        <div className={styles.modal}>
          {loading && <Loader />}{' '}
          {/* Afisăm Loader-ul dacă imaginea se încarcă */}
          {!loading && <img src={this.props.image.largeImageURL} alt="" />}{' '}
          {/* Afisăm imaginea dacă s-a încărcat complet */}
        </div>
      </div>
    );
  }
}

export default Modal;
