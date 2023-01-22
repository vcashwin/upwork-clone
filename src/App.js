import JobsList from "./components/jobs-list";
import Navbar from "./components/navbar";
import RampupCard from "./components/rampup-card";

function App() {
  return (
    <div className="font-sans flex flex-col px-6 space-y-4 tracking-wide">
      <Navbar />
      <RampupCard />
      <JobsList />
    </div>
  );
}

export default App;
