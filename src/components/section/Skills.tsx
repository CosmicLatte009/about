import styles from "./Skills.module.scss";
import {
	ReactSvg,
	FlutterSvg,
	JiraSvg,
	GitSvg,
	GoogleAnalyticsSvg,
} from "../../assets";
import { Chip } from "../common";

export const Skills = () => {
	return (
		<section className={styles.section}>
			<h2>Skills</h2>
			<div className={styles["main-wrap"]}>
				<article className={`${styles["stack-card-wrap"]} ${styles["react"]}`}>
					<div className={styles["stack-card"]}>
						<img src={ReactSvg} alt="리액트 로고" width={104} />
						<Chip
							text="React"
							size="large"
							color="#ffffff"
							backColor="#00BDDF"
						/>
					</div>
					<ul className={styles["stack-details"]}>
						<li>
							<Chip text="Next.js" color="#ffffff" backColor="#343638" />
							<Chip text="TypeScript" backColor="#E3F0FF" />
							<Chip text="JavaScript" backColor="#FFF5C4" />
						</li>
						<li>
							<Chip text="zustand" /> <Chip text="Recoil" />
							<p>로 전역 상태 관리를 한 경험이 있습니다.</p>
						</li>
						<li>
							<Chip text="React-Query" />
							<p>
								와 axios 인스턴스를 함께 묶어 api 함수를 관리한 경험이 있습니다.
							</p>
						</li>
						<li>
							<Chip text="SCSS" /> <Chip text="emotion" />
							<p>를 사용한 스타일링 경험이 있습니다.</p>
						</li>
					</ul>
				</article>
				<article className={styles["stack-card-wrap"]}>
					<div className={styles["stack-card"]}>
						<img src={FlutterSvg} alt="플러터 로고" width={70} />
						<Chip
							text="Flutter"
							size="large"
							color="#ffffff"
							backColor="#47C5FB"
						/>
					</div>
					<ul className={styles["stack-details"]}>
						<li>
							<Chip text="dio" />
							<p>를 사용한 HTTP 통신을 다룬 경험이 있습니다.</p>
						</li>
						<li>
							<Chip text="GetX" /> <Chip text="RiverPod" />
							<p>으로 상태 관리한 경험이 있습니다.</p>
						</li>
					</ul>
				</article>
				<article className={`${styles["stack-card-wrap"]} ${styles["jira"]}`}>
					<div className={styles["stack-card"]}>
						<img src={JiraSvg} alt="지라 로고" width={94} />
						<Chip
							text="Jira"
							size="large"
							color="#ffffff"
							backColor="#5590E6"
						/>
					</div>
					<ul className={styles["stack-details"]}>
						<li>
							<p>Jira를 사용한 협업, sprint 경험이 있습니다.</p>
						</li>
					</ul>
				</article>
				<article className={styles["stack-card-wrap"]}>
					<div className={styles["stack-card"]}>
						<img src={GitSvg} alt="깃 로고" width={94} />
						<Chip text="Git" size="large" color="#ffffff" backColor="#EE6C61" />
					</div>
					<ul className={styles["stack-details"]}>
						<li>
							<Chip text="GitHub" color="#ffffff" backColor="#7C7C7C" />
							<p>를 통한 협업 경험이 다수 (4회 이상) 있습니다.</p>
						</li>
						<li>
							<p>Git-Hub Flow 브랜치 전략 사용 경험이 있습니다.</p>
						</li>
					</ul>
				</article>
				<article className={`${styles["stack-card-wrap"]} ${styles["ga"]}`}>
					<div className={styles["stack-card"]}>
						<img
							src={GoogleAnalyticsSvg}
							alt="구글 애널리틱스 로고"
							width={79}
						/>
						<Chip
							text="Google Analytics"
							size="large"
							color="#ffffff"
							backColor="#F5A551"
						/>
					</div>
					<ul className={`${styles["stack-details"]} ${styles["ga"]}`}>
						<li>
							<p>
								구글 애널리틱스 이벤트 트래킹 커스텀 훅 코드를 직접 작성하여
							</p>
							<p>
								방문자 수, 실 서비스 사용자 수, 가입자 수 등의 이벤트를 트래킹한
								경험이 있습니다.
							</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};
