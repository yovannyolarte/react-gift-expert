import {useState} from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const OnAddCategory = ( newCategory )=>{
        if(categories.includes(newCategory) ) return;
        setCategories( [newCategory, ...categories ] )
    }
    return (
    <>
        <h1>Gif expert</h1>
        <AddCategory 
            onNewCategory={ OnAddCategory }
            //setCategories={setCategories} 
        />
        {/* <button onClick={ OnAddCategory }>Agregar</button> */}
            { categories.map( category =>
                (
                    <GifGrid 
                        key={category} 
                        category={category}    
                    />    
                )
            ) }
            
    </>
  )
}
