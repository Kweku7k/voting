import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import axios from 'axios'

import { Form, Container, FloatingLabel, Spinner, Col,Button, Row, Modal } from 'react-bootstrap'
import ImageUploading from 'react-images-uploading'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, set, get, child, onValue } from "firebase/database";
import { useHistory } from 'react-router-dom';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { useEffect } from 'react';
import { InputTags } from 'react-bootstrap-tagsinput'
import 'react-bootstrap-tagsinput/dist/index.css'
import TagsInput from 'react-tagsinput';
import SuccessAlert from '../components/SuccessAlert';
import ErrorAlert from '../components/ErrorAlert';
import MultipleSelectFields from '../components/MultipleSelectFields';

const NewProduct = () => {

const [loadingMessage, setloadingMessage] = useState("Loading")

  const [generalUploadError, setgeneralUploadError] = useState(false)
  const [show, setShow] = useState(false);
  const [quantity, setquantity] = useState()
  const [imageuploaderror, setimageuploaderror] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setState] = useState([])
  const [category, setcategory] = useState(24)
  const [inputList, setInputList] = useState([{ product_id:"8", quantity: 1 }]);
  const [sizes, setsizes] = useState([4,5,6,7])

const [sizesArray, setsizesArray] = useState([])

const addToChecked = (value, size) => {
  console.log(value + ' - ' + size)
  if (value === true){
    sizesArray.push(size)
  }
  else if(value === false){
    // Delete from Array
    // var newarray = sizesArray
    const index = sizesArray.indexOf(size)
    console.log(index)
    if (index !== -1) {
      sizesArray.splice(index, 1);
      // console.log("newarr")
      // console.log(newarray)
      // setsizesArray([newarray])
    }
  }
  console.log(sizesArray)


   

}


const [categories, setcategories] = useState([])
  // Get All Categories
  useEffect(() => {
    axios.get('https://evicstore.com/wp-json/wc/v3/products/categories',{
      headers: {
          'Authorization': `Basic ${token}`
        }
  })
  .then((res)=>{
    console.log('res')
    console.log(res)
    console.log(res.data)
    setcategories(res.data)
  })
  }, [])

const [uploadImage, setuploadImage] = useState(false)
const [loading, setloading] = useState(false)

const history = useHistory()
const storage = getStorage();

const storageRef = ref(storage, `uploads/${new Date()}`);

// 'file' comes from the Blob or File API

const imageUrls = []

const [imageUrl, setimageUrl] = useState([])

let pushimg = []



  const [name, setname] = useState("")
  const [price, setprice] = useState("")
  const [description, setdescription] = useState("")
  const [color, setcolor] = useState("")

  const uname = 'ck_1c9fd82800542cd01838923009ea20743be2734f'
  const pass = 'cs_dc4f49dbbd4efa9f2608ad3b14daec05b0b38aa6'
  
  const token = Buffer.from(`${uname}:${pass}`, 'utf8').toString('base64')

  const formData = new FormData();


const testAdd = () => {

  // read sizes
  loopVariant(inputList)
  // -----

  if (images.length >= 1 ){
    console.log("There are images")

  setuploadImage(true)
  // Loop for images

console.log(images)
console.log("-------")

 

for (let i = 0; i < images.length; i++) { 
  console.log(images[i])
  {images.url 
    ? 
  console.log("Yes images")
    :
    console.log("No Url Found")
  }
  console.log(images[i].imageUrl)
  let file = images[i].file
  formData.append("file", file )
  formData.append("upload_preset", "nqmxjlpv")
  console.log("Image " + i + " uploaded")
    setloading(true)
    setloadingMessage("Uploading Your Images")
axios.post('https://api.cloudinary.com/v1_1/presto-solutions/image/upload',formData)
.then((res)=>{
  console.log(res)
  console.log(res.data.url)
  pushimg.push({"src": res.data.url})
})
.catch((err)=>{
  console.log(err)
  setimageuploaderror(true)
})
.finally(()=>{
  i  == images.length - 1
  ? 
  addProduct()
  :
  console.log("Still loading")
})
}

  }
  else{
    setnoImagesError(true)
    console.log("There were no images, please add images")
  }
  
}


const [tags, settags] = useState([])

const [noImagesError, setnoImagesError] = useState(false)

  const addProduct = () => {
    const atr = loopVariant()

    setloading(true)
    setloadingMessage("Uploading Your Products")
  console.log("Testing")
  axios.post('https://evicstore.com/wp-json/wc/v3/products',{
      "name": name,
      "type": productType,
      "regular_price": price,
      "price": price,
      "description": description,
      // "manage_stock":true,
      // "stock_quantity":1,
      // "stock_status":"instock",
      "short_description": description,
      "categories": [
        {
          id: category
        }
      ],
      images: pushimg,
      "attributes":[
        // {
        // "id":2,
        // "variation":true,
        // "visible":true,
        // "options":color
        // },
        {
        "id":1,
        "variation":true,
        "visible":true,
        // "options":sizesArray
        "options":atr
        }
    ],
  } 
  ,{
    headers: {
        'Authorization': `Basic ${token}`
      }
})
  .then((res) => {
    console.log(res.data)

    const item = res.data
    const itemId = res.data.id
    const itemPrice = res.data.price

    console.log("price")
    console.log(price)
    console.log("atr - " + atr)
    

    setloadingMessage("Creating Variants")
    axios.post(`https://evicstore.com/wp-json/wc/v3/products/${itemId}/variations`,
      {
        "regular_price": price,
        "image": {
          "id": item.images[0].id
        },
        "attributes": [
            {
            "id":1,
            "options":loopVariant(),
            "stock_quantity":1
            }
        ]
      },{
      headers: {
        'Authorization': `Basic ${token}`
      }
    })
    .then(()=>{
      history.push('/products')
    })

  })
  .catch((err) => {
    console.log(err)
    setgeneralUploadError(true)
  })


}

// const [inputList, setInputList] = useState([{ product_id: "365", quantity: 1 }]);


const handleChange = (tags) => {
  setState({tags})
}


const loopVariant = (input) => {
  console.log(input)
  const varSizes = [];
  for (let i = 0; i < inputList.length; i++) { 
  console.log(inputList[i].product_id)
  varSizes.push(inputList[i].product_id)
  console.log(varSizes)
  }
  return varSizes
}


const onUploadProduct = () => {
  for (let i = 0; i < images.length; i++) { 
    console.log(images[i])
    console.log(images[i].imageUrl)

    // Send this file to firebase

    console.log("UploadImage - True")
    setuploadImage(true)

    console.log("images[0].file")
    console.log(images[0].file)
    formData.append("src", images[0].file);



    // uploadBytes (storageRef, images[i].file).then((snapshot) => {
    //   console.log('Uploaded a blob or file!');
    //   console.log(snapshot)

    //   getDownloadURL(snapshot.ref).then((url) => {
    //     console.log('File available at', url);
    //     // ...
    //     imageUrls.push({
    //       "src": "https://firebasestorage.googleapis.com/v0/b/fir-learning-35a38.appspot.com/o/evic%20LOGOo-03.png?alt=media&token=d9d6616c-b0d7-4510-9841-39c8527b8102"
    //     })

    //     console.log(imageUrls)

    //   })
    //   .finally(()=>{
    //     console.log("This should run after the urls")
    //     console.log(images)
    //     console.log("imageUrls")
    //     console.log(imageUrls)
    //     setuploadImage(false)
    //   })
    //     console.log(snapshot.ref)

    //   })
     
    }

    setTimeout(() => {
      addProduct()
    }, 5000);
    

}



const itemSizes = ["8","10","12","14","16","18"]

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList)
    console.log(imageList, addUpdateIndex);
    
    console.log("addUpdateIndex")
    console.log(addUpdateIndex)

    // Send this file to firebase

    // console.log("UploadImage - True")
    // setuploadImage(true)
    // uploadBytes (storageRef, addUpdateIndex).then((snapshot) => {
    //   console.log('Uploaded a blob or file!');
    //   console.log(snapshot)

    //   getDownloadURL(snapshot.ref).then((url) => {
    //     console.log('File available at', url);
    //     // ...

    //     imageList[addUpdateIndex].imageUrl = url
        
    //     console.log(imageList[addUpdateIndex])
    //   });

    //     console.log(snapshot.ref)

    //     setuploadImage(false)
    // });


    setImages(imageList);
  };

  const [productType, setproductType] = useState("variable")


    return (


    <div style={{width:'100%'}}>
              {/* <SuccessAlert message="Please upload images"/> */}
              
              {
                noImagesError
                &&
                <ErrorAlert message="Please upload images"/>
              }
              {
                imageuploaderror
                &&
                <ErrorAlert message="There was problems a problem with the images "/>
              }

              

{
            loading 
            ? 
            <div className="loadingPage">
              <div style={{margin:'auto'}}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h4>{loadingMessage}</h4>
              </div>
            </div>
            :
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
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {/* <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button> */}

            {/* <div className="addImage" onClick={onImageUpload}{...dragProps}>
                <FontAwesomeIcon size='2x' color='grey' icon={faPlusCircle}/>
            </div> */}
            &nbsp;
            <div style={{display:'flex', alignItems:'center', marginBottom:10, justifyContent:'space-between'}}>
              <h4><b>{ name ? name : "Add A New Product"}</b></h4>
            {/* <button className='deleteAllImages' onClick={onImageRemoveAll}>Delete all images</button> */}
            
            </div>
            <div style={{display:'flex', flexWrap:'wrap'}} >
            <div className="addImage" onClick={onImageUpload}{...dragProps}>
                <FontAwesomeIcon size='2x' color='grey' icon={faPlusCircle}/>
            </div>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img className='addImageCard' onClick={() => onImageRemove(index)} src={image.data_url} alt="" width="100" height="100" />
                <div className="image-item__btn-wrapper">
                  {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                  {/* <FontAwesomeIcon size='1x' color='grey' icon={faTrash}/> */}

                  {/* <button onClick={() => onImageRemove(index)}>Remove</button> */}
                </div>
              </div>
            ))}
            </div>

          </div>
        )}
      </ImageUploading>
      {/* <h6 className='text-muted' style={{color:'red'}}>Please add an image</h6> */}
      <Form>
            <>
  <FloatingLabel
    controlId="floatingInput"
    label="Item Name"
    className="mb-3"
  >
    <Form.Control value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Item Name" />
  </FloatingLabel>

  <FloatingLabel
    style={{ marginBottom: 30 }}
    controlId="floatingSelectGrid"
    label="Product Type"
  >
    <Form.Select
      value={productType}
      onChange={(e) => setproductType(e.target.value)}
      name="product_type"
      aria-label="Floating label select example"
    >

        <option key={1} value="simple">Simple</option>
        <option key={2} value="variable">Variable</option>

    </Form.Select>
  </FloatingLabel>

  

    {/* <TagsInput value={tags} onChange={handleChange()}/> */}

  {/* <FloatingLabel
    controlId="floatingInput"
    label="Color"
    className="mb-3"
  >
    <Form.Control value={color} onChange={(e) => setcolor(e.target.value)} type="text" placeholder="Item Name" />
  </FloatingLabel> */}

  <FloatingLabel controlId="floatingPrice" label="Price">
    {/* pattern="[0-9]*" */}
    <Form.Control value={price} type="number" onChange={(e) => setprice(e.target.value)} placeholder="Price" />
  </FloatingLabel>
<br/>

{productType == 'simple' &&
  <FloatingLabel controlId="floatingPrice" label="Quantity">
    <Form.Control value={quantity} type="number" onChange={(e) => setquantity(e.target.value)} placeholder="Quantity" />
  </FloatingLabel>
}





  <FloatingLabel controlId="floatingTextarea2" label="Description">
    <Form.Control
      as="textarea"
      value={description}
      onChange={(e) => setdescription(e.target.value)}
      placeholder="Description"
      style={{ height: '100px', margin:'20px auto' }}
    />
  </FloatingLabel>
  
  



  
  <FloatingLabel style={{marginBottom:30}} controlId="floatingSelectGrid" label="Category">
      <Form.Select value={category} onChange={(e)=> setcategory(e.target.value)} name="product_id" aria-label="Floating label select example">
      {categories.map((product)=>(
        <option value={product.id}>{product.name}</option>
))} 
      </Form.Select>
    </FloatingLabel>


  





        {
          productType === "variable" 
          ? 
          <>
      <h6 onClick={handleShow}>Sizes - UK</h6>
    {/* <div className='flex-two'>


      {itemSizes.map((size) => (
        <div className='checkboxItem'>
          <Form.Check 
          inline
          type="checkbox"
          id="default"
          label={size}  
          onClick={(e) => {addToChecked(e.target.checked, size)}}
        />
        </div>
      ))}
    </div> */}

      <MultipleSelectFields inputList={inputList} setInputList={setInputList} itemSizes={itemSizes}/>
    </>
    :
    <FloatingLabel style={{marginBottom:30}} controlId="floatingSelectGrid" label="Size">
      <Form.Select value={sizesArray[0]} onChange={(e)=> setsizesArray([e.target.value])} name="product_id" aria-label="Floating label select example">
      {/* <Form.Select value={size} onChange={(e)=> setsizesArray([...sizesArray, e.target.value])} name="product_id" aria-label="Floating label select example"> */}
      {itemSizes.map((size)=>(
        <option value={size}>{size}</option>
))} 
      </Form.Select>
    </FloatingLabel>

        }





    {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Sizes - UK</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        {[12,13,14,15,16,17,18,19,20].map((size) => (
        <Form.Check 
        inline
        type="checkbox"
        id="default"
        label={size}
        onClick={(e) => {addToChecked(e.target.checked, size)}}
      />
      ))}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}


    {/* </Form.Control> */}









{/* 
{inputList.map((x, i) => {
    return(
      <>
  <Row className="g-2 mb-2">

  <Col sm>
    <FloatingLabel controlId="floatingSelectGrid" label="Dress Sizes">
      <Form.Select name="product_id" onChange={e => handleInputChange(e, i)} value={x.product_id} aria-label="Floating label select example">
      {sizes.map((size)=>(
        <option value={size}>{size}</option>
))}     
      </Form.Select>
    </FloatingLabel>
  </Col>

  <Col sm>
    <FloatingLabel controlId="floatingInputGrid" label="Quantity">
      <Form.Control name="quantity" type="number" placeholder="" value={ x.quantity ? x.quantity : 1} onChange={e => handleInputChange(e, i)} />
    </FloatingLabel>
  </Col>
</Row> 

{inputList.length - 1 === i && 
  <Button variant="primary" onClick={handleAddClick}  type="submit">
    Add Item
  </Button>
  } */}

{/* </>
    )})} */}



    

    

        </>
        {/* <div style={{ marginTop: 20 }}>{JSON.stringify(images)}</div> */}
        </Form>

        {
          uploadImage
          ?
          <button className="waitButton" onClick={() => onUploadProduct()}>
            <Spinner animation="border" size="sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            {' '}Uploading Images
            </button>
          :
           <button className="subbutton" onClick={() => testAdd()}>Upload</button>
        }

    </>
}
    </div>
    )
}

export default NewProduct
