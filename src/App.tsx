import "./style/main.scss";
import {
	AboutMe,
	Skills,
	Projects,
	Experience,
} from "./components/section/index";
import { Contact, Navigation } from "./components/common";

function App() {
	return (
		<>
			<Navigation />
			<div style={{ margin: "20px 20px 70px" }}>
				<div id="aboutMe">
					<AboutMe />
				</div>
				<div id="skills">
					<Skills />
				</div>
				<div id="projects">
					<Projects />
				</div>
				<div id="experience">
					<Experience />
				</div>
				<Contact />
			</div>
		</>
	);
}

export default App;
