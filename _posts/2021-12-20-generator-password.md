---
layout: single
title: Generador aleatorio de contraseñas en python
date: 2021-12-20
classes: wide
categories:
  - python
tags:
  - python
---

En este post enseño un codigo capaz de generar contraseñas

### Codigo

```python
import random

TAMANO_CONTRASENA = 10
CARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789"

def generador():
    palabra = ''
    for i in range(TAMANO_CONTRASENA):
        palabra += random.choice(CARACTERS)
    return palabra


while True:
    print(f"Contraseña: {generador()}")
```

¡Alerta! Estoy usando N en vez de Ñ para evitar problemas.

Con este codigo imprimira en la consola contraseñas aleatorias.

---
