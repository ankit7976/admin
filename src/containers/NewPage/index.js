import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPage } from '../../actions'
import Layout from '../../components/Layout'
import linearCategories from '../../helpers/linearCategories'

const NewPage = () => {

    const [title, setTitle] = useState('')
    const [categories, setCategories] = useState([])
    const category = useSelector(state => state.category)
    const [categoryId, setCategoryId] = useState('');
    const [type, setType] = useState('')
    const [desc, setDesc] = useState('')
    const [banners, setbanners] = useState([])
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const page = useSelector(state => state.page)
    useEffect(() => {
        console.log('categories =>', categories)
        setCategories(linearCategories(category.categories))

    }, [category])

    useEffect(() => {
        console.log(page)
        if (page.loading) {

        }
    }, [page])


    const onCategoryChange = (e) => {

        const category = categories.find(cat => cat.value == e.target.value)

        setCategoryId(e.target.value)
        setType(category.type)
    }

    const handelBannerImage = (e) => {
        console.log(e)
        setbanners([...banners, e.target.files[0]])
    }

    const handelProductImage = (e) => {
        console.log(e)
        setProducts([...products, e.target.files[0]])
    }

    const SubmitpageForm = (e) => {
        //e.target.preventDefault();
        //  if(title === ""){
        //      alert('Tital is requird');
        //      return;
        //  }
        const form = new FormData();
        form.append('title', title)
        form.append('description', desc)
        form.append('type', type)
        form.append('category', categoryId)
        banners.forEach((banners, index) => {
            form.append('banners', banners)
        })
        products.forEach((product, index) => {
            form.append('products', product)
        })
        dispatch(createPage(form))
        console.log(categoryId, title, desc, type, categoryId, banners, products)

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
                                    <div className="col-lg-8">
                                        <div className="ec-vendor-img-upload">
                                            <div className="ec-vendor-main-img">

                                                <div id="bannerImages">
                                                    <div className="avatar-upload col-sm-12">
                                                        <div className="avatar-edit">
                                                            <input type="file" id="imageUpload" name="banners" onChange={handelBannerImage} 
                                                                className="ec-image-upload"
                                                                accept=".png, .jpg, .jpeg" multiple /><label htmlFor="imageUpload"><img style={{ height: '200px' }}
                                                                    src="../assets/img/icons/edit.svg"
                                                                    className="svg_img header_svg" alt="edit" /></label></div>
                                                        <div className="avatar-preview ec-preview">
                                                            <div className="imagePreview ec-div-preview"><img style={{ height: '200px' }}
                                                                className="ec-image-preview"
                                                                src="../assets/img/products/vender-upload-preview.jpg"
                                                                alt="edit" /></div>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div className="thumb-upload-set col-sm-12">
                                                    <div className="thumb-upload" style={{ width: '48%' }}>
                                                        <div className="thumb-edit"><input type="file" name="products" onChange={handelProductImage}
                                                            id="thumbUpload01" className="ec-image-upload"
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
                                                    <div className="thumb-upload" style={{ width: '48%' }}>
                                                        <div className="thumb-edit"><input type="file" name="products" onChange={handelProductImage}
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

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="ec-vendor-upload-detail">
                                            <form className="row g-3">
                                                <div className="col-md-6"><label for="inputEmail4"
                                                    className="form-label">Product name</label>
                                                    <input
                                                        className="form-control slug-title" value={title} onChange={(e) => setTitle(e.target.value)} /></div>

                                                <div className="col-md-6"><label className="form-label">Select
                                                    Categories</label>

                                                    <select className='form-control' value={categoryId} onChange={onCategoryChange}>
                                                        <option>Select category</option>
                                                        {categories.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
                                                    </select>


                                                </div>



                                                <div className="col-md-12"><label className="form-label">Ful
                                                    Detail</label><textarea className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)}
                                                        rows="4"></textarea></div>




                                                <div className="col-md-12"><button type="button"
                                                    className="btn btn-primary" onClick={SubmitpageForm}>create product</button></div>


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

export default NewPage