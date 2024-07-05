import styles from "../section/Experience.module.scss";
import { ExperienceCard, HyperLink } from "../common";
import {
	CaptivePortalSvg,
	GithubSvg,
	JejuWebCoverPng,
	KdtCoverPng,
	LionCoverPng,
	NotionSvg,
	SfaceCoverPng,
	VelogSvg,
} from "../../assets";

export const Experience = () => {
	return (
		<section className={styles.section}>
			<h2>Experience</h2>
			<div className={styles["experience-wrap"]}>
				<ExperienceCard
					title="코디(Codee)서비스 MVP 개발"
					agency="멋쟁이사자처럼"
					date="2024.02 ~ 2024.04"
					imageSrc={LionCoverPng}
					imageAlt="코디서비스 커버이미지"
					imageWidth={254}
				>
					<HyperLink
						text="배포 사이트"
						url="https://likelion-codee.com/splash"
						svg={CaptivePortalSvg}
						alt="지구본 아이콘"
					/>
				</ExperienceCard>
				<ExperienceCard
					title="Flutter 프로젝트 캠프"
					agency="웅진씽크빅X스나이퍼팩토리"
					date="2023.09 ~ 2023.11"
					imageSrc={SfaceCoverPng}
					imageAlt="코디서비스 커버이미지"
					imageWidth={254}
				>
					<HyperLink
						text="교육 과정 기록 Velog"
						url="https://velog.io/@ohhm009/series/%EC%9C%A0%EB%8D%B0%EB%AF%B8x%EC%8A%A4%EB%82%98%EC%9D%B4%ED%8D%BC%ED%8C%A9%ED%86%A0%EB%A6%AC-9%EC%A3%BC-%EC%99%84%EC%84%B1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%BA%A0%ED%94%84-%ED%94%8C%EB%9F%AC%ED%84%B0"
						svg={VelogSvg}
						alt="벨로그 아이콘"
					/>
					<HyperLink
						text="SFACE 프로젝트_GitHub"
						url="https://github.com/CosmicLatte009/spec"
						svg={GithubSvg}
						alt="깃허브 아이콘"
					/>
				</ExperienceCard>
				<ExperienceCard
					title="KDT 프론트엔드 스쿨 2기"
					agency="위니브 바울랩"
					date="2022"
					imageSrc={KdtCoverPng}
					imageAlt="금방내방 커버이미지"
					imageWidth={254}
				>
					<HyperLink
						text="금방내방 프로젝트 GitHub"
						url="https://www.figma.com/exit?url=https%3A%2F%2Fgithub.com%2Fsoon-my-room%2Fsoon_my_room"
						svg={GithubSvg}
						alt="깃허브 아이콘"
					/>
				</ExperienceCard>
				<ExperienceCard
					title="제주 웹 컨퍼런스 2022"
					agency="제주테크노파크"
					date="2022"
					imageSrc={JejuWebCoverPng}
					imageAlt="제주 웹컨퍼런스 커버이미지"
					imageWidth={101}
				>
					<HyperLink
						text="비 온 뒤 단단해지는 땅처럼 연사 준비_Notion"
						url="https://brick-parrot-a90.notion.site/700622cd7b1642d7a0ed6ef00389965e"
						svg={NotionSvg}
						alt="노션 아이콘"
					/>
				</ExperienceCard>
				<div className={styles["educate-wrap"]}>
					<div className={styles["educate-card"]}>
						<h3 className={styles["educate-title"]}>한국방송통신대학교</h3>
						<div className={styles["educate-details"]}>
							<strong className={styles["educate-agency"]}>
								대학교(학사) | 컴퓨터과학과
							</strong>
							<p className={styles["educate-date"]}>2024.03 ~현재 (재학중)</p>
						</div>
					</div>
					<div className={styles["educate-card"]}>
						<h3 className={styles["educate-title"]}>추계예술대학교</h3>
						<div className={styles["educate-details"]}>
							<strong className={styles["educate-agency"]}>
								대학교(학사) | 미술대학
							</strong>
							<p className={styles["educate-date"]}>2015.03 ~ 2020.02 (졸업)</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
