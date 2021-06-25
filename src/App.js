import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './components/Loader';
import Grid from './components/Grid';
import Header from './components/Header';
import { fetchImages } from './api';
import './App.css';

function App() {

  const [unsplashImages, setUnsplashImages] = useState([]);

  const getUnsplashImages = () => {
    fetchImages()
      .then(imgData => {
        if (imgData.length) {
          setUnsplashImages(prevState => [...prevState, ...imgData]);
        }
      });
  }

  useEffect(() => {
    getUnsplashImages();
  }, [])
  return (
    <div className="App">
      <Header />
      <InfiniteScroll
        dataLength={unsplashImages?.length || 0}
        next={getUnsplashImages}
        hasMore={true}
        loader={<Loader />}
      >
        <Grid unsplashImages={unsplashImages} getUnsplashImages={getUnsplashImages} />
      </InfiniteScroll>
    </div>
  );
}

export default App;
