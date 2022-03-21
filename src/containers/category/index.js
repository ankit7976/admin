
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, getAllCategory, updateCategory,
  deleteCategories as deleteCategoriesAction } from '../../actions/category.action'
import Layout from '../../components/Layout'
import AppModel from '../../components/Model/Model'
import Input from '../../components/UI/Input'
import CheckboxTree from 'react-checkbox-tree';
import { IoIosCheckbox, IoIosCheckboxOutline, IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'

import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import RanderUpdateCategoryModel from './ChildModule/RanderUpdateCategoryModel'
import RanderAddCategoriesModel from './ChildModule/RanderAddCategoryModel'



const Category = (props) => {

  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const [categoryName, setCategoryname] = useState('');
  const [parentcategoryId, setParentcategoryId] = useState('');
  const [categoryImage, setcategoryImage] = useState('');
  const [expanded, setExpanded] = useState([]);
  const [checked, setChecked] = useState([]);
  const [updateCategoryModel, setUpdateCategoryModel] = useState(false)
  const [expandedArray, setExpandedArray] = useState([])
  const [checkedArray, setcheckedArray] = useState([])
  const [deleteCategoryModel,setDeleteCategoryModel] = useState(false)

  const handleClose = () => {
    const form = new FormData();
    form.append('name', categoryName)
    form.append('parentId', parentcategoryId)
    form.append('categoryImage', categoryImage)
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

  const randerCategories = (categories) => {

    const myCategories = [];
    for (let category of categories) {
      myCategories.push(
        {
          label: category.name,
          value: category._id,
          children: category.children.length > 0 && randerCategories(category.children)
        }
      )
    }
    return myCategories

  }

  
  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
<<<<<<< Updated upstream
      options.push({ 
        value: category._id, 
        name: category.name, 
        parentId: category.parentId,
        type: category.type
      });
=======
      options.push({ value: category._id,
         name: category.name,
         parentId: category.parentId,
        type: category.type });
>>>>>>> Stashed changes
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options;
  }


  const handelCategoryimage = (e) => {
    setcategoryImage(e.target.files[0])
  }


const updateCheckedAndExpandedCategories = ()=>{

  const categories = createCategoryList(category.categories)
  const checkArray = [];
  const expandedArray = [];
  checked.length > 0 && checked.forEach((categoryId, index) => {
    const category = categories.find((category, _index) => categoryId == category.value)
    category && checkArray.push(category)
  })
  expanded.length > 0 && expanded.forEach((categoryId, index) => {
    const category = categories.find((category, _index) => categoryId == category.value)
    category && expandedArray.push(category)
  })

  setcheckedArray(checkArray)
  setExpandedArray(expandedArray)
  console.log({ checked, expanded, categories, checkArray, expandedArray })
}

  const UpdateCategory = () => {
    updateCheckedAndExpandedCategories()
    setUpdateCategoryModel(true)
  }


  const handelCategoryInput = (key, value, index, type) => {
    if (type == 'checked') {
      const updatedCheckArray = checkedArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item)
      setcheckedArray(updatedCheckArray)
    } else if (type == 'expanded') {
      const updateexpandedArray = expandedArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item)
      setExpandedArray(updateexpandedArray)
    }
  }

  const updateCategoriesForm = ()=>{
   const form = new FormData()
    expandedArray.forEach((item,index)=>{
      form.append('_id', item.value)
      form.append('name', item.name)
      form.append('parentId', item.parentId ? item.parentId : "")
      form.append('type', item.type)
    })

    checkedArray.forEach((item,index)=>{
      form.append('_id', item.value)
      form.append('name', item.name)
      form.append('parentId', item.parentId ? item.parentId : "")
      form.append('type', item.type)
    })

    dispatch(updateCategory(form)).then((result)=>{
      if(result) return dispatch(getAllCategory())
    })
    setUpdateCategoryModel(false)
   // updateCategory
  }


 



  const deleteCategory = ()=>{
    updateCheckedAndExpandedCategories()
    setDeleteCategoryModel(true)
  }

  const deleteCategories = ()=>{
    const checkIdsArray = checkedArray.map((item,index)=> ({_id:item.value}))
    const expendIdsArray = expandedArray.map((item,index)=> ({_id:item.value}))
    const IdsArray = expendIdsArray.concat(checkIdsArray)
   
    if(checkIdsArray.length > 0){
      dispatch(deleteCategoriesAction(checkIdsArray)).then(result=>{
        if(result){
           dispatch(getAllCategory())
          setDeleteCategoryModel(false) 
        }
      })
    }

    setDeleteCategoryModel(false) 

  }

const randerDeleteCategoryModel = ()=>{

return (
  <AppModel
  show={deleteCategoryModel}
  handleClose={()=> setDeleteCategoryModel(false)}
  modalTitel="Confirm"
  buttons={[
    {
      label:'No',
      color:'primary',
      onClick: ()=> setDeleteCategoryModel(false)
    },
    {
      label:'Yes',
      color:'danger',
      onClick: deleteCategories
    }
  ]}
  >
{/* <h3>Are you sure</h3> */}

<span>Expanded</span>
{expandedArray.map((item,index) => <h5 key={index}>{item.name}</h5> )}
<br />
<span>Checked</span>
{checkedArray.map((item,index) => <h5 key={index}>{item.name}</h5> )}
  </AppModel>
)

}

  return (

    <Layout sidebar>
 
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: 'space-between', marginTop: '20px' }}>
              <h1>Category</h1>
              <Button onClick={handleShow}>Add Category</Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>


            <CheckboxTree
              nodes={randerCategories(category.categories)}
              checked={checked}
              expanded={expanded}
              onCheck={checked => setChecked(checked)}
              onExpand={expanded => setExpanded(expanded)}
              icons={{
                check: <IoIosCheckbox />,
                uncheck: <IoIosCheckboxOutline />,
                halfCheck: <IoIosCheckboxOutline />,
                expandClose: <IoIosArrowForward />,
                expandOpen: <IoIosArrowDown />

              }}
            />


          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <button className='btn btn-danger' onClick={deleteCategory}>Delete</button>
            <button className='btn btn-warning' onClick={UpdateCategory}>Edit</button>
          </Col>
        </Row>
      </Container>
    
      <RanderAddCategoriesModel
    show={show}
    handleClose={handleClose}
    modalTitel="create category"
        categoryName={categoryName}
        setCategoryname={setCategoryname}
        parentcategoryId={parentcategoryId}
        setParentcategoryId={setParentcategoryId}
        handelCategoryimage={handelCategoryimage}
        CreateCategoriesList={createCategoryList(category.categories)}
 
    />

    <RanderUpdateCategoryModel
     show={updateCategoryModel}
     handleClose={updateCategoriesForm}
     modalTitel="Update category"
     dialogClassName="modal-90w"
     CreateCategoriesList={createCategoryList(category.categories)}
     handelCategoryInput={handelCategoryInput}
     expandedArray={expandedArray}
     checkedArray={checkedArray}
    />


    
    
     {randerDeleteCategoryModel()}


    

    </Layout>
  )
}

export default Category