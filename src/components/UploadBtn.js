import { Link } from "react-router-dom";

function UploadBtn({ className }) {
  return (
    <Link to={`/upload`}>
      <input type="button" value="올리기" className={className} />
    </Link>
  );
}

export default UploadBtn;
