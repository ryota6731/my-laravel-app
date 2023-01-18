# お手軽LAMP環境構築
PHP + Nginx + MySQL  
会社のチームメンバの勉強用に、利用します。

# 環境構築の手順
自分のPC上の好きな場所にプロジェクトフォルダを作成する。  
プロジェクトフォルダへcloneする。

## dockerの起動  
my-laravel-app/app で、`docker-compose up -d` を実行。  
起動できているか確認 `docker-compose ps`  
失敗していたら以下手順を実行。  
```
docker-compose stop
docker-compose rm -f
docker-compose up -d
```

## composerのインストール  
my-laravel-app/app で、`composer install`  

## .envファイル作成  
.envファイルを作成し  
.env.exampleの中身を.envへコピー  
DBの情報をdocker-compose.ymlを参考に入力する。  
`php artisan key:generate`を実行  
APP_KEYに、キー生成されているか確認する。  
`php artisan serve`を実行し立ち上がるかテストする。  

## npm install  
my-laravel-app/app で、`npm install`を実行

## Browsersyncの起動方法  
appディレクトリで  
`npm run watch ` 
