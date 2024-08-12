import styled from "styled-components";

const Conrainer = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
`

const Header = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MainText = styled.a`
    color: #fff;
    font-size: 25px;
    font-weight: 500;
`

const Description = styled.a`
    color: #adabac;
    font-weight: 400;
    font-size: 15px;
    margin-top: 10px;
`

const Text = styled.a`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin-left: 20px;
    margin-top: 30px;
`

const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 15px;
    color: #adabac;
    font-size: 14px;
    font-weight: 500;
    border: none;
    outline: none;
    font-family: "Public Sans", sans-serif;
    margin-left: 20px;
    background: transparent;
`

const InputContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    background: #252525;
    border-radius: 10px;
`

const PriceText = styled.a`
    color: #adabac;
    font-weight: 400;
    font-size: 15px;
    margin-left: 20px;
`

const ConfirmButton = styled.button`
    width: 90%;
    height: 40px;
    border-radius: 10px;
    outline: none;
    border: none;
    margin-top: 15px;
    background: linear-gradient(to right, #238add, #268bd4);
    font-family: "Public Sans", sans-serif;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`


export const BuyMiner = () => {
    return (
        <Conrainer>
            <Header>
                <MainText>Buy Bytecoin NFT Miners</MainText>
                <Description>Get NFT Miners to mine Bytecoin using <br /> @bytecoin bot on Telegram</Description>
            </Header>
            <div style={{ width: "90%", marginTop: "30px" }}>
                <Text>Choose quanity of NFT Miners</Text>
            </div>
            <InputContainer>
                <Input placeholder="Enter amount from 1 to 100" />
            </InputContainer>
            <div style={{ width: "90%", marginTop: "15px" }}>
                <PriceText>1 NFT = 48 TON</PriceText>
            </div>
            <ConfirmButton>Buy NFT Miners</ConfirmButton>
        </Conrainer>
    )
}