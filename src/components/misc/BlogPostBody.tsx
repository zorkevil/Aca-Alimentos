import Image from 'next/image';
import type { BlogBlock } from '@/lib/types';
import { SITE_THEME, type SiteSlug } from '@/lib/siteTheme';
import ProductCard from './ProductCard';

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function BlogPostBody({
  blocks,
  site,
  productsBasePath,
}: {
  blocks: BlogBlock[];
  site: SiteSlug;
  productsBasePath: string;
}) {
  const theme = SITE_THEME[site];
  // El índice ("Acá vas a leer sobre") solo lista los títulos de nivel h2 —
  // h3+ son subtítulos dentro de una sección, no entradas del índice.
  const titleBlocks = blocks.filter(
    (b): b is Extract<BlogBlock, { type: 'title' }> => b.type === 'title' && b.data.level === 'h2',
  );

  return (
    <div className="article-content">
      {titleBlocks.length > 1 && (
        <div
          className={`${theme.blogTocBg} ${theme.blogTocText} p-4 ${theme.blogTocRadius} article-section wow animate__animated animate__fadeInUp`}
        >
          <h5 className={`${theme.blogTocText} fs-16 mb-3`}>Acá vas a leer sobre:</h5>
          <ol className="list-unstyled mb-0 d-flex flex-column gap-2">
            {titleBlocks.map((block, i) => (
              <li key={slugify(block.data.text)}>
                <span className={`${theme.blogTocNumberColor} fw-bold`}>{i + 1}.</span>{' '}
                <a href={`#${slugify(block.data.text)}`} className={`${theme.blogTocText} text-decoration-underline`}>
                  {block.data.text}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}

      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`;

        if (block.type === 'title') {
          const Heading = block.data.level;
          // Los h2 llevan el mismo número de secuencia que su entrada en el
          // índice ("1. Alimentación en el crecimiento") — h3+ no se numeran,
          // y tampoco se numera si hay un solo h2 (no hay índice para eso).
          const h2Index =
            block.data.level === 'h2' && titleBlocks.length > 1 ? titleBlocks.indexOf(block) : -1;
          return (
            <Heading
              id={slugify(block.data.text)}
              className={`${theme.linkColor} fs-16 fw-bold wow animate__animated animate__fadeInUp ${theme.blogHeadingExtraClass ?? ''}`.trim()}
              key={key}
            >
              {h2Index >= 0 && `${h2Index + 1}. `}
              {block.data.text}
            </Heading>
          );
        }

        if (block.type === 'paragraph') {
          return (
            <p className="wow animate__animated animate__fadeInUp" key={key}>
              {block.data.text}
            </p>
          );
        }

        if (block.type === 'quote') {
          return (
            <div
              className={`${theme.blogQuoteBg} ${theme.blogQuoteText} p-4 ${theme.blogQuoteRadius} mb-4 wow animate__animated animate__fadeInUp`}
              key={key}
            >
              <p className={`fs-14 fw-bold mb-0 ${theme.blogHeadingExtraClass ?? ''}`.trim()}>
                &ldquo;{block.data.text}&rdquo;
              </p>
            </div>
          );
        }

        if (block.type === 'product') {
          return (
            <div className="row justify-content-center mb-4 wow animate__animated animate__fadeInUp" key={key}>
              <div className="col-md-6 col-lg-5">
                <ProductCard
                  product={block.data}
                  href={`${productsBasePath}/${block.data.slug}`}
                  site={site}
                />
              </div>
            </div>
          );
        }

        if (block.type === 'image' && block.data.image) {
          return (
            <Image
              src={block.data.image}
              alt={block.data.alt ?? ''}
              width={1200}
              height={675}
              className="img-fluid border-radius-20 w-100 wow animate__animated animate__fadeIn"
              key={key}
            />
          );
        }

        return null;
      })}
    </div>
  );
}
