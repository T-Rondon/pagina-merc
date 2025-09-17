import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Home,
  Package,
  ShoppingCart,
  User,
  Phone,
  Info,
  FileText,
  HelpCircle
} from 'lucide-react';

const navigation = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Productos', href: '/products', icon: Package },
  { name: 'Carrito', href: '/cart', icon: ShoppingCart },
  { name: 'Mi Cuenta', href: '/profile', icon: User },
  { name: 'Contacto', href: '/contact', icon: Phone },
  { name: 'Sobre Nosotros', href: '/about', icon: Info },
  { name: 'Términos', href: '/terms', icon: FileText },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
];

interface NavigationProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  onItemClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  className, 
  orientation = 'horizontal',
  onItemClick 
}) => {
  const location = useLocation();

  return (
    <nav className={cn(
      "flex gap-1",
      orientation === 'vertical' ? "flex-col" : "flex-row flex-wrap",
      className
    )}>
      {navigation.map((item) => {
        const isActive = location.pathname === item.href;
        const Icon = item.icon;
        
        return (
          <Link
            key={item.name}
            to={item.href}
            onClick={onItemClick}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              "hover:bg-secondary hover:text-secondary-foreground",
              isActive 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground",
              orientation === 'vertical' ? "w-full justify-start" : "justify-center"
            )}
          >
            <Icon className="h-4 w-4" />
            <span className={cn(
              orientation === 'horizontal' && "hidden sm:inline"
            )}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};