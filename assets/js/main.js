		var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

		for (var i = 0; i < pictures.length; i++) {
			var imagen = document.createElement('img');//creo la etiqueta img  en imagen...
				  imagen.setAttribute('class', 'cssimagen');//creo atributo para poder llamar en css por la clase ___.o....
			      imagen.src = pictures[i];
			      imagenes.appendChild(imagen);
		}
		 
