import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {


    const [inputValue, setInputValue] = useState('')


    const onInputchange = (event)=>{
        setInputValue(event.target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() )  
        //setCategories( categories => [inputValue, ...categories] )
        setInputValue('');

    }



  return (
      <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder="Buscar" 
        value={inputValue} 
        onChange={onInputchange}
        />

      </form>
  )
}
