import { RecentItem } from "./types";

export const i18nKeys = {
  brandTitle: "jobVisualizer.brand.title",
  brandSubtitle: "jobVisualizer.brand.subtitle",
  navMyAds: "jobVisualizer.nav.myAds",
  navBrandAssets: "jobVisualizer.nav.brandAssets",
  navBilling: "jobVisualizer.nav.billing",
  navSettings: "jobVisualizer.nav.settings",
  ctaNewAsset: "jobVisualizer.cta.newAsset",
  breadcrumbDashboard: "jobVisualizer.breadcrumb.dashboard",
  breadcrumbWorkspace: "jobVisualizer.breadcrumb.workspace",
  headingTitle: "jobVisualizer.heading.title",
  headingSubtitle: "jobVisualizer.heading.subtitle",
  inputLabel: "jobVisualizer.input.label",
  inputPlaceholder: "jobVisualizer.input.placeholder",
  btnLinkTitle: "jobVisualizer.actions.link.title",
  btnVisualize: "jobVisualizer.actions.visualize",
  recentTitle: "jobVisualizer.recent.title",
  recentViewAll: "jobVisualizer.recent.viewAll",
} as const;

export const stringsEn: Record<string, string> = {
  [i18nKeys.brandTitle]: "Job Visualizer",
  [i18nKeys.brandSubtitle]: "HR Workspace",
  [i18nKeys.navMyAds]: "My Ads",
  [i18nKeys.navBrandAssets]: "Brand Assets",
  [i18nKeys.navBilling]: "Billing",
  [i18nKeys.navSettings]: "Settings",
  [i18nKeys.ctaNewAsset]: "New Asset",
  [i18nKeys.breadcrumbDashboard]: "Dashboard",
  [i18nKeys.breadcrumbWorkspace]: "Workspace",
  [i18nKeys.headingTitle]: "Transform Your Job Ads",
  [i18nKeys.headingSubtitle]:
    "Turn text-heavy descriptions into clear, high-performing visual assets in seconds.",
  [i18nKeys.inputLabel]: "Job Description Source",
  [i18nKeys.inputPlaceholder]: "Paste your job description",
  [i18nKeys.btnLinkTitle]: "Paste LinkedIn link",
  [i18nKeys.btnVisualize]: "Visualize & Analyze",
  [i18nKeys.recentTitle]: "Recent Visualizations",
  [i18nKeys.recentViewAll]: "View All",
};

export const recentItems: RecentItem[] = [
  {
    category: "Software Engineer",
    title: "Full Stack Developer - London",
    createdAt: "Created 2h ago",
    gradient: "blue",
    pattern: "cubes",
  },
  {
    category: "Marketing",
    title: "Senior Product Marketer",
    createdAt: "Created Yesterday",
    gradient: "green",
    pattern: "carbon",
  },
  {
    category: "Design",
    title: "UI/UX Designer - Remote",
    createdAt: "Created 3 days ago",
    gradient: "orange",
    pattern: "grid",
  },
];

export function t(key: string) {
  return stringsEn[key] ?? key;
}