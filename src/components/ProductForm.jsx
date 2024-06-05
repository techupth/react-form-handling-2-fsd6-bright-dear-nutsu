import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
    const data = {
      Name: name,
      Image_Url: imgUrl,
      Price: price,
      Description: description,
    };
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name={name}
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name={imgUrl}
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              setImgUrl(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name={price}
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name={description}
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
