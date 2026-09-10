import './globals.css'

export const metadata = {
  metadataBase: new URL('https://korrapraveen.vercel.app'),
  title: 'K. Praveen — CSIT Student & Developer',
  description: 'Portfolio of K. Praveen, a BTech CSIT student in Hyderabad focused on Java, C++, web development, DSA, and machine learning.',
  keywords: ['K. Praveen', 'Praveen Korra', 'CSIT', 'Java', 'C++', 'Machine Learning', 'Portfolio'],
  authors: [{ name: 'K. Praveen' }],
  openGraph: {
    title: 'K. Praveen — CSIT Student & Developer',
    description: 'Building my future, one project at a time.',
    url: 'https://korrapraveen.vercel.app',
    siteName: 'K. Praveen Portfolio',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
