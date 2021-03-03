import axios from "axios";

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: "https://api.loli.bj/api/?type=json",
    timeout: 5000,
  });

  return instance(config);
}

export function request2(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/h8",
    timeout: 5000,
  });

  return instance(config);
}
