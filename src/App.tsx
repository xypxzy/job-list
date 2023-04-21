import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FilterPanel } from "./components/FilterPanel/FilterPanel.tsx";
import { JobList } from "./components/JobList/JobList.tsx";

import { addPosition } from "./store/positions/positionAction.ts";
import data from "./mock/data.json";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(addPosition(data));
  }, []);
  return (
    <>
      <header className="header" />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
