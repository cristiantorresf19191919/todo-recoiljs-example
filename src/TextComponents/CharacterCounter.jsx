import React from 'react'
import ShowText from './ShowText'
import TextInput from './TextInput'
import UpdateText from './UpdateText'
const CharacterCounter = () => {
    return (
        <div className='character-counter'>
            <TextInput/>
            <ShowText/>
            <UpdateText/>
        </div>
    )
}

export default CharacterCounter
