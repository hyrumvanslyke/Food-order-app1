import { Link } from "react-router-dom";

function HomePage() {
    // const navigate = useNavigate()

    // function navigateHandler(){
    //     navigate('/products')
    // }
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products"> the list of products</Link>
      </p>
      {/* <button onClick={navigateHandler}>Navigation</button> */}
    </>
  );
}
export default HomePage;
