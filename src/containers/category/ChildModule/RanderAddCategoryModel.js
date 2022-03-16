
 import React from 'react'
 import {Row,Col} from 'react-bootstrap';
 import Input from '../../../components/UI/Input';
 import AppModel from '../../../components/Model/Model';
 
 
 const RanderAddCategoriesModel = (props)=>{

    const {
        show,
        handleClose,
        modalTitel,
        categoryName,
        setCategoryname,
        parentcategoryId,
        setParentcategoryId,
        handelCategoryimage,
        CreateCategoriesList


    } = props;

    return (
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
      {CreateCategoriesList.map(option => <option value={option.value}>{option.name}</option>)}
    </select>

    <Input

      onChange={handelCategoryimage}
      type="file"
    />

  </AppModel>
    )
  }

 
   export default RanderAddCategoriesModel;