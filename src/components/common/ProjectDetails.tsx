import styles from "../common/ProjectDetails.module.scss";

interface ProjectDetailsProps {
	title: string;
	children: React.ReactElement[] | React.ReactElement;
}

export const ProjectDetails = ({ title, children }: ProjectDetailsProps) => {
	return (
		<div className={styles.wrap}>
			<strong className={styles.title}>{title}</strong>
			<ul className={styles.paragraph}>{children}</ul>
		</div>
	);
};
