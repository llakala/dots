[
  {
    trigger: /table_(\d+)_(\d+)/, replacement: (match) => {
      const cols = match[1];
      const rows = match[2];

      let arr = [];
      for (let i = 0; i <= rows; i++) {
        arr[i] = [];
        for (let j = 0; j < cols; j++) {

          if (i == 0 && j == 0) {
              arr[i][j] = "     ";
          }
          else if (i == 1)
          {
            arr[i][j] = " --- ";
          }
          else
          {
            arr[i][j] = " $$  ";
          };
        }
      }

      return arr.map(r => '|' + r.join('|')).join('|\n') + '|';

    }, options: "t", description: "N x N markdown table" // Text mode only
  },
]
