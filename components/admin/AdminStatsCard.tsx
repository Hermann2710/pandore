export const AdminStatsCard = ({ label, value, trend }: any) => {
  return (
    <div className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{trend}</small>
    </div>
  )
}
