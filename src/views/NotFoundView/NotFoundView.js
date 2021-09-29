import { useHistory } from "react-router-dom";
import { useEffect } from "react";

export default function NotFoundView() {
  const history = useHistory();
  useEffect(() => {
    history.push("/");
  });
  return <h1>404 Page not found</h1>;
}
