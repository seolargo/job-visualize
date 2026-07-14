import { createSignal } from "solid-js";
import type { ParsedJob } from "./parseJob";

export type CurrentJob = { raw: string; parsed: ParsedJob };

export const [currentJob, setCurrentJob] = createSignal<CurrentJob | null>(null);
