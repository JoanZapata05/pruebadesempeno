"use client";
import { signOut, useSession } from 'next-auth/react';
import { NavbarContainer, NavLink, SignoutButton, Container } from './NavbarStyle';
import { useTranslations } from 'next-intl';
import LanguageSelector from '@/components/UI/SelectLanguage/SelectLanguage';

const NavigationBar = () => {
  const { data: session } = useSession();
  const translate = useTranslations('Navbar');

  return (
    <NavbarContainer>
      <Container>
        <NavLink href="/" className="logo">{translate('home')}</NavLink>
        
        <div className="nav-links">
          {session?.user ? (
            <>
              <NavLink href="/dashboard">{translate('dashboard')}</NavLink>
              <SignoutButton onClick={() => signOut()}>{translate('logout')}</SignoutButton>
            </>
          ) : (
            <>
              <NavLink href="/login">{translate('login')}</NavLink>
              <NavLink href="/register">{translate('register')}</NavLink>
              <LanguageSelector />
            </>
          )}
        </div>
      </Container>
    </NavbarContainer>
  );
};

export default NavigationBar;
