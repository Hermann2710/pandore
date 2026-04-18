export const OrderHistoryCard = ({ id, date, total, status }: any) => {
  return (
    <div>
      <p>
        Commande **#{id}** - {date}
      </p>
      <span>Statut : {status}</span>
      <span>Total : {total}€</span>
      <button>Voir le détail</button>
    </div>
  )
}
