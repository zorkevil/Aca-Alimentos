// Fuentes auto-hospedadas con next/font — cada una expone una custom property
// (--font-*) que las hojas de estilo de marca (src/styles/styles-<marca>.scss)
// referencian a través de $font-family / $font-family-headings.
import { Anton, Fira_Sans, Heebo, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-heebo',
  display: 'swap',
});

export const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-fira-sans',
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
});

export const phenomena = localFont({
  variable: '--font-phenomena',
  display: 'swap',
  src: [
    { path: '../fonts/phenomena/Phenomena-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/phenomena/Phenomena-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/phenomena/Phenomena-ExtraBold.woff2', weight: '800', style: 'normal' },
  ],
});
