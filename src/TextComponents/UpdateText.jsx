import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../store';

const UpdateText = () => {
    const [text,setText] = useRecoilState(textState);
    const onChange = event => {
        setText(event.target.value);
    }
    return (
        <div>
            <br />
            <p><b>Another component updating the state</b></p>
            <input type="text" defaultValue={text} onChange={onChange} />
            <br />
            {text}
        </div>
    )
}

export default UpdateText