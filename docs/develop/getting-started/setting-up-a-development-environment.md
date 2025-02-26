---
title: Configurando tu entorno de desarrollo
description: Una guía paso a paso para como configurar un entorno de desarollo para crear mods usando Fabric.
---

Para empezar a desarollar mods usando Fabric, necesitarás configurar un entorno de desarrollo usando IntelliJ IDEA.

## Instalar Java 17

Para desarrollar mods para Minecraft 1.21.4, necesitarás JDK 17.

### Paso 1: Verifica si Java ya está instalado

Para comprobar si Java ya está instalado, primero debes abrir la línea de comandos.

Puedes abrirla presionando <kbd>Win</kbd>+<kbd>R</kbd> y escribiendo `cmd.exe` en la caja de texto que aparece.

![Diálogo de Ejecución de Windows con "cmd.exe" en la barra de ejecución](/assets/installing-java/windows-run-dialog.png)

Una vez abierta la línea de comandos, escribe `java -version` y presiona <kbd>Enter</kbd>.

Si el comando corre exitosamente, verás algo similar a esto. Si el comando falla, procede al siguiente paso.

![Línea de comandos con "java -version" escrito](/assets/installing-java/windows-java-version.png)

:::warning
Para usar la mayoría de las versiones modernas de Minecraft, necesitarás Java 17 instalado como mínimo. Si el comando muestra cualquier versión menor a 17, necesitarás actualizar tu instalación de Java existente.
:::

### Paso 2: Descarga el instalador de Java 17

Para instalar Java 17, debes descargar el instalar desde [Adoptium](https://adoptium.net/en-GB/temurin/releases/?os=windows&package=jdk&version=17).

Querrás descargar la versión `Windows Installer (.msi)`:

![Página de descargas de Adoptium con el Windows Installer (.msi) remarcado](/assets/installing-java/windows-download-java.png)

Escoge `x86` si tienes un sistema operativo de 32 bits, o `x64` si tienes un sistema operativo de 64 bits.

La mayoría de las computadoras modernas tienen un sistema operativo de 64 bits. Si no estás seguro, intenta con la descarga de 64 bits.

### Paso 3: ¡Corre el instalador!

Sigue los pasos del instalador para instalar Java 17. Cuando llegues a esta página, debes elegir la opción de "La funcionalidad entera será instalada en el disco duro local" para las siguientes funcionalidades:

- `Set JAVA_HOME environment variable` - Esto será agregado a tu PATH.
- `JavaSoft (Oracle) registry keys`

![Instalador de Java 17 con "Set JAVA_HOME variable" y "JavaSoft (Oracle) registry keys" remarcados](/assets/installing-java/windows-wizard-screenshot.png)

Una vez terminado, puedes hacer clic en `Next` y continuar con la instalación.

### Paso 4. Verificar si Java 17 ya está instalado

Una vez terminada la instalación, puedes verificar si Java 17 está instalado abriendo la línea de comandos de nuevo y escribiendo `java -version`.

Si el comando corre exitosamente, verás algo similar a lo mostrado antes, donde la versión de Java se muestra:

![Línea de comandos con "java -version" escrito](/assets/installing-java/windows-java-version.png)

## Instalando IntelliJ IDEA

:::info
Obviamente puedes usar otros IDEs, como Eclipse o Visual Studio Code, pero la mayoría de las páginas en esta documentación asumirán que estás usando IntelliJ IDEA - deberías visitar la documentación para tu IDE si estás usando alguno diferente.
:::

Si no tienes IntelliJ IDEA instalado, puedes descargarlo desde la [página web oficial](https://www.jetbrains.com/idea/download/) - sigue los pasos de instalación para tu sistema operativo.

La edición de Comunidad de IntelliJ IDEA es gratis y de fuente abierta, y es la versión recomendada para desarrollar mods con Fabric.

Puede que tengas que deslizar la página hacia abajo para encontrar los enlaces para descargar la edición de Comunidad - se ve de la siguiente manera:

![Sugerencia de descarga de IntelliJ edición de Comunidad](/assets/getting-started/idea-community.png)

## Instalando _Plugins_ en IDEA

Aunque estos plugins no son estrictamente necesarios, hacen el desarrollo de mods con Fabric mucho más fácil - deberías considerar instalarlos.

### Minecraft Development

El plugin de Minecraft Development provee soporte para desarrollar mods con Fabric, y es el plugin más importante para instalar.

Puedes instalarlo abriendo IntelliJ IDEA, y luego navegando a `File > Settings > Plugins > Marketplace Tab` - busca `Minecraft Development` en la barra de búsqueda, y luego haz clic en el botón de `Install` (Instalar).

Alternativamente, puedes descargarlo desde la [página web del plugin](https://plugins.jetbrains.com/plugin/8327-minecraft-development) y luego puedes instalarlo navegando a `File > Settings > Plutins > Install Plugin from Disk`.
