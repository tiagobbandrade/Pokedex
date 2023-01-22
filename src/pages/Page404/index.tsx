import { Link } from "react-router-dom";
import { NotFoundContainer } from "./style";

export function Page404() {
  return (
    <NotFoundContainer>
      <header>
        <h1>Ups...</h1>
        <h2>Don't worry, it's just 404</h2>
      </header>
      <Link to="/">Back to home</Link>
    </NotFoundContainer>
  );
}
