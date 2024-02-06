const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="gallery-item" onClick={() => onClick(image)}>
      <img src={image.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
