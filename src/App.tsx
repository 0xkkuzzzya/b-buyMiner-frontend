import { BuyMiner } from "./components";
import styled from "styled-components";
import { Header } from "./components/Heder";

const AppContainer = styled.div`
	width: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	@media (max-width: 800px) {
		width: 100%;
	}
`


function App() {
	return (
		<AppContainer>
			<Header/>
			<BuyMiner/>
		</AppContainer>
	);
}

export default App;
