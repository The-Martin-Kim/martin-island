import { Card, Container, Row, Col, Accordion } from 'react-bootstrap';

function ProfilePage() {
    return (
        <Container className="mt-5 GowunDodum-Regular" style={{marginBottom: "30px"}}>
            <Row className="justify-content-center mb-4">
                <Col md={8} className="d-flex flex-column align-items-center">
                    <Card className="text-center shadow" style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Img
                                variant="top"
                                src="/logo.png"
                                alt="Instructor"
                                className="rounded-circle mt-3"
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    objectFit: 'cover',
                                    margin: '0 auto',
                                }}
                            />
                            <h2 className="mt-3 mb-0 fw-bold">Martin Kim</h2>
                            <p className="text-muted">Captain of the Martin Island</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={8} xs={12}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>About Me</Accordion.Header>
                            <Accordion.Body>
                                <p className="mb-1">
                                    Captain of Martin Island, The Educational System for AI·SW
                                </p>
                                <br/>
                                <p className="mb-1">학부 연구생 (2023.03 ~ 2024.12)</p>
                                <p className="mb-1">학부 학술지원 장학생 (2023.09 ~ 2024.12)</p>
                                <p className="mb-1">학부생 연구형 인턴쉽 장학생 (2024-1학기, 2024-2학기)</p>
                                <p className="mb-1">성적 우수 및 SW 중심대학, 대학 혁신 장학생 (총 11회)</p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Teaching & Experiences</Accordion.Header>
                            <Accordion.Body>
                                <p className="mb-1">
                                    프로그래밍 언어 정복하기 (C/C++, Python, Java)
                                </p>
                                <p className="mb-1">
                                    대학생을 위한 SW 교과목 A+ 대비반 (C, Python, 데이터 분석)
                                </p>
                                <p className="mb-1">
                                    알고리즘 기초/심화반 (USACO 대비)
                                </p>
                                <p className="mb-1">
                                    프로그래밍 관련 대회 준비반
                                </p>
                                <p className="mb-1">
                                    유학생을 위한 SW 프로젝트 준비반
                                </p>
                                <p className="mb-1">
                                    AP Computer Science 완벽 대비반
                                </p>
                                <p className="mb-1">
                                    대학 합격을 위한 면접 대비반
                                </p>
                                <p className="mb-1">
                                    교내 대회/교과 활동 컨설팅반
                                </p>
                                <br/>
                                <p className="mb-1">
                                    교육부, 17개 시도교육청, 한국과학창의재단에서 주관하는 '디지털 새싹 교육 캠프' 강사
                                </p>
                                <p className="mb-1">
                                    이지스퍼블리싱에서 출간되는 IT 서적 검수 및 리뷰 (2권)
                                </p>
                                <p className="mb-1">
                                    오렌지3 온라인 강의 제작 총괄
                                </p>
                                <p className="mb-1">
                                    재직자 대상 AI 실무 활용 강의 (부경대학교)
                                </p>
                                <p className="mb-1">
                                    미술 + AI, Midjourney 정복하기 특강
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                        <Accordion.Header>Major Accomplishments</Accordion.Header>
                            <Accordion.Body>
                                <h5 className="fw-bold mt-2">2023년 주요 실적</h5>
                                <ul className="list-unstyled">
                                    <li>서울대학교 지역균형전형 최초합</li>
                                    <li>국민대학교 SW 특기자 전형 최초합</li>
                                    <li>프로그래밍기초와실습 A+ (성균관대)</li>
                                    <li>공학컴퓨터프로그래밍 A+ (성균관대)</li>
                                    <li>용인한국외국어대학교부설고등학교 합격</li>
                                    <li>교내 발명품대회 다수 수상 (지도 학생 전원)</li>
                                    <li>가천대학교 조기취업형 계약학과 전형 최초합</li>
                                    <li>한양대(서울) 소프트웨어인재 전형 최초합</li>
                                </ul>
                                <h5 className="fw-bold mt-4">2024년 주요 실적</h5>
                                <ul className="list-unstyled">
                                    <li>포스텍 영재기업인교육원 합격</li>
                                    <li>정보 내신 1등급 (청담고등학교)</li>
                                    <li>과학기술대학교 학생생활우수자 전형 합격</li>
                                    <li>유네스코유산 대회 수상 (지도 학생 전원)</li>
                                    <li>제2회 IT 코딩 발명 아이디어 경진대회 수상</li>
                                    <li>교내 발명품대회 다수 수상 (지도 학생 전원)</li>
                                    <li>USACO Bronze Level 만점자 배출 (7명)</li>
                                    <li>Genius Olympiad South Korea 지도</li>
                                    <li>Korea Science & Engineering Fair 지도</li>
                                    <li>Korea-International Youth Olympiad 수상</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfilePage;
