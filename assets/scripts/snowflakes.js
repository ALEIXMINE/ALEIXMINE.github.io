function NewGenerator() { location.reload(); };
for (let fila = 0; fila < window.innerHeight; fila += 60) {
    for (let columna = 0; columna < 44; columna++) {
        let snowflake = document.createElement('div');
        snowflake.className = "snowflake";
        let size = Math.random() * 10;
        snowflake.style.cssText =
            `left: ${columna * 30}px; 
        top:${Math.random() * 50 + fila}px;
        width:${size}px; 
        height:${size}px;
        opacity:${Math.random() * 5}`

        document.body.appendChild(snowflake);
    }
};