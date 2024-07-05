import styles from "./ProjectInfo.module.scss";
import { CalendarMonthSvg } from "../../assets";
import { ProjectInfo_I } from "../../_interface/projectInfo_I";
import { Chip } from "./Chip";
import { HyperLink } from "./HyperLink";

interface ProjectInfoProps {
	project: ProjectInfo_I;
}

export const ProjectInfo = ({ project }: ProjectInfoProps) => {
	const formattedIndex =
		project.num < 10 ? `0${project.num}` : `${project.num}`;
	return (
		<article className={styles.article}>
			<span className={styles.number}>{formattedIndex}.</span>
			<h3 className={styles.title}>{project.title}</h3>
			<p className={styles.script}>{project.description}</p>
			<div className={styles.date}>
				<img src={CalendarMonthSvg} alt="달력 아이콘" />
				<span>{project.date}</span>
			</div>
			<div className={styles["link-group"]}>
				{project.links.map((link, idx) => (
					<HyperLink
						key={idx}
						svg={link.svg}
						svgWidth={link.svgWidth}
						alt={link.alt}
						text={link.text}
						url={link.url}
					/>
				))}
			</div>
			<div className={styles["stack-group"]}>
				{project.stack.map((tech, idx) => (
					<Chip
						key={idx}
						text={tech.text}
						color={tech.color}
						backColor={tech.backColor}
					/>
				))}
			</div>
		</article>
	);
};
