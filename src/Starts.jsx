const Stats = ({ wordsTyped, correctWords, incorrectWords }) => {
  return (
    <div>
      <p>Words Typed: {wordsTyped}</p>
      <p>Correct Words: {correctWords}</p>
      <p>Incorrect Words: {incorrectWords}</p>
    </div>
  );
};
export default Stats;
