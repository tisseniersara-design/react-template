import { useState, useEffect } from "react"
import { Routes, Route} from "react-router-dom"
import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { MobileMenu } from "@/components/MobileMenu"
import { Dashboard } from "@/pages/Dashboard"
import { Habitat } from "@/pages/Habitat"
import { Login } from "@/pages/Login"
import { Compte } from "@/pages/Compte"
import { ProtectedRoute } from "@/components/ProtectedRoute"

// ─── Layout principal (avec sidebar + header) ─────────────────────────────────
function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

      {/* Menu burger mobile */}
      {isMobile && <MobileMenu />}

      <div style={{
        display: "flex",
        flex: 1,
        padding: isMobile ? 8 : 24,
        gap: 24,
      }}>

        {/* Sidebar desktop uniquement */}
        {!isMobile && (
          <Sidebar
            collapsed={collapsed}
            onToggle={() => setCollapsed(!collapsed)}
          />
        )}

        {/* Colonne droite : header + page */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 24 }}>

          <div style={{
            position: isMobile ? "fixed" : "relative",
            top: 0, left: 0, right: 0,
            zIndex: 50,
            padding: isMobile ? "8px 8px" : 0,
            backgroundColor: isMobile ? "var(--color-background)" : "transparent",
          }}>
            <Header
              userName="Thierry VAYSSIERE"
            />
          </div>

          {/* Les pages s'affichent ici selon l'URL */}
          <main style={{
            flex: 1,
            paddingLeft: isMobile ? 8 : 100,
            paddingRight: isMobile ? 8 : 100,
            paddingTop: isMobile ? 80 : 0,
          }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/habitat" element={<Habitat />} />
              <Route path="/compte" element={<Compte />} />
            </Routes>
          </main>

        </div>
      </div>
    </div>
  )
}

// ─── App — définit toutes les routes ─────────────────────────────────────────
function App() {
  return (
    <Routes>
      {/* Page login — sans sidebar */}
      <Route path="/login" element={<Login />} />

      {/* Toutes les pages avec sidebar */}
      <Route path="/*" element={
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    } />
  </Routes>
  )
}

export default App