export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-xs uppercase tracking-[0.1em] font-display text-primary">
          Vagary Labs · open source · pre-launch
        </p>
        <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight">
          Pulseboard
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Open-source Android network monitor. Watch every packet, every connection, every app — on your terms.
        </p>
        <p className="text-sm text-muted-foreground">Coming soon to Google Play.</p>
      </div>
    </main>
  );
}
