import client from "./internal/httpClient";

// 线上课详情
export function detail(id: number) {
  return client.get(`/api/v1/course/${id}`, {});
}

// 获取播放地址
export function playUrl(courseId: number, hourId: number) {
  return client.get(`/api/v1/course/${courseId}/hour/${hourId}/play`, {});
}

// 记录学员观看时长
export function record(courseId: number, hourId: number, duration: number) {
  return client.post(`/api/v1/course/${courseId}/hour/${hourId}/record`, {
    duration,
  });
}

//观看ping
export function playPing(courseId: number, hourId: number) {
  return client.post(`/api/v1/course/${courseId}/hour/${hourId}/ping`, {});
}

//最近学习课程
export function latestLearn() {
  return client.get(`/api/v1/user/latest-learn`, {});
}
