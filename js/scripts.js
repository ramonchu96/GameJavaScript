/*!
    * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
	
	
	//-------------My Scripts for the game--------
	/*these are the scripts for a round game in javascript*/
	 //Create array & object
				var baraja= new Array();
				function personaje (nombre, tipo)
				{
					this.nombre=nombre;
					this.tipo=tipo;
					this.puntuacion= Math.round(Math.random() * 100);
					this.elegido=false;
					
                }	
                
                function registrar()
                {
                    var frontpers = document.getElementById("create");
                    var frontname = document.getElementById("name");
                    var frontraza = document.getElementById("raza");
                    var frontpoint = document.getElementById("point");
                    var frontspace = document.getElementById("space");
                    // Cogemos el nombre
                    var nombre=document.getElementById("personaje").value;
                    
                   
                    
                    var pers=new personaje(nombre,raza);
                    baraja.push(pers);
                    console.log(pers);

                    if (baraja.length>3)
                        document.getElementById("botonCrear").disabled=false;

                    
                    frontpers.innerHTML= "Ultimo personaje creado: ";
                    console.log("Ultimo personaje creado: ");
                    frontname.innerHTML="Nombre: "+pers.nombre;
                    console.log("Nombre: "+pers.nombre);
                     // Cogemos la raza de la lista
                   document.getElementById('raza').innerHTML = ("Raza: "+formGame.raza[formGame.raza.selectedIndex].text);
                    frontpoint.innerHTML="Puntuación: "+pers.puntuacion;
                    console.log("Puntuación: "+pers.puntuacion);
                    frontspace.innerHTML="**************************";		
                        
                }


                function crear()
			    {
				var celdas=document.getElementsByTagName("td");
				var personajes = baraja.length;
			
				
				for(var i=0;i<4;i++)
				{
					
					persAlea =  Math.round(Math.random()* (personajes-1));
					
					// For players not repeat
					while(baraja[persAlea].elegido==true)
					{
						persAlea =  Math.round(Math.random()* (personajes-1));
					}
					
					celdas[i].id=baraja[persAlea].puntuacion; // For show the points, but i saved here
					//celdas[i].bgColor=baraja[persAlea].color;
					celdas[i].innerHTML=baraja[persAlea].nombre;
					baraja[persAlea].elegido=true;
				}
				
				document.getElementById("botonJugar").disabled=false;
				
			}
			
			function jugar()
			{
			
                 
				// Battles per rows
				
				// Players of the first row
				
				fila1=document.getElementsByTagName("tr")[0];
				
				// Players of the second row
				
				fila2=document.getElementsByTagName("tr")[1];
				
				// First battle		
					
					alert("Primera batalla:");
					alert("Jugador 1: "+fila1.firstElementChild.innerHTML +". Puntos: "+fila1.firstElementChild.id);	
                    alert("Jugador 2: "+fila1.lastElementChild.innerHTML +". Puntos: "+fila1.lastElementChild.id);
					
				
				if (fila1.firstElementChild.id>fila1.lastElementChild.id)
					var ganador1=fila1.firstElementChild;
				else
				{
					if (fila1.firstElementChild.id<fila1.lastElementChild.id)
						var ganador1=fila1.lastElementChild;
					else	
					{
						// wake up random value betwen 0 & 1
						var num=Math.round(Math.random());
						if (num==0)
						  ganador1=fila1.firstElementChild;
						  else
						  ganador1=fila1.lastElementChild;
					}
					
				}
					
				
				// Second battle 
				
				alert("Segunda batalla:");
                alert("Jugador 1: "+fila2.firstElementChild.innerHTML +". Puntos: "+fila2.firstElementChild.id);
					alert("Jugador 2: "+fila2.lastElementChild.innerHTML +". Puntos: "+fila2.lastElementChild.id);
				
				
				if (fila2.firstElementChild.id>fila2.lastElementChild.id)
					var ganador2=fila2.firstElementChild;
				else
				{
					if (fila2.firstElementChild.id<fila2.lastElementChild.id)
						var ganador2=fila2.lastElementChild;
					else	
					{
						// to tie, we look for a random value that can only be 0 or 1
						var num=Math.round(Math.random());
						if (num==0)
						  ganador2=fila1.firstElementChild;
						  else
						  ganador2=fila1.lastElementChild;
					}
					
				}
				alert ("Los ganadores de la primera ronda son...");
				alert(ganador1.innerHTML);
				alert(ganador2.innerHTML);
				
				//Final battle
				
				if (ganador1.id>ganador2.id)
					var ganador=ganador1.innerHTML;
				else
					var ganador=ganador2.innerHTML;
					
				alert("El vencedor final es...");
				alert(ganador);
			}
	
	
	//--------------------------------------------
	
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  