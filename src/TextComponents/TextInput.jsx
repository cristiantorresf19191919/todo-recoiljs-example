import React from 'react'
import { useRecoilState } from 'recoil'
import { textState } from '../store'

const TextInput = () => {
    const [text,setText] = useRecoilState(textState)
    const onChange = event => {
        setText(event.target.value);
    }
    return (
        <div>
            <h4>first Component reading and updating the state</h4>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo : {text}
            
        </div>
    )
}

export default TextInput
