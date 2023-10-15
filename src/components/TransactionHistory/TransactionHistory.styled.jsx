import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border: 5px solid #fff;
  border-top: 5px solid #fff;
  border-bottom: 3px solid #fff;
  border-collapse: purple;
  font-size: 24px;
  background: #D8BFD8;
  tr:nth-child(even) {
  background: #fff;
`
export const CollumnNames = styled.th`
  font-weight: bold;
  padding: 10px;
  background: #D8BFD8;
  border: none;
  text-align: left;
  font-size: 26px;
  color: #9400D3;
  
`

export const CollumnValues = styled.td`
  padding: 10px;
  border: none;
  border-top: 3px solid #fff;
  border-bottom: 3px solid #fff;
  font-size: 15px;
  color:purple;
`
export const ColoredColors = styled.tr`
    background: #f8f8f8;
`