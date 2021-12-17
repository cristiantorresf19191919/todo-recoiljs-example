import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { charCountState, textState } from '../store'

const ShowText = () => {
    const [useText,setText] = useRecoilState(textState);
    const count = useRecoilValue(charCountState);
    return (
        <div>
            <h4>Second component consuming the state</h4>
            {useText}
            <p>show computed text</p>
            {count}
        </div>
    )
}

export default ShowText
