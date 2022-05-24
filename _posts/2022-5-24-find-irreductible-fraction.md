---
layout: single
title: Calculador de fraccion irreductible
date: 2022-5-24
classes: wide
categories:
  - base64
tags:
  - base64
---

### Calculador de fraccion irreductible

<script src="/assets/scripts/fraction.js"></script>

<link rel="stylesheet" href="https://aleixmine.github.io/assets/css/converter.css">
<div id="fraccion_uno" style="display: inline-block;box-sizing: border-box;">
    <div class="group" style="margin-top:1.5vw">
        <input id="input1" required="" type="text" class="input">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Numerador</label>
    </div><br>
    <div class="group" style="margin-top:1.5vw">
        <input id="input2" required="" type="text" class="input">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Denominador</label>
    </div>
</div><br><br>
<button onclick="find_irreductible_fraction()" class="btn">Calcular fraccion irreductible</button><br><br>
<div id="fraccion_dos" style="display: inline-block;box-sizing: border-box;">
    <div class="group" style="margin-top:1.5vw">
        <input id="output1" required="" type="text" class="input">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Numerador</label>
    </div><br>
    <div class="group" style="margin-top:1.5vw">
        <input id="output2" required="" type="text" class="input">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Denominador</label>
    </div>
</div><br><br>
