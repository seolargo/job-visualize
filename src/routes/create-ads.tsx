import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import "../styles/job-visualizer-workspace.css";
import { JobInputCard } from "./WorkspacePage/JobInputCard";
import { RecentSection } from "./WorkspacePage/RecentSection";
import { Sidebar } from "./WorkspacePage/Sidebar/Sidebar";
import { Topbar } from "./WorkspacePage/Topbar";
import { WorkspaceHeading } from "./WorkspacePage/WorkspaceHeading";
import { parseJobPosting } from "~/common/parseJob";
import { setCurrentJob } from "~/common/jobStore";

export default function WorkspacePage() {
  const [jobText, setJobText] = createSignal("");
  const navigate = useNavigate();

  const onNewAsset = () => {
    setJobText("");
    document.getElementById("job-source")?.focus();
  };

  const onVisualize = () => {
    const raw = jobText();
    if (!raw.trim()) return;
    setCurrentJob({ raw, parsed: parseJobPosting(raw) });
    navigate("/result");
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
