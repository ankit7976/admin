
 import React from 'react'
import {Row,Col} from 'react-bootstrap';
import Input from '../../../components/UI/Input';
import AppModel from '../../../components/Model/Model';


const RanderUpdateCategoryModel = (props)=>{

    const {
        show,
        handleClose,
        modalTitel,
        dialogClassName,
        expandedArray,
        checkedArray,
        CreateCategoriesList,
        handelCategoryInput

    } = props;

    console.log({expandedArray,checkedArray})

    return (
      <AppModel

      show={show}
      handleClose={handleClose}
      modalTitel={modalTitel}
      dialogClassName={dialogClassName}

    >

      <Row>
        <Col>

          <label>Expanded</label>

        </Col>
      </Row>
      {
        expandedArray.length > 0 &&
        expandedArray.map((item, index) =>
          <Row key={index}>
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
                {CreateCategoriesList.map(option => <option value={option.value}>{option.name}</option>)}
              </select>
            </Col>

            <Col>
              <select className='form-control' value={item.type} 
              onChange={(e)=> handelCategoryInput('type', e.target.value, index, 'expanded')}>
                  <option value="">Select type</option>
                <option value="store">Store</option>
                <option value="product">Product</option>
                <option value="page">Page</option>
              </select>


            </Col>
          </Row>

        )
      }

      <h6>Checked Category</h6>

      {
        checkedArray.length > 0 &&
        checkedArray.map((item, index) =>
          <Row key={index}>
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
                {CreateCategoriesList.map(option => <option value={option.value}>{option.name}</option>)}
              </select>
            </Col>

            <Col>
              <select className='form-control' value={item.type} 
              onChange={(e)=> handelCategoryInput('type', e.target.value, index, 'checked')}
              >
                <option value="">Select type</option>
                <option value="store">Store</option>
                <option value="product">Product</option>
                <option value="page">Page</option>
              </select>


            </Col>
          </Row>

        )
      }

    </AppModel>
    );
  }


  export default RanderUpdateCategoryModel