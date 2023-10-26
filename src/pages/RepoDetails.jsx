import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const RepoDetails = () => {
  const [repo, setRepo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { repoId } = useParams();

  useEffect(() => {
    (async () => {
        const response = await axios.get(
          `https://api.github.com/repositories/${repoId}`
        );
        setRepo(response.data);
        setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="spinner">
          <Spinner />
        </div>
      )}
         <div className="repo-container">
          <div className="repo-info">
            <h2>Repository Name: {repo.name}</h2>
            <h3>Language: {repo.language}</h3>
            <p>Size: {repo.size}</p>
            <p>Date and Time: {repo.created_at}</p>
            <p>Description: {repo.description}</p>
          </div>
          <Link className="return-btn" to="/repos">
            Go Back
          </Link>
        </div>
    </>
  );
}

export default RepoDetails;
