<?php
namespace peang\uiComponents\widgets\assets;

use yii\web\AssetBundle;

class AdminLteAsset extends AssetBundle
{
    public $js = [
        'js/app.js'
    ];

    public $css = [
        'css/AdminLTE.min.css',
        'css/_all-skins.min.css'
    ];

    public function init()
    {
        $this->setSourcePath(__DIR__);

        parent::init();
    }
}
