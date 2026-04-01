import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import logoIcon from "@/assets/logo-icon.svg"
import logoName from "@/assets/logo-name.svg"
import {
  IconDashboard,
  IconHabitat,
  IconEquipements,
  IconReleves,
  IconDocuments,
  IconEcogestes,
} from "@/assets/icons"
import { logout } from "@/lib/auth"

// ─── Items du menu — sans Mon Compte ─────────────────────────────────────────
const menuItems = [
  { icon: IconDashboard,   label: "Mon Tableau de bord", path: "/" },
  { icon: IconHabitat,     label: "Mon Habitat",         path: "/habitat" },
  { icon: IconEquipements, label: "Mes équipements",     path: "/equipements" },
  { icon: IconReleves,     label: "Mes relevés",         path: "/releves" },
  { icon: IconDocuments,   label: "Mes documents",       path: "/documents" },
  { icon: IconEcogestes,   label: "Eco gestes",          path: "/ecogestes" },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // ─── Fermeture avec animation ─────────────────────────────────────────────
  function handleClose() {
    setClosing(true)
    setTimeout(() => {
      setOpen(false)
      setClosing(false)
    }, 300)
  }

  // ─── Navigation + fermeture ───────────────────────────────────────────────
  function handleNavigate(path: string) {
    navigate(path)
    handleClose()
  }

  return (
    <>
      {/* ── Bouton burger ────────────────────────────────────────────────────── */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 100,
          width: 44,
          height: 44,
          borderRadius: 12,
          border: "none",
          backgroundColor: "var(--color-card)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <span style={{ width: 20, height: 2, backgroundColor: "var(--color-foreground)", borderRadius: 2 }} />
        <span style={{ width: 20, height: 2, backgroundColor: "var(--color-foreground)", borderRadius: 2 }} />
        <span style={{ width: 20, height: 2, backgroundColor: "var(--color-foreground)", borderRadius: 2 }} />
      </button>

      {/* ── Menu plein écran ─────────────────────────────────────────────────── */}
      {(open || closing) && (
        <div style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "var(--color-card)",
          zIndex: 200,
          display: "flex",
          flexDirection: "column",
          padding: 32,
          gap: 48,
          animation: closing ? "slideOut 0.6s ease" : "slideIn 0.6s ease",
        }}>

          {/* ── Header : logo + bouton close ───────────────────────────────── */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img src={logoIcon} style={{ width: 32, height: 32 }} alt="Logo" />
              <img src={logoName} style={{ height: 19 }} alt="Logo name" />
            </div>
            <button
              onClick={handleClose}
              style={{
                width: 44, height: 44,
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                fontSize: 20,
                color: "var(--color-foreground)",
              }}
            >
              ✕
            </button>
          </div>

          {/* ── Liste des items ─────────────────────────────────────────────── */}
          <nav style={{ display: "flex", flexDirection: "column", flex: 1 }}>

            {/* Items */}
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <div
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "12px 0",
                      cursor: "pointer",
                      borderBottom: "1px solid var(--color-border)",
                    }}
                  >
                    <div style={{
                      width: 44, height: 44,
                      borderRadius: 12,
                      backgroundColor: isActive ? "var(--color-primary)" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <item.icon width={24} height={24} style={{ color: "var(--color-foreground)" }} />
                    </div>
                    <span style={{
                      fontSize: 18,
                      color: "var(--color-foreground)",
                      fontWeight: isActive ? 600 : 400,
                      opacity: isActive ? 1 : 0.7,
                    }}>
                      {item.label}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* ── Logout — collé en bas ──────────────────────────────────────── */}
            <div
              onClick={() => {
                logout()
                navigate("/login")
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "12px 0",
                cursor: "pointer",
              }}
            >
              <div style={{
                width: 44, height: 44,
                borderRadius: 12,
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-foreground)" }}>
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </div>
              <span style={{
                fontSize: 18,
                color: "var(--color-foreground)",
                fontWeight: 400,
                opacity: 0.7,
              }}>
                Se déconnecter
              </span>
            </div>

          </nav>
        </div>
      )}
    </>
  )
}