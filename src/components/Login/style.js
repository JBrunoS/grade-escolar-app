import styled from 'styled-components/native'

export const Container = styled.View `
    flex: 1;
    align-items:center;
`
export const Header = styled.View `
    width: 80%;
    margin: 20px auto;
    align-items: center;
    justify-content: space-between;
`

export const Image = styled.Image `
    width: 80px;
    height: 80px;
`

export const TextLogin = styled.Text `
    
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
`

export const Email = styled.TextInput `
    width: 80%;
    height: 50px;
    border-width: 1px;
    border-color: #337ed4;
    border-radius: 4px;
    margin: 10px;
    padding: 10px;
    font-size: 18px;
`

export const Password = styled.TextInput `
    width: 80%;
    height: 50px;
    border-width: 1px;
    border-color: #337ed4;
    border-radius: 4px;
    margin: 10px;
    padding: 10px;
    font-size: 18px;
`

export const ButtonEntrar = styled.TouchableOpacity `
    width: 80%;
    height: 40px;
    border-radius: 4px;
    background-color: #337ed4;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

export const TextButton = styled.Text `
    font-size: 20px;
    color: #FFF;
`
export const FooterText = styled.Text `
    margin-top: 60%;
`