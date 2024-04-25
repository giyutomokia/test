import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleViewMore = () => {
    // Open the Wikipedia link in a new tab/window
    window.open('https://en.wikipedia.org/wiki/Stock_market', '_blank');
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {data.map((item, index) => (
          <div key={index} className={index === currentIndex ? 'slide active' : 'slide'}>
            <img src={item.imageSrc} alt={`Image ${index + 1}`} />
            <div className="content">
              <h3>{item.header}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {data.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'dot active' : 'dot'}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
      <button className="view-more" onClick={handleViewMore}>View More</button>
    </div>
  );
};

export default Carousel;
