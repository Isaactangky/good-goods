import { Fragment } from "react";

import { Content, Wrapper, Carousel, Text } from "./ProductInfo.styles";
import NoImage from "../../images/no_image.jpg";
const ProductInfo = ({ title, description, category, images }) => (
  <Wrapper>
    <Content>
      <Text>
        <h1>{title}</h1>
        <span>{category}</span>
        <p>{description}</p>
      </Text>

      <Carousel>
        {images?.length > 0 && (
          <div
            id="carouselControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              {images.length > 0 ? (
                images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      class={`carousel-item image-container ${
                        index === 0 ? "active" : ""
                      }`}
                    >
                      <img
                        src={image.url}
                        class="d-block"
                        alt="product-image"
                      />
                    </div>
                  );
                })
              ) : (
                <div class="carousel-item active image-container ">
                  <img src={NoImage} class="d-block  " alt="product-image" />
                </div>
              )}
            </div>
            {images?.length > 1 && (
              <Fragment>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </Fragment>
            )}
          </div>
        )}
      </Carousel>
    </Content>
  </Wrapper>
);

export default ProductInfo;
