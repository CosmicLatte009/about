import { ReactNode } from "react";
import styles from "../common/ExperienceCard.module.scss";

interface ExperienceCardProps {
	title: string;
	agency: string;
	date: string;
	children: ReactNode;
	imageSrc: string;
	imageAlt: string;
	imageWidth: number | string;
}

export const ExperienceCard = ({
	title,
	agency,
	date,
	children,
	imageSrc,
	imageAlt,
	imageWidth,
}: ExperienceCardProps) => {
	return (
		<article className={styles.wrap}>
			<div className={styles["left-wrap"]}>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.details}>
					<strong className={styles.agency}>{agency}</strong>
					<p className={styles.date}>{date}</p>
					<span className={styles["link-group"]}>{children}</span>
				</div>
			</div>
			<div>
				<img
					src={imageSrc}
					width={imageWidth}
					alt={imageAlt}
					className={styles["right-wrap"]}
				/>
			</div>
		</article>
	);
};
