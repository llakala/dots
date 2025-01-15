[
  {trigger: "#d", replacement: "\\displaystyle ", options: "mA"},
  {trigger: "#t", replacement: "\\text{$0} $1", options: "mA"},
  {trigger: "#b", replacement: "\\mathbf{$0}", options: "mA"},
  {trigger: "#n", replacement: "\\mathrm{$0}", options: "mA"},

  {trigger: "mk", replacement: "$$0$", options: "tA"},
  {trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
  {trigger: "ml", replacement: "$$\n\\begin{gather}\n$0\n\\end{gather}\n$$$1", options: "tAw" }, // Multiline
  {trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA"},


  {trigger: "dydx", replacement: "\\dfrac{dy}{dx}", options: "mA"},
  {trigger: "dx", replacement: "\\dfrac{d}{dx}\\left[ $0 \\right] $1", options: "m"},
  {trigger: "lim", replacement: "\\lim_{${0:x} \\to ${1:\\infty}} $2", options: "mA"},

  // Sum and prod auto expanded
  {trigger: "sum", replacement: "\\sum_{${0:i}=${1:1}}^{${2:N}} $3", options: "mA"},
  {trigger: "isum", replacement: "\\sum_{${0:i}=${1:1}}^{\\infty} $2", options: "mA"}, // Infinite sum
  {trigger: "prod", replacement: "\\prod_{${0:i}=${1:1}}^{${2:N}} $3", options: "mA"},

  // `|` symbol for integrals
  {trigger: "at", replacement: "\\bigg\\rvert_{${0:a}}^{${1:b}} $2", options: "mA" },

  // Indefinite and definite integrals, with a constant beforehand if needed
  {trigger: /([^\\])int/, replacement: "[[0]]\\int $0 \\, d${1:x} $2", options: "mA", priority: -1}, // Constant before int
  {trigger: /([^\\])dint/, replacement: "[[0]]\\int_{${0:a}}^{${1:b}} $2 \\, d${3:x} $4", options: "mA", priority: -1}, // Constant before int


  // Weird types of integrals
  {trigger: "oint", replacement: "\\oint", options: "mA"},
	{trigger: "iint", replacement: "\\iint", options: "mA"},
  {trigger: "iiint", replacement: "\\iiint", options: "mA"},

// Select and press
  {
    trigger: "A", replacement: (sel) =>
    {
      let processed = sel.replace(/=/g, "&="); // Replace with align-equals
      processed = processed.replace(/\n/g, " \\\\\n"); // Replace & delineate newlines
      return `\\begin{align}\n${processed}\n\\end{align}`; // Wrap with align environment
    },
    options: "mvA"
  },

  {trigger: "->", replacement: "\\to", options: "mA" },

  {trigger: "==", replacement: "&=", options: "mA"}, // Align equals
  // {trigger: "abs", replacement: "|$0|$1", options: "mA" },

  {trigger: "^o", replacement: "^\\circ", options: "mA"}, // Degree symbol

  { trigger: "sq", replacement: "\\sqrt{ $0 }$1", options: "mA" }, // Manual brackets, like everywhere else
  { trigger: /(\d)rt/, replacement: "\\sqrt[[[0]]]{$0} $1", options: "mA"}, // Nth root

  // Inverse / arc sin functions quickly
  { trigger: "i(sin|cos|tan|csc|sec|cot)", replacement: "[[0]]^{-1}", options: "rmA", priority: 1},
  { trigger: "a(sin|cos|tan|csc|sec|cot)", replacement: "\\arc[[0]]", options: "rmA", priority: 1},

  { trigger: "or", replacement: "\\lor", options: "mA" },
  { trigger: "|", replacement: "\\lor$0", options: "mA" },

  { trigger: "and", replacement: "\\land", options: "mA" },
  { trigger: "&", replacement: "\\land$0", options: "mA" },

  { trigger: "not", replacement: "\\neg", options: "mA" },
  { trigger: "!", replacement: "\\land$0", options: "mA" },

  { trigger: "xor", replacement: "\\oplus", options: "mA" },

  { trigger: "imp", replacement: "\\implies", options: "mA" },
  { trigger: "=>", replacement: "\\implies", options: "mA" },

]
