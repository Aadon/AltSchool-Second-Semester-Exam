import { Link } from "react-router-dom";

const Fallback = ({ error }) => {
    return (
    <div className="fallback">
        <h1>Something went wrong</h1>
        <h2>Please try again later</h2>
        <p>{error.toString()}</p>
       <p> Go back to </p>
       <Link className='btn' to='/'> Home Page</Link>
        </div>
    )
};
export default Fallback;