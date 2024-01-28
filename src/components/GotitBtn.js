import React from 'react'

export default function StartBtn(props) {
    const handleclick = () => {
        props.actions.gotitAction();
    }

    return (
        <div>
            <button className='start-btn' onClick={() => handleclick()}>Got it</button>
        </div >
    )
}
  