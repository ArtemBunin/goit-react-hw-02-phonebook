import styled from 'styled-components';
 export const Form = styled.form`
display:flex;
flex-direction: column;
justify-content: center;
align-content: center;
padding: 30px;
  border: 1px solid #000;
`
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 2px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #a7a3a3;
  border-radius: 4px;
  font-size: 14px;
  line-height: 2;
  cursor: pointer;
  &:hover,
  :focus {
    border: 1px solid #126deb;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
export const FormBtn = styled.button`
  padding: 5px 24px;
margin-left: auto;
margin-right: auto;
width: inherit;
  border: 1px solid #a7a3a3;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.8;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #126deb;
    color: white;
  }
`;