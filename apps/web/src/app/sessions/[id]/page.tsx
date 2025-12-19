export default async function SessionDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="stack">
      <h1>Деталі заняття</h1>
      <p className="muted">ID: {id}</p>

      <div className="card">
        <div className="cardTitle">Тут будуть деталі заняття</div>
        <p className="muted">
          На ЛР3 зробимо повну взаємодію: додати в улюблені, забронювати, показати місця тощо.
        </p>

        <div className="row">
          <button className="btn" type="button">
            Додати в улюблені
          </button>
          <button className="btnPrimary" type="button">
            Забронювати
          </button>
        </div>
      </div>
    </div>
  );
}
