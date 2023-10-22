
import { Link } from "react-router-dom";

function Home() {
    
  return (
    <div className="wrapper">
      <h1>Hello 😎!</h1>
      <h1>
        I'm <strong>Fidelis Ngwu</strong>
      </h1>
      <p>An AltSchool Africa Software Engineering (V2) Student</p>
      <p>Welcome to my Github repository</p>

      <Link className="explore" to="repos">Explore</Link>
      <Link className="explore" to="testerror">Test Error</Link>
    </div>
  );
}

export default Home;
