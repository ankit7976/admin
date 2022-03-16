import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { addProduct } from '../../actions/product.action';
import Layout from '../../components/Layout'


const Create = () => {

  const [name, setName] = useState('');
  const [price, setprice] = useState('');
  const [quantity, setquantity] = useState('');
  const [description, setdescription] = useState('');
  const [offer, setoffer] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [productPictures, setproductPictures] = useState('');
  

const dispatch = useDispatch()
  const category = useSelector(state => state.category)

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options;
  }

const handelproductPictures = (e)=>{
setproductPictures([
  ...productPictures,
  e.target.files[0]
])
}


const crateProducthandelr =()=>{
  const form = new FormData()
  form.append('name',name)
  form.append('price',price)
  form.append('description',description)
  form.append('offer',offer)
  form.append('category',categoryId)
  form.append('quantity',quantity)
  for(let pic of productPictures){
    form.append('productPictures',pic)
  }
  dispatch(addProduct(form)) 
}

  return (

    <Layout sidebar>


      <div className="content">
        <div className="row">
          <div className="col-12">
            <div className="card card-default">
              <div className="card-header card-header-border-bottom">
                <h2>Add Product</h2>
              </div>
              <div className="card-body">
                <div className="row ec-vendor-uploads">
                  <div className="col-lg-4">
                    <div className="ec-vendor-img-upload">
                      <div className="ec-vendor-main-img">
                        <div className="avatar-upload">
                          <div className="avatar-edit">
                            <input type="file" id="imageUpload" onChange={handelproductPictures}
                            className="ec-image-upload"
                            accept=".png, .jpg, .jpeg" /><label htmlFor="imageUpload"><img
                              src="../assets/img/icons/edit.svg"
                              className="svg_img header_svg" alt="edit" /></label></div>
                          <div className="avatar-preview ec-preview">
                            <div className="imagePreview ec-div-preview"><img
                              className="ec-image-preview"
                              src="../assets/img/products/vender-upload-preview.jpg"
                              alt="edit" /></div>
                          </div>
                        </div>
                        <div className="thumb-upload-set colo-md-12">
                          <div className="thumb-upload">
                            <div className="thumb-edit"><input type="file" onChange={handelproductPictures}
                              id="thumbUpload01" className="ec-image-upload"
                              accept=".png, .jpg, .jpeg"  /><label
                                htmlFor="imageUpload"><img
                                  src="../assets/img/icons/edit.svg"
                                  className="svg_img header_svg" alt="edit" /></label>
                            </div>
                            <div className="thumb-preview ec-preview">
                              <div className="image-thumb-preview"><img
                                className="image-thumb-preview ec-image-preview"
                                src="../assets/img/products/vender-upload-thumb-preview.jpg"
                                alt="edit" /></div>
                            </div>
                          </div>
                          <div className="thumb-upload">
                            <div className="thumb-edit"><input type="file" onChange={handelproductPictures}
                              id="thumbUpload02" className="ec-image-upload"
                              accept=".png, .jpg, .jpeg" /><label
                                htmlFor="imageUpload"><img
                                  src="../assets/img/icons/edit.svg"
                                  className="svg_img header_svg" alt="edit" /></label>
                            </div>
                            <div className="thumb-preview ec-preview">
                              <div className="image-thumb-preview"><img
                                className="image-thumb-preview ec-image-preview"
                                src="../assets/img/products/vender-upload-thumb-preview.jpg"
                                alt="edit" /></div>
                            </div>
                          </div>
                          <div className="thumb-upload">
                            <div className="thumb-edit"><input type="file" onChange={handelproductPictures}
                              id="thumbUpload03" className="ec-image-upload"
                              accept=".png, .jpg, .jpeg" /><label
                                htmlFor="imageUpload"><img
                                  src="../assets/img/icons/edit.svg"
                                  className="svg_img header_svg" alt="edit" /></label>
                            </div>
                            <div className="thumb-preview ec-preview">
                              <div className="image-thumb-preview"><img
                                className="image-thumb-preview ec-image-preview"
                                src="../assets/img/products/vender-upload-thumb-preview.jpg"
                                alt="edit" /></div>
                            </div>
                          </div>
                          <div className="thumb-upload">
                            <div className="thumb-edit"><input type="file" onChange={handelproductPictures}
                              id="thumbUpload04" className="ec-image-upload"
                              accept=".png, .jpg, .jpeg" /><label
                                htmlFor="imageUpload"><img
                                  src="../assets/img/icons/edit.svg"
                                  className="svg_img header_svg" alt="edit" /></label>
                            </div>
                            <div className="thumb-preview ec-preview">
                              <div className="image-thumb-preview"><img
                                className="image-thumb-preview ec-image-preview"
                                src="../assets/img/products/vender-upload-thumb-preview.jpg"
                                alt="edit" /></div>
                            </div>
                          </div>
                          <div className="thumb-upload">
                            <div className="thumb-edit"><input type="file" onChange={handelproductPictures}
                              id="thumbUpload05" className="ec-image-upload"
                              accept=".png, .jpg, .jpeg" /><label
                                htmlFor="imageUpload"><img
                                  src="../assets/img/icons/edit.svg"
                                  className="svg_img header_svg" alt="edit" /></label>
                            </div>
                            <div className="thumb-preview ec-preview">
                              <div className="image-thumb-preview"><img
                                className="image-thumb-preview ec-image-preview"
                                src="../assets/img/products/vender-upload-thumb-preview.jpg"
                                alt="edit" /></div>
                            </div>
                          </div>
                          <div className="thumb-upload">
                            <div className="thumb-edit"><input type="file" onChange={handelproductPictures}
                              id="thumbUpload06" className="ec-image-upload"
                              accept=".png, .jpg, .jpeg" /><label
                                htmlFor="imageUpload"><img
                                  src="../assets/img/icons/edit.svg"
                                  className="svg_img header_svg" alt="edit" /></label>
                            </div>
                            <div className="thumb-preview ec-preview">
                              <div className="image-thumb-preview"><img
                                className="image-thumb-preview ec-image-preview"
                                src="../assets/img/products/vender-upload-thumb-preview.jpg"
                                alt="edit" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="ec-vendor-upload-detail">
                      <form className="row g-3">
                        <div className="col-md-6"><label for="inputEmail4"
                          className="form-label">Product name</label>
                          <input
                            className="form-control slug-title" value={name} onChange={(e) => setName(e.target.value)} /></div>

                        <div className="col-md-6"><label className="form-label">Select
                          Categories</label>

                          <select className='form-control' value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                            <option>Select category</option>
                            {createCategoryList(category.categories).map(option => <option value={option.value}>{option.name}</option>)}
                          </select>


                         </div>




                        <div className="col-md-4">
                          <label className="form-label">Price <span>( In USD
                            )</span></label>
                          <input type="number"
                            className="form-control" id="price1" value={price} onChange={(e) => setprice(e.target.value)} /></div>
                        <div className="col-md-4"><label
                          className="form-label">Quantity</label><input type="number" value={quantity} onChange={(e) => setquantity(e.target.value)}
                            className="form-control" id="quantity1" /></div>

                        <div className="col-md-4"><label
                          className="form-label">offer</label><input type="number" value={offer} onChange={(e) => setoffer(e.target.value)}
                            className="form-control" id="quantity1" /></div>
                        <div className="col-md-12"><label className="form-label">Ful
                          Detail</label><textarea className="form-control" value={description} onChange={(e) => setdescription(e.target.value)}
                            rows="4"></textarea></div>




                        <div className="col-md-12"><button type="button"
                          className="btn btn-primary" onClick={crateProducthandelr}>create product</button></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Create