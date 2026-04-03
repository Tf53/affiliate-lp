export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  amazonUrl: string;
  badge?: string;
  features: string[];
};

export const products: Product[] = [
  {
    id: "earphone-1",
    name: "ワイヤレスイヤホン Pro",
    description:
      "アクティブノイズキャンセリング搭載のフラッグシップモデル。最大30時間再生でどこでも高音質を楽しめる。テレワークや通勤に最適な一台。",
    image: "https://picsum.photos/seed/earphone1/600/400",
    price: 8980,
    originalPrice: 12980,
    amazonUrl: "https://www.amazon.co.jp/",
    badge: "人気No.1",
    features: [
      "アクティブノイズキャンセリング搭載",
      "最大30時間再生（ケース込み）",
      "IPX5防水・急速充電対応",
      "マルチポイント2台同時接続",
    ],
  },
  {
    id: "earphone-2",
    name: "コンパクトイヤホン Lite",
    description:
      "軽量5gの超コンパクト設計。通勤・通学のお供にぴったりなエントリーモデル。初めてのワイヤレスイヤホンにもおすすめ。",
    image: "https://picsum.photos/seed/earphone2/600/400",
    price: 3980,
    originalPrice: 5980,
    amazonUrl: "https://www.amazon.co.jp/",
    badge: "コスパ最強",
    features: [
      "片耳わずか5gの超軽量",
      "最大20時間再生",
      "Bluetooth 5.3 安定接続",
      "タッチ操作対応",
    ],
  },
  {
    id: "earphone-3",
    name: "スポーツイヤホン Run",
    description:
      "IPX7完全防水でランニングも安心。耳から外れにくいフック設計でアクティブに使える。外音取り込み機能で安全に運動できる。",
    image: "https://picsum.photos/seed/earphone3/600/400",
    price: 6480,
    amazonUrl: "https://www.amazon.co.jp/",
    badge: "スポーツ向け",
    features: [
      "IPX7完全防水・耐汗設計",
      "イヤーフック付きで落下防止",
      "外音取り込みモード搭載",
      "最大25時間再生",
    ],
  },
  {
    id: "earphone-4",
    name: "ハイレゾイヤホン Hi-Fi",
    description:
      "ハイレゾ音源対応の高音質モデル。音楽をとことん楽しみたいオーディオファン向け。10mmドライバーが奏でる豊かな低音が魅力。",
    image: "https://picsum.photos/seed/earphone4/600/400",
    price: 14800,
    originalPrice: 19800,
    amazonUrl: "https://www.amazon.co.jp/",
    badge: "高音質",
    features: [
      "ハイレゾ・LDAC対応",
      "10mmダイナミックドライバー搭載",
      "マルチポイント2台同時接続",
      "イコライザーアプリ対応",
    ],
  },
  {
    id: "speaker-1",
    name: "ポータブルスピーカー Mini",
    description:
      "手のひらサイズでどこでも使えるBluetoothスピーカー。360度サウンドで広がりのある音楽体験を。アウトドアにもぴったり。",
    image: "https://picsum.photos/seed/speaker1/600/400",
    price: 4980,
    originalPrice: 6980,
    amazonUrl: "https://www.amazon.co.jp/",
    badge: "新着",
    features: [
      "360度全方位サウンド",
      "IPX7完全防水",
      "最大12時間再生",
      "USB-C充電対応",
    ],
  },
  {
    id: "speaker-2",
    name: "ホームスピーカー Home",
    description:
      "部屋全体に響くパワフルサウンド。自宅での音楽鑑賞やパーティーシーンに最適。スマホアプリで細かく音質を調整できる。",
    image: "https://picsum.photos/seed/speaker2/600/400",
    price: 18800,
    originalPrice: 24800,
    amazonUrl: "https://www.amazon.co.jp/",
    badge: "プレミアム",
    features: [
      "40W高出力ステレオサウンド",
      "Wi-Fi・Bluetooth両対応",
      "マルチルーム再生対応",
      "専用アプリでEQ調整",
    ],
  },
  {
    id: "headphone-1",
    name: "オーバーイヤーヘッドホン Studio",
    description:
      "長時間装着でも疲れにくいクッション設計。スタジオ品質のサウンドを自宅で。折りたたみ可能でコンパクトに持ち運べる。",
    image: "https://picsum.photos/seed/headphone1/600/400",
    price: 11800,
    originalPrice: 15800,
    amazonUrl: "https://www.amazon.co.jp/",
    badge: "編集部イチオシ",
    features: [
      "40mm大口径ドライバー搭載",
      "最大50時間再生",
      "折りたたみコンパクト設計",
      "有線・無線両対応",
    ],
  },
  {
    id: "headphone-2",
    name: "ゲーミングヘッドセット GX",
    description:
      "低遅延設計でゲームに没入できるヘッドセット。7.1chサラウンド対応で敵の足音まで聞き取れる。長時間プレイでも快適なフィット感。",
    image: "https://picsum.photos/seed/headphone2/600/400",
    price: 9800,
    amazonUrl: "https://www.amazon.co.jp/",
    badge: "ゲーマー向け",
    features: [
      "7.1chバーチャルサラウンド",
      "取り外し可能なノイズキャンセルマイク",
      "低遅延2.4GHzワイヤレス",
      "RGB ライティング搭載",
    ],
  },
];
