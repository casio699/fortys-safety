'use client'

/**
 * Client logo ticker: CSS-driven, hydration-safe (no conditional rendering).
 * Hover pauses scroll via animation-play-state.
 */
const ClientLogoBanner = () => {
  const clientLogos = [
    { name: 'Lebanese Civil Defence', logo: 'LCD' },
    { name: 'UNICEF', logo: 'UNICEF' },
    { name: 'Red Cross', logo: 'RC' },
    { name: 'Aramco', logo: 'ARAM' },
    { name: 'TotalEnergies', logo: 'TOT' },
    { name: 'Siemens', logo: 'SIE' },
    { name: 'CMA CGM', logo: 'CMA' },
    { name: 'SABIC', logo: 'SAB' },
  ]

  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-green-600/95 backdrop-blur border-t border-white/20 py-3 z-40">
      <div className="relative overflow-hidden group">
        <div
          className="flex space-x-8 animate-scroll-x"
          style={{ animation: 'scrollX 22s linear infinite' }}
        >
          {duplicatedLogos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-36 h-12 bg-white/10 backdrop-blur border border-white/20 rounded-lg px-4 shadow-sm"
            >
              <div className="text-center">
                <div className="text-base font-semibold text-white tracking-wide">{client.logo}</div>
                <div className="text-[11px] text-white/80">{client.name}</div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .group:hover .animate-scroll-x {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  )
}

export default ClientLogoBanner
