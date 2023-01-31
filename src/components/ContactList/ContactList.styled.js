import styled from 'styled-components';


export const Item =styled.li`

display: flex;
align-items: center;
justify-content: start;
background-color: #fff;
::before{
   margin-right: 5px;
    content: "";
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius:50%;
}

`
export const Btn = styled.button`
 padding: 2px 2px;
  background-color: #fff;
  margin-left: 10px;
  border: 1px solid #a7a3a3;
  border-radius: 4px;
  font-size: 12px;
  line-height: 1.2;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #126deb;
    color: #fff;
  }
`
export const NumberText =styled.span`
margin-left:10px`
