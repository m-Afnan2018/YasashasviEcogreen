import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LeadsList from "./pages/LeadsList";
import BlogsList from "./pages/BlogsList";
import BlogEditor from "./pages/BlogEditor";
import MediaLibrary from "./pages/MediaLibrary";
import Settings from "./pages/Settings";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="leads" element={<LeadsList />} />
          <Route path="blogs" element={<BlogsList />} />
          <Route path="blogs/new" element={<BlogEditor />} />
          <Route path="blogs/:id" element={<BlogEditor />} />
          <Route path="media" element={<MediaLibrary />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
