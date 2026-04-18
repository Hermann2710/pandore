export const DataTable = ({ title, headers, children }: any) => {
  return (
    <section className="data-table-container">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            {headers.map((h: string) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </section>
  )
}
