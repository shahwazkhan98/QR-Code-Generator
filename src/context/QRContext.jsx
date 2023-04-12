import QRReducer from "./QRReducer";
import { createContext, useReducer } from "react";

const QRContext = createContext()

export const QRProvider = ({children})=>{

    const initialState = {
        QRCode : "data:image/png;base64,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"
    }
       

    const [state , dispatch] = useReducer(QRReducer , initialState)

    return(
        <QRContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </QRContext.Provider>
    )

}
export default QRContext