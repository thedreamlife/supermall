import axios from 'axios'

// ES6 Promise的封装
export function request(config) {

    // 1.创建axios的实例对象
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/h3',
        timeout: 5000
    })

    // 过滤器(拦截器)
    //请求拦截的作用
    instance.interceptors.request.use(config => {
        return config
    }, err => {

    })


    // 通过实例发送网络请求
    //         instance(options)
    //             .then(res => {
    //                 resolve(res)
    //             }).catch(err => {
    //                 reject(err)
    //             })
    //     })
    // }
    return instance(config)
}