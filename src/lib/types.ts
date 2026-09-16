// =============================================================================
// MARCAS
// =============================================================================

export const BRANDS = ['cooperacion', 'valor', 'petlink'] as const;
export type BrandSlug = (typeof BRANDS)[number];

export function isBrandSlug(value: string): value is BrandSlug {
  return (BRANDS as readonly string[]).includes(value);
}

// =============================================================================
// INTERFACES DE DATOS — API
// =============================================================================

export interface Section {
  id: string;
  slug: string;
  name: string;
  icon: string;
  contactEmail: string | null;
  contactPhone: string | null;
  contactAddress: string | null;
  instagram: string | null;
  facebook: string | null;
}

export interface Slider {
  id: number;
  title: string;
  subtitle: string | null;
  image: string | null;
  imageAlt: string | null;
  buttonText: string | null;
  buttonLink: string | null;
  orderNumber: number;
}

export type Species = 'perro' | 'gato';
export type LifeStage = 'cachorro' | 'adulto' | 'senior';

export interface Nutrient {
  name: string;
  value: string;
}

export interface ConsumptionRow {
  weight: string;
  amount: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string | null;
  sku: string;
  species: Species;
  lifeStage: LifeStage;
  shortDescription: string | null;
  description: string | null;
  ingredients: string | null;
  usageInstructions: string | null;
  image: string | null;
  technicalSheet: string | null;
  presentations: string[];
  nutrients: Nutrient[];
  consumptionTable: ConsumptionRow[];
  images: string[];
  section: { slug: BrandSlug; name: string };
}

export interface Tag {
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  readingTime: string | null;
  excerpt: string | null;
  image: string | null;
  imageAlt: string | null;
  publishedAt: string; // ISO 8601
  section: BrandSlug;
  tags: Tag[];
}

export type BlogBlock =
  | { type: 'title'; data: { level: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; text: string } }
  | { type: 'paragraph'; data: { text: string } }
  | { type: 'quote'; data: { text: string } }
  | { type: 'image'; data: { image: string | null; alt: string | null } }
  | { type: 'product'; data: Product };

export interface BlogPostDetail extends BlogPost {
  blocks: BlogBlock[];
}

// =============================================================================
// ENVOLTORIOS DE RESPUESTA
// =============================================================================

export interface PaginationLinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface PaginationMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

// =============================================================================
// LEADS
// =============================================================================

export interface LeadPayload {
  section: BrandSlug;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  client_type?: string;
  message?: string;
}

// =============================================================================
// INTERFACES DE SECCIONES (props de componentes)
// =============================================================================

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface HeroSectionProps {
  title: string;
  backgroundImage?: string;
  showBreadcrumb?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}
