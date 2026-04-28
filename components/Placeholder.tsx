// Placeholder for Pulseboard landing components.
// Surface here is marketing-only. The actual app is Android (Kotlin) in
// ~/AndroidStudioProjects/pulseboard.
export function Placeholder({ label }: { label: string }) {
  return (
    <div className="p-6 rounded-lg border border-border bg-card text-card-foreground">
      <p className="text-xs uppercase tracking-[0.1em] text-primary">{label}</p>
    </div>
  );
}
