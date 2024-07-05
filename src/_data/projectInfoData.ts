import {
	CaptivePortalSvg,
	FigmaSvg,
	GithubSvg,
	GoogleDriveSvg,
	MirrorBoardSvg,
	NotionSvg,
} from "../assets";
import { ProjectInfo_I } from "../_interface/projectInfo_I";

export const projectInfoData: ProjectInfo_I[] = [
	{
		num: 1,
		title: "코디 (Codee)",
		description:
			"코딩 테스트 입문자를 위한 실시간 AI (Chat GPT) 코드 리뷰를 제공하는 코딩 테스트 웹 플랫폼",
		date: "2024.02.29 ~ 2024.05.05",
		links: [
			{
				svg: CaptivePortalSvg,
				alt: "지구본 아이콘",
				text: "배포 사이트",
				url: "https://likelion-codee.com/splash",
			},
			{
				svg: GithubSvg,
				alt: "깃허브 아이콘",
				text: "GitHub",
				url: "https://github.com/CosmicLatte009/Code-Catcher-FE",
			},
			{
				svg: GoogleDriveSvg,
				alt: "구글 드라이브 아이콘",
				text: "포트폴리오 PDF",
				url: "https://drive.google.com/file/d/1EaZ6_EoH-ezUxk0ODN5VtmCnae81sBZk/view",
			},
		],
		stack: [
			{ text: "React", color: "#ffffff", backColor: "#00BDDF" },
			{ text: "TypeScript", backColor: "#E3F0FF" },
			{ text: "emotion", backColor: "#FFF5E3" },
			{ text: "zustand" },
		],
	},
	{
		num: 2,
		title: "하루강아지",
		description: "가족이 강아지의 하루 일과를 함께 공유할 수 있는 서비스",
		date: "2023.12 ~ 진행중",
		links: [
			{
				svg: GithubSvg,
				alt: "깃허브 아이콘",
				text: "GitHub",
				url: "https://github.com/haru-puppy2024/haru-puppy-frontend",
			},
			{
				svg: FigmaSvg,
				alt: "피그마 아이콘",
				text: "Figma",
				url: "https://weniv.link/WHB1CC",
				svgWidth: 14,
			},
			{
				svg: MirrorBoardSvg,
				alt: "미로보드 아이콘",
				text: "기획 미로보드",
				url: "https://miro.com/app/board/uXjVNM_LZ-k=/?share_link_id=829142086454",
				svgWidth: 20,
			},
			{
				svg: NotionSvg,
				alt: "노션 아이콘",
				text: "API 문서",
				url: "https://www.notion.so/API-1db717659bc54f4ebceb410edbd9df79?pvs=4",
				svgWidth: 30,
			},
		],
		stack: [
			{ text: "Next.js", color: "#ffffff", backColor: "#343638" },
			{ text: "TypeScript", backColor: "#E3F0FF" },
			{ text: "Recoil" },
			{ text: "React-Query" },
		],
	},
	{
		num: 3,
		title: "크리스마스 MBTI 테스트",
		description: "연애할 때 내 질투의 정도를 알아보는 재미용 심리 테스트",
		date: "2022.11 ~ 2022.12",
		links: [
			{
				svg: CaptivePortalSvg,
				alt: "지구본 아이콘",
				text: "배포 사이트",
				url: "https://christmas-mbti-test.netlify.app/",
			},
			{
				svg: GithubSvg,
				alt: "깃허브 아이콘",
				text: "GitHub",
				url: "https://github.com/CosmicLatte009/christmas_mbti_test",
			},
		],
		stack: [
			{ text: "React", color: "#ffffff", backColor: "#00BDDF" },
			{ text: "JavaScript", backColor: "#FFF5C4" },
			{ text: "SCSS", backColor: " #FFEFE3" },
		],
	},
];
