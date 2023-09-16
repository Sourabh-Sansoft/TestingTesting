<?php

namespace app\admin\model;

use think\Model;

/**
 * News
 */
class News extends Model
{
    // 表名
    protected $name = 'news';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = true;
    protected $updateTime = false;


    public function getContentAttr($value): string
    {
        return !$value ? '' : htmlspecialchars_decode($value);
    }

    public function getEnContentAttr($value): string
    {
        return !$value ? '' : htmlspecialchars_decode($value);
    }

    public function getVideoAttr($value): array
    {
        if ($value === '' || $value === null) return [];
        if (!is_array($value)) {
            return explode(',', $value);
        }
        return $value;
    }

    public function setVideoAttr($value): string
    {
        return is_array($value) ? implode(',', $value) : $value;
    }
}