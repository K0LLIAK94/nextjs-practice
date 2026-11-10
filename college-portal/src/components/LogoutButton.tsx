'use client';

import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();

  function logout() {
    document.cookie = 'student_pin=; Path=/; Max-Age=0; SameSite=Lax';
    router.replace('/login');
    router.refresh();
  }

  return <button type="button" onClick={logout}>Выйти</button>;
}
