import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Trash2, UserPlus } from "lucide-react";
import { api, ApiError, type AdminUserSummary } from "../api/client";
import { useAuth } from "../context/AuthContext";
import styles from "./Settings.module.css";

export default function Settings() {
  const { user } = useAuth();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  const [admins, setAdmins] = useState<AdminUserSummary[]>([]);
  const [inviteEmail, setInviteEmail] = useState("");
  const [invitePassword, setInvitePassword] = useState("");
  const [inviteSaving, setInviteSaving] = useState(false);
  const [inviteError, setInviteError] = useState("");

  function loadAdmins() {
    api.get<{ users: AdminUserSummary[] }>("/admin/users").then((res) => setAdmins(res.users));
  }

  useEffect(() => {
    loadAdmins();
  }, []);

  async function handlePasswordChange(e: FormEvent) {
    e.preventDefault();
    setPasswordMessage(null);
    setPasswordSaving(true);
    try {
      await api.patch("/admin/auth/password", { currentPassword, newPassword });
      setPasswordMessage({ type: "success", text: "Password updated." });
      setCurrentPassword("");
      setNewPassword("");
    } catch (err) {
      const text = err instanceof ApiError ? err.message : "Could not update password.";
      setPasswordMessage({ type: "error", text });
    } finally {
      setPasswordSaving(false);
    }
  }

  async function handleInvite(e: FormEvent) {
    e.preventDefault();
    setInviteError("");
    setInviteSaving(true);
    try {
      await api.post("/admin/users", { email: inviteEmail, password: invitePassword });
      setInviteEmail("");
      setInvitePassword("");
      loadAdmins();
    } catch (err) {
      setInviteError(err instanceof ApiError ? err.message : "Could not add admin.");
    } finally {
      setInviteSaving(false);
    }
  }

  async function removeAdmin(id: string) {
    if (!confirm("Remove this admin's access?")) return;
    try {
      await api.delete(`/admin/users/${id}`);
      loadAdmins();
    } catch (err) {
      alert(err instanceof ApiError ? err.message : "Could not remove admin.");
    }
  }

  return (
    <div>
      <header className={styles.header}>
        <h1>Settings</h1>
        <p className={styles.subtitle}>Manage your account and admin access.</p>
      </header>

      <div className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.cardTitle}>Change password</p>
          <p className={styles.cardSubtitle}>Update the password for your own account.</p>

          {passwordMessage && (
            <div
              className={`${styles.message} ${
                passwordMessage.type === "error" ? styles.messageError : styles.messageSuccess
              }`}
            >
              {passwordMessage.type === "error" ? (
                <AlertCircle size={15} strokeWidth={2} />
              ) : (
                <CheckCircle2 size={15} strokeWidth={2} />
              )}
              {passwordMessage.text}
            </div>
          )}

          <form onSubmit={handlePasswordChange}>
            <div className={styles.field}>
              <label htmlFor="currentPassword">Current password</label>
              <input
                id="currentPassword"
                type="password"
                autoComplete="current-password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="newPassword">New password</label>
              <input
                id="newPassword"
                type="password"
                autoComplete="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>
            <button className={styles.submitBtn} type="submit" disabled={passwordSaving}>
              {passwordSaving ? "Saving…" : "Update password"}
            </button>
          </form>
        </div>

        <div className={styles.card}>
          <p className={styles.cardTitle}>Admin users</p>
          <p className={styles.cardSubtitle}>People who can sign in to this admin panel.</p>

          <ul className={styles.userList}>
            {admins.map((admin) => (
              <li className={styles.userRow} key={admin._id}>
                <span className={styles.userEmail}>
                  {admin.email}
                  {admin._id === user?._id && <span className={styles.youTag}>You</span>}
                </span>
                <button
                  className={styles.removeBtn}
                  disabled={admin._id === user?._id || admins.length <= 1}
                  onClick={() => removeAdmin(admin._id)}
                  aria-label={`Remove ${admin.email}`}
                  title={
                    admin._id === user?._id
                      ? "You can't remove your own account"
                      : admins.length <= 1
                        ? "Cannot remove the last admin"
                        : "Remove admin"
                  }
                >
                  <Trash2 size={14} strokeWidth={2} />
                </button>
              </li>
            ))}
          </ul>

          {inviteError && (
            <div className={`${styles.message} ${styles.messageError}`}>
              <AlertCircle size={15} strokeWidth={2} />
              {inviteError}
            </div>
          )}

          <form className={styles.inviteForm} onSubmit={handleInvite}>
            <input
              type="email"
              placeholder="new-admin@example.com"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Initial password"
              value={invitePassword}
              onChange={(e) => setInvitePassword(e.target.value)}
              minLength={8}
              required
            />
            <button type="submit" disabled={inviteSaving}>
              <UserPlus size={14} strokeWidth={2} />
              {inviteSaving ? "Adding…" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
