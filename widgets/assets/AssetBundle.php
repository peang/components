<?php
namespace peang\components\widgets\assets;

use yii\web\AssetBundle as YiiAssetBundle;

class AssetBundle extends YiiAssetBundle
{
    public $publishJs = true;
    public $publishCss = true;

    public $depends = [];

    /**
     * Add other bundle as dependency
     *
     * @param string $bundleName FQDN of other bundle
     */
    public function addDependency($bundleName)
    {
        $this->depends[] = $bundleName;
    }

    /**
     * Set up CSS and JS asset arrays based on the base-file names
     *
     * @param string $type whether 'css' or 'js'
     * @param array $files the list of 'css' or 'js' basefile names
     */
    public function setupAssets($type, $files = [])
    {
        if ($type == 'css' && $this->publishCss == false) {
            return;
        }

        if ($type == 'js' && $this->publishJs == false) {
            return;
        }

        $srcFiles = [];
        $minFiles = [];
        foreach ($files as $file) {
            $srcFiles[] = "{$file}.{$type}";
            $minFiles[] = "{$file}.min.{$type}";
        }

        if (empty($this->$type)) {
            $this->$type = YII_DEBUG ? $srcFiles : $minFiles;
        }
    }

    /**
     * Sets the source path if empty
     *
     * @param string $path the path to be set
     */
    protected function setSourcePath($path)
    {
        if (empty($this->sourcePath)) {
            $this->sourcePath = $path;
        }
    }
}