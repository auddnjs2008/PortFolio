const projectData = [
  {
    title: "병원예약 웹사이트",
    subtitle: "2021.08(3인 팀 프로젝트)",
    imgSrc: [
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B82.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B83.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+4.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B85.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B86.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EB%B3%91%EC%9B%90+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B87.PNG",
    ],
    webpage: "epic-tesla-248ec5.netlify.app/",
    contentOne: `클라우드의 MSA Serverless 구조를 적용해 병원 예약 웹서비스를
    구현해본 프로젝트입니다. 처음 경험을 해본 팀 프로젝트이고
    졸업작품으로써 많은 노력을 들인 프로젝트입니다.`,
    contentTwo: ` Public cloud인 AWS의 여러 서비스를 경험하고 리덕스를
    사용하면서 리덕스의 상태관리에 좀 더 익숙해 질 수 있었던
    프로젝트입니다.`,
    function: "지도 검색(kakao Map),관리자와 실시간chat,my page, 추천 알고리즘",
    github: "github.com/auddnjs2008/hospital-reservation-system",
    frontend: "React,TypeScript,Redux,Redux-Thunk,styled-component",
    backend: "AWS Lambda, AWS Api-gateway, AWS Dynamo DB",
    deployment: "Netlify",
    mobile: true,
    color: "#5588FB",
  },
  {
    title: "영화정보 웹사이트",
    subtitle: "2021.01(1인 프로젝트)",
    imgSrc: [
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%98%81%ED%99%94+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%98%81%ED%99%94+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%98%81%ED%99%94+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%98%81%ED%99%94+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B82.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%98%81%ED%99%94+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%98%81%ED%99%94+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B83.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%98%81%ED%99%94+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%98%81%ED%99%94+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B84.png",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%98%81%ED%99%94+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%98%81%ED%99%94+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B85.PNG",
    ],
    webpage: "sharp-mestorf-c53780.netlify.app/#/",
    contentOne: `리덕스를 처음 적용해본 프로젝트입니다. 또한 Firebase를 활용하여 backend 를 대신 구현한 경험을 해볼 수 있었습니다.`,
    contentTwo: `리덕스 기술 습득에 중점을 두었고, 반응형이 가능하도록 제작을 하였습니다.`,

    function:
      "tmdb api를 활용한 영화,드라마 정보검색 기능, 나만의 영화 저장기능, 카카오톡 api를 활용한 카카오톡 공유기능",
    github: "github.com/auddnjs2008/MovieApp-Upgrade",
    frontend: "React, Redux",
    backend: "Firebase",
    deployment: "Netlify",
    mobile: true,
    color: "#E84118",
  },
  {
    title: "포켓몬 웹 게임",
    subtitle: "2020.12(1인 프로젝트)",
    imgSrc: [
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%ED%8F%AC%EC%BC%93%EB%AA%AC+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%ED%8F%AC%EC%BC%93%EB%AA%AC+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%ED%8F%AC%EC%BC%93%EB%AA%AC+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%ED%8F%AC%EC%BC%93%EB%AA%AC+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B82.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%ED%8F%AC%EC%BC%93%EB%AA%AC+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%ED%8F%AC%EC%BC%93%EB%AA%AC+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B83.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%ED%8F%AC%EC%BC%93%EB%AA%AC+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%ED%8F%AC%EC%BC%93%EB%AA%AC+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B84.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%ED%8F%AC%EC%BC%93%EB%AA%AC+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%ED%8F%AC%EC%BC%93%EB%AA%AC+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B85.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%ED%8F%AC%EC%BC%93%EB%AA%AC+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%ED%8F%AC%EC%BC%93%EB%AA%AC+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B86.PNG",
    ],
    webpage: "peaceful-beaver-b62624.netlify.app/",
    contentOne: `포켓몬을 활용한 게임을 만들어 보면 재미있을거 같아 시작한 프로젝트입니다. 포켓몬 이미지, 정보 찾는데 많은 시간을 들였고, 게임 맵을 구현하기 위해 많은 고민을 쏟은 프로젝트입니다.`,
    contentTwo: `기존 v1버전은 일반 javascript 기반과, 각 game map 컴포넌트도 너무 중복되는게 많았습니다. v2버전은 typescript로 다시 작성하고, game map 컴포넌트를 리팩토링 하였습니다.`,
    function:
      "나만의 포켓몬,상점,포켓몬 사전, 포켓몬 진화, 게임 페이지, information 무한슬라이더",
    github: "github.com/auddnjs2008/Pokemon-v2",
    frontend: "React, Typescript",
    deployment: "Netlify",
    mobile: false,
    color: "#F0932B",
  },
  {
    title: "웹 실시간 채팅서비스",
    subtitle: "2020.09(1인 프로젝트)",
    imgSrc: [
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B82.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B83.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B84.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B85.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B86.PNG",
      "https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%B1%84%ED%8C%85+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B87.PNG",
    ],
    webpage: "still-basin-59736.herokuapp.com/",
    contentOne:
      "node js의 socket.io를 통한 실시간 소켓통신 기능을 이용해 카카오톡과 같은 채팅 기능을 구현한 프로젝트입니다.",
    contentTwo: "웹 개발의 전체적인 흐름을 느낄 수 있었던 프로젝트 입니다.",
    function: "실시간 채팅기능, 게시판 기능",
    github: "github.com/auddnjs2008/RoomChat",
    frontend: "javascript, scss,html,pug",
    backend: "NodeJs,MongoDB,express,socket.io",
    deployment: "HeroKu",
    mobile: true,
    color: "#444439",
  },
];

export default projectData;
