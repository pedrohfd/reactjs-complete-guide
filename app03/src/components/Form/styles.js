import styled from 'styled-components'

export const Container = styled.form`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 16px 16px;
`

export const Title = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin: 4px 0;
  color: ${props => (props.invalid ? '#ff0000' : '#000')};
`

export const Input = styled.input`
  border: 1px solid ${props => (props.invalid ? '#ff0000' : '#cccccc')};
  padding: 5px;
  outline: none;
`

export const Button = styled.button`
  margin-top: 12px;
  width: 20%;
  color: #ffffff;
  background: #8a00ff;
  padding: 4px;
  font-size: 16px;
  border: 1px solid #8a00ff;

  &:hover {
    transition: 0.2s;
    background: #6812b3;
    border-color: #6812b3;
  }
`
