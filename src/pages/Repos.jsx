import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL = "https://api.github.com/users/aadon/repos";
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(URL);
      setRepos(response.data);
      setIsLoading(false);
      } catch (error) {
        
      }
    })();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="spinner">
          <Spinner />
        </div>
      )}
      <div className="repo-list">
        <h1>MY GITHUB REPOSITORIES</h1>
        <div className="repos">
          {repos &&
            repos.map((repo) => (
              <Link key={repo.id} to={`/repos/${repo.id}`}>
                <p>{repo.name}</p>
              </Link>
            ))}
        </div>
      </div>
      <Link className="btn" to="/">
        Back
      </Link>
    </>
  );
};

export default Repos;
