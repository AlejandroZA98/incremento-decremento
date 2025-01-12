import { useEffect, useState } from 'react';

export function useIncrece() { // siempre definir el hook asi
  // Estado inicial
  
  const initialCount=()=>{
    const localStorageCount=localStorage.getItem('count')// obtiene lo que existe en storage
    return localStorageCount? JSON.parse(localStorageCount): 0

  }
  const [count, setCount] = useState(initialCount);

  useEffect(()=>
    localStorage.setItem('count',JSON.stringify(count))
    ,[count])

  // Definición de funciones
  function increce() {
    if (count >= 0){
        setCount(count + 1);
    }
  }

  function decrece() {
    if (count > 0){
        setCount(count - 1);
    }
  }

  // Retorno del estado y las funciones
  return {
    count,
    increce,
    decrece,
  };
}
