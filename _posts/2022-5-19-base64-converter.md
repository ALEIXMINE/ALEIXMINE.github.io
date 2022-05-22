---
layout: single
title: Convertidor base64 y texto
date: 2022-5-19
classes: wide
categories:
  - base64
tags:
  - base64
---

### Convertidor

<script src="/assets/scripts/converter.js"></script>
<link rel="stylesheet" href="/assets/css/converter.css">
<div class="group" style="margin-top:1.5vw">
    <input id="input" required="" type="text" class="input">
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>Entrada</label>
</div>
<br>
<button onclick="convert_t_b()" class="btn">Texto a base64</button><button onclick="convert_b_t()" style="margin-left:1%" class="btn">Base64 a texto</button>
<div class="group" style="margin-top:1.5vw">
    <input id="output" required="" type="text" class="input">
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>Salida</label>
  </div>
