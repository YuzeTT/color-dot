const color_list = [
  {
    name: 'Arco Design',
    colors: [
      {
        name: ["Red", "浪漫红"],
        main_color: "#F53F3F",
        color_list: ["#FFECE8", "#FDCDC5", "#FBACA3", "#F98981", "#F76560", "#F53F3F", "#CB272D", "#A1151E", "#770813", "#4D000A"]
      },
      {
        "name": ["Orange Red", "晚秋红"],
        "main_color": "#F77234",
        "color_list": ["#FFF3E8", "#FDDDC3", "#FCC59F", "#FAAC7B", "#F99057", "#F77234", "#CC5120", "#A23511", "#771F06", "#4D0E00"]
      },
      {
        "name": ["Orange", "活力橙"],
        "main_color": "#FF7D00",
        "color_list": ["#FFF7E8", "#FFE4BA", "#FFCF8B", "#FFB65D", "#FF9A2E", "#FF7D00", "#D25F00", "#A64500", "#792E00", "#4D1B00"]
      },
      {
        "name": ["Gold", "黄昏"],
        "main_color": "#F7BA1E",
        "color_list": ["#FFFCE8", "#FDF4BF", "#FCE996", "#FADC6D", "#F9CC45", "#F7BA1E", "#CC9213", "#A26D0A", "#774B04", "#4D2D00"]
      },
      {
        "name": ["Yellow", "柠檬黄"],
        "main_color": "#FADC19",
        "color_list": ["#FEFFE8", "#FEFEBE", "#FDFA94", "#FCF26B", "#FBE842", "#FADC19", "#CFAF0F", "#A38408", "#785D03", "#4D3800"]
      },
      {
        "name": ["Lime", "新生绿"],
        "main_color": "#9FDB1D",
        "color_list": ["#FCFFE8", "#EDF8BB", "#DCF190", "#C9E968", "#B5E241", "#9FDB1D", "#7EB712", "#5F940A", "#437004", "#2A4D00"]
      },
      {
        "name": ["Green", "仙野绿"],
        "main_color": "#00B42A",
        "color_list": ["#E8FFEA", "#AFF0B5", "#7BE188", "#4CD263", "#23C343", "#00B42A", "#009A29", "#008026", "#006622", "#004D1C"]
      },
      {
        "name": ["Cyan", "碧涛青"],
        "main_color": "#14C9C9",
        "color_list": ["#E8FFFB", "#B7F4EC", "#89E9E0", "#5EDFD6", "#37D4CF", "#14C9C9", "#0DA5AA", "#07828B", "#03616C", "#00424D"]
      },
      {
        "name": ["Blue", "海蔚蓝"],
        "main_color": "#3491FA",
        "color_list": ["#E8F7FF", "#C3E7FE", "#9FD4FD", "#7BC0FC", "#57A9FB", "#3491FA", "#206CCF", "#114BA3", "#063078", "#001A4D"]
      },
      {
        "name": ["Arco Blue", "极致蓝"],
        "main_color": "#165DFF",
        "color_list": ["#E8F3FF", "#BEDAFF", "#94BFFF", "#6AA1FF", "#4080FF", "#165DFF", "#0E42D2", "#072CA6", "#031A79", "#000D4D"]
      },
      {
        "name": ["Purple", "暗夜紫"],
        "main_color": "#722ED1",
        "color_list": ["#F5E8FF", "#DDBEF6", "#C396ED", "#A871E3", "#8D4EDA", "#722ED1", "#551DB0", "#3C108F", "#27066E", "#16004D"]
      },
      {
        "name": ["Pink Purple", "青春紫"],
        "main_color": "#D91AD9",
        "color_list": ["#FFE8FB", "#F7BAEF", "#F08EE6", "#E865DF", "#E13EDB", "#D91AD9", "#B010B6", "#8A0993", "#650370", "#42004D"]
      },
      {
        "name": ["Magenta", "品红"],
        "main_color": "#F5319D",
        "color_list": ["#FFE8F1", "#FDC2DB", "#FB9DC7", "#F979B7", "#F754A8", "#F5319D", "#CB1E83", "#A11069", "#77064F", "#4D0034"]
      },
      {
        "name": ["Grey", "中性灰"],
        "main_color": "#86909c",
        "color_list": ["#f7f8fa", "#f2f3f5", "#e5e6eb", "#c9cdd4", "#a9aeb8", "#86909c", "#6b7785", "#4e5969", "#272e3b", "#1d2129"]
      }      
    ]
  },
  {
    name: 'Mui',
    colors: [
      {
        name: 'red',
        main_color: '#f44336',
        color_list: ['#ffebee','#ffcdd2','#ef9a9a','#e57373','#ef5350','#f44336','#e53935','#d32f2f','#c62828','#b71c1c','#ff8a80','#ff5252','#ff1744','#d50000',]
      },
      {
        name: 'pink',
        main_color: '#e91e63',
        color_list: ['#fce4ec','#f8bbd0','#f48fb1','#f06292','#ec407a','#e91e63','#d81b60','#c2185b','#ad1457','#880e4f','#ff80ab','#ff4081','#f50057','#c51162',]
      },
      {
        name: 'purple',
        main_color: '#9c27b0',
        color_list: ['#f3e5f5','#e1bee7','#ce93d8','#ba68c8','#ab47bc','#9c27b0','#8e24aa','#7b1fa2','#6a1b9a','#4a148c','#ea80fc','#e040fb','#d500f9','#aa00ff',]
      },
      {
        name: 'deepPurple',
        main_color: '#673ab7',
        color_list: ['#ede7f6','#d1c4e9','#b39ddb','#9575cd','#7e57c2','#673ab7','#5e35b1','#512da8','#4527a0','#311b92','#b388ff','#7c4dff','#651fff','#6200ea',]
      },
      {
        name: 'indigo',
        main_color: '#3f51b5',
        color_list: ['#e8eaf6','#c5cae9','#9fa8da','#7986cb','#5c6bc0','#3f51b5','#3949ab','#303f9f','#283593','#1a237e','#8c9eff','#536dfe','#3d5afe','#304ffe',]
      },
      {
        name: 'blue',
        main_color: '#2196f3',
        color_list: ['#e3f2fd','#bbdefb','#90caf9','#64b5f6','#42a5f5','#2196f3','#1e88e5','#1976d2','#1565c0','#0d47a1','#82b1ff','#448aff','#2979ff','#2962ff',]
      },
      {
        name: 'lightBlue',
        main_color: '#03a9f4',
        color_list: ['#e1f5fe','#b3e5fc','#81d4fa','#4fc3f7','#29b6f6','#03a9f4','#039be5','#0288d1','#0277bd','#01579b','#80d8ff','#40c4ff','#00b0ff','#0091ea',]
      },
      {
        name: 'cyan',
        main_color: '#00bcd4',
        color_list: ['#e0f7fa','#b2ebf2','#80deea','#4dd0e1','#26c6da','#00bcd4','#00acc1','#0097a7','#00838f','#006064','#84ffff','#18ffff','#00e5ff','#00b8d4',]
      },
      {
        name: 'teal',
        main_color: '#009688',
        color_list: ['#e0f2f1','#b2dfdb','#80cbc4','#4db6ac','#26a69a','#009688','#00897b','#00796b','#00695c','#004d40','#a7ffeb','#64ffda','#1de9b6','#00bfa5',]
      },
      {
        name: 'green',
        main_color: '#4caf50',
        color_list: ['#e8f5e9','#c8e6c9','#a5d6a7','#81c784','#66bb6a','#4caf50','#43a047','#388e3c','#2e7d32','#1b5e20','#b9f6ca','#69f0ae','#00e676','#00c853',]
      },
      {
        name: 'lightGreen',
        main_color: '#8bc34a',
        color_list: ['#f1f8e9','#dcedc8','#c5e1a5','#aed581','#9ccc65','#8bc34a','#7cb342','#689f38','#558b2f','#33691e','#ccff90','#b2ff59','#76ff03','#64dd17',]
      },
      {
        name: 'lime',
        main_color: '#cddc39',
        color_list: ['#f9fbe7','#f0f4c3','#e6ee9c','#dce775','#d4e157','#cddc39','#c0ca33','#afb42b','#9e9d24','#827717','#f4ff81','#eeff41','#c6ff00','#aeea00',]
      },
      {
        name: 'yellow',
        main_color: '#ffeb3b',
        color_list: ['#fffde7','#fff9c4','#fff59d','#fff176','#ffee58','#ffeb3b','#fdd835','#fbc02d','#f9a825','#f57f17','#ffff8d','#ffff00','#ffea00','#ffd600',]
      },
      {
        name: 'amber',
        main_color: '#ffc107',
        color_list: ['#fff8e1','#ffecb3','#ffe082','#ffd54f','#ffca28','#ffc107','#ffb300','#ffa000','#ff8f00','#ff6f00','#ffe57f','#ffd740','#ffc400','#ffab00',]
      },
      {
        name: 'orange',
        main_color: '#ff9800',
        color_list: ['#fff3e0','#ffe0b2','#ffcc80','#ffb74d','#ffa726','#ff9800','#fb8c00','#f57c00','#ef6c00','#e65100','#ffd180','#ffab40','#ff9100','#ff6d00',]
      },
      {
        name: 'deepOrange',
        main_color: '#ff5722',
        color_list: ['#fbe9e7','#ffccbc','#ffab91','#ff8a65','#ff7043','#ff5722','#f4511e','#e64a19','#d84315','#bf360c','#ff9e80','#ff6e40','#ff3d00','#dd2c00',]
      },
      {
        name: 'brown',
        main_color: '#795548',
        color_list: ['#efebe9','#d7ccc8','#bcaaa4','#a1887f','#8d6e63','#795548','#6d4c41','#5d4037','#4e342e','#3e2723','#d7ccc8','#bcaaa4','#8d6e63','#5d4037',]
      },
      {
        name: 'grey',
        main_color: '#9e9e9e',
        color_list: ['#fafafa','#f5f5f5','#eeeeee','#e0e0e0','#bdbdbd','#9e9e9e','#757575','#616161','#424242','#212121','#f5f5f5','#eeeeee','#bdbdbd','#616161',]
      },
      {
        name: 'blueGrey',
        main_color: '#607d8b',
        color_list: ['#eceff1','#cfd8dc','#b0bec5','#90a4ae','#78909c','#607d8b','#546e7a','#455a64','#37474f','#263238','#cfd8dc','#b0bec5','#78909c','#455a64',]
      },
    ]
  }
]

export default color_list
