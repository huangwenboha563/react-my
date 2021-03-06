import React, {useState, useEffect} from 'react'

export default function HookCounterChangeTitle() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('----------')
        /*  
        componentDidMount
        componentDidUpdate
        这两个都会走
        */
        document.title = counter;
    })

    return (
        <div>
            <h2>当前计数: {counter}</h2>
            <button onClick={e => setCounter(counter + 1)}>+1</button>
        </div>
    )
}
