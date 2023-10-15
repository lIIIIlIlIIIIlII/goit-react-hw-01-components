import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
display: flex;
  max-width: 50%;
  flex-direction: column;
  margin: 80px auto;
  border: 1px purple solid;
  border-radius: 10px;
  background-color: #D8BFD8;
`
export const StatisticsTitle = styled.h2`
  font-weight: bold;
  text-align: center;
  font-size: 36px;
  color: #9400D3;
  margin-bottom: 18px;
  margin: 50px auto;
`

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0;
  margin:0;
 
`

export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 18px;
  text-align: center;
  justify-content: space-between;
  padding: 25px 25px;
  border-top: 1px purple solid;
  border-left: 1px purple solid;
`
export const StatisticsListItemName = styled.span`
  font-weight: bold;
  color: #9400D3;
  font-size: 20px;
`


