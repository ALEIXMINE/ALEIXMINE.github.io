---
layout: single
title: Sumar y restar fracciones
date: 2022-5-24
classes: wide
---

### Sumar y restar fracciones
<script src="/assets/scripts/fractions.js"></script>
<link rel="stylesheet" href="/assets/css/converter.css">
<div id="fracciones">
    <div id="fraccion_uno" style="display: inline-block;box-sizing: border-box;">
        <div class="group" style="margin-top:1.5vw">
            <input id="input1" required="" type="text" class="input">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Numerador</label>
        </div>
        <div class="group" style="margin-top:1.5vw">
            <input id="input2" required="" type="text" class="input">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Denominador</label>
        </div>
    </div>
    <h1 style="display: inline-block;box-sizing: border-box;">+</h1>
    <div id="fraccion_dos"  style="display: inline-block;box-sizing: border-box;">
        <div class="group" style="margin-top:1.5vw">
            <input id="input3" required="" type="text" class="input">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Numerador</label>
        </div>
        <div class="group" style="margin-top:1.5vw">
            <input id="input4" required="" type="text" class="input">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Denominador</label>
        </div>
    </div>
     <div id="fraccion_dos"  style="display: inline-block;box-sizing: border-box;">
        <div class="group" style="margin-top:1.5vw">
            <input id="output1" required="" type="text" class="input">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Numerador</label>
        </div>
        <div class="group" style="margin-top:1.5vw">
            <input id="output2" required="" type="text" class="input">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Denominador</label>
        </div>
    </div>
</div>
<button onclick="add_fractions()" class="btn">Sumar</button><button onclick="substract_fractions()" class="btn">Restar</button><br><br>