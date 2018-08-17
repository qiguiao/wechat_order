// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftArr: [{
        name: "冷菜",
        id: 1,
        objIndex: 'coolFood'
      },
      {
        name: "冷菜(杭帮菜)",
        id: 2,
        objIndex: 'coolHbFood'
      },
      {
        name: "杭帮菜(热菜)",
        id: 3,
        objIndex: 'hotHbFood'
      },
      {
        name: "烧烤",
        id: 4,
        objIndex: 'barbecueFood'
      },
      {
        name: "想吃外婆烧的菜",
        id: 5,
        objIndex: 'wantFood'
      },
      {
        name: "外热菜",
        id: 6,
        objIndex: 'grandMotherFood'
      },
      {
        name: "甜品",
        id: 7,
        objIndex: 'sweetFood'
      },
      {
        name: "川湘菜",
        id: 8,
        objIndex: 'siChuanFood'
      },
      {
        name: "热菜",
        id: 9,
        objIndex: 'hotFood'
      },
      {
        name: "汤羹煲",
        id: 10,
        objIndex: 'soupFood'
      },
      {
        name: "蔬菜",
        id: 11,
        objIndex: 'vegetablesFood'
      },
      {
        name: "点心",
        id: 12,
        objIndex: 'snackFood'
      },
      {
        name: "饮料",
        id: 13,
        objIndex: 'drinkFood'
      },
      {
        name: "酒水",
        id: 14,
        objIndex: 'alcoholFood'
      },
    ],
    rightArr: [],
    selectClass: 1,
    obj: {
      coolFood: [{
          name: "温泉蛋",
          pirce: "2元/只",
          checkd: false,
          remord: 0,
          num: 2,
          id: 15
        },
        {
          name: "小葱豆腐",
          pirce: "3元/份",
          checkd: false,
          remord: 0,
          num: 3,
          id: 16
        },
        {
          name: "我爱鸡爪王",
          pirce: "4元/只",
          checkd: false,
          remord: 4,
          num: 4,
          id: 17
        },
        {
          name: "甜蜜番茄",
          pirce: "5元/份",
          checkd: false,
          remord: 1,
          num: 5,
          id: 18
        },
        {
          name: "五香花生",
          pirce: "6元/份",
          checkd: false,
          remord: 0,
          num: 6,
          id: 19
        },
        {
          name: "西子凉皮",
          pirce: "8元/份",
          checkd: false,
          remord: 3,
          num: 8,
          id: 20
        },
        {
          name: "海裙带",
          pirce: "8元/份",
          checkd: false,
          remord: 0,
          num: 8,
          id: 213
        },
        {
          name: "春芽腐皮丝",
          pirce: "8元/份",
          checkd: false,
          remord: 0,
          num: 8,
          id: 21
        },
        {
          name: "蜂窝豆干",
          pirce: "8元/份",
          checkd: false,
          remord: 0,
          num: 8,
          id: 22
        },
        {
          name: "老坛酱黄瓜",
          pirce: "9元/份",
          checkd: false,
          remord: 0,
          num: 9,
          id: 23
        },
        {
          name: "爽口拌海草",
          pirce: "10元/份",
          checkd: false,
          remord: 0,
          num: 10,
          id: 24
        },
        {
          name: "梅菜笋丝",
          pirce: "10元/份",
          checkd: false,
          remord: 2,
          num: 10,
          id: 25
        },
        {
          name: "酒酿黄瓜",
          pirce: "10元/份",
          checkd: false,
          remord: 0,
          num: 10,
          id: 26
        },
        {
          name: "香拌木耳",
          pirce: "12元/份",
          checkd: false,
          remord: 0,
          num: 12,
          id: 27
        },
        {
          name: "芦荟桃浆",
          pirce: "12元/份",
          checkd: false,
          remord: 0,
          num: 12,
          id: 28
        },
        {
          name: "鸡丝凉面",
          pirce: "16元/份",
          checkd: false,
          remord: 1,
          num: 16,
          id: 29
        },
        {
          name: "马家沟水芹",
          pirce: "18元/份",
          checkd: false,
          remord: 6,
          num: 18,
          id: 30
        },
        {
          name: "桂花山药",
          pirce: "18元/份",
          checkd: false,
          remord: 4,
          num: 18,
          id: 31
        },
        {
          name: "外婆色拉",
          pirce: "18元/份",
          checkd: false,
          remord: 0,
          num: 18,
          id: 32
        },
        {
          name: "蒜泥白切肉",
          pirce: "18元/份",
          checkd: false,
          remord: 1,
          num: 18,
          id: 33
        },
        {
          name: "清酒肝",
          pirce: "19元/份",
          checkd: false,
          remord: 4,
          num: 19,
          id: 214
        },
        {
          name: "椒香牛肚",
          pirce: "22元/份",
          checkd: false,
          remord: 1,
          num: 22,
          id: 34
        },
        {
          name: "老李鳗干",
          pirce: "22元/份",
          checkd: false,
          remord: 4,
          num: 22,
          id: 35
        },
        {
          name: "牛肉杏鲍菇",
          pirce: "22元/份",
          checkd: false,
          remord: 0,
          num: 22,
          id: 36
        },
        {
          name: "鲜椒泡牛筋",
          pirce: "23元/份",
          checkd: false,
          remord: 1,
          num: 23,
          id: 37
        },
        {
          name: "外婆熏鱼",
          pirce: "25元/份",
          checkd: false,
          remord: 0,
          num: 25,
          id: 38
        },
        {
          name: "夫妻肺片",
          pirce: "25元/份",
          checkd: false,
          remord: 1,
          num: 25,
          id: 39
        },
        {
          name: "素鲍鱼",
          pirce: "26元/份",
          checkd: false,
          remord: 0,
          num: 26,
          id: 40
        },
        {
          name: "美味海蜇",
          pirce: "29元/份",
          checkd: false,
          remord: 0,
          num: 29,
          id: 41
        },
      ],
      coolHbFood: [{
          name: "盐水毛豆",
          pirce: "6元/份",
          checkd: false,
          remord: 0,
          num: 6,
          id: 42
        },
        {
          name: "外婆酱萝卜",
          pirce: "8元/份",
          checkd: false,
          remord: 0,
          num: 8,
          id: 43
        },
        {
          name: "椰丝红枣",
          pirce: "8元/份",
          checkd: false,
          remord: 0,
          num: 8,
          id: 44
        },
        {
          name: "灵隐素烧鹅",
          pirce: "12元/份",
          checkd: false,
          remord: 1,
          num: 12,
          id: 45
        },
        {
          name: "外婆醉鱼干",
          pirce: "16元/份",
          checkd: false,
          remord: 0,
          num: 16,
          id: 46
        },
        {
          name: "西湖藕韵",
          pirce: "16元/份",
          checkd: false,
          remord: 2,
          num: 16,
          id: 215
        },
        {
          name: "豉油鸡旽",
          pirce: "16元/份",
          checkd: false,
          remord: 1,
          num: 16,
          id: 47
        },
        {
          name: "天目笋干",
          pirce: "18元/份",
          checkd: false,
          remord: 2,
          num: 18,
          id: 48
        },
        {
          name: "虾油肚片",
          pirce: "20元/份",
          checkd: false,
          remord: 0,
          num: 20,
          id: 49
        },
        {
          name: "温州鸭舌",
          pirce: "28元/份",
          checkd: false,
          remord: 0,
          num: 28,
          id: 50
        },
        {
          name: "杭州卤鸭",
          pirce: "32元/份",
          checkd: false,
          remord: 7,
          num: 32,
          id: 51
        },
        {
          name: "卤大肠",
          pirce: "35元/份",
          checkd: false,
          remord: 0,
          num: 35,
          id: 52
        },
      ],
      hotHbFood: [{
          name: "马蹄响铃",
          pirce: "12元/份",
          checkd: false,
          remord: 2,
          num: 12,
          id: 54
        },
        {
          name: "番茄锅巴",
          pirce: "16元/份",
          checkd: false,
          remord: 0,
          num: 16,
          id: 55
        },
        {
          name: "宋嫂鱼羹",
          pirce: "18元/份",
          checkd: false,
          remord: 1,
          num: 18,
          id: 56
        },
        {
          name: "蛋黄南瓜",
          pirce: "18元/份",
          checkd: false,
          remord: 0,
          num: 18,
          id: 57
        },
        {
          name: "杭三鲜",
          pirce: "18元/份",
          checkd: false,
          remord: 0,
          num: 18,
          id: 59
        },
        {
          name: "外婆斩鱼圆",
          pirce: "20元/份",
          checkd: false,
          remord: 0,
          num: 20,
          id: 60
        },
        {
          name: "杭儿酱丁",
          pirce: "22元/份",
          checkd: false,
          remord: 0,
          num: 22,
          id: 61
        },
        {
          name: "东海鱼滑",
          pirce: "22元/份",
          checkd: false,
          remord: 2,
          num: 22,
          id: 62
        },
        {
          name: "咸笃鲜",
          pirce: "32元/份",
          checkd: false,
          remord: 0,
          num: 32,
          id: 63
        },
        {
          name: "龙井虾仁",
          pirce: "55元/份",
          checkd: false,
          remord: 4,
          num: 55,
          id: 64
        },
        {
          name: "鸭葫芦",
          pirce: "58元/份",
          checkd: false,
          remord: 4,
          num: 58,
          id: 65
        },
        {
          name: "黄鱼烧年糕",
          pirce: "68元/份",
          checkd: false,
          remord: 2,
          num: 68,
          id: 66
        },
        {
          name: "肚包鸡",
          pirce: "68元/份",
          checkd: false,
          remord: 4,
          num: 68,
          id: 67
        },
        {
          name: "西湖醋鱼",
          pirce: "时价",
          checkd: false,
          remord: 1,
          num: 0,
          id: 68
        },
      ],
      barbecueFood: [{
          name: "香烤玉米",
          pirce: "5元/根",
          checkd: false,
          remord: 0,
          num: 5,
          id: 69
        },
        {
          name: "大烤茄子",
          pirce: "10元/份",
          checkd: false,
          remord: 0,
          num: 10,
          id: 70
        },
        {
          name: "香煎黄鱼",
          pirce: "15元/份",
          checkd: false,
          remord: 3,
          num: 15,
          id: 71
        },
        {
          name: "吴山烤翅",
          pirce: "16元/4只",
          checkd: false,
          remord: 1,
          num: 16,
          id: 71
        },
        {
          name: "外婆烤肉",
          pirce: "29元/份",
          checkd: false,
          remord: 1,
          num: 29,
          id: 72
        },
        {
          name: "泰式烤鳗干",
          pirce: "38元/份",
          checkd: false,
          remord: 4,
          num: 38,
          id: 73
        },
        {
          name: "外婆烤羊排",
          pirce: "68元/份",
          checkd: false,
          remord: 1,
          num: 68,
          id: 74
        },
      ],
      wantFood: [{
          name: "外婆顿蛋",
          pirce: "16元/份",
          checkd: false,
          remord: 1,
          num: 16,
          id: 75
        },
        {
          name: "外婆米粉",
          pirce: "18元/份",
          checkd: false,
          remord: 3,
          num: 18,
          id: 76
        },
        {
          name: "干锅土豆",
          pirce: "18元/份",
          checkd: false,
          remord: 2,
          num: 18,
          id: 77
        },
        {
          name: "一桶豆腐",
          pirce: "19元/份",
          checkd: false,
          remord: 3,
          num: 19,
          id: 78
        },
        {
          name: "韭菜蛤琍肉",
          pirce: "22元/份",
          checkd: false,
          remord: 3,
          num: 22,
          id: 79
        },
        {
          name: "韭香猪肝",
          pirce: "22元/份",
          checkd: false,
          remord: 1,
          num: 22,
          id: 80
        },
        {
          name: "冰火两重天",
          pirce: "22元/份",
          checkd: false,
          remord: 3,
          num: 22,
          id: 81
        },
        {
          name: "好吃的甜豆",
          pirce: "22元/份",
          checkd: false,
          remord: 5,
          num: 22,
          id: 82
        },
        {
          name: "香酥排腩",
          pirce: "29元/份",
          checkd: false,
          remord: 1,
          num: 29,
          id: 83
        },
        {
          name: "杭州卤鸭(冷)",
          pirce: "32元/份",
          checkd: false,
          remord: 6,
          num: 32,
          id: 84
        },
        {
          name: "蒜蓉粉丝虾",
          pirce: "35元/份",
          checkd: false,
          remord: 3,
          num: 35,
          id: 85
        },
        {
          name: "铁斗牛蛙",
          pirce: "45元/份",
          checkd: false,
          remord: 3,
          num: 45,
          id: 86
        },
        {
          name: "非一般海鲈鱼",
          pirce: "48元/份",
          checkd: false,
          remord: 3,
          num: 48,
          id: 87
        },
        {
          name: "酒香带鱼",
          pirce: "48元/份",
          checkd: false,
          remord: 4,
          num: 48,
          id: 88
        },
      ],
      grandMotherFood: [{
          name: "青豆泥",
          pirce: "15元/份",
          checkd: false,
          remord: 1,
          num: 15,
          id: 89
        },
        {
          name: "豆浆油条汤",
          pirce: "15元/份",
          checkd: false,
          remord: 1,
          num: 15,
          id: 90
        },
        {
          name: "新面包秀",
          pirce: "35元/份",
          checkd: false,
          remord: 4,
          num: 35,
          id: 91
        },
        {
          name: "铁板烤虾",
          pirce: "38元/份",
          checkd: false,
          remord: 1,
          num: 38,
          id: 92
        },
        {
          name: "外婆小牛肉",
          pirce: "38元/份",
          checkd: false,
          remord: 4,
          num: 38,
          id: 93
        },
        {
          name: "外婆红烧肉",
          pirce: "45元/份",
          checkd: false,
          remord: 6,
          num: 45,
          id: 94
        },
        {
          name: "茶香鸡",
          pirce: "45元/份",
          checkd: false,
          remord: 6,
          num: 45,
          id: 95
        },
        {
          name: "外婆鱼头",
          pirce: "58元/份",
          checkd: false,
          remord: 5,
          num: 58,
          id: 96
        },
      ],
      sweetFood: [{
          name: "酒酿元宵",
          pirce: "8元/份",
          checkd: false,
          remord: 3,
          num: 8,
          id: 97
        },
        {
          name: "双皮奶",
          pirce: "10元/份",
          checkd: false,
          remord: 0,
          num: 10,
          id: 98
        },
        {
          name: "银耳炖雪梨",
          pirce: "12元/份",
          checkd: false,
          remord: 4,
          num: 12,
          id: 99
        },
        {
          name: "花生冰沙",
          pirce: "15元/份",
          checkd: false,
          remord: 1,
          num: 15,
          id: 100
        },
        {
          name: "鲜芒果西米露",
          pirce: "18元/份",
          checkd: false,
          remord: 0,
          num: 18,
          id: 101
        },
        {
          name: "芒果冰沙",
          pirce: "18元/份",
          checkd: false,
          remord: 0,
          num: 18,
          id: 102
        },
        {
          name: "花生绵绵冰",
          pirce: "20元/份",
          checkd: false,
          remord: 0,
          num: 20,
          id: 103
        },
        {
          name: "招牌芒果芋圆",
          pirce: "20元/份",
          checkd: false,
          remord: 1,
          num: 20,
          id: 104
        },
        {
          name: "芒果绵绵冰",
          pirce: "20元/份",
          checkd: false,
          remord: 0,
          num: 20,
          id: 105
        },
        {
          name: "杨枝甘露",
          pirce: "22元/份",
          checkd: false,
          remord: 0,
          num: 22,
          id: 106
        },
        {
          name: "芒果牛奶冰",
          pirce: "28元/份",
          checkd: false,
          remord: 4,
          num: 28,
          id: 107
        },
      ],
      siChuanFood: [{
          name: "麻辣豆腐",
          pirce: "3元/份",
          checkd: false,
          remord: 2,
          num: 3,
          id: 108
        },
        {
          name: "鱼香肉丝",
          pirce: "18元/份",
          checkd: false,
          remord: 1,
          num: 18,
          id: 109
        },
        {
          name: "宫保鸡丁",
          pirce: "19元/份",
          checkd: false,
          remord: 1,
          num: 19,
          id: 110
        },
        {
          name: "精品小炒肉",
          pirce: "25元/份",
          checkd: false,
          remord: 5,
          num: 25,
          id: 111
        },
        {
          name: "干锅时件",
          pirce: "28元/份",
          checkd: false,
          remord: 1,
          num: 28,
          id: 112
        },
        {
          name: "湘味拆骨肉",
          pirce: "28元/份",
          checkd: false,
          remord: 2,
          num: 28,
          id: 113
        },
        {
          name: "小米椒爱上小公鸡",
          pirce: "30元/份",
          checkd: false,
          remord: 1,
          num: 30,
          id: 114
        },
        {
          name: "口味猪手",
          pirce: "32元/份",
          checkd: false,
          remord: 1,
          num: 32,
          id: 115
        },
        {
          name: "小炒黄牛肉",
          pirce: "32元/份",
          checkd: false,
          remord: 1,
          num: 32,
          id: 116
        },
        {
          name: "酸汤肥牛",
          pirce: "35元/份",
          checkd: false,
          remord: 2,
          num: 35,
          id: 117
        },
        {
          name: "酸菜鱼",
          pirce: "38元/份",
          checkd: false,
          remord: 1,
          num: 38,
          id: 118
        },
        {
          name: "水煮牛肉",
          pirce: "42元/份",
          checkd: false,
          remord: 4,
          num: 42,
          id: 119
        },
        {
          name: "青椒雪花鱼",
          pirce: "45元/份",
          checkd: false,
          remord: 5,
          num: 45,
          id: 120
        },
        {
          name: "青椒跳跳蛙",
          pirce: "45元/份",
          checkd: false,
          remord: 1,
          num: 45,
          id: 121
        },
        {
          name: "馋嘴蛙",
          pirce: "49元/份",
          checkd: false,
          remord: 7,
          num: 49,
          id: 122
        },
        {
          name: "沸腾鱼",
          pirce: "58元/份",
          checkd: false,
          remord: 8,
          num: 58,
          id: 123
        },
      ],
      hotFood: [{
          name: "蒜蓉扇贝",
          pirce: "8元/只",
          checkd: false,
          remord: 0,
          num: 8,
          id: 124
        },
        {
          name: "想吃土豆",
          pirce: "10元/份",
          checkd: false,
          remord: 0,
          num: 10,
          id: 125
        },
        {
          name: "小鲍鱼",
          pirce: "10元/只",
          checkd: false,
          remord: 0,
          num: 10,
          id: 126
        },
        {
          name: "鸡蛋挑石头",
          pirce: "10元/份",
          checkd: false,
          remord: 0,
          num: 10,
          id: 127
        },
        {
          name: "外婆下饭菜",
          pirce: "15元/份",
          checkd: false,
          remord: 1,
          num: 15,
          id: 128
        },
        {
          name: "毛毛菜芋艿",
          pirce: "16元/份",
          checkd: false,
          remord: 0,
          num: 16,
          id: 129
        },
        {
          name: "葱爆木耳",
          pirce: "15元/份",
          checkd: false,
          remord: 0,
          num: 15,
          id: 130
        },
        {
          name: "农家西葫芦",
          pirce: "15元/份",
          checkd: false,
          remord: 2,
          num: 15,
          id: 131
        },
        {
          name: "外婆小炒",
          pirce: "16元/份",
          checkd: false,
          remord: 2,
          num: 16,
          id: 132
        },
        {
          name: "韭黄粉皮",
          pirce: "16元/份",
          checkd: false,
          remord: 4,
          num: 16,
          id: 133
        },
        {
          name: "辣味炒粉丝",
          pirce: "18元/份",
          checkd: false,
          remord: 3,
          num: 18,
          id: 134
        },
        {
          name: "鱼子酱杏鲍菇",
          pirce: "18元/份",
          checkd: false,
          remord: 1,
          num: 18,
          id: 135
        },
        {
          name: "糖醋里脊",
          pirce: "18元/份",
          checkd: false,
          remord: 0,
          num: 18,
          id: 136
        },
        {
          name: "豆豉娃娃菜",
          pirce: "18元/份",
          checkd: false,
          remord: 1,
          num: 18,
          id: 137
        },
        {
          name: "港式金针菇",
          pirce: "20元/份",
          checkd: false,
          remord: 0,
          num: 20,
          id: 138
        },
        {
          name: "铁板香芋",
          pirce: "22元/份",
          checkd: false,
          remord: 1,
          num: 22,
          id: 139
        },
        {
          name: "避风塘豆腐鱼",
          pirce: "22元/份",
          checkd: false,
          remord: 3,
          num: 22,
          id: 140
        },
        {
          name: "避风塘豆腐鱼",
          pirce: "22元/份",
          checkd: false,
          remord: 3,
          num: 22,
          id: 140
        },
        {
          name: "腊味合蒸",
          pirce: "22元/份",
          checkd: false,
          remord: 0,
          num: 22,
          id: 141
        },
        {
          name: "茶树菇爆鲜鱿",
          pirce: "25元/份",
          checkd: false,
          remord: 1,
          num: 25,
          id: 142
        },
        {
          name: "茶树菇爆鲜鱿",
          pirce: "25元/份",
          checkd: false,
          remord: 1,
          num: 25,
          id: 143
        },
        {
          name: "小炒蹄筋",
          pirce: "25元/份",
          checkd: false,
          remord: 1,
          num: 25,
          id: 144
        },
        {
          name: "铜盆小海鲜",
          pirce: "26元/份",
          checkd: false,
          remord: 4,
          num: 26,
          id: 145
        },
        {
          name: "铁板肥牛",
          pirce: "32元/份",
          checkd: false,
          remord: 1,
          num: 32,
          id: 146
        },
        {
          name: "老萝卜带鱼",
          pirce: "38元/份",
          checkd: false,
          remord: 0,
          num: 38,
          id: 147
        },
        {
          name: "三杯鸡",
          pirce: "38元/份",
          checkd: false,
          remord: 1,
          num: 38,
          id: 148
        },
        {
          name: "招牌油条虾",
          pirce: "42元/份",
          checkd: false,
          remord: 4,
          num: 42,
          id: 149
        },
        {
          name: "奶油虾",
          pirce: "42元/份",
          checkd: false,
          remord: 1,
          num: 42,
          id: 150
        },
        {
          name: "石锅牛蛙",
          pirce: "42元/份",
          checkd: false,
          remord: 1,
          num: 42,
          id: 151
        },
        {
          name: "蟹煲粥",
          pirce: "68元/份",
          checkd: false,
          remord: 1,
          num: 68,
          id: 152
        },
        {
          name: "多宝鱼",
          pirce: "水台价",
          checkd: false,
          remord: 0,
          num: 0,
          id: 153
        },
        {
          name: "松子桂鱼",
          pirce: "水台价",
          checkd: false,
          remord: 0,
          num: 0,
          id: 154
        },
        {
          name: "姜葱青蟹",
          pirce: "水台价",
          checkd: false,
          remord: 0,
          num: 0,
          id: 155
        },
      ],
      soupFood: [{
          name: "番茄笋干蛋花汤",
          pirce: "12元/份",
          checkd: false,
          remord: 0,
          num: 12,
          id: 156
        },
        {
          name: "三鲜汤",
          pirce: "16元/份",
          checkd: false,
          remord: 0,
          num: 16,
          id: 157
        },
        {
          name: "百合南瓜羹",
          pirce: "18元/份",
          checkd: false,
          remord: 2,
          num: 18,
          id: 158
        },
        {
          name: "西湖牛肉羹",
          pirce: "20元/份",
          checkd: false,
          remord: 0,
          num: 20,
          id: 159
        },
        {
          name: "翡翠鳕鱼羹",
          pirce: "22元/份",
          checkd: false,
          remord: 4,
          num: 22,
          id: 160
        },
        {
          name: "萝卜诱惑",
          pirce: "38元/份",
          checkd: false,
          remord: 0,
          num: 38,
          id: 161
        },
        {
          name: "芋儿筒骨",
          pirce: "38元/份",
          checkd: false,
          remord: 1,
          num: 38,
          id: 162
        },
      ],
      vegetablesFood: [{
          name: "醋溜白菜",
          pirce: "8元/份",
          checkd: false,
          remord: 0,
          num: 8,
          id: 163
        },
        {
          name: "腐皮青菜",
          pirce: "12元/份",
          checkd: false,
          remord: 0,
          num: 12,
          id: 163
        },
        {
          name: "青菜钵钵",
          pirce: "12元/份",
          checkd: false,
          remord: 0,
          num: 12,
          id: 163
        },
        {
          name: "清炒莴笋",
          pirce: "15元/份",
          checkd: false,
          remord: 0,
          num: 15,
          id: 164
        },
        {
          name: "干煸四季豆",
          pirce: "15元/份",
          checkd: false,
          remord: 1,
          num: 15,
          id: 165
        },
        {
          name: "金蒜娃娃菜",
          pirce: "18元/份",
          checkd: false,
          remord: 1,
          num: 18,
          id: 166
        },
        {
          name: "肉酱菠菜",
          pirce: "18元/份",
          checkd: false,
          remord: 2,
          num: 18,
          id: 167
        },
        {
          name: "想吃花菜",
          pirce: "16元/份",
          checkd: false,
          remord: 3,
          num: 16,
          id: 168
        },
        {
          name: "养生小炒",
          pirce: "16元/份",
          checkd: false,
          remord: 0,
          num: 16,
          id: 169
        },
        {
          name: "好吃的甜豆",
          pirce: "22元/份",
          checkd: false,
          remord: 5,
          num: 22,
          id: 170
        },
      ],
      snackFood: [{
          name: "米饭",
          pirce: "2元/份",
          checkd: false,
          remord: 0,
          num: 2,
          id: 171
        },
        {
          name: "杭州春卷",
          pirce: "9元/3只",
          checkd: false,
          remord: 1,
          num: 9,
          id: 172
        },
        {
          name: "黄金煎饺",
          pirce: "9元/3只",
          checkd: false,
          remord: 1,
          num: 9,
          id: 173
        },
        {
          name: "外婆年糕",
          pirce: "12元/份",
          checkd: false,
          remord: 0,
          num: 12,
          id: 174
        },
        {
          name: "绿茶饼",
          pirce: "12元/6只",
          checkd: false,
          remord: 1,
          num: 12,
          id: 175
        },
        {
          name: "外婆麻嗞",
          pirce: "15元/份",
          checkd: false,
          remord: 0,
          num: 15,
          id: 176
        },
        {
          name: "酒酿圆子羹",
          pirce: "15元/份",
          checkd: false,
          remord: 0,
          num: 15,
          id: 177
        },
        {
          name: "外婆黑米糕",
          pirce: "15元/份",
          checkd: false,
          remord: 3,
          num: 15,
          id: 178
        },
        {
          name: "外婆飞饼",
          pirce: "18元/份",
          checkd: false,
          remord: 0,
          num: 18,
          id: 179
        },
        {
          name: "烤肉拌饭",
          pirce: "18元/份",
          checkd: false,
          remord: 0,
          num: 18,
          id: 180
        },
        {
          name: "片儿川",
          pirce: "18元/品锅",
          checkd: false,
          remord: 0,
          num: 18,
          id: 181
        },
        {
          name: "石锅泡饭",
          pirce: "22元/份",
          checkd: false,
          remord: 0,
          num: 22,
          id: 182
        },
      ],
      drinkFood: [{
          name: "健康水",
          pirce: "3元/杯",
          checkd: false,
          remord: 0,
          num: 3,
          id: 183
        },
        {
          name: "冰桔茶",
          pirce: "8元/杯",
          checkd: false,
          remord: 0,
          num: 8,
          id: 184
        },
        {
          name: "冰桔茶",
          pirce: "8元/杯",
          checkd: false,
          remord: 1,
          num: 8,
          id: 184
        },
        {
          name: "红豆健康特饮",
          pirce: "12元/杯",
          checkd: false,
          remord: 0,
          num: 12,
          id: 185
        },
        {
          name: "港式奶茶",
          pirce: "15元/杯",
          checkd: false,
          remord: 0,
          num: 15,
          id: 186
        },
        {
          name: "酸梅汁",
          pirce: "28元/扎",
          checkd: false,
          remord: 0,
          num: 28,
          id: 187
        },
        {
          name: "菊花茶",
          pirce: "30元/壶",
          checkd: false,
          remord: 0,
          num: 30,
          id: 188
        },
        {
          name: "龙井茶",
          pirce: "35元/壶",
          checkd: false,
          remord: 0,
          num: 35,
          id: 189
        },
        {
          name: "抹茶优格",
          pirce: "36元/扎",
          checkd: false,
          remord: 0,
          num: 36,
          id: 190
        },
        {
          name: "黑加仑雪梨汁",
          pirce: "36元/扎",
          checkd: false,
          remord: 0,
          num: 36,
          id: 191
        },
        {
          name: "经典西柚汁",
          pirce: "36元/扎",
          checkd: false,
          remord: 0,
          num: 36,
          id: 192
        },
        {
          name: "玉米汁",
          pirce: "38元/扎",
          checkd: false,
          remord: 1,
          num: 38,
          id: 193
        },
        {
          name: "芒果水蜜桃汁",
          pirce: "38元/扎",
          checkd: false,
          remord: 0,
          num: 38,
          id: 194
        },
        {
          name: "西瓜汁",
          pirce: "38元/扎",
          checkd: false,
          remord: 0,
          num: 38,
          id: 195
        },
        {
          name: "香蕉奶昔",
          pirce: "38元/扎",
          checkd: false,
          remord: 0,
          num: 38,
          id: 196
        },
        {
          name: "红豆牛奶",
          pirce: "48元/扎",
          checkd: false,
          remord: 0,
          num: 48,
          id: 197
        },
        {
          name: "柳橙汁",
          pirce: "48元/扎",
          checkd: false,
          remord: 0,
          num: 48,
          id: 198
        },
        {
          name: "芒果雪梨露",
          pirce: "48元/扎",
          checkd: false,
          remord: 4,
          num: 48,
          id: 199
        },
      ],
      alcoholFood: [{
          name: "可乐",
          pirce: "5元/330ml",
          checkd: false,
          remord: 0,
          num: 5,
          id: 200
        },
        {
          name: "雪碧",
          pirce: "5元/330ml",
          checkd: false,
          remord: 0,
          num: 5,
          id: 201
        },
        {
          name: "嘉士伯扎啤",
          pirce: "15元/杯",
          checkd: false,
          remord: 0,
          num: 15,
          id: 202
        },
        {
          name: "青岛冰樽",
          pirce: "10元/500ml",
          checkd: false,
          remord: 0,
          num: 10,
          id: 203
        },
        {
          name: "燕京纯生",
          pirce: "12元/500ml",
          checkd: false,
          remord: 0,
          num: 12,
          id: 204
        },
        {
          name: "古越龙山五年陈",
          pirce: "38元/500ml",
          checkd: false,
          remord: 0,
          num: 38,
          id: 205
        },
        {
          name: "长城解百纳",
          pirce: "88元/750ml",
          checkd: false,
          remord: 0,
          num: 88,
          id: 206
        },
        {
          name: "会稽山五年花雕",
          pirce: "98元/500ml",
          checkd: false,
          remord: 0,
          num: 98,
          id: 207
        },
        {
          name: "牛栏山珍品二锅头",
          pirce: "98元/450ml",
          checkd: false,
          remord: 0,
          num: 98,
          id: 208
        },
        {
          name: "四星金六福",
          pirce: "128元/500ml",
          checkd: false,
          remord: 0,
          num: 128,
          id: 209
        },
        {
          name: "张裕解百纳",
          pirce: "158元/750ml",
          checkd: false,
          remord: 0,
          num: 158,
          id: 210
        },
        {
          name: "百年牛栏山",
          pirce: "228元/400ml",
          checkd: false,
          remord: 0,
          num: 228,
          id: 211
        },
        {
          name: "剑南春",
          pirce: "828元/500ml",
          checkd: false,
          remord: 0,
          num: 828,
          id: 212
        },
      ]

    },
    bgSelect: {},
    selectArr: [],
    allMoney: 0,
    clsBool: false,
    leftMoved: 10,
    suijiArr: [],
    suijiMoney: 0,
    right: false,
    imgArr: ['../../static/img/img_open.png', '../../static/img/img_close.png'],
  },
  event: function() {
    this.setData({
      right: this.data.right ? false : true
    })
    this.casualEvent()
  },
  leftEvent: function(e) {
    let {
      id,
      objindex
    } = e.currentTarget.dataset;
    this.setData({
      selectClass: id,
      rightArr: this.data.obj[objindex]
    })
  },
  rightEvent: function(e) {
    let {
      item
    } = e.currentTarget.dataset;
    let bgSelect = this.data.bgSelect;
    let arr = [];
    if (bgSelect[item.id]) {
      delete bgSelect[item.id];
    } else {
      bgSelect[item.id] = item;
    }
    for (let i in bgSelect) {
      arr.push(bgSelect[i])
    }
    let money = 0;
    for (var a = 0; a < arr.length; a++) {
      money += arr[a].num
    }
    
    this.setData({
      bgSelect: bgSelect,
      selectArr: arr,
      allMoney: money
    })
    console.log(this.data.selectArr, 'bgSelectbgSelect')
  },
  logoEvent: function() {
    this.setData({
      clsBool: !this.data.clsBool
    })

  },
  orderEvent:function(){
    let { allMoney } = this.data;
    if (allMoney >= 150) {
      this.toast.toastShow('刚发完工资吧');
    } else if (allMoney <= 50) {
      this.toast.toastShow('再来几个对自己好点吧');
    } else if (allMoney <= 120) {
      this.toast.toastShow('不错不错刚刚好');
    }
  },
  casualEvent: function() {
    let brr = [],
      item = {};
    let suiji1 = parseInt(Math.random() * 11);
    item = this.data.obj['hotFood'][suiji1];
    brr.push(item)
    let suiji2 = parseInt(Math.random() * 8);
    item = this.data.obj['grandMotherFood'][suiji2];
    brr.push(item)
    let suiji3 = parseInt(Math.random() * 7);
    item = this.data.obj['soupFood'][suiji3];
    brr.push(item)
    let suiji4 = parseInt(Math.random() * 7);
    item = this.data.obj['siChuanFood'][suiji4];
    brr.push(item)
    let suiji5 = parseInt(Math.random() * 15);
    item = this.data.obj['wantFood'][suiji5];
    brr.push(item)
    let suiji6 = parseInt(Math.random() * 20);
    item = this.data.obj['coolFood'][suiji6];
    brr.push(item)
    this.setData({
      suijiArr: brr
    })

    let money1 = 0;
    for (var a = 0; a < brr.length; a++) {
      money1 += brr[a].num
    }
    
    this.setData({
      suijiMoney: money1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.toast = this.selectComponent('.msg-toast');
   

    this.setData({
      selectClass: 1,
      rightArr: this.data.obj['coolFood']
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let {
      leftMoved
    } = this.data;
    setInterval(() => {
      leftMoved += 5
      this.setData({
        leftMoved
      })
    }, 300)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  /**
     * 用户点击右上角分享
     */
  onShareAppMessage: function () {

  }

})