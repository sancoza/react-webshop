import React from 'react';
import { Link } from 'react-router-dom';
export const Home = ({ items, cart, setCart }) => {
  const addToCart = (index) => {
    let newCartItem = {
      id: items[index].id,
      title: items[index].title,
      price: items[index].price,
      desc: items[index].desc,
      quantity: 1,
      img: items[index].img,
    };
    setCart((prev) => {
      return [...prev, newCartItem];
    });
  };
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./img/slide_1.jpg"
              className="d-block w-100"
              alt="slider_1"
            />
            <div className="carousel-caption d-none d-md-block text-end">
              <p className="lead">Women collection</p>
              <h2 className="display-2 fw-bold">
                Show
                <span>
                  your <br />
                  personal
                </span>
                style
              </h2>
              <p className="pt-2">
                Lorem ipsum dolor sit, amet consectetur <br />
                adipisicing elit. Odit, debitis!
              </p>
              <a href="/" className="button">
                View collection
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./img/slide_2.jpg"
              className="d-block w-100"
              alt="slider_2"
            />
            <div className="carousel-caption d-none d-md-block text-start">
              <p className="lead">Man collection</p>
              <h2 className="display-2 fw-bold">
                Show
                <span>
                  your <br />
                  personal
                </span>
                style
              </h2>
              <p className="pt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
                debitis!
              </p>
              <a href="/" className="button">
                View collection
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="products py-5">
        <article className="container">
          <div className="row">
            {items.map((item, index) => {
              return (
                <div key={index} className="col-md-4 col-sm-6">
                  <div className="card">
                    <Link to={`/single/${index}`} className="holder">
                      <img
                        src={item.img}
                        className="card-img-top"
                        alt="product_6"
                      />
                    </Link>
                    <div className="card-body p-4">
                      <div className="price d-flex justify-content-between">
                        <h5 className="card-title">{item.title}</h5>
                        <h5>{item.price} $</h5>
                      </div>
                      <p className="card-text">{item.desc}</p>
                      <Link
                        to="/cart"
                        onClick={() => addToCart(index)}
                        className="button"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>

      <section className="about py-5 bg-light">
        <article className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 text-center">
              <div className="border p-4 border-dark rounded shadow-lg">
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <h5 className="fw-bolder my-2">Money back guarantee</h5>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="border p-4 border-dark rounded shadow-lg">
                <i className="fa-solid fa-truck"></i>
                <h5 className="fw-bolder my-2">Free delivery</h5>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="border p-4 border-dark rounded shadow-lg">
                <i className="fa-solid fa-headset"></i>
                <h5 className="fw-bolder my-2">Always support</h5>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="border p-4 border-dark rounded shadow-lg">
                <i className="fa-solid fa-credit-card"></i>
                <h5 className="fw-bolder my-2">Secure payments</h5>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="discoverOff d-flex align-items-center">
        <article className="container text-end">
          <p className="lead">Woman Collection</p>
          <h2 className="display-2 fw-bolder">50% OFF</h2>
          <a href="/" className="button mb-4">
            Discover Now
          </a>
          <p>Limited time offer</p>
        </article>
      </section>
    </>
  );
};
