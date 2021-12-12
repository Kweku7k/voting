import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Form, Container, FloatingLabel } from 'react-bootstrap'
import {ImageUploading} from 'react-images-uploading'

const NewOrder = () => {

  const [images, setImages] = ([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };


  const [name, setname] = useState("")
  const [price, setprice] = useState("")
  const [description, setdescription] = useState("")

  
  const uname = 'ck_1c9fd82800542cd01838923009ea20743be2734f'
  const pass = 'cs_dc4f49dbbd4efa9f2608ad3b14daec05b0b38aa6'
  
  const token = Buffer.from(`${uname}:${pass}`, 'utf8').toString('base64')
  const addProduct = () => {
  console.log("Testing s")
  axios.post('https://evicstore.com/wp-json/wc/v3/products',{
      "name": name,
      "type": "simple",
      "regular_price": price,
      "description": description,
      "short_description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      "categories": [
        {
          id: 9
        },
        {
          id: 14
        }
      ],
      images: [
        {
          src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg"
        },
        {
          src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg"
        }
      ]
  }
  ,{
    headers: {
        'Authorization': `Basic ${token}`
      }
})
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
  
}


  
   
    return (
        <>



      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>


        <Form>
            <>
  <FloatingLabel
    controlId="floatingInput"
    label="Item Name"
    className="mb-3"
  >
    <Form.Control value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Item Name" />
  </FloatingLabel>

  <FloatingLabel controlId="floatingPrice" label="Price">
    <Form.Control value={price} type="number" onChange={(e) => setprice(e.target.value)} placeholder="Price" />
  </FloatingLabel>

  <FloatingLabel controlId="floatingTextarea2" label="Description">
    <Form.Control
      as="textarea"
      value={description}
      onChange={(e) => setdescription(e.target.value)}
      placeholder="Description"
      style={{ height: '100px', margin:'20px auto' }}
    />
  </FloatingLabel>
        </>


        </Form>
<button className="subbutton" onClick={() => addProduct()}>Go</button>


        </>
    )
}

export default NewOrder
