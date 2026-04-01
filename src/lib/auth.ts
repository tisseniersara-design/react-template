// ─── Simulation auth — sera remplacé par Supabase ─────────────────────────
// Pour tester : change false en true pour simuler une session active
export function isAuthenticated(): boolean {
    return localStorage.getItem("session") === "true"
  }
  
  export function login() {
    localStorage.setItem("session", "true")
  }
  
  export function logout() {
    localStorage.removeItem("session")
  }