"use client";

import { useState } from "react";
import { css } from "@/styled-system/css";
import Button from "@/src/components/Common/Button";
import exampleCommanders from "./examples";
import { shuffleArray } from "@/src/lib/utils";

type Player = { name: string; isMine: boolean };

function App() {
  const [myCommander, setMyCommander] = useState("");
  const [commanders, setCommanders] = useState(exampleCommanders.join("\n"));
  const [matching, setMatching] = useState<Player[] | undefined>();
  const handleClickButton = () => {
    const splittedCommanders = commanders.split(/\n/);
    const shuffledCommanders = shuffleArray(splittedCommanders);
    const players: Player[] =
      myCommander.length !== 0
        ? [
            { name: myCommander, isMine: true },
            ...shuffledCommanders.slice(0, 3).map((commander) => {
              return { name: commander, isMine: false };
            }),
          ]
        : shuffledCommanders.slice(0, 4).map((commander) => {
            return { name: commander, isMine: false };
          });
    setMatching(shuffleArray(players));
  };
  return (
    <div
      className={css({
        padding: 4,
        maxWidth: "lg",
        marginX: "auto",
        color: "neutral.900",
        md: { padding: 8, maxWidth: "3xl" },
      })}
    >
      <header className={css({ paddingBottom: 6 })}>
        <h1
          className={css({
            fontSize: "xl",
            fontWeight: "bold",
            md: { fontSize: "2xl" },
          })}
        >
          Commander Matching Simulator
        </h1>
      </header>
      <main
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: 6,
          md: { flexDirection: "row" },
        })}
      >
        <section className={sectionStyle}>
          <label className={labelStyle}>
            自分の統率者
            <input
              type="text"
              value={myCommander}
              onChange={(e) => setMyCommander(e.target.value)}
              className={inputStyle}
            />
          </label>
          <label className={labelStyle}>
            他のプレイヤーの統率者
            <textarea
              value={commanders}
              onChange={(e) => setCommanders(e.target.value)}
              className={inputStyle}
              rows={5}
            />
          </label>
          <Button label="マッチング" onClick={handleClickButton} />
        </section>
        <section className={sectionStyle}>
          {matching && (
            <ul
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: 2,
              })}
            >
              {matching.map((item, index) => (
                <li
                  key={index}
                  className={css({
                    color: item.isMine ? "red.600" : "inherit",
                    display: "flex",
                    gap: 2,
                  })}
                >
                  <span className={css({ width: 3, flexShrink: 0 })}>
                    {index + 1}
                  </span>
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <footer
        className={css({ width: "full", textAlign: "center", marginTop: 8 })}
      >
        Developed by{" "}
        <a
          href="https://twitter.com/kysnrm"
          target="_blank"
          rel="noopener noreferrer"
          className={css({ color: "red.500", textDecoration: "underline" })}
        >
          @kysnrm
        </a>
      </footer>
    </div>
  );
}

const sectionStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: 6,
  md: { width: "50%" },
});
const labelStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});
const inputStyle = css({
  border: "1px solid",
  borderColor: "neutral.400",
  borderRadius: "md",
  paddingX: 2,
  paddingY: 1,
  resize: "none",
});

export default App;
