import {useState, useEffect} from 'react';

function useLocalStorage(key) {
  // useState传递一个函数
  // https://www.h5w3.com/22835.html  关于 useState参数是函数的说明和 setState 也可以是函数...的demo
  const [name, setName] = useState(() => {
    const name = JSON.parse(window.localStorage.getItem(key));
    return name;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(name));
  }, [name]);

  return [name, setName];
}

export default useLocalStorage;
