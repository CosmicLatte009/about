import styles from "./Chip.module.scss";

interface ChipProps {
	text: string;
	size?: "small" | "large";
	color?: string;
	backColor?: string;
}

export const Chip = ({
	text,
	size = "small",
	color = "#4a4a4a",
	backColor = "#F1F0FD",
}: ChipProps) => {
	const className = `${styles.span} ${styles[size]}`;
	return (
		<span className={className} style={{ color, backgroundColor: backColor }}>
			# {text}
		</span>
	);
};
