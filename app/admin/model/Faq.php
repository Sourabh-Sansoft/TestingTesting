<?php

namespace app\admin\model;

use think\Model;

/**
 * Faq
 */
class Faq extends Model
{
    // 表名
    protected $name = 'faq';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;


    public function getRichContentAttr($value): string
    {
        return !$value ? '' : htmlspecialchars_decode($value);
    }

    public function getEnRichContentAttr($value): string
    {
        return !$value ? '' : htmlspecialchars_decode($value);
    }
}