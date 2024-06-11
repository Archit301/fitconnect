import React, { useContext, useState } from 'react'

const useLocalSorage=(key,initialValue)=>{
    const [storedValue,setstoredvalue]=useState(()=>{
        const item=localStorage.getItem(key);
        return item ? JSON.parse(item):initialValue
    })


const setValue=(value)=>{
    setstoredvalue(value)
    localStorage.setItem(key,JSON.stringify(value))
}

return [storedValue,setValue]
}


export default useLocalSorage
