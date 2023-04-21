import React from 'react';
import { useState } from 'react';
export const Admin = ({ items, setItems }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [img, setImg] = useState('');

  const removeItem = (index) => {
    let tempItem = [...items];
    tempItem.splice(index, 1);
    setItems(tempItem);
  };
  const addFormSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: items[items.length - 1].id + 1,
      title,
      desc,
      price,
      quantity,
      img,
    };
    setItems([...items, newItem]);
  };
  return (
    <section className="single py-5">
      <article className="container">
        <div className="row align-items-center">
          <div className="col-md-10 mx-auto">
            <form onSubmit={addFormSubmit}>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="m-2"
                type="text"
                placeholder="title"
              />

              <input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="m-2"
                type="text"
                placeholder="description"
              />

              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="m-2"
                type="number"
                placeholder="price"
              />

              <select
                value={img}
                onChange={(e) => setImg(e.target.value)}
                className="m-2"
              >
                <option value="img/product1.jpg">Majica</option>
                <option value="img/product2.jpg">Torba</option>
                <option value="img/product3.jpg">Naočare</option>
                <option value="img/product4.jpg">Sat</option>
                <option value="img/product5.jpg">Šešir</option>
                <option value="img/product2.jpg">Roleri</option>
              </select>

              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="m-2"
                type="number"
                placeholder="quantity"
              />
              <input
                type="submit"
                value="Add"
                className="btn btn-primary m-2"
              />
            </form>
            <table className="table table-striped table-hover shadow-lg">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">image</th>
                  <th scope="col">title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
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
                        <button className="btn btn-warning">Edit</button>
                      </td>
                      <td>
                        <button
                          onClick={() => removeItem(index)}
                          className="btn btn-danger"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
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
