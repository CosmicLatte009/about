interface Link {
	svg: string;
	alt: string;
	text: string;
	url: string;
	svgWidth?: number;
}

interface Stack {
	text: string;
	color?: string;
	backColor?: string;
}

export interface ProjectInfo_I {
	num: number;
	title: string;
	description: string;
	date: string;
	links: Link[];
	stack: Stack[];
}
