import { IconCompte } from "@/assets/icons"
import { Button } from "@/components/ui/button"

// ─── Props ────────────────────────────────────────────────────────────────────
type Props = {
  userName: string
  onLogout: () => void
}

export function Header({ userName, onLogout,}: Props) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "var(--color-background)",
        borderRadius: 16,
        height: 64,
        width: "100%",
      }}
    >
      {/* ── Gauche : icône + nom utilisateur (masqué sur mobile) ─────────────── */}
      <div className="hidden lg:flex" style={{ alignItems: "center", gap: 8 }}>
        <IconCompte width={20} height={20} style={{ color: "var(--color-foreground)" }} />
        <span style={{ fontWeight: 700, fontSize: 14, color: "var(--color-foreground)" }}>
          {userName}
        </span>
      </div>

      {/* ── Droite : bouton déconnexion (toujours visible) ───────────────────── */}
      <Button
        onClick={onLogout}
        style={{
          backgroundColor: "var(--color-primary)",
          color: "var(--color-foreground)",
          marginLeft: "auto",
        }}
      >
        Se déconnecter
      </Button>
    </header>
  )
}