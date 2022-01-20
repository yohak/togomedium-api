# Growth Medium

Swagger (OpenAPI) 形式でHCRのAPIをドキュメント化する

## ローカルでの確認/開発方法

* npm install
* npm run dev

ブラウザーが開き、Redoc でプレビューができる。
また、BrowserSyncが走っているので、yamlファイルを編集するとオートリロードされる。

### 使用ポート
本プロジェクトではローカルホスト上で以下のポートが使用される

* localhost:8080 Express Server 用
* localhost:3001 オートリロード(BroswerSync) 用

このポートはNPM スクリプト使用時の引数で変更できる
```
npm run dev #BSPort #ExpressPort
```

## スキーマのvalidation
```
npm run lint
```
また、上記 `npm run` 実行中にはファイル更新のタイミングで必ずバリデーションが実行される。


## 静的ファイルの書き出し
以下のコマンドを実行すると`/public/index.html` というひとつのファイルにまとまって出力される。(.gitignore対象)
```
npm run build
```

## コードフォーマット
本プロジェクトではPrettierを採用している。  
エディターの設定でyaml / json保存時にPrettierの実行を有効にすること。

## おすすめリソース

VSCode ならnpm 不要でライブプレビューしながら編集できる。(ただしSwagger形式のプレビューなのでRedocとは見た目が異なる)  
[https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer][1]

JetBrains系の補完プラグイン  
[https://plugins.jetbrains.com/plugin/8347-swagger][2]

JetBrains系のプラグイン補完＆ライブビューができるが有料  
[https://plugins.jetbrains.com/plugin/12887-openapi-editor][3]

[1]:	https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer
[2]:	https://plugins.jetbrains.com/plugin/8347-swagger
[3]:    https://plugins.jetbrains.com/plugin/12887-openapi-editor
