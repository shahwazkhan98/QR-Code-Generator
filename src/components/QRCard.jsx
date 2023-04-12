import React, { useContext, useState } from 'react'
import QRContext from '../context/QRContext'
import { getQR } from '../context/QRAction'

const QRCard = () => {
    const {QRCode , dispatch} = useContext(QRContext)
    
    const [text, setText] = useState("")
    const handleQR = async(e)=>{
        e.preventDefault()
       const data =  await getQR(text)
       dispatch({
        type: "GET_QR",
        payload: data
       })
    console.log(text)
    setText("")
    }
    return (
        <div className="qr-section p-5">
            <div className="form-section">
                <form className='form' onSubmit={(e)=>handleQR(e)} >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"><h4>QR Code Generator</h4></label>
                        <input value={text} type="text" placeholder='Enter url OR text here..' className="form-control" onChange={(e)=>setText(e.target.value)}/>

                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
            <div className="image-section">
                <img src={QRCode} alt="" />
            </div>
        </div>
    )
}

export default QRCard
