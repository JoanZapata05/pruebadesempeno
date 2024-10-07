import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: #fff;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;
