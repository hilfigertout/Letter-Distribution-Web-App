import { useNavigate } from "react-router-dom";

const PageHeader = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className="page-header">    
            <h1 onClick={handleClick}>Letter Count</h1>
            <h3>By Ian Roberts</h3>
        </div>  );
}
 
export default PageHeader;