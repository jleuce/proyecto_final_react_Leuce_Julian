import React from 'react'
import ItemCardContainer from './ItemCardContainer'

//Le paso Items que contiene un [] con los productos {} 
function ItemList({Items}) {
  return (
    <div className='CardList'>
        {Items.map( i => <ItemCardContainer key={i.id} Item={i}></ItemCardContainer>)}
    </div>
  )
}

export default ItemList