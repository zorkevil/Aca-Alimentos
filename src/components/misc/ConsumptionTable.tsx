import type { ConsumptionRow } from '@/lib/types';

export default function ConsumptionTable({ rows }: { rows: ConsumptionRow[] }) {
  if (rows.length === 0) return <p className="mb-0">No hay tabla de consumo cargada.</p>;

  return (
    <>
      <table className="table mb-3">
        <thead>
          <tr>
            <th scope="col">PESO</th>
            <th scope="col">CANTIDAD</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.weight}>
              <td>{row.weight}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mb-0">Estas cantidades son orientativas y pueden variar de acuerdo a cada animal.</p>
    </>
  );
}
