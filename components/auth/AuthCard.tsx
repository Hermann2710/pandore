export const AuthCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      id="auth-card"
      className="w-full rounded-[2rem] border border-border/50 bg-card/40 p-8 shadow-2xl shadow-primary/5 backdrop-blur-xl md:p-12"
    >
      <div className="flex flex-col gap-8">{children}</div>
    </section>
  )
}
