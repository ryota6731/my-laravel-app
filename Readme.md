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

## appコンテナに入る
`docker compose exec app bash`  


## composerのインストール  
appディレクトリで 
```
chmod -R 777 storage bootstrap/cache
composer install
```

## .envファイル作成  
.env.exampleの中身を.envへコピー  
`cp .env.example .env`  
APP_KEYを生成  
`php artisan key:generate`   
シンボリックリンクを張る  
`php artisan storage:link`  
マイグレーション  
`php artisan migrate`
