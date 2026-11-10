'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getCourseFilter } from '@/lib/course-filter';

export function CourseFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const type = getCourseFilter(searchParams.get('type'));

  function updateFilter(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') params.delete('type');
    else params.set('type', value);
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <label className="course-filter">
      Тип курса{' '}
      <select value={type} onChange={(event) => updateFilter(event.target.value)}>
        <option value="all">Все</option>
        <option value="lecture">Лекции</option>
        <option value="practice">Практика</option>
      </select>
    </label>
  );
}
