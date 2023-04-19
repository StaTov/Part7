import {useState} from "react";

export const useField = (name) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        if (e === null) {
            return setValue('')
        }
        setValue(e.target.value)
    }
    return {
        name,
        value,
        onChange
    }
}