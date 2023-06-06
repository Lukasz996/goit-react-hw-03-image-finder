import React, { useState, useEffect, useCallback } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=29601510-cb62b0e552e92b2824471424b&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      setImages(prevImages =>
        page === 1 ? data.hits : [...prevImages, ...data.hits]
      );
    } catch (error) {
      console.log('Error fetching images:', error);
    }
    setLoading(false);
  }, [searchQuery, page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleSearchSubmit = value => {
    setSearchQuery(value);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onItemClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && <Button onClick={handleLoadMore} />}
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
