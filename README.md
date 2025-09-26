# Artisan Coffee Roasters - 高性能ポートフォリオサイト

洗練されたデザインのスペシャルティコーヒーロースターのポートフォリオサイトです。

## 📁 ファイル構成

```
coffee-portfolio/
├── index.html          # 最適化されたHTML（インラインCSS/JS含む）
├── styles.css          # 非クリティカルCSS（非同期読み込み）
├── script.js           # 非クリティカルJavaScript（非同期読み込み）
├── fonts.css           # 自己ホスト化フォント
├── sw.js              # 最適化されたService Worker
├── manifest.json      # PWAマニフェスト
├── .htaccess          # HTTP/2 Pushとキャッシュ戦略
├── .nojekyll          # Jekyll無効化
├── images/
│   └── coffee-beans.webp  # 最適化されたWebP画像
└── README.md          # このファイル
```

## 🛠 技術仕様

### パフォーマンス最適化
- **クリティカルレンダリングパス最適化**: ファーストビューのリソースを優先
- **リソース優先度**: 重要なリソースに高い優先度を設定
- **バンドルサイズ削減**: 不要なコードの削除と最適化
- **キャッシュ戦略**: 静的リソースの長期キャッシュと動的コンテンツの適切なキャッシュ

### レスポンシブデザイン
- **モバイルファースト**: モバイル向けの最適化を優先
- **適応的レイアウト**: CSS GridとFlexboxの活用
- **タッチ最適化**: タッチターゲットサイズの最適化

### アクセシビリティ
- **セマンティックHTML**: 適切なHTML構造
- **キーボードナビゲーション**: 完全なキーボード対応
- **スクリーンリーダー対応**: ARIA属性の適切な使用
- **カラーコントラスト**: WCAG準拠のコントラスト比

## 🚀 GitHub Pagesでの公開

### 1. リポジトリの作成
```bash
# GitHubでリポジトリを作成
# リポジトリ名: portfolio-_001
```

### 2. ファイルのプッシュ
```bash
cd /Users/yhinoda/Documents/coffee-portfolio
git init
git remote add origin https://github.com/yourusername/portfolio-_001.git
git add .
git commit -m "Optimized coffee portfolio for 90+ PageSpeed score"
git push -u origin main
```

### 3. GitHub Pagesの有効化
1. リポジトリの「Settings」→「Pages」
2. Source: 「Deploy from a branch」
3. Branch: 「main」
4. 「Save」をクリック

### 4. 公開完了
- サイトURL: `https://yourusername.github.io/portfolio-_001/`

### サーバー側の最適化
- **CDNの使用**: CloudflareやAWS CloudFrontの活用
- **HTTP/3の有効化**: 最新のプロトコルの使用
- **画像の最適化**: 適切なサイズとフォーマットの選択

### モニタリング
- **Core Web Vitals**: LCP、FID、CLSの継続的な監視
- **Real User Monitoring**: 実際のユーザー体験の測定
- **A/Bテスト**: パフォーマンス改善の検証

## 🌐 ブラウザ対応

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 📱 PWA機能

- **オフライン対応**: Service Workerによる完全なオフライン機能
- **インストール可能**: ホーム画面への追加
- **プッシュ通知**: 新着情報の通知
- **バックグラウンド同期**: フォーム送信の同期

## 📄 ライセンス

MIT License

## 👨‍💻 作成者

Artisan Coffee Roasters

---
