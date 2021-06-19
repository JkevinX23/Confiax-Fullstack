import styled  from 'styled-components'

export const Wrapper = styled.div`
    background: linear-gradient(180deg, rgba(33,147,176,1) 0%, rgba(109,213,237,1) 100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`
export const Card = styled.div`
    margin-top: 10rem;
    background-color: #ffffff80;
    padding: 3rem;
    border-radius: 4%;
    box-shadow: 3px 3px 1px 0 #00000070;
    display: flex;
    flex-direction: column;
    height: 40rem;
    width: 60rem;
    position: relative;
    align-items: center;
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
    min-width: 30rem;
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

`
export default Wrapper
