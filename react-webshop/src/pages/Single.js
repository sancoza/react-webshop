import React from 'react';

export const Single = () => {
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
                src="./img/product1.jpg"
                alt="img_product"
                className="img-fluid border shadow-lg"
              />
            </div>
            <div className="col-md-6">
              <div className="price d-flex justify-content-between">
                <h5 className="card-title">Sunglasses</h5>
                <h5>100$</h5>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore debitis placeat pariatur asperiores esse laudantium
                vitae quis est reiciendis. Magnam. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. <br /> <br /> Eaque sint enim quis
                at earum quisquam officia, eligendi similique dolores nulla eius
                aperiam ad maiores blanditiis dolor repellat ipsam harum alias.
                Dolor vero aliquam quod obcaecati neque quam, itaque mollitia
                architecto.
              </p>
              <a href="/" className="button">
                Add to card
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
