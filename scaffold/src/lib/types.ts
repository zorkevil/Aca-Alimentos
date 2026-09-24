// =============================================================================
// INTERFACES DE DATOS
// =============================================================================

// Ejemplo — reemplazar por las entidades reales del backend.
export interface ExampleItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string; // formato ISO: "2025-10-31"
}

// =============================================================================
// INTERFACES DE SECCIONES (props de componentes)
// =============================================================================

export interface HeroSectionProps {
  title: string;
  backgroundImage?: string;
  showBreadcrumb?: boolean;
  breadcrumbs?: { label: string; href?: string }[];
}
