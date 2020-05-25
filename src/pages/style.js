import styled from 'styled-components/native'

export const Head = styled.View `
    width: 100%;
    height: 60px;
    background-color: #337ed4;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const Image = styled.Image `
    width: 60px;
    height: 60px;
`


export const HeaderText = styled.View `
    
    width: 70%;
`

export const Name = styled.Text `
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
`

export const Email = styled.Text `
    color: #FFF;
`

export const ButtonLogOut = styled.TouchableOpacity `
    margin-right: 20px;
`