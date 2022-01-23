import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state: any) => state.repositories
  );
  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    searchRepositories(term);
  };

  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((name: string) => (
          <div key={name} className="">
            {name}
          </div>
        ))}
    </div>
  );
};

export default RepositoriesList;
