---
layout: single
title: Añadir una opcion al menu de crear archivos.
date: 2021-12-19
classes: wide
categories:
  - windows
tags:
  - windows
---

En este post enseño a crear una nueva opcion en el menu de crear archivos

### 1r Paso

---

Abrir regedit.

![](/assets/images/add-option-make-file/open-regedit.jpg)

### 2o Paso

---

Una vez abiero regedit, extendemos la categoria **HKEY_CLASSES_ROOT** y saldran muchas extensiones de archivos.

![](/assets/images/add-option-make-file/searched-regedit.jpg)

### 3r Paso

---

En la barra superior escribimos al final la extension que queremos, en mi caso yo quiero la extension de archivo **.txt**. Ejemplo:

![](/assets/images/add-option-make-file/search-extension-file.jpg)

### 4o Paso

---

Creamos una nueva llave.

![](/assets/images/add-option-make-file/new-key.jpg)

### 5o Paso

---

El nombre de la llave debe de ser **ShellNew**.

![](/assets/images/add-option-make-file/name-key.jpg)

### 6o Paso

---

Dentro de la llave **ShellNew** creamos un valor de cadena.

![](/assets/images/add-option-make-file/add-string-value.jpg)

### 7o Paso

---

Renombramos el valor de cadena a **NullFile**.

![](/assets/images/add-option-make-file/rename-value.jpg)

### 8o Paso

---

Modificamos **NullFile** al valor **1**.

![](/assets/images/add-option-make-file/change-value-1.jpg)

--

# Despues de todos los pasos, si los has hecho correctamente tendria que

Ya podremos crear ese archivo desde el menu.

![](/assets/images/add-option-make-file/added-menu.jpg)
