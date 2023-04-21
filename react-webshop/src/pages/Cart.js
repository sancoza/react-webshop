import React from 'react';

export const Cart = ({ cart, setCart }) => {
  const removeFromCart = (index) => {
    let tempCart = [...cart];
    tempCart.splice(index, 1);
    setCart(tempCart);
  };
  return (
    <section className="single py-5">
      <article className="container">
        <div className="row align-items-center">
          <div className="col-md-10 mx-auto">
            <table className="table table-striped table-hover shadow-lg">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">image</th>
                  <th scope="col">title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{item.id}</th>
                      <td>
                        <img src={item.img} height="30px" alt="" />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.desc}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}$</td>
                      <td>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="btn btn-danger"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}

                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => setCart([])}
                    >
                      Clear Cart
                    </button>
                  </td>
                  <td></td>
                  <td>Total</td>
                  <td>
                    {cart.reduce((acc, cur) => {
                      return acc + cur.price * cur.quantity;
                    }, 0)}
                  </td>
                </tr>
              </tbody>
            </table>
            <a href="/" className="button mt-4">
              Payment process
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
