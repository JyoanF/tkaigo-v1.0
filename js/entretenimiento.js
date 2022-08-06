document.addEventListener('onload', mostrarCategorias());

function mostrarCategorias(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', './json/entretenimiento.json',true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status==200){
            let menu_container=document.querySelector('#contenedor-categorias');
            menu_container.innerHTML='';

            let categorias = JSON.parse(this.responseText);

            for(let item of categorias){
                menu_container.innerHTML += `<a href="/eresult.html" name="${item.id}">
                <div class="tk_section_card text-center">
                    <div>
                        <img src="${item.dir_background}" class="tk_cat_bg">
                    </div>
                    <div class="bg_dark"></div>
                    <div class="tk_card_info">
                        <div>
                            <img src="${item.logo}" alt="" width="80px"/>
                            <h5>${item.nombre}</h5>
                        </div>
                    </div>
                </div>
            </a>`
            }
        }
    }
}
