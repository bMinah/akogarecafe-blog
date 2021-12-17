import {
    WriteDiv,
    WriteForm,
    WriteFormGroup,
    WriteIcon,
    WriteInput,
    WriteText,
    WriteSubmit,
    WriteImage,
} from '../../style';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';

export default function Write() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        };
        if (file) {
            const data = new FormData();
            // @ts-ignore
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            // @ts-ignore
            newPost.photo = filename;
            try {
                await axios.post('http://localhost:5000/api/upload', data);
            } catch (err) {}
        }
        try {
            const res = await axios.post('http://localhost:5000/api/posts', newPost);
            // @ts-ignore
            window.location.replace('/post/' + res.data._id);
        } catch (err) {}
    };

    return (
        <WriteDiv>
            {file && <WriteImage src={URL.createObjectURL(file)} alt="" />}
            <WriteForm onSubmit={handleSubmit}>
                <WriteFormGroup>
                    <label htmlFor="fileInput">
                        <WriteIcon className="fas fa-plus"></WriteIcon>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        // @ts-ignore
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <WriteInput
                        type="text"
                        placeholder="Title"
                        autoFocus={true}
                        // @ts-ignore
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </WriteFormGroup>
                <WriteFormGroup>
                    <WriteText
                        placeholder="Tell your story..."
                        typeof="text"
                        // @ts-ignore
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </WriteFormGroup>
                <WriteSubmit type="submit">Publish</WriteSubmit>
            </WriteForm>
        </WriteDiv>
    );
}
