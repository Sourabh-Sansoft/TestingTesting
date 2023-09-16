<?php

namespace app\admin\controller;

use app\common\controller\Backend;

/**
 * 留言板
 *
 */
class Message extends Backend
{
    /**
     * Message模型对象
     * @var \app\admin\model\Message
     */
    protected $model = null;
    
    protected $preExcludeFields = ['create_time'];

    protected $quickSearchField = ['id'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\Message;
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */
}