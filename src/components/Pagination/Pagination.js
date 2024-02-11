import React from 'react'
import IconArrowRight from '../../assets/images/IconArrowRight'
import IconArrowLeft from '../../assets/images/IconArrowLeft'
import './Pagination.css'

export const Pagination = ({offset, onClickBack, onClickNext, page}) => {
  return (
    <div className='pagination-wrapper'>
        {page === 1 ? null :<button className='btn-transparent' onClick={onClickBack}><IconArrowLeft /></button>}
        
        <p className='px-18'>{page}</p>
        
        {page === 7 ? null :<button className='btn-transparent' onClick={onClickNext}><IconArrowRight /></button> }
    </div>
  )
}
