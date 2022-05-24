---
layout: single
title: Como utilizar el comando shutdown
date: 2022-1-29
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
/p provoca que se apague el sistema instantaniamente
/s provoca que se agague el sistema en un minuto
/t establece un tiempo al /s
/a cancela el apago temporizado

### Ejemplos:
```batch
shutdown /s /t 300
```
Provocara que el sistema se apague en 5 minutos.
---