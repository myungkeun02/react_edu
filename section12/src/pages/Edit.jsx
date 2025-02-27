import { useParams } from "react-router-dom";

const Edit = ({}) => {
  const parmas = useParams();

  return (
    <div>
      <h1>Edit</h1>
      <p>id: {parmas.id}</p>
    </div>
  );
};

export default Edit;
