import { useMemo } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  useMatch,
} from "react-router-dom";
import history from "history/browser";
import queryString from "query-string";

// Hook
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const match = useMatch;
  const navigate = useNavigate();

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(
    () => ({
      navigate,
      back: history.back,
      forward: history.forward,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
    }),
    [params, match, location, history]
  );
};
