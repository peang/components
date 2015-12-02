<?php
namespace peang\components\widgets\assets;

/**
 * Asset bundle for Bootstrap
 *
 * @author    Irvan Setiawan <peang.cookie@gmail.com>
 * @copyright Free
 */
class BootstrapAsset extends AssetBundle
{
    public function init()
    {
        $this->setSourcePath(__DIR__ . '/../../assets');
        $this->setupAssets('js', ['js/bootstrap']);
        $this->setupAssets('css', ['css/bootstrap']);
        
        parent::init();
    }
}