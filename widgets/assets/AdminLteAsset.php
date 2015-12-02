<?php
namespace peang\components\widgets\assets;

/**
 * Asset bundle for AdminLTE
 *
 * @author    Irvan Setiawan <peang.cookie@gmail.com>
 * @copyright Free
 */
class AdminLteAsset extends AssetBundle
{
    public function init()
    {
        $this->setSourcePath(__DIR__ . '/../../assets');
        $this->setupAssets('js', ['js/admin-lte/app']);
        $this->setupAssets('css', ['css/admin-lte/skins/_all-skins']);
        $this->setupAssets('css', ['css/admin-lte/app']);
        parent::init();
    }
}