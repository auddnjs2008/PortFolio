import ProfileHeader from "@components/ProfileHeader";
import ProfileMyInfo from "@components/ProfileMyInfo";
import Folder from "@layouts/Folder";
import React, { Dispatch, FC } from "react";
import { Container, Navigator } from "./styles";

interface IProfile {
  profileWindow: boolean;
  setProfileWindow: Dispatch<React.SetStateAction<boolean>>;
}

const Profile: FC<IProfile> = ({ profileWindow, setProfileWindow }) => {
  return profileWindow ? (
    <Folder folderWindow={profileWindow} setFolderWindow={setProfileWindow}>
      <Container>
        <ProfileHeader></ProfileHeader>
        <ProfileMyInfo></ProfileMyInfo>
      </Container>
      <Navigator></Navigator>
    </Folder>
  ) : null;
};

export default Profile;
