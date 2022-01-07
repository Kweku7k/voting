import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { Modal, Button } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom'



const Item = ({media, name, price, wooUrl,media_type, id}) => {

    let history = useHistory();

    const [deleteid, setdeleteid] = useState(null)

   

    const uname = 'ck_1c9fd82800542cd01838923009ea20743be2734f'
    const pass = 'cs_dc4f49dbbd4efa9f2608ad3b14daec05b0b38aa6'


    const token = Buffer.from(`${uname}:${pass}`, 'utf8').toString('base64')

    const [show, setShow] = useState(false)

    const deleteProduct = (id) => {
        console.log(id)
        setShow(true)
        setdeleteid(id)
        
    }

    const handleClose = () => {
        console.log("deleting")
        // setloading(true)
        setShow(false)
        axios.delete(`https://evicstore.com/wp-json/wc/v3/products/${deleteid}`,{
        headers: {
            'Authorization': `Basic ${token}`
            },
    })
    .then((res)=>{
      console.log(res)
      window.location.reload();
    })
    }
    const handleShow = () => setShow(true);
    
    return (
        <>
        {/* style={{marginRight:'auto'}} */}
        {/* <div onClick={()=>(window.location.href = wooUrl)} className='options-card' style={{borderRadius:10}}> */}
        <div className='options-card' style={{borderRadius:10}}>
            {/* <img onClick={()=>window.open("https://www.google.com")} src={media} className="igPost"/> */}
            <>
            <img src={media} style={{width:60, marginRight:20, height:60, objectFit:'cover'}}/>
            <div style={{width:'auto'}} onClick={()=>(history.push(`/edit/${id}`))} >
            <h6><b>{name}</b></h6>
            <h6 className='text-muted'>Ghc {price}</h6>
            </div>
            </>
            
            <div onClick={()=>deleteProduct(id)} style={{marginLeft:'auto'}} className='delete'>
            <FontAwesomeIcon color="red" icon={faTrash}/>
            </div>

        </div>

       
      <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)} >
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete Item
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        // </>


        // <div style={{backgroundColor:'white', borderRadius:10}} className="col-md-4 col-sm-4"  >
        //     <img onClick={()=>history.push(`/evic/${id}`)} src={media} className="igPost"/>
        // </div>


        // <div style={{backgroundColor:'#c4c4c4', borderRadius:10}} className={ wooUrl == "null" ? "igPost" : "activePost"}  >
        //     {media_type == "VIDEO" ? 
        //     <video muted loop autoPlay={false} src={media + '#t=0.1'} className="igPost" width='100%' height='100%'>
        //     </video>
        //     :
        //     <img src={media} className="igPost" width='100%'/>

        // }
        // </div>
    )


//     <video width="300" height="150">
//    <source src="testvideo.mp4#t=0.1" type="video/mp4" />
// </video>
}

export default Item
