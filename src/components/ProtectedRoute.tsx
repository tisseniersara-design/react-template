import { Navigate } from "react-router-dom"
import { isAuthenticated } from "@/lib/auth"

// ─── ProtectedRoute ───────────────────────────────────────────────────────────
// Si l'utilisateur n'est pas connecté → redirige vers /login
// Si connecté → affiche la page normalement
type Props = {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: Props) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}