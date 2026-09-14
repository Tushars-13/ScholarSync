import { createContext, useState, useCallback } from "react";
import { initialProfileSettings } from "../data/settingsData";

// ─── Storage helpers ──────────────────────────────────────────────────────────
const STORAGE_KEY = "scholarsync_profile";

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...initialProfileSettings, ...JSON.parse(raw) };
  } catch {
    // ignore corrupted storage
  }
  return { ...initialProfileSettings };
}

function saveToStorage(profile) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // ignore quota errors
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export const StudentProfileContext = createContext(null);

export function StudentProfileProvider({ children }) {
  const [profile, setProfile] = useState(loadFromStorage);

  // Commit a new profile snapshot → updates context + localStorage
  const updateProfile = useCallback((newProfile) => {
    setProfile(newProfile);
    saveToStorage(newProfile);
  }, []);

  return (
    <StudentProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </StudentProfileContext.Provider>
  );
}
