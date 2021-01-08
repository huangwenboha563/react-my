import React, {useRef, forwardRef, useImperativeHandle} from 'react';

const HYInput = forwardRef((props, ref) => {
    const inputRef = useRef();
    // HYInput 想让你做什么你才能做什么....
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }), [inputRef.current])

    return <input ref={inputRef} type="text"/>
})

export default function UseImperativeHandleHookDemo() {
    const inputRef = useRef();

    return (
        <div>
            <HYInput ref={inputRef}/>
            <button onClick={e => inputRef.current.focus()}>聚焦</button>
        </div>
    )
}
