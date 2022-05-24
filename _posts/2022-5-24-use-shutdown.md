---
layout: single
title: Como utilizar el comando shutdown
date: 2022-5-24
classes: wide
categories:
  - batch
tags:
  - batch
---

### Utilizar  el shutdown

Para utilizar el shutdown hay muchos parametros para 
cambiar el resultado:

### Parametros:
/p provoca que se apague el sistema instantaniamente<br>
/s provoca que se agague el sistema en un minutbro
/t establece un tiempo al /s<br>
/a cancela el apago temporizado

### Ejemplos:
```batch
shutdown /s /t 300
```
Provocara que el sistema se apague en 5 minutos.
---