import css from "./VoteOptions.module.css";

export default function VoteOptions() {
  return (
    <div className={css.container}>
      <button className={css.button}>Good</button>
      <button className={css.button}>Neutral</button>
      <button className={css.button}>Bad</button>
      <button className={`${css.button} ${css.reset}`}>Reset</button>
    </div>
  );
}
