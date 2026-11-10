export type CourseFilter = 'all' | 'lecture' | 'practice';

export function getCourseFilter(value: string | string[] | null | undefined): CourseFilter {
  const type = Array.isArray(value) ? value[0] : value;
  return type === 'lecture' || type === 'practice' ? type : 'all';
}
