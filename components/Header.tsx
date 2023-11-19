'use client';

import clsx from 'clsx';
import { Container } from '@/components/Container';
import { NavLink } from '@/components/Nav/NavLink';
import { SignedIn, SignedOut, UserButton, useAuth } from '@clerk/nextjs';
import { MobileNavigation } from '@/components/Nav/MobileNavigation';

export function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  );
}

export function Header() {
  const { userId } = useAuth();

  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <NavLink href="/">
              <span className="text-2xl">🥒</span>
            </NavLink>
            <div className="hidden md:flex md:gap-x-6">
              <SignedIn>
                <NavLink href={`/user/${userId}/events`}>Mis eventos</NavLink>
              </SignedIn>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <SignedOut>
                <NavLink href="/sign-in">Sign in</NavLink>
                <NavLink href="/sign-up">Sign up</NavLink>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
