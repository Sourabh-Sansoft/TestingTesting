<?php

namespace app\api\controller;

use think\facade\Config;
use app\common\controller\Frontend;

class Index extends Frontend
{
    protected $noNeedLogin = ['index'];

    public function initialize()
    {
        parent::initialize();
    }

    public function index()
    {
        $this->success('', [
            'site'             => [
                'siteName'     => get_sys_config('site_name'),
                'recordNumber' => get_sys_config('record_number'),
                'version'      => get_sys_config('version'),
                'cdnUrl'       => full_url(),
                'upload'       => get_upload_config(),
                'phone'       => get_sys_config('phone'),
                'address'       => get_sys_config('address'),
                'email'       => get_sys_config('email'),
                'whatsapp'       => get_sys_config('whatsapp'),
                'district'       => get_sys_config('district'),
                'street'       => get_sys_config('street'),
                'facebook'       => get_sys_config('facebook'),
                'instagram'       => get_sys_config('instagram'),
                'twitter'       => get_sys_config('twitter'),
                'index_faq_1'       => get_sys_config('index_faq_1', 'config_quick_entrance'),
                'index_faq_2'       => get_sys_config('index_faq_2', 'config_quick_entrance'),
                'index_faq_3'       => get_sys_config('index_faq_3', 'config_quick_entrance'),
                'index_product_list'       => get_sys_config('index_product_list', 'config_quick_entrance'),
                'index_product_left'       => get_sys_config('index_product_left', 'config_quick_entrance'),
                'index_product_right'       => get_sys_config('index_product_right', 'config_quick_entrance'),
            ],
            'openMemberCenter' => Config::get('buildadmin.open_member_center'),
        ]);
    }
}
