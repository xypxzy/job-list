import { FilterPanel } from "./components/FilterPanel/FilterPanel.tsx";
import { JobList } from "./components/JobList/JobList.tsx";
function App() {
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
