import React, { useState } from 'react'
import styled from "styled-components";

const Button = styled.button`
  background-color: darkblue;
  color: white;
  font-size: 19px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Input = styled.input`
background-color: white;
font-size: 20px;
margin: 10px 0px;
`;

function Form(props) {
  const [search, setSearch] = useState('')

  const handleSubmit = e => {
    console.log('handleSubmit clicked');
    e.preventDefault();
    props.handleSubmit(search)
    setSearch('')
  };

  const handleChange = e => {
    console.log('handleChange clicked');
    const searchInput =  e.target.value
    setSearch(searchInput)
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="searchInput">Search:</label>
          <Input
            id="searchInput"
            type="text"
            value={search}
            onChange={handleChange}
          />
          <Button type="submit">Search for Gif / Random if Empty</Button>
        </form>
      </>
    );
}

export default Form