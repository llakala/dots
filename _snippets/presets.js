[
  // Dashes
  // {trigger: "--", replacement: "–", options: "tA"},
  // {trigger: "–-", replacement: "—", options: "tA"},
  // {trigger: "—-", replacement: "---", options: "tA"},

  // Greek letters
  { trigger: "@a", replacement: "\\alpha", options: "mA" },
  { trigger: "@b", replacement: "\\beta", options: "mA" },
  { trigger: "@g", replacement: "\\gamma", options: "mA" },
  { trigger: "@G", replacement: "\\Gamma", options: "mA" },
  { trigger: ":e", replacement: "\\varepsilon", options: "mA" },
  { trigger: "@z", replacement: "\\zeta", options: "mA" },
  { trigger: "@t", replacement: "\\theta", options: "mA" },
  { trigger: "@T", replacement: "\\Theta", options: "mA" },
  { trigger: ":t", replacement: "\\vartheta", options: "mA" },
  { trigger: "@i", replacement: "\\iota", options: "mA" },
  { trigger: "@k", replacement: "\\kappa", options: "mA" },
  { trigger: "@l", replacement: "\\lambda", options: "mA" },
  { trigger: "@L", replacement: "\\Lambda", options: "mA" },
  { trigger: "@s", replacement: "\\sigma", options: "mA" },
  { trigger: "@S", replacement: "\\Sigma", options: "mA" },
  { trigger: "@u", replacement: "\\upsilon", options: "mA" },
  { trigger: "@U", replacement: "\\Upsilon", options: "mA" },
  { trigger: "@o", replacement: "\\omega", options: "mA" },
  { trigger: "@O", replacement: "\\Omega", options: "mA" },
  { trigger: "ome", replacement: "\\omega", options: "mA" },
  { trigger: "Ome", replacement: "\\Omega", options: "mA" },


  // Basic operations
  { trigger: "sr", replacement: "^{2}", options: "mA" },
  { trigger: "cb", replacement: "^{3}", options: "mA" },
  { trigger: "//", replacement: "\\dfrac{$0}{$1}$2", options: "mA" },
  { trigger: "ee", replacement: "e^{ $0 }$1", options: "mA" },
  // {trigger: "([A-Za-z])(\\d)", replacement: "[[0]]_{[[1]]}", options: "rmA", description: "Auto letter subscript", priority: -1},

  { trigger: "([^\\\\])(exp|log|ln)", replacement: "[[0]]\\[[1]]", options: "rmA" },
  { trigger: "conj", replacement: "^{*}", options: "mA" },
  { trigger: "Re", replacement: "\\mathrm{Re}", options: "mA" },
  { trigger: "Im", replacement: "\\mathrm{Im}", options: "mA" },

  // Linear algebra
  { trigger: "([^\\\\])(det)", replacement: "[[0]]\\[[1]]", options: "rmA" },
  { trigger: "trace", replacement: "\\mathrm{Tr}", options: "mA" },

  // More operations
  { trigger: "([a-zA-Z])hat", replacement: "\\hat{[[0]]}", options: "rmA" },
  { trigger: "([a-zA-Z])bar", replacement: "\\bar{[[0]]}", options: "rmA" },
  { trigger: "([a-zA-Z])dot", replacement: "\\dot{[[0]]}", options: "rA", priority: -1 },
  { trigger: "([a-zA-Z])ddot", replacement: "\\ddot{[[0]]}", options: "rA", priority: 1 },
  { trigger: "([a-zA-Z])tilde", replacement: "\\tilde{[[0]]}", options: "rmA" },
  { trigger: "([a-zA-Z])und", replacement: "\\underline{[[0]]}", options: "rmA" },
  { trigger: "([a-zA-Z])vec", replacement: "\\vec{[[0]]}", options: "rmA" },
  { trigger: "([a-zA-Z]),\\.", replacement: "\\mathbf{[[0]]}", options: "rmA" },
  { trigger: "([a-zA-Z])\\.,", replacement: "\\mathbf{[[0]]}", options: "rmA" },
  { trigger: "\\\\(${GREEK}),\\.", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA" },
  { trigger: "\\\\(${GREEK})\\.,", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA" },

  { trigger: "vec", replacement: "\\vec{$0}$1", options: "mA" },

  // More auto letter subscript
  { trigger: "([A-Za-z])_ (\\d\\d)", replacement: "[[0]]_{[[1]]}", options: "rmA" },
  { trigger: "\\hat{([A-Za-z])}(\\d)", replacement: "hat{[[0]}{[[1]]}", options: "rmA" },
  { trigger: "\\\\vec{([A-Za-z])}(\\d)", replacement: "\\vec{[[0]]}_{[[1]]}", options: "rmA" },
  { trigger: "\\\\mathbf{([A-Za-z])}(\\d)", replacement: "\\mathbf{[[0]]}y_{[[1]]}", options: "rmA" },

  // Symbols
  { trigger: "inf", replacement: "\\infty", options: "mA" },
  { trigger: "ninf", replacement: "-\\infty", options: "mA" },
  { trigger: "+-", replacement: "\\pm ", options: "mA" },
  { trigger: "-+", replacement: "\\mp ", options: "mA" },
  { trigger: "...", replacement: "\\dots", options: "mA" },
  { trigger: "nabl", replacement: "\\nabla", options: "mA" },
  { trigger: "del", replacement: "\\nabla", options: "mA" },
  { trigger: "xx", replacement: "\\times", options: "mA" },
  { trigger: "*", replacement: "\\cdot $0", options: "mA" },
  { trigger: "para", replacement: "\\parallel", options: "mA" },

  { trigger: "==", replacement: "\\equiv", options: "mA" },
  { trigger: "!=", replacement: "\\neq", options: "mA" },
  { trigger: ">=", replacement: "\\geq", options: "mA" },
  { trigger: "<=", replacement: "\\leq", options: "mA" },
  { trigger: ">>", replacement: "\\gg", options: "mA" },
  { trigger: "<<", replacement: "\\ll", options: "mA" },
  { trigger: "simm", replacement: "\\sim", options: "mA" },
  { trigger: "sim=", replacement: "\\simeq", options: "mA" },
  { trigger: "prop", replacement: "\\propto", options: "mA" },

  // Handle spaces and backslashes

  // Snippet variables can be used as shortcuts when writing snippets.
  // For example, ${GREEK} below is shorthand for "alpha|beta|gamma|Gamma|delta|..."
  // You can edit snippet variables under the Advanced snippet settings section.

  { trigger: "([^\\\\])(${GREEK})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before Greek letters" },
  { trigger: "([^\\\\])(${SYMBOL})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before symbols" },

  // Insert space after Greek letters and symbols
  { trigger: "\\\\(${GREEK}|${SYMBOL}|${MORE_SYMBOLS})([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA" },
  { trigger: "\\\\(${GREEK}|${SYMBOL}) sr", replacement: "\\[[0]]^{2}", options: "rmA" },
  { trigger: "\\\\(${GREEK}|${SYMBOL}) cb", replacement: "\\[[0]]^{3}", options: "rmA" },
  { trigger: "\\\\(${GREEK}|${SYMBOL}) rd", replacement: "\\[[0]]^{$0}$1", options: "rmA" },
  { trigger: "\\\\(${GREEK}|${SYMBOL}) hat", replacement: "\\hat{\\[[0]]}", options: "rmA" },
  { trigger: "\\\\(${GREEK}|${SYMBOL}) dot", replacement: "\\dot{\\[[0]]}", options: "rmA" },
  { trigger: "\\\\(${GREEK}|${SYMBOL}) bar", replacement: "\\bar{\\[[0]]}", options: "rmA" },
  { trigger: "\\\\(${GREEK}|${SYMBOL}) vec", replacement: "\\vec{\\[[0]]}", options: "rmA" },
  { trigger: "\\\\(${GREEK}|${SYMBOL}) tilde", replacement: "\\tilde{\\[[0]]}", options: "rmA" },
  { trigger: "\\\\(${GREEK}|${SYMBOL}) und", replacement: "\\underline{\\[[0]]}", options: "rmA" },


  // Derivatives and integrals
  { trigger: "par", replacement: "\\dfrac{ \\partial ${0:y} }{ \\partial ${1:x} } $2", options: "m" },
  { trigger: "pa([A-Za-z])([A-Za-z])", replacement: "\\dfrac{ \\partial [[0]] }{ \\partial [[1]] } ", options: "rm" },
  { trigger: "ddt", replacement: "\\dfrac{d}{dt} ", options: "mA" },


  // Trigonometry
  { trigger: "([^\\\\])(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before trig funcs" },

  {
    trigger: "\\\\(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)([A-Za-gj-z0-9])",
    replacement: "\\[[0]] [[1]]", "options": "rmA",
    description: "Add space after trig funcs. Skips letter h to allow sinh, cosh, etc."
  },

  {
    trigger: "\\\\(sinh|cosh|tanh|coth)([A-Za-z])",
    replacement: "\\[[0]] [[1]]", "options": "rmA",
    description: "Add space after hyperbolic trig funcs"
  },


  // Visual operations
  { trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA" },
  { trigger: "O", replacement: "\\overbrace{ ${VISUAL} }^{ $0 }", options: "mA" },
  { trigger: "B", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA" },
  { trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "mA" },
  { trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA" },
  { trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA" },

  // Physics
  { trigger: "kbt", replacement: "k_{B}T", options: "mA" },
  { trigger: "msun", replacement: "M_{\\odot}", options: "mA" },

  // Quantum mechanics
  { trigger: "dag", replacement: "^\\dagger}", options: "mA" },
  { trigger: "o+", replacement: "\\oplus ", options: "mA" },
  { trigger: "ox", replacement: "\\otimes ", options: "mA" },
  { trigger: "bra", replacement: "\\bra{$0} $1", options: "mA" },
  { trigger: "ket", replacement: "\\ket{$0} $1", options: "mA" },
  { trigger: "brk", replacement: "\\braket{ $0 | $1 } $2", options: "mA" },
  { trigger: "outer", replacement: "\\ket{${0:\\psi}} \\bra{${0:\\psi}} $1", options: "mA" },

  // Chemistry
  { trigger: "pu", replacement: "\\pu{ $0 }", options: "mA" },
  { trigger: "cee", replacement: "\\ce{ $0 }", options: "mA" },
  { trigger: "he4", replacement: "{}^{4}_{2}He ", options: "mA" },
  { trigger: "he3", replacement: "{}^{3}_{2}He ", options: "mA" },
  { trigger: "iso", replacement: "{}^{${0:4}}_{${1:2}}${2:He}", options: "mA" },


  // Environments
  { trigger: "pmat", replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", options: "MA" },
  { trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "MA" },
  { trigger: "Bmat", replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}", options: "MA" },
  { trigger: "vmat", replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}", options: "MA" },
  { trigger: "Vmat", replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}", options: "MA" },
  { trigger: "matrix", replacement: "\\begin{matrix}\n$0\n\\end{matrix}", options: "MA" },

  { trigger: "pmat", replacement: "\\begin{pmatrix}$0\\end{pmatrix}", options: "nA" },
  { trigger: "bmat", replacement: "\\begin{bmatrix}$0\\end{bmatrix}", options: "nA" },
  { trigger: "Bmat", replacement: "\\begin{Bmatrix}$0\\end{Bmatrix}", options: "nA" },
  { trigger: "vmat", replacement: "\\begin{vmatrix}$0\\end{vmatrix}", options: "nA" },
  { trigger: "Vmat", replacement: "\\begin{Vmatrix}$0\\end{Vmatrix}", options: "nA" },
  { trigger: "matrix", replacement: "\\begin{matrix}$0\\end{matrix}", options: "nA" },

  { trigger: "cases", replacement: "\\begin{cases}\n$0\n\\end{cases}", options: "mA" },
  { trigger: "array", replacement: "\\begin{array}\n$0\n\\end{array}", options: "mA" },


  // Brackets
  { trigger: "avg", replacement: "\\langle $0 \\rangle $1", options: "mA" },
  { trigger: "norm", replacement: "\\lvert $0 \\rvert $1", options: "mA", priority: 1 },
  { trigger: "Norm", replacement: "\\lVert $0 \\rVert $1", options: "mA", priority: 1 },
  { trigger: "ceil", replacement: "\\lceil $0 \\rceil $1", options: "mA" },
  { trigger: "(", replacement: "(${VISUAL})", options: "mA" },
  { trigger: "[", replacement: "[${VISUAL}]", options: "mA" },
  { trigger: "{", replacement: "{${VISUAL}}", options: "mA" },
  { trigger: "(", replacement: "($0)$1", options: "mA" },
  { trigger: "{", replacement: "{$0}$1", options: "mA" },
  { trigger: "[", replacement: "[$0]$1", options: "mA" },
  { trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA" },
  { trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA" },
  { trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA" },
  { trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA" },
  { trigger: "lra", replacement: "\\left< $0 \\right> $1", options: "mA" },



  // CUSTOM SNIPPETS



  // Automatically convert standalone letters in text to math (except a, A, I).
  // (Un-comment to enable)
  // {trigger: /([^'])\b([B-HJ-Zb-z])\b([\n\s.,?!:'])/, replacement: "[[0]]$[[1]]$[[2]]", options: "tA"},

  // Automatically convert Greek letters in text to math.
  // {trigger: "(${GREEK})([\\n\\s.,?!:'])", replacement: "$\\[[0]]$[[1]]", options: "rtAw"},

  // Automatically convert text of the form "x=2" and "x=n+1" to math.
  // {trigger: /([A-Za-z]=\d+)([\n\s.,?!:'])/, replacement: "$[[0]]$[[1]]", options: "rtAw"},
  // {trigger: /([A-Za-z]=[A-Za-z][+-]\d+)([\n\s.,?!:'])/, replacement: "$[[0]]$[[1]]", options: "tAw"},


  // Snippet replacements can have placeholders.
  // {trigger: "tayl", replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "mA", description: "Taylor expansion"},

  // Snippet replacements can also be JavaScript functions.
  // See the documentation for more information.
  {
    trigger: /iden(\d)/, replacement: (match) => {
      const n = match[1];

      let arr = [];
      for (let j = 0; j < n; j++) {
        arr[j] = [];
        for (let i = 0; i < n; i++) {
          arr[j][i] = (i === j) ? 1 : 0;
        }
      }

      let output = arr.map(el => el.join(" & ")).join(" \\\\\n");
      output = `\\begin{pmatrix}\n${output}\n\\end{pmatrix}`;
      return output;
    }, "options": "mA", description: "N x N identity matrix"
  },
]
