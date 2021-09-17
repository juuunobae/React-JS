// api요청을 하기 위해 axios import
import axios from "axios";

// axios instance를 생성해 api를 요청할 기본 url과 파라미터를 넣고 api 변수에 저장한다.
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "503131560042303c4c598e10b819ed3d",
    language: "en-US",
  },
});

// .get 메소드 사용해 필요한 정보를 요청할 수 있게 movieApi 객체를 만들어 저장한다.
// ex) movieApi.nowPlaying을 사용해 현재 상영중인 영화 정보를 요청한다.
export const movieApi = {
  nowPlaying: api.get("movie/now_playing"),
  upcoming: api.get("movie/upcoming"),
  popular: api.get("movie/popular"),
  // 함수로 만들어 매개변수를 주고 그 에 해당하는 정보를 요청하고, 파라미터를 이용한 요청도 가능하다.
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

// .get 메소드 사용해 필요한 정보를 요청할 수 있게 tvApi 객체를 만들어 저장한다.
export const tvApi = {
  topRated: api.get("tv/top_rated"),
  popular: api.get("tv/popular"),
  airingToday: api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
