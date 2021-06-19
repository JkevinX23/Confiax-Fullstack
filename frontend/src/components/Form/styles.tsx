import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    background-color: #fff;
    padding: 3rem;
    border-radius: 4px;
    box-shadow: 3px 3px 1px 0 #0059ff;
    display: block;
    margin-right: auto;
    p{
      position: absolute;
      bottom: 4px;
      text-align: center;
      color: #0059ff;
      font-weight: bold;

    }
`
export const Title = styled.h1`
    text-align: left;
    width: 100%;
    margin-bottom: 3rem;
    color: #0059ff;
`
export const Input = styled.input`
    width: 100%;
    padding: 5px;
    display: inline-block;
    border: 0;
    border-bottom: 2px solid #0059ff;
    background-color: transparent;
    outline: none;
    font-size: 1.6rem;
    transition: all .3s ease-out;
    border-radius: 0;
    color: #0059ff;

`

export const Label = styled.label`
    position: absolute;
    margin: 1.3rem;
    color: #0059ff;
    top: -4px;
    left: 35%;
    transition: all .3s ease-out;

    input:focus ~ &{
        color: #0059ff;
        top: -25px;
        left: 0;
        margin: 0;

    }

    input:valid ~ &{
        color: #0059ff;
        top: -25px;
        left: 0;
        margin: 0;

    }
`
export const Button = styled.button`
    width: 100%;
    border: none;
    padding: 1rem;
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 2rem;
    background: transparent;
    border: 2px solid #0059ff;
    color: #0059ff;
    cursor: pointer;
    outline: none;
    transition: all .5s ease-out;

    &:hover{
        background: #0059ff;
        border: 2px solid #0059ff;
        color: white;
    }
`
export const Field = styled.div`
    width: 100%;
    position: relative;
    max-width: 30rem;
`
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;

    button{
      width: 100%;
      border: none;
      padding: 1rem;
      font-size: 1.6rem;
      font-weight: bold;
      margin-top: 2rem;
      background: transparent;
      border: 2px solid #0059ff;
      color: #0059ff;
      cursor: pointer;
      outline: none;
      transition: all .5s ease-out;

      &:hover{
          background: #0059ff;
          border: 2px solid #0059ff;
          color: white;
      }
    }

`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`
