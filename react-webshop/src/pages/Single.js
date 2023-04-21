import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRef } from 'react';
export const Single = ({ items, cart, setCart }) => {
  const params = useParams();
  const qty = useRef(0);

  const addToCart = () => {
    let newCartItem = {
      id: items[params.singleId].id,
      title: items[params.singleId].title,
      price: items[params.singleId].price,
      desc: items[params.singleId].desc,
      quantity: qty.current.value,
      img: items[params.singleId].img,
    };
    setCart((prev) => {
      return [...prev, newCartItem];
    });
  };

  let options = [];
  for (let i = 1; i <= items[params.singleId].quantity; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div>
      <section className="shopHeading text-center bg-light py-5">
        <h2 className="fw-bolder">Single product page</h2>
        <p className="fw-lighter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>

      <section className="single py-5">
        <article className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={'../' + items[params.singleId].img}
                alt="img_product"
                className="img-fluid border shadow-lg"
              />
            </div>
            <div className="col-md-6">
              <div className="price d-flex justify-content-between">
                <h5 className="card-title">{items[params.singleId].title}</h5>
                <h5>{items[params.singleId].price}$</h5>
              </div>
              <select
                ref={qty}
                className="form-select"
                aria-label="Default select example"
              >
                {options}
              </select>
              <p className="py-3">{items[params.singleId].desc}</p>
              <Link onClick={addToCart} to="/cart" className="button">
                Add to card
              </Link>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
