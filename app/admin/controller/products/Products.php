<?php

namespace app\admin\controller\products;

use app\common\controller\Backend;

/**
 * 产品配置
 *
 */
class Products extends Backend
{
    /**
     * Products模型对象
     * @var \app\admin\model\Products
     */
    protected $model = null;

    protected $quickSearchField = ['id'];

    protected $noNeedPermission = ['add','del', 'edit','sortable', 'index'];

    public function initialize()
    {
        parent::initialize();
        $this->model = new \app\admin\model\Products;
    }


    /**
     * 若需重写查看、编辑、删除等方法，请复制 @see \app\admin\library\traits\Backend 中对应的方法至此进行重写
     */
}
