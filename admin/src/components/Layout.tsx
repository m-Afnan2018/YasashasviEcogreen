import { NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard, Users, Newspaper, Images, Settings as SettingsIcon, LogOut, Leaf } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import styles from "./Layout.module.css";

const links = [
  { to: "/", label: "Dashboard", end: true, icon: LayoutDashboard },
  { to: "/leads", label: "Leads", icon: Users },
  { to: "/blogs", label: "Blogs", icon: Newspaper },
  { to: "/media", label: "Media", icon: Images },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
];

export default function Layout() {
  const { user, logout } = useAuth();
  const initial = user?.email?.[0]?.toUpperCase() ?? "?";

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>
            <Leaf size={18} strokeWidth={2.25} />
          </span>
          <span>Ecogreen</span>
        </div>

        <nav className={styles.nav}>
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                }
              >
                <Icon size={18} strokeWidth={2} />
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        <div className={styles.account}>
          <div className={styles.avatar}>{initial}</div>
          <div className={styles.accountEmail} title={user?.email}>
            {user?.email}
          </div>
        </div>
        <button className={styles.logout} onClick={() => logout()}>
          <LogOut size={16} strokeWidth={2} />
          Log out
        </button>
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
