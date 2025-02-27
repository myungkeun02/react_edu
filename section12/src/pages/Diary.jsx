import { useParams } from "react-router-dom";

const Diary = () => {
  const parmas = useParams();
  console.log(parmas);

  return (
    <div>
      <div>
        <h1>Diary</h1>
        <p>id: {parmas.id}</p>
      </div>
    </div>
  );
};

export default Diary;
