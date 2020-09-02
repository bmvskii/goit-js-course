1. Node.JS
    - REPL (node in terminal) / Ctrl + C to exit
    - V8 engine + libuv (C++)

2. NPM (node package manager)
    - npmjs.com + registry + CLI
    - package - библиотека, решающая специфическую задачу
    - Команды:
        - npm init — инициализирует npm и создает файл package.json
            - flag --yes
        - npm install — устанавливает все зависимости перечисленные в package.json
        - npm list --depth=0 - выведет в терминале список локально установленных пакетов с номерами их версий, без зависимостей
        - npm install [package-name] — установит пакет локально в папку node_modules
        - npm uninstall [package-name] — удалит пакет установленный локально и обновит package.json
        - npm start и npm test — запустит скрипт start или test, расположенный в package.json
        - npm run [custom-script] — запустит кастомный скрипт, расположенный в package.json
        - npm outdated — используется для поиска обновлений, обнаружит совместимые версии программно и выведет список доступных обновлений
        - npm update — обновит все пакеты до максимально разрешенной версии
        - npm config set init.author.name "YOUR_NAME"
        - npm config set init.author.email "YOUR_EMAIL"   

    - Scripts
        - test/start
        - npm run [script-name]
    
    - Package installing
        Example packages: chalk/validator/ 
        - node_modules (add into .gitignore)
        - dependencies
        - devDependencies
        - require('module_name') (looks in node_modules by default)
        - uninstall
        - add @version after a package name
        - save vs save-dev vs global (save by default)
    
    - Managing packages versions
        - npm outdated/update
        - manually update version in the package.json file

    - SemVer (Semantic Versioning)
        - major.minor.patch
        - A major version has a series of ordered minor versions, and a minor version has a series of ordered patch versions.

        - MAJOR version when you make incompatible API changes,
        - MINOR version when you add functionality in a backwards-compatible manner, and
        - PATCH version when you make backwards-compatible bug fixes. 
    
    - Cache
        - npm cache clear

3. Modularity
    - Преимущества: 
        - Поддерживаемость
        - Пространство имен
        - Повторное использование

    - Module bundling
      - ESM, CommonJS
    
    - CommonJS
        - module.exports
        - require
    
    - EcmaScript Modules
        - Стандартная система сборки
        - Связка с Webpack/Rollup/Parcel
        - Учет статического анализа при импорте
        - Import/export
        - Default export
            - { foo as newFooName }
            - { foo as default, } 
        - Named export
            
        - Import everything
            import * as name from 'module'

4. Webpack