<?php
namespace peang\ui\widgets\assets;

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
        $this->setSourcePath('../../assets/');

        parent::init();
    }
}
