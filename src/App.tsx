
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import FacultyDashboard from "./pages/dashboard/FacultyDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          
          {/* Student Routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/courses" element={<StudentDashboard />} />
          <Route path="/student/coding" element={<StudentDashboard />} />
          <Route path="/student/profile" element={<StudentDashboard />} />
          
          {/* Faculty Routes */}
          <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
          <Route path="/faculty/courses" element={<FacultyDashboard />} />
          <Route path="/faculty/assignments" element={<FacultyDashboard />} />
          <Route path="/faculty/students" element={<FacultyDashboard />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/overview" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminDashboard />} />
          <Route path="/admin/courses" element={<AdminDashboard />} />
          <Route path="/admin/settings" element={<AdminDashboard />} />
          
          {/* Logout Route */}
          <Route path="/logout" element={<Navigate to="/" />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
