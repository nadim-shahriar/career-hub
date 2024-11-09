import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <h1>Opps</h1>
            <Link to={'/'}>Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;