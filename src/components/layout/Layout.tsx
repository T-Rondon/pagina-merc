import React, { useState } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setMobileMenuOpen(true)} />
      
      {/* Navegación desktop */}
      <div className="hidden md:block border-b bg-muted/50">
        <div className="container py-2">
          <Navigation />
        </div>
      </div>

      {/* Navegación móvil */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-80">
          <div className="mt-6">
            <div className="mb-6 text-center">
              <div className="h-12 w-12 mx-auto rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-2">
                SM
              </div>
              <h2 className="font-bold text-lg text-primary">
                SuperMercado El Vecino
              </h2>
            </div>
            <Navigation 
              orientation="vertical" 
              onItemClick={() => setMobileMenuOpen(false)}
            />
          </div>
        </SheetContent>
      </Sheet>

      {/* Contenido principal */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-auto">
        <div className="container py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="h-6 w-6 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  SM
                </div>
                <span className="font-bold text-primary">SuperMercado El Vecino</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Tu supermercado de confianza con los mejores productos frescos y precios justos.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Contacto</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>📍 Av. Principal #123, Tu Ciudad</p>
                <p>📞 (123) 456-7890</p>
                <p>📧 contacto@supermercadoelvecino.com</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Horarios</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Lunes a Sábado: 7:00 AM - 9:00 PM</p>
                <p>Domingos: 8:00 AM - 6:00 PM</p>
                <p>Entregas a domicilio hasta las 8:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-6 pt-6 text-center text-sm text-muted-foreground">
            © 2024 SuperMercado El Vecino. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};