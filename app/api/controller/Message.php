<?php

namespace app\api\controller;

use app\common\controller\Frontend;
use think\facade\Db;
use think\helper\Str;
use function Sodium\add;


class Message extends Frontend
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
        $name = $this->request->post('name');
        $company = $this->request->post('company');
        $phone = $this->request->post('phone');
        $email = $this->request->post('email');
        $message = $this->request->post('message');

        $data = [
            'name' => $name,
            'company' => $company,
            'phone' => $phone,
            'email' => $email,
            'message' => $message,
            'create_time' => strtotime(date('Y-m-d H:i:s', time())),
        ];

        try {
            Db::table('ca_message')->insert($data);
        }
        catch (\Exception $e) {
            Db::rollback();
            $this->error($e->getMessage());
        }

        $this->success('success');
    }
}
