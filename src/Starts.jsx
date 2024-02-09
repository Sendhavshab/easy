const Stats = ({ wordsTyped, correctWords, incorrectWords }) => {
  return (
    <div>
      <p className="text-xl">Words Typed: {wordsTyped}</p>
      <p className="text-xl">Correct Words: {correctWords}</p>
      <p className="text-xl">Incorrect Words: {incorrectWords}</p>
    </div>
  );
};
export default Stats;
