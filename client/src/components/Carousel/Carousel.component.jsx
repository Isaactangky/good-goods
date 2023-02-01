import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./Carousel.styles.scss";
const Carousel = ({ images }) => {
  const [slide, setSlide] = useState(0);
  // reset slide index when exceeding index range
  useEffect(() => {
    const lastIndex = images.length - 1;
    if (slide < 0) {
      setSlide(lastIndex);
      return;
    }
    if (slide >= images.length) {
      setSlide(0);
    }
  }, [slide, images]);
  // auto sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(slide + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [slide]);
  return (
    <section className="container">
      {/* <div className="title">
        <h3>{title}</h3>
      </div> */}
      <div className="section-center">
        {images.map((image, index) => {
          const { url, _id } = image;
          // set class name base on index and current slide value
          let position = "lastSlide";
          if (index === slide) position = "activeSlide";
          if (
            index === slide + 1 ||
            (index === 0 && slide === images.length - 1)
          )
            position = "nextSlide";

          return (
            <div
              key={_id}
              className={`image-container ${
                images.length > 1 ? position : "activeSlide"
              }`}
            >
              <img src={url} alt="product" className="product-img" />
            </div>
          );
          //more
        })}
        {images.length > 1 && (
          <>
            <button className="prev" onClick={() => setSlide(slide - 1)}>
              <FiChevronLeft />
            </button>
            <button className="next" onClick={() => setSlide(slide + 1)}>
              <FiChevronRight />
            </button>
          </>
        )}
      </div>
    </section>
  );
};
export default Carousel;
