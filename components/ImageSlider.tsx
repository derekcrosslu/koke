import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.png',
  '12.png',
  '13.png',
  '14.png',
  '15.png',
  '16.png',
  '17.png',
  '18.png',
  '19.png',
  '20.png',
  '21.png',
];

const isExternalImage = (src: string) =>
  src.startsWith('http') || src.startsWith('https');

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    console.log('Current image path:', images[currentIndex]);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setImageError(false);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setImageError(false);
  };

  const handleImageError = () => {
    console.error('Error loading image:', images[currentIndex]);
    setImageError(true);
  };

  const getImageSrc = (src: string) => {
    return isExternalImage(src) ? src : `/images/${src}`;
  };

  return (
    <div
      className='relative w-full'
      style={{ paddingBottom: '56.25%' }}
    >
      {' '}
      {/* 16:9 aspect ratio */}
      <div className='absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center'>
        {imageError ? (
          <div className='text-gray-500'>Error loading image</div>
        ) : (
          <div className='relative w-full h-full'>
            <Image
              src={getImageSrc(images[currentIndex])}
              alt={`Slide ${currentIndex + 1}`}
              layout='fill'
              objectFit='contain'
              onError={handleImageError}
              unoptimized={isExternalImage(images[currentIndex])}
            />
          </div>
        )}
      </div>
      <button
        onClick={goToPrevious}
        className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-10'
      >
        Previous
      </button>
      <button
        onClick={goToNext}
        className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-10'
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
