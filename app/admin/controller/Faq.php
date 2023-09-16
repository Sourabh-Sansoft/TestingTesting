<?php

namespace app\admin\controller;

use app\common\controller\Backend;

/**
 * faq
 *
 */
class Faq extends Backend
{
    /**
     * Faq模型对象
     * @var \app\admin\model\Faq
     */
    protected $model = null;
    
    protected $quickSearchField = ['id'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\Faq;
        $this->request->filter('trim,htmlspecialchars');
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */
}