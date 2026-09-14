import { useContext } from "react";
import { StudentProfileContext } from "./StudentProfileContext";

export function useStudentProfile() {
  const ctx = useContext(StudentProfileContext);
  if (!ctx) {
    throw new Error("useStudentProfile must be used inside StudentProfileProvider");
  }
  return ctx;
}
