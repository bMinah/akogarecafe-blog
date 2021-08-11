import SideBar from "../../components/sidebar/Sidebar";
import { SettingsDeleteTitle, SettingsDiv, SettingsForm, SettingsFormInput, SettingsFormLabel, SettingsPP, SettingsPPIcon, SettingsPPImage, SettingsSubmit, SettingsTitle, SettingsUpdateTitle, SettingsWrapper } from "../../style";
import Profile from "../../images/profile.jpg"

export default function Settings() {
    return (
        <SettingsDiv>
            <SettingsWrapper>
                <SettingsTitle>
                    <SettingsUpdateTitle>Update Your Account</SettingsUpdateTitle>
                    <SettingsDeleteTitle>Delete Account</SettingsDeleteTitle>
                </SettingsTitle>
                <SettingsForm>
                    <SettingsFormLabel>Profile Picture</SettingsFormLabel>
                    <SettingsPP>
                        <SettingsPPImage src={Profile} alt=""/>
                        <SettingsFormLabel htmlFor="fileInput">
                            <SettingsPPIcon className="far fa-user-circle"></SettingsPPIcon>
                        </SettingsFormLabel>
                        <SettingsFormInput type="file" id="fileInput" style={{display:"none"}}/>
                    </SettingsPP>
                    <SettingsFormLabel>Username</SettingsFormLabel>
                    <SettingsFormInput type="text" placeholder="JyR"/>
                    <SettingsFormLabel>Email</SettingsFormLabel>
                    <SettingsFormInput type="email" placeholder="JyR@gmail.com"/>
                    <SettingsFormLabel>Password</SettingsFormLabel>
                    <SettingsFormInput type="password"/>
                    <SettingsSubmit className="settingsSubmit">Update</SettingsSubmit>
                </SettingsForm>
            </SettingsWrapper>
            <SideBar/>
        </SettingsDiv>
    )
}