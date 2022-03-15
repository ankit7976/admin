
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, getAllCategory, updateCategory } from '../../actions/category.action'
import Layout from '../../components/Layout'
import AppModel from '../../components/Model/Model'
import Input from '../../components/UI/Input'
import CheckboxTree from 'react-checkbox-tree';
import { IoIosCheckbox, IoIosCheckboxOutline, IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'

import 'react-checkbox-tree/lib/react-checkbox-tree.css';



const Category = () => {

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
      options.push({ value: category._id, name: category.name, parentId: category.parentId });
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options;
  }


  const handelCategoryimage = (e) => {
    setcategoryImage(e.target.files[0])
  }

  const UpdateCategory = () => {
    setUpdateCategoryModel(true)
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

  const randerUpdateCategoryModel = ()=>{
    return (
      <AppModel

      show={updateCategoryModel}
      handleClose={updateCategoriesForm}
      modalTitel="Update category"
      dialogClassName="modal-90w"

    >

      <Row>
        <Col>

          <label>Expanded</label>

        </Col>
      </Row>
      {
        expandedArray.length > 0 &&
        expandedArray.map((item, index) =>
          <Row>
            <Col >
              <Input
                value={item.name}
                onChange={(e) => handelCategoryInput('name', e.target.value, index, 'expanded')}
                placeholder="enter category name"
                type="text"

              />
            </Col>

            <Col>
              <select className='form-control' value={item.parentId} onChange={(e) => handelCategoryInput('parentId', e.target.value, index, 'expanded')}>
                <option>Select category</option>
                {createCategoryList(category.categories).map(option => <option value={option.value}>{option.name}</option>)}
              </select>
            </Col>

            <Col>
              <select className='form-control'>
                <option>Select category</option>
                <option>Store</option>
                <option>Product</option>
                <option>Page</option>
              </select>


            </Col>
          </Row>

        )
      }

      <h6>Checked Category</h6>

      {
        checkedArray.length > 0 &&
        checkedArray.map((item, index) =>
          <Row>
            <Col >
              <Input
                value={item.name}
                onChange={(e) => handelCategoryInput('name', e.target.value, index, 'checked')}
                placeholder="enter category name"
                type="text"

              />
            </Col>

            <Col>
              <select className='form-control' value={item.parentId} onChange={(e) => handelCategoryInput('parentId', e.target.value, index, 'checked')}>
                <option>Select category</option>
                {createCategoryList(category.categories).map(option => <option value={option.value}>{option.name}</option>)}
              </select>
            </Col>

            <Col>
              <select className='form-control'>
                <option>Select category</option>
                <option>Store</option>
                <option>Product</option>
                <option>Page</option>
              </select>


            </Col>
          </Row>

        )
      }

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
            <button className='btn btn-danger'>Delete</button>
            <button className='btn btn-warning' onClick={UpdateCategory}>Edit</button>
          </Col>
        </Row>
      </Container>

     {randerUpdateCategoryModel()}


      <AppModel

        show={show}
        handleClose={handleClose}
        modalTitel="create category"

      >

        <Input
          value={categoryName}
          onChange={(e) => setCategoryname(e.target.value)}
          placeholder="enter category name"
          type="text"

        />

        <select className='form-control' value={parentcategoryId} onChange={(e) => setParentcategoryId(e.target.value)}>
          <option>Select category</option>
          {createCategoryList(category.categories).map(option => <option value={option.value}>{option.name}</option>)}
        </select>

        <Input

          onChange={handelCategoryimage}
          type="file"
        />

      </AppModel>

    </Layout>
  )
}

export default Category