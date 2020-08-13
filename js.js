$(document).ready(inicio);


function inicio(){
    
    
    $(".lista-oculta").hide();
    
    $("#menu").click(function(){
                  
        $(".lista-oculta").slideToggle(400);
        
 

        
        
    })
    
    
    
                              
    $("#entrada").click(function(){
        
        $("#mensaje").hide();
        
       
    })
       $("#buscar").click(function(){
        
        $("#mensaje").show();
    })
  
 
      
$("#entrada").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#buscar").click();
    }
});  
   
    
               
  
        
                
    
}
document.getElementById("buscar").addEventListener("click",function(){
     var buscador = document.getElementById("entrada");
      
      if (buscador.value=="historia"|| buscador.value=="hitoria"||buscador.value=="Historia"||buscador.value=="HISTORIA"||buscador.Value=="historia del coronavirus"||buscador.value=="historia coronavirus"||buscador.value=="coronavirus historia"||buscador.value=="Historia coronavirus"||buscador.value=="Historia del coronavirus"||buscador.value=="cual es la historia del coronavirus"){
          
          location.href="historia.html";
      }

      else if(buscador.value=="origen"||buscador.value=="Origen"||buscador.value=="Origen del coronavirus"||buscador.value=="origen del coronavirus"||buscador.value=="origen del covid"||buscador.value=="Origen del covid"||buscador.value=="donde surgio del covid"||buscador.value=="donde surgio el coronavirus"||buscador.value=="Cuando se origino el covid-19"||buscador.value=="de donde viene el covid"||buscador.value=="de donde viene el coronavirus"||buscador.value=="origen del covid19"||buscador.value=="origen covid"||buscador.value=="origen coronavirus"){
        location.href="origen.html";
      }
    
    else if(buscador.value=="porque se llama covid-19"||buscador.value=="Porque se la llama covid"||buscador.value=="porque le llaman covid19 "||buscador.value=="porque se llama covid19"||buscador.value=="porque covid"||buscador.value=="porque covid-19"||buscador.value=="porque covid19"||buscador.value=="covid19"||buscador.value=="covid-19"||buscador.value=="de donde viene covid19"||buscador.value=="de donde viene covid-19"||buscador.value=="que es covid19"||buscador.value=="que es covid-19"||buscador.value=="Que es covid19"||buscador.value=="Que es covid-19"){
        location.href="porque-covid.html";
    }
    else if(buscador.value=="como protegerte del covid"||buscador.value=="como me protejo "||buscador.value=="como me protejo del coronavirus"||buscador.value=="protecion"||buscador.value=="Protecion"||buscador.value=="como protegerte"||buscador.value=="que hago para protegerme"||buscador.value=="Que hago para protegerme"||buscador.value=="protegete"||buscador.value=="Protegete"||buscador.value=="proteger"||buscador.value=="Proteger"){
        location.href="protegete.html";
    }
    else if(buscador.value=="Cuales son las persona mas vulnerable"||buscador.value=="cuales son las persona mas vulnerable"||buscador.value=="vulnerabilidad"||buscador.value=="vulnerable"||buscador.value=="personas mas debiles"||buscador.value=="mas vulnerable"||buscador.value=="persona vulnerable"||buscador.value=="Persona mas vulnerable"||buscador.value=="Vulnerable"||buscador.value=="Vulnerablilidad"){
        location.href="vulnerable.html";
    }
    else if(buscador.value=="Cuales son las personas mas propagadoras"||buscador.value=="cuales son las personas mas propagadoras"||buscador.value=="propagadoras"||buscador.value=="Propagadoras"||buscador.value=="propagadora"||buscador.value=="propagacion"||buscador.value=="Propagacion"||buscador.value=="porque se propaga"||buscador.value=="Poque la propagacion"||buscador.value=="porque la propagacion"||buscador.value=="mas propagadas"||buscador.value=="Mas propagadas"){
        location.href="propagadora.html";
    }
    else if(buscador.value=="muerte po coronavirus"||buscador.value=="Muerte por coronvirus"||buscador.value=="muerte por covid"||buscador.value=="Muerte por covid"||buscador.value=="muerte por covid-19"||buscador.value=="Muerte por covid-19"||buscador.value=="muerte por covid19"||buscador.value=="Si tiene coronavirus te mueres"||buscador.value=="si tiene coronavirus te mueres"||buscador.value=="el coronavirus mata"||buscador.value=="El coronavirus mata"||buscador.value=="si tiene covid te mueres"||buscador.value=="Si tiene covid te mueres"||buscador.value=="el covid mata"||buscador.value=="muerte"||buscador.value=="Muerte"||buscador.value=="si tengo coronavirus me muero"){
        location.href="muerte.html";
    }
    else if(buscador.value=="coronavirus"||buscador.value=="Coronavirus"||buscador.value=="covid"||buscador.value=="Covid"||buscador.value=="covid19"||buscador.value=="Covid19"||buscador.value=="covid-19"||buscador.value=="Covid-19"||buscador.value=="que es el coronavirus"||buscador.value=="Que es el coronavirus"||buscador.value=="que es el covid"||buscador.value=="Que es el covid"||buscador.value=="que es covid"||buscador.value=="Que es covid"||buscador.value=="que es covid19"||buscador.value=="Que es covid19"||buscador.value=="Que es el covid-19"||buscador.value=="que es covid-19"||buscador.value=="Que es covid-19"||buscador.value=="el covid"||buscador.value=="El covid"||buscador.value=="el coronavirus"||buscador.value=="El coronavirus"||buscador.value=="coronaviru"){
        location.href="index.html";
    }
    else if(buscador.value=="contagio"||buscador.value=="Contagio"||buscador.value=="que es el contagio"||buscador.value=="Que es el contagio"||buscador.value=="como puedo contagiarme"||buscador.value=="Como puedo contagiarme"||buscador.value=="el contagio"||buscador.value=="El contagio"||buscador.value=="si me contagio que pasa"||buscador.value=="que pasa si me contagio"||buscador.value=="contagiarse"||buscador.value=="Contagiarse"||buscador.value=="estoy contagiado"||buscador.value=="contagio de covid"||buscador.value=="contagio de coronavirus"){
        location.href="contagio.html";
    }
  
    else if(buscador.value=="prevencion"||buscador.value=="Prevencion"||buscador.value=="que es la encion"||buscador.value=="Que es la prevencion"||buscador.value=="como me protejo del coronavirus"||buscador.value=="Como me protejo del coronavirus"||buscador.value=="como me protejo del covid"||buscador.value=="la prevencion"||buscador.value=="La prevencion"||buscador.value=="si tengo prevencion que pasa"||buscador.value=="Si tengo prevencion que pasa"||buscador.value=="ventaja de la prevencion"){
        
        location.href="prevencion.html";
    }
    else if(buscador.value=="enfermedad"||buscador.value=="Enfermedad"||buscador.value=="la enfermedad"||buscador.value=="La enfermedad"||buscador.value=="que es la enferdad"||buscador.value=="Que es la enfermedad"||buscador.value=="como evito enfermarme"||buscador.value=="que hago para no enfermarme"||buscador.value=="si me enfermo que hago"||buscador.value=="que hago si me enfermo"||buscador.value=="enfermo"||buscador.value=="Enfermo")
    {
        location.href="enfermedad.html";
    }
    
    else if(buscador.value==""){
        err(buscador,"El campo no puede estar vacio!")
        return false;
    }
    else if(!isNaN(buscador.value)){
        err(buscador,"El campo no acepta numero")
        return false;
    }
    
    else{
        err(buscador,"No hay resultado de su busqueda")
        return false;
    }

   
  })
function err(elem,mens){
    document.getElementById("mensaje").innerHTML=mens;
}



