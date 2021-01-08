import React, {useState} from 'react';
/*
*
*  useState可能有多个
*  用解构赋值的方式获取，更优雅....
*
*
*/
export default function MultiHookState() {
    // 第一个（解构赋值更优雅）
    const [count, setCount] = useState(0);
    // 第二个
    const [age, setAge] = useState(18);
    // 第三个
    const [friends, setFriends] = useState(["kobe", "lilei"]);

    return (
        <div>
            <h2>当前计数: {count}</h2>
            <h2>我的年龄: {age}</h2>
            <ul>
                {
                    friends.map((item, index) => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
