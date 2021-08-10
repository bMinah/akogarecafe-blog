import { WriteDiv, WriteForm, WriteFormGroup, WriteIcon, WriteInput, WriteText, WriteSubmit, WriteImage } from "../../style";
import LatteCup from "../../images/latteCup.jpg";

export default function Write(){
    return (
        <WriteDiv>
            <WriteImage src={LatteCup} alt=""/>
            <WriteForm>
                <WriteFormGroup>
                    <label htmlFor="fileInput">
                        <WriteIcon className="fas fa-plus"></WriteIcon>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <WriteInput type="text" placeholder="Title" autoFocus={true}/>
                </WriteFormGroup>
                <WriteFormGroup>
                    <WriteText placeholder="Tell your story..." typeof="text"/>
                </WriteFormGroup>
                <WriteSubmit>Publish</WriteSubmit>
            </WriteForm>
        </WriteDiv>
    )
}