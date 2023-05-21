import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Toys House`;
    },[title])
}

export default useTitle;