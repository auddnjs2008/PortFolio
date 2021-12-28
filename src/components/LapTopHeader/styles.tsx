import styled from "@emotion/styled";

export const Container = styled.ul`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  li {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ProjectIcon = styled.li`
  background: url("https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/projectIcon.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-size: center;
  width: 50px;
  height: 80%;
`;

export const NoteIcon = styled.li`
  background: url("https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/noteIcon.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-size: center;
  width: 50px;
  height: 80%;
`;

export const ProfileIcon = styled.li`
  background: url("https://usecloud.s3.ap-northeast-1.amazonaws.com/portfolio/profile.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-size: center;
  width: 50px;
  height: 80%;
`;
