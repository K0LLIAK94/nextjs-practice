"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";
import Link from "next/link";

type ErrorProps = { error: Error & { digest?: string }; reset: () => void };

export default function ArticlesError({ reset }: ErrorProps) {
  const router = useRouter();
  function retry() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <section className="state-page" role="alert">
      <p className="eyebrow">Сервис временно недоступен</p>
      <h1>Не удалось<br />загрузить статьи.</h1>
      <p className="lead">Проверьте подключение к интернету и повторите попытку. Если сервис статей не отвечает, попробуйте чуть позже.</p>
      <div className="state-actions"><button className="button" type="button" onClick={retry}>Попробовать снова <span aria-hidden="true">↻</span></button><Link className="text-link" href="/">На главную</Link></div>
    </section>
  );
}
