```tsx
export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 bg-white/5 backdrop-blur-xl border-b border-white/10">
      <h1 className="text-purple-400 text-2xl font-bold tracking-[0.4em]">VAULTANCE</h1>

      <div className="flex gap-6">
        <a href="/about">About</a>
        <a href="/tokenomics">Tokenomics</a>
        <a href="/roadmap">Roadmap</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}
```
