import {useEffect, useState} from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(() => {
      setTimeout(()=> {
        try {
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem;
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue
          } else {
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
          }
          setLoading(false)
        } catch (err) {
          setLoading(false)
          setError(true)
        }
      },1000)
    },[])
    
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    } 
    return {item, saveItem, loading, error}
  }

  export { useLocalStorage };

  // const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de react', completed: false},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'Lalala', completed: false},
//   {text: 'Lalsala', completed: false},
//   {text: 'usar estados derivados', completed: true},
// ]

// localStorage.setItem('TODOS_V1', JSON.strgify(defaultTodos))
// localStorage.removeItem('TODOS_V1')