import { BuyMiner } from "./components";
import styled from "styled-components";

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`


function App() {
	return (
		<AppContainer>
			<BuyMiner/>
		</AppContainer>
	);
}

export default App;
