export type Course = {
  id: string;
  title: string;
  type: 'lecture' | 'practice';
  description: string;
  teacher: string;
  duration: string;
};

export const courses: Course[] = [
  {
    id: '1',
    title: 'Основы веб-разработки',
    type: 'lecture',
    description: 'Устройство веба, HTTP, HTML, CSS и базовые принципы создания сайтов.',
    teacher: 'Анна Кузнецова',
    duration: '24 академических часа',
  },
  {
    id: '2',
    title: 'Практикум по React',
    type: 'practice',
    description: 'Компоненты, пропсы, состояние и сборка интерактивных интерфейсов.',
    teacher: 'Михаил Орлов',
    duration: '36 академических часов',
  },
  {
    id: '3',
    title: 'Архитектура Next.js',
    type: 'lecture',
    description: 'App Router, серверные компоненты, layouts и динамические маршруты.',
    teacher: 'Елена Соколова',
    duration: '30 академических часов',
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id);
}

export function getCourseTypeLabel(type: Course['type']): string {
  return type === 'lecture' ? 'Лекция' : 'Практика';
}
