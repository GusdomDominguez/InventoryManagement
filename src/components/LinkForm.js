import { useState } from "react";

const LinkForm = () => {
  const [data, setData] = useState({
    productName: "",
    description: "",
    quantity: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Inserte el nombre del producto..."
          name="productName"
          onChange={handleChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text">
          <i className="material-icons">description</i>
        </div>
        <textarea
          type="text"
          className="form-control"
          name="description"
          placeholder="Inserte una descripcion de su producto..."
          onChange={handleChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text">
          <i className="material-icons">format_list_numbered</i>
        </div>
        <input
          type="number"
          className="form-control"
          placeholder="Inserte la cantidad actual del producto..."
          name="quantity"
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary btn-block">Guardar</button>
    </form>
  );
};
export default LinkForm;
