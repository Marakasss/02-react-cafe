import { useState } from "react";
import css from "./App.module.css";
import Cafeinfo from "../CafeInfo/CafeInfo";
import type { Votes } from "../../types/votes";
import { type VoteType } from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

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

  const totalVotes: number = Object.values(vote).reduce(
    (sum, value) => sum + value,
    0
  );

  const positiveRate: number = totalVotes
    ? Math.round((vote.good / totalVotes) * 100)
    : 0;

  return (
    <>
      <div className={css.app}>
        <Cafeinfo />
        <VoteOptions
          onVote={handleVote}
          onReset={resetVote}
          canReset={totalVotes > 0}
        />
        {totalVotes ? (
          <VoteStats
            votes={vote}
            totalVotes={totalVotes}
            positiveRate={positiveRate}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
