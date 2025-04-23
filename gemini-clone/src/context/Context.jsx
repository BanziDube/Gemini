import { createContext} from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {


    const onSent = async (prompt) => {
        await runChat(prompt)
    }

   onSent("what is react js?")
   
   const contextValue = {
        // Define your context values here
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider