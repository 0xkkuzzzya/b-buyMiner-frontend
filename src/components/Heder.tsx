import styled from "styled-components";
import { TonConnectButton } from "@tonconnect/ui-react";

const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const NameBlock = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    margin-left: 20px;
`

const Logo = styled.img`
    width: 45px;
    height: 45px;
`

const Name = styled.a`
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-left: 10px;
`


export const Header = () => {
    return(
        <HeaderContainer>
            <TonConnectButton style={{marginRight: "20px", height: "35px"}} />
        </HeaderContainer>
    )
}