[
  { trigger: /dd([a-ce-z])/, replacement: "\\dfrac{d}{d[[0]]}\\left[ $0 \\right]$1", options: "mA" },
  { trigger: /d([a-ce-z])d([a-ce-z])/, replacement: "\\dfrac{d[[0]]}{d[[1]]}$1", options: "mA" },

  // `|` symbol for integrals
  { trigger: "at", replacement: "\\bigg\\rvert_{${0:a}}^{${1:b}}$2", options: "mA", priority: -1 },

  // Indefinite and definite integrals, with a constant beforehand if needed
  { trigger: /([^\\])int/, replacement: "[[0]]\\int $0 \\, d${1:x} $2", options: "mA", priority: -1 },
  { trigger: /([^\\])dint/, replacement: "[[0]]\\int_{${0:a}}^{${1:b}} $2 \\, d${3:x} $4", options: "mA", priority: -1 },

  // Weird types of integrals
  { trigger: "oint", replacement: "\\oint", options: "mA" },
  { trigger: "iint", replacement: "\\iint", options: "mA" },
  { trigger: "iiint", replacement: "\\iiint", options: "mA" },
]
