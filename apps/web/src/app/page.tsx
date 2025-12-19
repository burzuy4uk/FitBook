import { ClassSession } from "@fitbook/shared";

const MOCK_SESSIONS: ClassSession[] = [
  {
    id: "s1",
    title: "Yoga Flow",
    startsAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    durationMinutes: 60,
    trainerName: "Anna",
    capacity: 20,
    bookedCount: 7,
  },
  {
    id: "s2",
    title: "CrossFit Starter",
    startsAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    durationMinutes: 45,
    trainerName: "Oleh",
    capacity: 16,
    bookedCount: 12,
  },
];

export default function HomePage() {
  return (
    <div className="stack">
      <h1>Розклад занять</h1>
      <p className="muted">
        Це стартовий прототип для ЛР0–ЛР1. На ЛР3 замінимо мок-дані на інтерактивні сценарії.
      </p>

      <div className="grid">
        {MOCK_SESSIONS.map((s) => (
          <a key={s.id} className="card" href={`/sessions/${s.id}`}>
            <div className="cardTitle">{s.title}</div>
            <div className="muted">
              Тренер: {s.trainerName} • {s.durationMinutes} хв
            </div>
            <div className="muted">
              Місця: {s.bookedCount}/{s.capacity}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
