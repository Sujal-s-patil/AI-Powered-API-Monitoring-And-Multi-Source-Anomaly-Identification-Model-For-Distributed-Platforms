export function SectionCards({ metrics }) {
  return (
    <div className="section-cards" style={{ display: 'flex', gap: '1rem' }}>
      {metrics.map((metric, idx) => (
        <div key={idx} className="card" style={{ flex: 1, padding: '1rem', background: '#f7fafc', borderRadius: '8px', boxShadow: '0 2px 8px #e2e8f0' }}>
          <h3 style={{ marginBottom: '0.5rem', color: '#2d3748' }}>{metric.name}</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3182ce' }}>{metric.value}</p>
        </div>
      ))}
    </div>
  );
}
