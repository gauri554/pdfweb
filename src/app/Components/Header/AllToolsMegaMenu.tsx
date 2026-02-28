export default function AllToolsMegaMenu() {
  const sections = [
    {
      title: "ORGANIZE PDF",
      items: [
        "Merge PDF",
        "Split PDF",
        "Remove pages",
        "Extract pages",
        "Organize PDF",
        "Scan to PDF",
      ],
    },
    {
      title: "OPTIMIZE PDF",
      items: ["Compress PDF", "Repair PDF", "OCR PDF"],
    },
    {
      title: "CONVERT TO PDF",
      items: [
        "JPG to PDF",
        "WORD to PDF",
        "POWERPOINT to PDF",
        "EXCEL to PDF",
        "HTML to PDF",
      ],
    },
    {
      title: "CONVERT FROM PDF",
      items: [
        "PDF to JPG",
        "PDF to WORD",
        "PDF to POWERPOINT",
        "PDF to EXCEL",
        "PDF to PDF/A",
      ],
    },
    {
      title: "EDIT PDF",
      items: [
        "Rotate PDF",
        "Add page numbers",
        "Add watermark",
        "Crop PDF",
        "Edit PDF",
      ],
    },
    {
      title: "PDF SECURITY",
      items: [
        "Unlock PDF",
        "Protect PDF",
        "Sign PDF",
        "Redact PDF",
        "Compare PDF",
      ],
    },
  ]

  return (
    <div className="absolute left-[-70] -translate-x-1/2 top-full mt-6 w-[1000px] bg-white rounded-xl shadow-xl border z-50">
      
      {/* Arrow */}
      <div className="absolute -top-2 left-[550px] -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t" />

      <div className="grid grid-cols-6 gap-10 p-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="text-xs font-semibold text-gray-500 mb-5 tracking-wide">
              {section.title}
            </h4>

            <ul className="space-y-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-700 hover:text-red-600 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom PDF Intelligence */}
      <div className="border-t px-10 py-6">
        <h4 className="text-xs font-semibold text-gray-500 mb-3 tracking-wide">
          PDF INTELLIGENCE
        </h4>

        <p className="text-sm text-gray-700 hover:text-red-600 cursor-pointer">
          Translate PDF
        </p>
      </div>
    </div>
  )
}