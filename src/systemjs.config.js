/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': 'app',

            // angular bundles
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',
            '@ngrx': 'npm:@ngrx',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'ts': 'npm:plugin-typescript/lib',
            'typescript': 'npm:typescript/lib'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.ts',
                defaultExtension: 'ts',
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            '@ngrx/core': {
                main: 'bundles/core.umd.js',
                format: 'cjs'
            },
            '@ngrx/effects': {
                main: 'bundles/effects.umd.js',
                format: 'cjs'
            },
            '@ngrx/store': {
                main: 'bundles/store.umd.js',
                format: 'cjs'
            },
            '@ngrx/store-devtools': {
                main: 'bundles/store-devtools.umd.js',
                format: 'cjs'
            },
            '@ngrx/store-log-monitor': {
                main: 'bundles/store-log-monitor.umd.js',
                format: 'cjs'
            },

            "ts": {
                "main": "plugin.js"
            },
            "typescript": {
                "main": "typescript.js",
                "meta": {
                    "typescript.js": {
                        "exports": "ts"
                    }
                }
            }
        }
    });
})(this);
