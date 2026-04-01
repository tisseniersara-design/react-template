import { useNavigate } from "react-router-dom"

// ─── Props ────────────────────────────────────────────────────────────────────
type Props = {
  userName: string
  userPhoto?: string | null
}

export function Header({ userName, userPhoto }: Props) {
  const navigate = useNavigate()

  // ─── Initiales pour l'avatar par défaut ───────────────────────────────────
  const initiales = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      height: 64,
      width: "100%",
    }}>

      {/* ── Profil cliquable ─────────────────────────────────────────────── */}
      <div
        onClick={() => navigate("/compte")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          cursor: "pointer",
          padding: "6px 12px",
          borderRadius: 12,
          transition: "background-color 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-muted)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        {/* Avatar */}
        <div style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          backgroundColor: "var(--color-muted)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          flexShrink: 0,
        }}>
          {userPhoto
            ? <img src={userPhoto} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Photo" />
            : <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>{initiales}</span>
          }
        </div>

        {/* Nom */}
        <span className="hidden lg:block" style={{ fontSize: 14, fontWeight: 600, color: "var(--color-foreground)" }}>
          {userName}
        </span>

      </div>
    </header>
  )
}