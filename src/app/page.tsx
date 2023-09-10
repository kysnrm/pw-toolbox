import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <main>
      <h1 className={css({ fontWeight: "bold", fontSize: "2xl" })}>
        Hello world!
      </h1>
    </main>
  );
}
