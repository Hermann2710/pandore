interface DeliveryCardProps {
  orderId: string
  address: string
  status: "available" | "active" | "completed"
}

export const DeliveryCard = ({
  orderId,
  address,
  status,
}: DeliveryCardProps) => {
  return (
    <article>
      <h3>Commande {orderId}</h3>
      <p>📍 {address}</p>
      {status === "available" && <button>Accepter la livraison</button>}
      {status === "active" && <button>Marquer comme livrée</button>}
    </article>
  )
}
