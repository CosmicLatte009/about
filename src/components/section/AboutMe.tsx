import styles from "./AboutMe.module.scss";
import { ProfilePng, CheckSvg } from "../../assets";
import { Contact } from "../common";

export const AboutMe = () => {
	return (
		<section className={styles.section}>
			<h2>About Me</h2>
			<div className={styles["main-wrap"]}>
				<div className={styles["left-wrap"]}>
					<img
						src={ProfilePng}
						alt="프로필 이미지"
						width={320}
						className={styles.img}
					/>
					<Contact />
				</div>
				<div className={styles["right-wrap"]}>
					<div className={styles["about-name"]}>
						<p>안녕하세요!</p>
						<p>
							<strong>유연한 문제 해결 능력이 강점</strong>인 프론트엔드 개발자
							황혜명입니다
						</p>
					</div>
					<div className={styles["about-advantages"]}>
						<p>
							좋아하고 자신있는 일은
							<strong> 프론트엔드와 UX/UI 디자인의 브릿지 역할</strong>입니다.
						</p>
						<ul className={styles["advantages-list"]}>
							<li>
								<img src={CheckSvg} alt="체크 불렛" />
								와이어프레임 제작에 참여하여 디자이너와 효과적으로
								커뮤니케이션한 경험
							</li>
							<li>
								<img src={CheckSvg} alt="체크 불렛" />
								개발 과정 중 발생하는 디테일한 UX 문제들에 대해 사용자 중심으로
								고려하여 대처
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
