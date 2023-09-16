<?php

namespace app\api\controller;

use app\common\controller\Frontend;
use think\facade\Db;
use function Sodium\add;


class News extends Frontend
{
    /**
     * 无需登录的方法
     * 访问本控制器的此方法，无需会员登录
     */
    protected $noNeedLogin = ['index'];

    /**
     * 无需鉴权的方法
     */
    protected $noNeedPermission = ['index'];

    public function index()
    {
        Db::table('ca_news')->chunk(100, function ($new){
            $news[] = $new;
            $this->success('', [
                'news' => $news,
            ]);
        });
    }
}
