const QRReducer = (state , action)=>{

switch(action.type){

    case "GET_QR":
        return{
            ...state,
            QRCode: action.payload
        }


    default :
    return state
}




}
export default QRReducer