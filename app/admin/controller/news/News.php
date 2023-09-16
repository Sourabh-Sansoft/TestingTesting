<?php

namespace app\admin\controller\news;

use app\common\controller\Backend;

/**
 * 企业动态
 *
 */
class News extends Backend
{
    /**
     * News模型对象
     * @var \app\admin\model\News
     */
    protected $model = null;
    
    protected $preExcludeFields = ['id', 'create_time'];

    protected $quickSearchField = ['id'];

    protected $noNeedPermission = ['add','del', 'edit','sortable', 'index'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\News;
        $this->request->filter('trim,htmlspecialchars');
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */
}