---
layout: single
title: Comprobar estado de un enlace
date: 2022-5-22
classes: wide
categories:
  - programation
tags:
  - web
---


<script type="text/javascript" src="https://code.jquery.com/jquery-1.7.1.min.js"></script>
<link rel="stylesheet" href="/assets/css/converter.css">
<script src="/assets/scripts/urlcheck.js"></script>
<div class="group" style="margin-top:1.5vw">
    <input id="input" required="" type="text" class="input">
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>Enlace</label>
</div>
<br>

<button onclick="URL_CHECK()" class="btn">Ver estado</button>
<div class="group" style="margin-top:1.5vw">
    <input id="output" required="" type="text" class="input">
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>Estado</label>
</div>