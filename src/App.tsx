import { BuyMiner } from "./components";
import styled from "styled-components";
import { Header } from "./components/Heder";

const AppContainer = styled.div`
	width: 800px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	@media (max-width: 800px) {
		width: 100%;
	}
	@media (max-height: 600px) {
        height: 100%;
        margin-bottom: 30px;
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
