import styles from "./Projects.module.scss";
import { HyperLink, ProjectDetails, ProjectInfo } from "../common";
import { projectInfoData } from "../../_data/projectInfoData";
import {
	ChristmasDrawing,
	ChristmasPhoneSvg,
	ChristmasSeo,
	ChristmasSns,
	CodeeGa,
	CodeePhoneSvg,
	CodeeUx,
	GithubSvg,
	GoogleAnalyticsSvg,
	HaruPuppyFlutter,
	HaruPuppyMirrorBoard,
	HaruPuppyPhoneSvg,
} from "../../assets";

export const Projects = () => {
	return (
		<section className={styles.section}>
			<h2>Projects</h2>
			<div className={styles["project-wrap"]}>
				<article className={styles.project}>
					<div className={styles["left-wrap"]}>
						<ProjectInfo project={projectInfoData[0]} />
						<div className={styles["proejct-datails-group"]}>
							<ProjectDetails title="구글 애널리틱스 적용">
								<li>
									<strong>
										이벤트 트래킹을 위한 useEventTracker 커스텀 훅 개발
									</strong>
								</li>
								<li>
									<strong>페이지 뷰 트래킹</strong>을 위한 RouteChangeTracker
									컴포넌트 개발
								</li>
								<li>
									코딩테스트 문제 ID별 테스트 케이스 성공여부 이벤트 트래킹 적용
								</li>
								<li>
									<HyperLink
										text="구글 애널리틱스 보고서 PDF"
										svg={GoogleAnalyticsSvg}
										url="https://weniv.link/shYI6j"
										alt="구글 애널리틱스 로고"
									/>
								</li>
								<li>
									<img src={CodeeGa} alt="구글 애널리틱스 보고서" width={298} />
								</li>
							</ProjectDetails>
							<ProjectDetails title="개발 과정 중 발생하는 UX 문제에 유연한 대응">
								<li>모바일형 디자인을 기반으로 480px 미디어쿼리 적용</li>
								<li>
									<strong>
										기획 단계에서 디자인되지 않은 태블릿형에도 대응할 수 있도록
									</strong>
									768px 미디어쿼리 플렉서블하게 적용
								</li>
								<li>
									구글 번역 위젯 기본 위젯 스타일 css와
									<strong>
										잘못 번역된 텍스트를 찾아내서 수정하고, 이를 통해 UX/UI를
										개선
									</strong>
								</li>
								<li>
									<img src={CodeeUx} alt="UXUI 개선" width={1149} />
								</li>
							</ProjectDetails>
							<ProjectDetails title="영미권 시장에서의 프로덕트 런칭 위해 영어 지원 기능 구현">
								<li>
									구글 번역 위젯을 기존 사이트에 통합하여
									<strong>Product Hunt 글로벌</strong>
									론칭 준비
								</li>
								<li>
									다국어 지원과 국제적 사용자를 고려한 웹 개발에 대한 이해 향상
								</li>
							</ProjectDetails>
							<ProjectDetails title="지난 테스트 내역 및 북마크 페이지네이션 구현">
								<li>
									백엔드에서 받아오는 대량의 코딩문제 데이터를 페이지별로 나누어
									표시하는 페이지네이션 컴포넌트 구현
								</li>
								<li>
									애플리케이션 로딩 시간 단축 및
									<strong>
										클라이언트와 서버 간의 데이터 전송 효율성을 개선
									</strong>
								</li>
							</ProjectDetails>
						</div>
					</div>
					<div className={styles["right-wrap"]}>
						<img src={CodeePhoneSvg} alt="코디 폰" width={447} />
					</div>
				</article>
				<article className={styles.project}>
					<div className={styles["left-wrap"]}>
						<ProjectInfo project={projectInfoData[1]} />
						<div className={styles["proejct-datails-group"]}>
							<ProjectDetails title="API 문서를 포함한 전체적인 기획 방향 설계">
								<li>
									프로젝트 초기 단계 기획에서 주 사용자 타겟 문제와 핵심 사용자
									여정 정의
								</li>
								<li>
									모든 기능 상세를 종합한 후 주도적으로 와이어 프레임 및
									<strong>UX/UI 디자인 설계</strong>
								</li>
								<li>
									핵심 사용자 여정에 따라
									<strong>백엔드 개발자와 협업하여 API 문서 작성</strong>
								</li>
								<li>
									<img
										src={HaruPuppyMirrorBoard}
										alt="하루강아지 기획서"
										width={390}
									/>
								</li>
							</ProjectDetails>
							<ProjectDetails title="api 함수를 axios 인스턴스와 함께 모듈화하여 관리">
								<li>
									프로젝트 내에서 필요한 모든 HTTP 통신을 일관된 방식으로 처리
								</li>
								<li>
									알림 등과 같은 추가적인 API 엔드포인트가 생겨도 유연하게
									대응할 수 있도록 함
								</li>
							</ProjectDetails>
							<ProjectDetails title="기존 Next.js로 구축한 웹 애플리케이션을 Flutter로 마이그레이션 진행 중">
								<li>
									서비스 특성 상 모바일 앱에서 더 적합하다고 판단하여
									크로스플랫폼 접근성 확대하기로 결정
								</li>
								<li>
									dio 패키지로 REST API 호출 복잡성 추상화, 모바일 환경으로 HTTP
									통신 구현 확장
								</li>
								<li>
									<strong>GetX를 통해</strong> 유저 정보와 스케줄 상태를
									controller로 분리, 전역적으로 관리
								</li>
								<li>
									<HyperLink
										text="하루강아지 Flutter GitHub"
										url="https://github.com/CosmicLatte009/haru-puppy-app"
										svg={GithubSvg}
										alt="깃허브 아이콘"
									/>
								</li>
								<li>
									<img
										src={HaruPuppyFlutter}
										alt="하루강아지 Flutter"
										width={489}
									/>
								</li>
							</ProjectDetails>
						</div>
					</div>
					<div className={styles["right-wrap"]}>
						<img src={HaruPuppyPhoneSvg} alt="하루강아지 폰" width={447} />
					</div>
				</article>
				<article className={styles.project}>
					<div className={styles["left-wrap"]}>
						<ProjectInfo project={projectInfoData[2]} />
						<div className={styles["proejct-datails-group"]}>
							<ProjectDetails title="디자인 및 에셋 제작">
								<li>서비스 기획 및 콘텐츠 작성</li>
								<li>와이어프레임, 로고, 키 이미지들 제작</li>
								<li>
									<img
										src={ChristmasDrawing}
										alt="크리스마스 mbti 드로잉"
										width={450}
									/>
								</li>
							</ProjectDetails>
							<ProjectDetails title="SNS 공유 기능 구현">
								<li>
									Facebook, KakaoTalk, Twitter 등 주요 SNS 플랫폼 공유 버튼 구현
								</li>
								<li>
									공유된 콘텐츠가 각 SNS 플랫폼에서 최적화된 형태로 표시되도록
									메타 태그 설정
								</li>
								<li>
									<img
										src={ChristmasSns}
										alt="크리스마스 sns 공유 기능"
										width={240}
									/>
								</li>
							</ProjectDetails>
							<ProjectDetails title="FCP, LCP 등 웹 성능 최적화">
								<li>
									네이버 웹 마스터 도구, 구글 서치 콘솔을 사용하여 검색 엔진 SEO
									노출 개선
								</li>

								<li>
									<img
										src={ChristmasSeo}
										alt="크리스마스 성능 최적화"
										width={891}
									/>
								</li>
							</ProjectDetails>
						</div>
					</div>
					<div className={styles["right-wrap"]}>
						<img src={ChristmasPhoneSvg} alt="크리스마스 mbti 폰" width={447} />
					</div>
				</article>
			</div>
		</section>
	);
};
