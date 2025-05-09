import { useState } from "react";
import css from "./App.module.css";
import Cafeinfo from "../CafeInfo/CafeInfo";
import type { Votes } from "../types/votes";
import { type VoteType } from "../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";

const votes: Votes = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [vote, setVote] = useState<Votes>(votes);

  const handleVote = (type: VoteType): void => {
    setVote({
      ...vote,
      [type]: vote[type] + 1,
    });
  };

  const resetVote = (): void => setVote(votes);

  return (
    <>
      <div className={css.app}>
        <Cafeinfo />
        <VoteOptions />
      </div>
    </>
  );
}
