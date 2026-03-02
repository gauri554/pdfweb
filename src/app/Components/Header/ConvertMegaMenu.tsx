"use client"

export default function ConvertMegaMenu() {
     const convertTo = [
    "JPG to PDF",
    "WORD to PDF",
    "POWERPOINT to PDF",
    "EXCEL to PDF",
    "HTML to PDF",
  ]

  const convertFrom = [
    "PDF to JPG",
    "PDF to WORD",
    "PDF to POWERPOINT",
    "PDF to EXCEL",
    "PDF to PDF/A",
  ]
  return (
     <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[620px] bg-white rounded-xl shadow-xl border z-50">
  
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t" />

      <div className="grid grid-cols-2 gap-12 p-8">
        
        <div>
          <h4 className="text-xs font-semibold text-gray-500 mb-6 tracking-wide">
            CONVERT TO PDF
          </h4>

          <ul className="space-y-4">
            {convertTo.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600 px-3 py-2 rounded-lg cursor-pointer"
              >
                <span className="w-6 h-6 bg-yellow-100 rounded-md" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-500 mb-6 tracking-wide">
            CONVERT FROM PDF
          </h4>

          <ul className="space-y-4">
            {convertFrom.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600 px-3 py-2 rounded-lg cursor-pointer"
              >
                <span className="w-6 h-6 bg-blue-100 rounded-md" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}