import { request, request2 } from "./request";

export function getMSN() {
  return request({
    url: "",
  });
}

export function getHomeGoods(type, page) {
  return request2({
    url: "home/data",
    params: {
      type,
      page,
    },
  });
}
