import { useEffect, useState } from 'react';

const readRoute = () => window.location.hash.replace(/^#/, '') || 'home';

/** Current route from the URL hash (#forms, #web, #home...). */
export function useHashRoute() {
  const [route, setRoute] = useState(readRoute);
  useEffect(() => {
    const onChange = () => setRoute(readRoute());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}
