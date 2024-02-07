import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={styles.GalleryItem} onClick={() => onClick(image)}>
      <img
        className={styles.ImageGalleryItem}
        src={image.webformatURL}
        alt=""
      />
    </li>
  );
};

export default ImageGalleryItem;
