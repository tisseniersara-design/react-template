import logoIcon from "@/assets/logo-icon.svg"
import logoName from "@/assets/logo-name.svg"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
  IconDashboard,
  IconHabitat,
  IconEquipements,
  IconReleves,
  IconCompte,
  IconDocuments,
  IconEcogestes,
} from "@/assets/icons"

// ─── Items du menu avec leur URL ──────────────────────────────────────────────
const menuItems = [
  { icon: IconDashboard, label: "Mon Tableau de bord", path: "/" },
  { icon: IconHabitat,   label: "Mon Habitat",         path: "/habitat" },
  { icon: IconEquipements, label: "Mes équipements",   path: "/equipements" },
  { icon: IconReleves,   label: "Mes relevés",         path: "/releves" },
  { icon: IconCompte,    label: "Mon Compte",          path: "/compte" },
  { icon: IconDocuments, label: "Mes documents",       path: "/documents" },
  { icon: IconEcogestes, label: "Eco gestes",          path: "/ecogestes" },
]

type Props = {
  collapsed: boolean
  onToggle: () => void
}

export function Sidebar({ collapsed, onToggle }: Props) {
  const [hovered, setHovered] = useState<number | null>(null)

  // useLocation donne l'URL actuelle ex: { pathname: "/habitat" }
  const location = useLocation()

  // useNavigate permet de changer de page
  const navigate = useNavigate()

  return (
    <aside style={{
      width: collapsed ? 99 : 284,
      alignSelf: "stretch",
      backgroundColor: "var(--color-card)",
      borderRadius: 24,
      padding: "32px 27px",
      display: "flex",
      flexDirection: "column",
      gap: 64,
      boxShadow: "0px 0px 30px rgba(197,161,251,0.5)",
      transition: "width 0.4s ease",
      flexShrink: 0,
    }}>

      {/* ── Logo ─────────────────────────────────────────────────────────────── */}
      <div onClick={onToggle} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
        <img src={logoIcon} style={{ width: 32, height: 32 }} alt="Econaute" />
        <img src={logoName} style={{
          height: 19,
          opacity: collapsed ? 0 : 1,
          width: collapsed ? 0 : "auto",
          transition: "opacity 0.2s ease, width 0.2s ease",
          overflow: "hidden",
        }} alt="econaute" />
      </div>

      {/* ── Navigation ───────────────────────────────────────────────────────── */}
      <nav style={{ display: "flex", flexDirection: "column" }}>
        {menuItems.map((item, index) => {
          // L'item est actif si son path correspond à l'URL actuelle
          const isActive = location.pathname === item.path
          const isHovered = hovered === index

          const iconBg = isActive
            ? "var(--color-primary)"
            : isHovered
            ? "var(--color-accent)"
            : "transparent"

          return (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 0",
                cursor: "pointer",
                height: 60,
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                backgroundColor: iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background-color 0.2s ease",
              }}>
                <item.icon width={24} height={24} style={{ color: "var(--color-foreground)" }} />
              </div>
              <span style={{
                fontSize: 14,
                color: "var(--color-foreground)",
                opacity: collapsed ? 0 : isActive || isHovered ? 1 : 0.5,
                fontWeight: isActive ? 600 : 400,
                transition: "opacity 0.4s ease",
                whiteSpace: "nowrap",
              }}>
                {item.label}
              </span>
            </div>
          )
        })}
      </nav>

    </aside>
  )
}