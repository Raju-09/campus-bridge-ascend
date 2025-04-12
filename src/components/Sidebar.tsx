
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  BookOpen, 
  Code, 
  User, 
  Settings, 
  Users, 
  FileText,
  LogOut,
  Menu,
  BookMarked,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  userRole: 'student' | 'faculty' | 'admin';
  userName: string;
  userEmail: string;
  avatarUrl?: string;
  avatarText?: string;
}

const Sidebar = ({
  userRole,
  userName,
  userEmail,
  avatarUrl,
  avatarText = "US"
}: SidebarProps) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = React.useState(false);
  
  const navItems = React.useMemo(() => {
    // Base items for all roles
    const items = [
      {
        name: 'Dashboard',
        icon: <LayoutDashboard size={20} />,
        href: `/${userRole}/dashboard`,
        roles: ['student', 'faculty', 'admin']
      },
    ];

    // Role-specific items
    if (userRole === 'student') {
      items.push(
        {
          name: 'Courses',
          icon: <BookOpen size={20} />,
          href: '/student/courses',
          roles: ['student']
        },
        {
          name: 'Coding Practice',
          icon: <Code size={20} />,
          href: '/student/coding',
          roles: ['student']
        },
        {
          name: 'Profile',
          icon: <User size={20} />,
          href: '/student/profile',
          roles: ['student']
        }
      );
    } else if (userRole === 'faculty') {
      items.push(
        {
          name: 'Courses',
          icon: <BookOpen size={20} />,
          href: '/faculty/courses',
          roles: ['faculty']
        },
        {
          name: 'Assignments',
          icon: <FileText size={20} />,
          href: '/faculty/assignments',
          roles: ['faculty']
        },
        {
          name: 'Students',
          icon: <Users size={20} />,
          href: '/faculty/students',
          roles: ['faculty']
        }
      );
    } else if (userRole === 'admin') {
      items.push(
        {
          name: 'Overview',
          icon: <LayoutDashboard size={20} />,
          href: '/admin/overview',
          roles: ['admin']
        },
        {
          name: 'Users',
          icon: <Users size={20} />,
          href: '/admin/users',
          roles: ['admin']
        },
        {
          name: 'Courses',
          icon: <BookMarked size={20} />,
          href: '/admin/courses',
          roles: ['admin']
        },
        {
          name: 'Settings',
          icon: <Settings size={20} />,
          href: '/admin/settings',
          roles: ['admin']
        }
      );
    }

    return items.filter(item => item.roles.includes(userRole));
  }, [userRole]);

  return (
    <div 
      className={cn(
        "h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 z-30",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Sidebar Header with Logo */}
      <div className="p-4 border-b border-gray-200 flex items-center">
        <div className="flex items-center">
          <div className="text-campus-blue mr-2">
            <BookMarked size={24} />
          </div>
          {!collapsed && (
            <h2 className="text-xl font-bold">Campus Bridge</h2>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu size={18} />
        </Button>
      </div>

      {/* User Profile */}
      <div className={cn(
        "p-4 flex items-center space-x-3 border-b border-gray-200",
        collapsed ? "justify-center" : ""
      )}>
        <div className="flex-shrink-0 w-10 h-10 bg-campus-blue text-white rounded-full flex items-center justify-center">
          {avatarUrl ? (
            <img src={avatarUrl} alt={userName} className="w-full h-full rounded-full" />
          ) : (
            <span className="text-sm font-medium">{avatarText}</span>
          )}
        </div>
        {!collapsed && (
          <div className="flex flex-col overflow-hidden">
            <span className="font-medium text-sm truncate">{userName}</span>
            <span className="text-xs text-gray-500 truncate">{userEmail}</span>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.href || location.pathname.startsWith(`${item.href}/`)
                    ? "bg-campus-blue text-white"
                    : "text-gray-700 hover:bg-blue-50 hover:text-campus-blue",
                  collapsed ? "justify-center" : ""
                )}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <Link
          to="/logout"
          className={cn(
            "flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors",
            collapsed ? "justify-center" : ""
          )}
        >
          <LogOut size={20} />
          {!collapsed && <span className="ml-3">Logout</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
