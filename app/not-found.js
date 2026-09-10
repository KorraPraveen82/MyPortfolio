import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="not-found">
      <div>
        <p className="eyebrow" style={{justifyContent:'center'}}><span /> PAGE NOT FOUND</p>
        <h1>404</h1>
        <p>This page doesn&apos;t exist. Let&apos;s get you back to the portfolio.</p>
        <Link className="btn btn-primary" href="/">Back home <span>↗</span></Link>
      </div>
    </main>
  )
}
