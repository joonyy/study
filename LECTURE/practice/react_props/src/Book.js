import React from 'react';
import book from './shoo.jpg'

const Book = (props) =>{
  return(
    <div className='box'>
      <h1 className='title' style={{color:"blue"}} > 이번주 베스트셀러</h1>
      <img src={book} alt="슈" />
      <h2 className="">{props.title}</h2>
      <p>저자 : {props.author}</p>
      <p>판매가 : {props.price}원</p>
      <p>구분 : {props.type}</p>
    </div>
  )
}

export default Book;