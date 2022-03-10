 
import React, { useEffect,useState } from 'react'
import { Container, Row,Col,Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, getAllCategory } from '../../actions/category.action'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'


const Category = () => {

  const [show, setShow] = useState(false);
  const dispatch =useDispatch()
  const [categoryName,setCategoryname] = useState('');
  const [parentcategoryId,setParentcategoryId] = useState('');
  const [categoryImage,setcategoryImage] = useState('');

  const handleClose = () => {

    const form = new FormData();
    form.append('name' , categoryName)
    form.append('parentId' , parentcategoryId)
    form.append('categoryImage' , categoryImage)
    dispatch(addCategory(form))
    const cat = {
      categoryName,
      parentcategoryId,
      categoryImage
    }
    console.log(cat)
    setShow(false)

  };
  const handleShow = () => setShow(true);


  const category = useSelector(state => state.category)

useEffect(()=>{
  dispatch(getAllCategory())
},[])

const randerCategories = (categories) =>{

  const myCategories = [];
  for(let category of categories){
    myCategories.push(
      <li key={category._id}>
        {category.name}
      {category.children.length > 0 ? (<ul>{randerCategories(category.children)}</ul>) : null }
      </li>
    )
  }

  return myCategories
  
}


const createCategoryList = (categories,option = []) =>{
  for(let category of categories){
    option.push({value:categories._id, name:category.name});
    if(category.children.length > 0){
      return createCategoryList(category.children,option)
    }
  }
return option;
} 


const handelCategoryimage = (e)=>{
  setcategoryImage(e.target.files[0])
}

  return (
   
    <Layout sidebar>
       <Container>
         <Row>
         <Col md={12}>
           <div style={{display:"flex", justifyContent:'space-between',marginTop:'20px'}}>
          <h1>Category</h1>
           <Button onClick={handleShow}>Add Category</Button>
           </div>
           </Col>
         </Row>

<Row>
  <Col>
  <ul>
    {randerCategories(category.categories)},
    {JSON.stringify(createCategoryList(category.categories))}
  </ul>
  </Col>
</Row>


       </Container>

       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Input
         value={categoryName}
        onChange={(e)=> setCategoryname(e.target.value)}
        placeholder="enter category name"
        type="text"
        
        />

        <select className='form-control' value={parentcategoryId} onChange={(e)=> setParentcategoryId(e.target.value)}>
          <option>Select category</option>
          {createCategoryList(category.categories).map(item => <option value={item._id}>{item.name}</option>)}
        </select>

        <Input
    
        onChange={handelCategoryimage}
        type="file"
        />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}

export default Category