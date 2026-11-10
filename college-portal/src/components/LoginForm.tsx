'use client';

import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { getPortalRedirect } from '@/lib/portal-redirect';

export function LoginForm({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();

  function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const pin = String(new FormData(event.currentTarget).get('pin') ?? '').trim();
    if (!pin) return;
    document.cookie = `student_pin=${encodeURIComponent(pin)}; Path=/; Max-Age=3600; SameSite=Lax`;
    router.replace(getPortalRedirect(redirectTo));
    router.refresh();
  }

  return (
    <form className="login-form" onSubmit={login}>
      <p><label>Учебный PIN <input name="pin" required maxLength={32} pattern=".*\S.*" /></label></p>
      <button type="submit">Войти в кабинет</button>
    </form>
  );
}
