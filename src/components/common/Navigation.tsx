import styles from "../common/Navigation.module.scss";

export const Navigation = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<a href="#aboutMe">About Me</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
			</ul>
		</nav>
	);
};
