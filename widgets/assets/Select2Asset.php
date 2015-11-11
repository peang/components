<?php
namespace peang\uiComponents\widgets\assets;

use yii\web\AssetBundle;

class Selec2Asset extends AssetBundle
{
    public function init()
    {
        $this->setSourcePath(__DIR__);

        $this->setupAssets('js', ['js/select2']);
        $this->setupAssets('css', ['css/select2']);

        parent::init();
    }
}
