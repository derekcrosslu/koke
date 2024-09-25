'use client';

import { useState } from 'react';
import { Star, Flame, Scroll, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ImageSlider from './ImageSlider';

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [locale, setLocale] = useState('es'); // Default to Spanish, you might want to get this from a context or prop

  const toggleLanguage = () => {
    const newLocale = locale === 'es' ? 'he' : 'es';
    setLocale(newLocale);
    // Note: This is a simplified approach. You might need to implement a more robust
    // solution for language switching, possibly involving route changes or context updates.
  };

  const menuItems = [
    { name: locale === 'es' ? 'Inicio' : 'בית', href: '/' },
    { name: locale === 'es' ? 'Sobre Mí' : 'עליי', href: '/about' },
    {
      name: locale === 'es' ? 'Detalles del Evento' : 'פרטי האירוע',
      href: '/event',
    },
    { name: locale === 'es' ? 'Galería' : 'גלריה', href: '/gallery' },
    { name: locale === 'es' ? 'RSVP' : 'אישור הגעה', href: '/rsvp' },
  ];

  return (
    <div className='min-h-screen bg-white text-[#000080]'>
      <header className='bg-[#000080] text-white p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='text-2xl font-bold font-hebrew'>
            Bar Mitzvah de Jorge Mandel
          </h1>
          <nav className='hidden md:flex space-x-4'>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='hover:text-[#D4AF37] transition-colors'
              >
                {item.name}
              </a>
            ))}
          </nav>
          <Sheet
            open={isMenuOpen}
            onOpenChange={setIsMenuOpen}
          >
            <SheetTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='md:hidden'
              >
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='bg-[#000080] text-white'
            >
              <nav className='flex flex-col space-y-4 mt-8'>
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className='hover:text-[#D4AF37] transition-colors text-lg'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className='container mx-auto my-8'>
        <ImageSlider />
      </div>
      <main className='container mx-auto p-4'>{children}</main>
      <footer className='bg-[#000080] text-white p-4 mt-8'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex space-x-4'>
            <Star className='h-6 w-6 text-[#D4AF37]' />
            <Flame className='h-6 w-6 text-[#D4AF37]' />
            <Scroll className='h-6 w-6 text-[#D4AF37]' />
          </div>
          <Button
            onClick={toggleLanguage}
            variant='outline'
            className='text-white border-white hover:bg-white text-[#fff] hover:text-[#000000] bg-[#000080]'
          >
            {locale === 'es' ? 'עברית' : 'Español'}
          </Button>
        </div>
      </footer>
    </div>
  );
}
