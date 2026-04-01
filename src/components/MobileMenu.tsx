import { useState } from "react"
import logoIcon from "@/assets/logo-icon.svg"
import logoName from "@/assets/logo-name.svg"
import {
  IconDashboard,
  IconHabitat,
  IconEquipements,
  IconReleves,
  IconCompte,
  IconDocuments,
  IconEcogestes,
} from "@/assets/icons"

// ─── Items du menu ───────────────────────────────────────────────────────────
const menuItems = [
  { icon: IconDashboard, label: "Mon Tableau de bord" },
  { icon: IconHabitat, label: "Mon Habitat" },
  { icon: IconEquipements, label: "Mes équipements" },
  { icon: IconReleves, label: "Mes relevés" },
  { icon: IconCompte, label: "Mon Compte" },
  { icon: IconDocuments, label: "Mes documents" },
  { icon: IconEcogestes, label: "Eco gestes" },
]

export function MobileMenu() {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)

  // ─── Fermeture avec animation ───────────────────────────────────────────────
  function handleClose() {
    setClosing(true)
    setTimeout(() => {
      setOpen(false)
      setClosing(false)
    }, 300)
  }

  // ─── Sélection d'un item + fermeture ────────────────────────────────────────
  function handleSelect(index: number) {
    setActive(index)
    handleClose()
  }

  return (
    <>
      {/* ── Bouton burger (toujours visible) ─────────────────────────────────── */}
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

      {/* ── Menu plein écran (visible pendant ouverture ET fermeture) ─────────── */}
      {(open || closing) && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "var(--color-card)",
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            padding: 32,
            gap: 48,
            animation: closing ? "slideOut 0.6s ease" : "slideIn 0.6s ease",
          }}
        >
          {/* ── Header : logo + bouton close ───────────────────────────────────── */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img src={logoIcon} style={{ width: 32, height: 32 }} alt="Econaute" />
              <img src={logoName} style={{ height: 19 }} alt="econaute" />
            </div>
            <button
              onClick={handleClose}
              style={{
                width: 44,
                height: 44,
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

          {/* ── Liste des items ─────────────────────────────────────────────────── */}
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {menuItems.map((item, index) => {
              const isActive = active === index
              return (
                <div
                  key={index}
                  onClick={() => handleSelect(index)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "12px 0",
                    cursor: "pointer",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  {/* Pastille icône */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: isActive ? "var(--color-primary)" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon width={24} height={24} style={{ color: "var(--color-foreground)" }} />
                  </div>

                  {/* Label */}
                  <span
                    style={{
                      fontSize: 18,
                      fontFamily: "Inter, sans-serif",
                      color: "var(--color-foreground)",
                      fontWeight: isActive ? 600 : 400,
                      opacity: isActive ? 1 : 0.7,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              )
            })}
          </nav>
        </div>
      )}
    </>
  )
}