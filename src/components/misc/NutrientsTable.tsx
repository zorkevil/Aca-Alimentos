import type { Nutrient } from '@/lib/types';

export default function NutrientsTable({ nutrients }: { nutrients: Nutrient[] }) {
  if (nutrients.length === 0) return <p className="mb-0">No hay información nutricional cargada.</p>;

  return (
    <table className="table mb-0">
      <tbody>
        {nutrients.map((nutrient) => (
          <tr key={nutrient.name}>
            <th scope="row">{nutrient.name}</th>
            <td>{nutrient.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
