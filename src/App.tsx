import "./style/main.scss";
import {
	AboutMe,
	Skills,
	Projects,
	Experience,
} from "./components/section/index";
import { Contact } from "./components/common";

function App() {
	return (
		<div style={{ margin: "20px 20px 70px" }}>
			<AboutMe />
			<Skills />
			<Projects />
			<Experience />
			<Contact />
		</div>
	);
}

export default App;
