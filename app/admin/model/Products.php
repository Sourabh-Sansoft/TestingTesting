<?php

namespace app\admin\model;

use think\Model;

/**
 * Products
 */
class Products extends Model
{
    // 表名
    protected $name = 'products';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;


    public function getCarouselAttr($value): array
    {
        if ($value === '' || $value === null) return [];
        if (!is_array($value)) {
            return explode(',', $value);
        }
        return $value;
    }

    public function setCarouselAttr($value): string
    {
        return is_array($value) ? implode(',', $value) : $value;
    }
}