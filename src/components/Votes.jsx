import { patchVotes } from "../data";

const incVotes = () => {
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  let incOrDec = 1;
  if (hasVoted) incOrDec = -1;

  useEffect(() => {
    patchVotes().then((voteAPI) => {
      setVotes(voteAPI);
    });
  }, []);

  setVotes((currVotes) => {
    return currVotes + incOrDec;
  });
  patchVotes(article_id, incOrDec).catch(() => {
    setVotes((currVotes) => {
      return currVotes + incOrDec;
    });
  });
  setHasVoted((curr) => !curr);
};
