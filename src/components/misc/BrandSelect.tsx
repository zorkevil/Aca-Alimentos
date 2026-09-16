'use client';

import { useEffect, useRef } from 'react';
import TomSelect from 'tom-select';
import 'tom-select/dist/css/tom-select.bootstrap5.css';

type BrandSelectProps = {
  id: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
};

// Envuelve un <select> nativo con Tom Select para el look & feel de las maquetas
// (usado en el selector de "Tipo de cliente" de los formularios de contacto).
export default function BrandSelect({ id, name, required, options, placeholder }: BrandSelectProps) {
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (!selectRef.current) return;

    const instance = new TomSelect(selectRef.current, {
      allowEmptyOption: true,
      controlInput: null,
    });

    return () => instance.destroy();
  }, []);

  return (
    <select ref={selectRef} className="form-select" id={id} name={name} required={required} defaultValue="">
      <option value="" disabled>
        {placeholder ?? 'Seleccioná una opción'}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
