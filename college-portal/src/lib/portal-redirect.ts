const dashboard = '/portal/dashboard';

export function getPortalRedirect(value: string | undefined): string {
  if (!value || !value.startsWith('/') || value.includes('\\')) return dashboard;
  try {
    const url = new URL(value, 'http://portal.local');
    if (url.origin !== 'http://portal.local') return dashboard;
    if (url.pathname !== '/portal' && !url.pathname.startsWith('/portal/')) return dashboard;
    return url.pathname + url.search + url.hash;
  } catch {
    return dashboard;
  }
}
