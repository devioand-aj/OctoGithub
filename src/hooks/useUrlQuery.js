import { useLocation } from "react-router-dom";

export default (searchQuery) => {
  const query = new URLSearchParams(useLocation().search);
  return query.get(searchQuery);
};
