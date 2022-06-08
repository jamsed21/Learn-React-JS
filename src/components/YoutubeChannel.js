import React from 'react';
import { useFormik, validateYupSchema } from 'formik';


const initialValues ={
    name: '',
    email: '',
    channel: '' 
 }

 const onSubmit =  values => {
    console.log('form data', values);
}

const validate =values => {
    let errors = {}
    if(!values.name){
        errors.name = 'required'
    }
    if(!values.email) {
        errors.email = 'required'
    }
    if(!values.channel) {
        errors.channel = 'required'
    }
}


const YoutubeChannel = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
        
    })
    // console.log('Form values', formik.values);
  return (
    
    
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'> Name </label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

            <label htmlFor='email'> Email </label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>

            <label htmlFor='channel'> Channel </label>
            <input type='text' id='channer' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>

            <button type='submit'> Submit </button>
        </form>
    </div>
  )
}

export default YoutubeChannel;