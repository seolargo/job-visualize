import { createSignal } from "solid-js";
import "../styles/job-visualizer-workspace.css";
import { JobInputCard } from "./WorkspacePage/JobInputCard";
import { RecentSection } from "./WorkspacePage/RecentSection";
import { Sidebar } from "./WorkspacePage/Sidebar/Sidebar";
import { Topbar } from "./WorkspacePage/Topbar";
import { WorkspaceHeading } from "./WorkspacePage/WorkspaceHeading";

export default function WorkspacePage() {
  const [jobText, setJobText] = createSignal("");

  const onNewAsset = () => {
    setJobText("");
    document.getElementById("job-source")?.focus();
  };

  const onVisualize = () => {
    console.log("Job source:", jobText());
  };

  return (
    <div class="jv-root">
      <div class="jv-shell">
        <Sidebar onNewAsset={onNewAsset} />

        <main class="jv-main">
          <Topbar />

          <div class="jv-content">
            <WorkspaceHeading />

            <JobInputCard
              value={jobText()}
              onChange={setJobText}
              onVisualize={onVisualize}
            />

            <RecentSection />
          </div>
        </main>
      </div>
    </div>
  );
}
