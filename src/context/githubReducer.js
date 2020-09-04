import {
  GET_USER,
  GET_LANG_STATS,
  GET_REPOS,
  GET_USER_ID,
  SET_LOADING,
} from "./types";

export default (state, action) => {
  const { type, payload } = action;

  if (type === GET_USER_ID) return { ...state, userId: payload };
  if (type === GET_USER) return { ...state, user: payload };
  if (type === GET_LANG_STATS) return { ...state, langStats: payload };
  if (type === GET_REPOS) return { ...state, repos: payload };
  if (type === SET_LOADING) return { ...state, isLoading: payload };
};
