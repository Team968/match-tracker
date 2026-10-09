// Get a free read key at https://www.thebluealliance.com/account (Read API Keys).
// You can paste it here, or leave it blank and the site will ask for it once
// and remember it in your browser.
window.CONFIG = {
  TBA_KEY: "",
  TEAM: "frc968",
  // Leave blank to auto-detect the event Team 968 is currently at.
  // Or force one, e.g. "2026cmptx".
  EVENT_KEY: "",
  REFRESH_SECONDS: 60,

  // ---- Scouting spreadsheet (Google Sheets) ----
  // The sheet must be viewable without logging in: Share > General access >
  // "Anyone with the link" > Viewer. (Or File > Share > Publish to web > CSV,
  // then paste that link into SHEET_CSV_URL below.)
  SHEET_ID: "17i8pnEyryYqnUeaShfSyqQm_-FdbLjVRPqejPeBdzko",
  SHEET_GID: "1564087365",
  SHEET_CSV_URL: "",
  // Optional: header text (case-insensitive, substring) of the team-number
  // column and the match-number column. Blank = auto-detect.
  SHEET_TEAM_COL: "",
  SHEET_MATCH_COL: "",
};
