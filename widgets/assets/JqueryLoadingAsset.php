<?php
/**
 * Created by PhpStorm.
 * User: irvan
 * Date: 3/1/16
 * Time: 8:45 AM
 */

namespace peang\components\widgets\assets;


/**
 * Asset bundle for Bootstrap
 *
 * @author Irvan Setiawan <peang.cookie@gmail.com>
 */
class JqueryLoadingAsset extends AssetBundle
{
    public function init()
    {
        $this->setSourcePath(__DIR__ . '/../../assets');
        $this->setupAssets('js', ['js/jquery-loading/jquery.loading']);
        $this->setupAssets('css', ['css/jquery-loading/jquery.loading']);

        parent::init();
    }
}