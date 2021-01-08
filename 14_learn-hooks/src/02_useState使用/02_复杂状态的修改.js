import React, {useState} from 'react'
/*
* useState是为函数式组件而生...
*
*/
export default function ComplexHookState() {
    // 第一个useState
    const [friends, setFrineds] = useState(["kobe", "lilei"]);
    // 第二个useState
    const [students, setStudents] = useState([
        {id: 110, name: "why", age: 18},
        {id: 111, name: "kobe", age: 30},
        {id: 112, name: "lilei", age: 25},
    ])
    // 错误的做法
    function addFriend() {
        friends.push("hmm");
        setFrineds(friends);
    }

    function incrementAgeWithIndex(index) {
        // 把原来的数组拷贝一份切记
        const newStudents = [...students];
        newStudents[index].age += 1;
        setStudents(newStudents);
    }
    function testAddFriend () {
        setFrineds([...friends, "tom"])
    }
    return (
        <div>
            <h2>好友列表:</h2>
            {/*遍历好友friends*/}
            <ul>
                {
                    friends.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            {/*添加好友，给friends追加一个值*/}
            {/*<button onClick={e => setFrineds([...friends, "tom"])}>添加朋友</button>*/}
            <button onClick={testAddFriend}>添加朋友</button>
            {/* 错误的做法 */}
            <button onClick={addFriend}>添加朋友</button>

            <h2>学生列表</h2>
            <ul>
                {
                    students.map((item, index) => {
                        return (
                            <li key={item.id}>
                                <span>名字: {item.name} 年龄: {item.age}</span>
                                <button onClick={e => incrementAgeWithIndex(index)}>age+1</button>
                                {/*<button onClick={incrementAgeWithIndex(index)}>age+1</button>*/}
                                {/*疑问：这里为什么必须套一个箭头函数呢？ onclick直接这样incrementAgeWithIndex(index)不可以*/}
                                {/*<span>&nbsp;&nbsp;&nbsp;&nbsp;{index}</span>*/}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
