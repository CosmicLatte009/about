import styles from "./HyperLink.module.scss";

interface HyperLinkProps {
	svg: string;
	svgWidth?: number;
	alt: string;
	text: string;
	url: string;
}

export const HyperLink = ({
	svg,
	svgWidth = 22,
	alt,
	text,
	url,
}: HyperLinkProps) => {
	return (
		<span className={styles.wrap}>
			<img src={svg} alt={alt} width={svgWidth} />
			<a href={url} target="_blank" rel="noopener noreferrer">
				{text}
			</a>
		</span>
	);
};
