import { Underline } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-foreground)",  padding: 24, textAlign: "center", marginTop: 16 }}>
      <p style={{ color: "var(--color-card)", fontSize: 12, margin: 0, opacity: 0.7 }}>
        ECONAUTE © 2013 - 2025 | Tous droits réservés.<br />
        Agence de Protection des Programmes - Interdeposit Certification IDDN.FR.001.250004.000.S.P.2014.000.10000<br />
        Institut National de la Propriété Industrielle INPI - n°507660
      </p>
        <div className="flex flex-wrap justify-center gap-4 mt-3">
          {["Mentions légales", "C.G.V", "Données personnelles", "Gestion des cookies", "Conception : Madaré"].map((item, i) => (
            <a key={i} href="#" style={{ color: "var(--color-card)", fontSize: 12, opacity: 0.7, textDecoration: "underline" }}>{item}</a>
          ))}
        </div>
    </footer>
  )
}