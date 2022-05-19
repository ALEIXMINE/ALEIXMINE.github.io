---
layout: single
title: Convertidor texto a hash
date: 2022-3-30
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
<button onclick="convert_t_hash()" class="btn">Texto a hash</button>
<div class="group" style="margin-top:1.5vw">
    <input id="output" required="" type="text" class="input">
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>Salida</label>
  </div>
