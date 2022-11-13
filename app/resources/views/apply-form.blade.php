<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="{{ asset('css/base.css') }}" rel="stylesheet">
        <link href="{{ asset('css/style.css') }}" rel="stylesheet">

    </head>
    <body class="antialiased">


        <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
            <div id="header"><div id='header-wrap'>
                <a href='#' id='header-left'>オンラインカタログはこちら</a>
                
                <div id='header-right' className='mr10'>
                    <div><a href='#' className='header-contents'>＞Do! earth & green について</a></div>
                    <div><a href='#' className='header-contents'>＞ショールームのご案内</a></div>
                    <div><a href='#' className='header-contents'>＞お問い合わせ</a></div>
                </div>
            </div>
        </div>

        <div id='body'>
            <div id="sidebar">


                <div id='sidebar-wrap'>
                    <div><img id='icon' className='mt20' src="{{ asset('images/tibetto.jpg') }}" /></div>
                    <div id='introduce'>
                        <h1>サービスのご案内</h1>
                        <p>はじめての方へ</p>
                    </div>
                    <div id='side-list'>
                        <ul>
                            <img class='side-logo' src="{{ asset('images/login-logo.png') }}">
                            <li>ログイン</li>
                        </ul>
                        <ul>
                            <img class='side-logo' src="{{ asset('images/register-logo.png') }}">
                            <li>会員登録</li>
                        </ul>
                        <ul>
                            <img class='side-logo' src="{{ asset('images/beginer-logo.png') }}">
                            <li>ご利用ガイド</li>
                        </ul>
                        <ul>
                            <img class='side-logo' src="{{ asset('images/stock-logo.jpg') }}">
                            <li>在庫確認</li>
                        </ul>
                        <ul>
                            <img class='side-logo' src="{{ asset('images/login-logo.png') }}">
                            <li>カタログ</li>
                        </ul>
                        <ul>
                            <img class='side-logo' src="{{ asset('images/login-logo.png') }}">
                            <li>まとめてオーダー</li>
                        </ul>
                        <ul>
                            <img class='side-logo' src="{{ asset('images/login-logo.png') }}">
                            <li>Do!Magazine</li>
                        </ul>
                        <ul>
                            <img class='side-logo' src="{{ asset('images/login-logo.png') }}">
                            <li>画像・POPダウンロード</li>
                        </ul>
                        <div class='choose-category'>カテゴリーから選ぶ</div>
                        <div id='category-list'>
                            <ul class="category-option">
                                <li>植物</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>栽培セット・種</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>土・肥料</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>ガーデン道具</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>ジョーロ・スプレー</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>グリーンアクセサリー</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>鉢・鉢カバー</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>アートフラワー</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>2022 NEW ITEM</li>
                                <li class="ddl-icon">></li>
                            </ul>
                        </div>
                        <div id='category-list'>
                            <div class='choose-category'>テーマから選ぶ</div>
                            <ul class="category-option">
                                <li>グリーンライフの提案</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>グリーンを元気に</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>サステナブルな暮らし</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>ギフトにおすすめ</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>カラーで選ぶ</li>
                                <li class="ddl-icon">></li>
                            </ul>
                        </div>
                        <div id='category-list'>
                            <div class='choose-category'>ブランドから選ぶ</div>
                            <ul class="category-option">
                                <li>evo</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>SPEAR & JACKSON</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>KANGURO</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>TURK</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>plastia</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>Plastime</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>BERGS POTTER</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>EPOCA</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>HILLBRUSH</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>Another Studio</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>Blundstone</li>
                                <li class="ddl-icon">></li>
                            </ul>
                            <ul class="category-option">
                                <li>Tarter</li>
                                <li class="ddl-icon">></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>

            <div id='main-wrap'>
                <div id='store-info'>
                    <div><a href='#' id='phone-number' class='info-contents'>052-369-0091</a></div>
                    <div><a href='#' id='business-hours' class='info-contents'>受付時間：平日 9:00～18:00</a></div>
                    <div><a href='#' id='cart' class='info-contents'>カートを見る</a></div>
                </div>
                <h2 id='register-logo'>会員登録</h2>

                <!-- propsを使って動的な書き方に変更できそう -->
                <div id='page-nest'>
                    <a href='#' id='top-page-tag'>Top</a>
                    <p id='page-name'>会員登録</p>  
                </div>

                <div class='post-contents'>

                    <p class='text-center'>このサイトは、法人・店舗・個人事業主さまのみご利用いただけます。</p>
                    <p class='text-center'>お取引をご希望される方は、以下申請フォームよりご登録をお願いいたします。</p>
                    <p class='text-center'>折り返し、お取引条件、ID・パスワードなどをご連絡させていただきます。</p>

                    <p class='text-center' id='register-caution'>※一般の個人の方は、ご登録いただけませんのでご注意ください。</p>

                    <div id='author-link' class='text-center'>
                        <ul>
                            <li><a href='#'>登録の流れ</a></li>
                            <li><a href='#'>会員登録申請フォーム</a></li>
                        </ul> 
                    </div>

                    <div id='apply-form01'>
                        <h2>登録の流れ</h2>
                    </div>

                    <div class='step-box'>
                        <div class='step-box-items'>
                            <img src="https://blog.dolabo.co.jp/wp-content/themes/do-2021/img/apply-form/apply-form_step1_title.png" alt="1.会員登録申請フォームに入力" width="660" height="35">
                        </div>
                        <div class='clearfix'>
                            <img loading="lazy" src="https://blog.dolabo.co.jp/wp-content/themes/do-2021/img/apply-form/apply-form_step1.png" alt="会員登録申請フォームに入力" width="246" height="114">
                            <div class='step-text'>
                                <p>左メニューの「会員登録」より、登録フォームに情報を入力ください。</p>
                            </div>
                        </div>
                    </div>
                    <div class='text-center mt20'>
                        <img loading="lazy" src="https://blog.dolabo.co.jp/wp-content/themes/do-2017/img/apply-form/shinsa.png" alt="審査：1～2営業日" width="151" height="31">
                    </div>

                    <div class='step-box'>
                        <div class='step-box-items'>
                            <img loading="lazy" src="https://blog.dolabo.co.jp/wp-content/themes/do-2017/img/apply-form/apply-form_step2_title.png" alt="2.審査後 ID・パスワード発行" width="660" height="35">
                        </div>
                        <div class='clearfix'>
                            <img loading="lazy" src="https://blog.dolabo.co.jp/wp-content/themes/do-2017/img/apply-form/apply-form_step2.png" alt="審査後 ID・パスワード発行" width="242" height="99">
                            <div class='step-text'>
                                <p>お取引条件・ID・パスワードがメールで通知されます。</p>
                            </div>
                        </div>
                    </div>

                    <div class='step-box'>
                        <div class='step-box-items'>
                            <img loading="lazy" src="https://blog.dolabo.co.jp/wp-content/themes/do-2017/img/apply-form/apply-form_step3_title.png" alt="3.お取引開始" width="660" height="35">
                        </div>
                        <div class='clearfix'>
                            <img loading="lazy" src="https://blog.dolabo.co.jp/wp-content/themes/do-2017/img/apply-form/apply-form_step2.png" alt="審査後 ID・パスワード発行" width="242" height="99">
                            <div class='step-text'>
                                <p>ご注文が可能になります。<br>
                                    掛売（後払い）希望の方は、ログインした上でPaid のご登録へとお進みください。</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
