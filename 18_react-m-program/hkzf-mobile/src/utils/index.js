/* 工具函数公用的 */
import axios from 'axios'
export const getCurCity = () => {
    // 判断本地有没有当前城市信息
    const localCity = JSON.parse(localStorage.getItem('localCity'));
    // 如果没有
    if (!localCity) {
        return new Promise((resolve, reject) => {
            const myCity = new window.BMap.LocalCity();
            myCity.get(async (res) => {
                try {
                    const name = res.name;
                    const cityRes = await axios.get(`http://localhost:8080/area/info?name=${name}`);
                    // console.log(cityRes)
                    // const realName = cityRes.data.body.label;
                    localStorage.setItem('localCity', JSON.stringify(cityRes.data.body));
                    resolve(cityRes.data.body);
                } catch (error) {
                    reject(error);
                }
            })
        })
    }
    // 如果有
    return Promise.resolve(localCity);
}
