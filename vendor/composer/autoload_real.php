<?php

// autoload_real.php @generated by Composer

<<<<<<< HEAD
class ComposerAutoloaderInite1a5c309eee023cd0e338f19618ef84b
=======
class ComposerAutoloaderInit47dbd289660ef31eb0a8e06fbcda5301
>>>>>>> efd9ddf10a31785c54292d1230af84cb11098fbe
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

<<<<<<< HEAD
        spl_autoload_register(array('ComposerAutoloaderInite1a5c309eee023cd0e338f19618ef84b', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader();
        spl_autoload_unregister(array('ComposerAutoloaderInite1a5c309eee023cd0e338f19618ef84b', 'loadClassLoader'));
=======
        spl_autoload_register(array('ComposerAutoloaderInit47dbd289660ef31eb0a8e06fbcda5301', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader();
        spl_autoload_unregister(array('ComposerAutoloaderInit47dbd289660ef31eb0a8e06fbcda5301', 'loadClassLoader'));
>>>>>>> efd9ddf10a31785c54292d1230af84cb11098fbe

        $map = require __DIR__ . '/autoload_namespaces.php';
        foreach ($map as $namespace => $path) {
            $loader->set($namespace, $path);
        }

        $map = require __DIR__ . '/autoload_psr4.php';
        foreach ($map as $namespace => $path) {
            $loader->setPsr4($namespace, $path);
        }

        $classMap = require __DIR__ . '/autoload_classmap.php';
        if ($classMap) {
            $loader->addClassMap($classMap);
        }

        $loader->register(true);

        $includeFiles = require __DIR__ . '/autoload_files.php';
        foreach ($includeFiles as $file) {
<<<<<<< HEAD
            composerRequiree1a5c309eee023cd0e338f19618ef84b($file);
=======
            composerRequire47dbd289660ef31eb0a8e06fbcda5301($file);
>>>>>>> efd9ddf10a31785c54292d1230af84cb11098fbe
        }

        return $loader;
    }
}

<<<<<<< HEAD
function composerRequiree1a5c309eee023cd0e338f19618ef84b($file)
=======
function composerRequire47dbd289660ef31eb0a8e06fbcda5301($file)
>>>>>>> efd9ddf10a31785c54292d1230af84cb11098fbe
{
    require $file;
}
