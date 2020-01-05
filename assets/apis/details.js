import axios from 'axios';

//模块就是单例模式  整个内存中只有一个axios
//公司级做法
//抛出
//接口封装成函数 放到专门的js文件中
export function getDetailsByLid(lid) {
    return new Promise((resolve, reject) => {
        //ajaxi请求
        axios.get("/details", {
            params: {
                lid,
            }
        }).then(result => {
            resolve(result.data);
        })
    })
}