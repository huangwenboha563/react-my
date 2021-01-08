const devBaseURL = "https://httpbin.org";
const proBaseURL = "https://production.org";


// 开发环境和生产环境url不一样
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;
