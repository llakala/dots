[
  {trigger: "(?<=\n)#t", replacement: "\\text{$0 } $1", options: "mrA"}, // Text at the beginning of a line
  {trigger: "#t", replacement: "\\text{ $0 } $1", options: "mA", priority: -1}, // Text that isn't at the beginning of a line

  {trigger: "#d", replacement: "\\displaystyle ", options: "mA"},
  {trigger: "#b", replacement: "\\mathbf{$0}", options: "mA"},
  {trigger: "#n", replacement: "\\mathrm{$0}", options: "mA"},
  {trigger: "#m", replacement: "\\mathbb{$0}", options: "mA"},

  { trigger: "@d", replacement: "\\Delta", options: "mA" },
  { trigger: "@D", replacement: "\\delta", options: "mA" },
  { trigger: "@e", replacement: "\\mathcal{E}", options: "mA" },

  // Block letters
  { trigger: /([A-GI-KM-Z]){2}/, replacement: "\\mathbb{[[0]]}", options: "mA" },
  { trigger: /\\mathbb{(\w)}([\+\-])/, replacement: "\\mathbb{[[0]]}^[[1]]", options: "mA" }, // Positive/negative
  { trigger: "LL", replacement: "\\mathcal{L}", options: "mA" },
  { trigger: "HH", replacement: "\\mathcal{H}", options: "mA" },


  {trigger: "mk", replacement: "$$0$", options: "tA"},
  {trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
  {trigger: "ml", replacement: "$$\n\\begin{gather}\n$0\n\\end{gather}\n$$$1", options: "tAw" }, // Multiline
  {trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA"},

  {trigger: /dd([a-ce-z])/, replacement: "\\dfrac{d}{d[[0]]}\\left[ $0 \\right]$1", options: "mA"},
  {trigger: /d([a-ce-z])d([a-ce-z])/, replacement: "\\dfrac{d[[0]]}{d[[1]]}\\left[ $0 \\right]$1", options: "mA"},

  {trigger: "lim", replacement: "\\lim_{${0:x} \\to ${1:\\infty}} $2", options: "mA"},

  {trigger: "~=", replacement: "\\approx", options: "mA"},

  // Sum and prod auto expanded
  {trigger: "sum", replacement: "\\sum_{${0:i}=${1:1}}^{${2:N}} $3", options: "mA"},
  {trigger: "isum", replacement: "\\sum_{${0:i}=${1:1}}^{\\infty} $2", options: "mA"}, // Infinite sum
  {trigger: "prod", replacement: "\\prod_{${0:i}=${1:1}}^{${2:N}} $3", options: "mA"},

  // `|` symbol for integrals
  {trigger: "at", replacement: "\\bigg\\rvert_{${0:a}}^{${1:b}}$2", options: "mA", priority: -1 },
  {trigger: "abs", replacement: "|$0|$1", options: "mA"},

  {trigger: "tta", replacement: "\\theta", options: "mA"},

  // Indefinite and definite integrals, with a constant beforehand if needed
  {trigger: /([^\\])int/, replacement: "[[0]]\\int $0 \\, d${1:x} $2", options: "mA", priority: -1},
  {trigger: /([^\\])dint/, replacement: "[[0]]\\int_{${0:a}}^{${1:b}} $2 \\, d${3:x} $4", options: "mA", priority: -1},

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

  {trigger: "^o", replacement: "^\\circ", options: "mA"}, // Degree symbol

  { trigger: "sq", replacement: "\\sqrt{ $0 }$1", options: "mA" }, // Manual brackets, like everywhere else
  { trigger: /(\d)rt/, replacement: "\\sqrt[[[0]]]{$0} $1", options: "mA"}, // Nth root


   { trigger: "flr", replacement: "\\lfloor $0 \\rfloor $1", options: "mA" },

    {trigger: "oo", replacement: "\\circ", options: "mA"},

  // Inverse / arc sin functions quickly
  { trigger: /i(sin|cos|tan|csc|sec|cot)/, replacement: "[[0]]^{-1}", options: "mA", priority: 1},
  { trigger: /a(sin|cos|tan)/, replacement: "\\arc[[0]]($0)$1", options: "mA", priority: 1},
  { trigger: /a(csc|sec|cot)/, replacement: "\\text{arc[[0]]}($0)$1", options: "mA", priority: 1},
]
