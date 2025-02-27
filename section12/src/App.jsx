import { Routes, Route } from "react-router-dom";
import { useReducer, useRef, createContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emmotionId: "1",
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emmotionId: "2",
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    emmotionId: "3",
    content: "3번 일기 내용",
  },
];

const reduser = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.data.id));
    default:
      return state;
  }
};

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const idRef = useRef(4);

  const [data, dispatch] = useReducer(reduser, mockData);

  // 새로운 일기 추가
  const onCreate = (createdDate, emmotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emmotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emmotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emmotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: {
        id,
      },
    });
  };

  return (
    <>
      <button
        onClick={() => {
          onCreate(new Date().getTime(), "1", "새로운 일기 내용");
        }}
      >
        create
      </button>
      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), "1", "수정된 일기 내용");
        }}
      >
        update
      </button>
      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        delete
      </button>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
