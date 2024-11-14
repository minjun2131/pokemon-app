<h1>🕊 CH-3. React-router-dom을 활용해 포켓몬 1세대 도감 만들기</h1>

<h2>🕹 목표 정하기</h2>

React의 props drilling, Context Api, Redux-toolkits 세 가지 모두 사용해보기

포켓몬 데이터 CRUD 구현하기

포켓몬은 최대 6마리까지만 생성가능

styledcomponent로 스타일링 하기

sweetalert2 로 알림창을 꾸며보기

🔭[배포용 링크: RTK][https://pokemon-app-eta-blond.vercel.app/]

<h2>🎰 구현한 기능</h2>

* <h3>CRUD</h3>

  * 화면에 포켓몬 데이터 출력하기
  * 원하는 포켓몬 데이터 저장하기
  * 추가한 포켓몬 데이터 삭제하기
  * 추가한 포켓몬 나만의 포켓몬에 업데이트 하기

* <h3>입력 중 오류</h3>

  * 포켓몬은 총 6마리 까지만 추가할 수 있다는 표기
  * 중복된 포켓몬은 등록할 수 없다는 표기

<h2>🎁 배울 수 있었던 부분 + 부족한 부분</h2>

props drilling -> Context Api -> Redux-toolkits 순으로 리펙토링 하면서<br/>
전역상태관리에 대해서 이해할 수 있었습니다.

react-router-dom을 이용해 여러 페이지 간 이동을 자유롭게 설정할 수 있었고,<br/>
id값을 path params로 받아와 해당 포켓몬의 상세 정보를 표시하는 걸 배울 수 있었습니다.

부족했던 부분은 Global style을 적용하지 못한 것과<br/>
커스텀 훅을 사용하지 못했던 점<br/>
그리고 redux-persists에 사용에 대해 아직 어려웠던 부분이였습니다.

