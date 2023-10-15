import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  max-width: 50%;
  flex-direction: column;
  margin: auto;
  border: 1px purple solid;
  border-radius: 10px;
  background-color: #D8BFD8;
 `;

 export const DescriptionCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
 `
export const UserAvatar = styled.img`
  display: block;
  border-radius: 50%;
  border: 1px purple solid;
  margin: auto;
  max-width: 35%;
  overflow: hidden;
`
export const UserName = styled.p`
  font-weight: bold;
  font-size: 40px;
  color: #9400D3;
  margin-bottom: 16px;
`
export const UserTag = styled.p`
  font-weight: bold;
  color: #9400D3;
  font-size: 20px;
  margin-bottom: 16px;
`

export const UserLocation = styled.p`
  font-weight: bold;
  color: #9400D3;
  font-size: 20px;
  margin-bottom: 50px;
`

export const UserStats = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0;
  margin:0;
`

export const UserStatsList = styled.li`
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

export const UserStatsListName = styled.span`
  font-weight: bold;
  color: #9400D3;
  font-size: 20px;
`

export const UserStatsListQuantity = styled.span`
  font-weight: bolder;
  color: #9400D3;
  font-size: 30px;
`
