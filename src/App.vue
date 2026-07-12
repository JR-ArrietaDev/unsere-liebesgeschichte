<script setup>
  import { ref, onMounted } from 'vue';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import WelcomeScreen from './components/WelcomeScreen.vue';
  import TimelineItem from './components/TimeLineItem.vue';
  import SecretUnlock from './components/SecretUnlock.vue';

  import fotoJunio from './assets/timeline/timeL_01.webp';
  import fotoNovios from './assets/timeline/timeL_02.webp';
  import fotoHallo from './assets/timeline/timeL_03.webp';
  import fotoPantheon from './assets/timeline/timeL_04.webp';
  import fotoYear1 from './assets/timeline/timeL_05.webp';
  import fotoNos from './assets/timeline/timeL_06.webp'; 
  import fotoYear2 from './assets/timeline/timeL_07.webp';   

  const experienceStarted = ref(false)

  const onStart = () => {
    experienceStarted.value = true
  }

  onMounted(() => {
  AOS.init({
    duration: 1200, // Animación de 1.2 segundos para darle dramatismo y lentitud
    once: true,     // Se anima solo la primera vez que bajas, no al subir
    offset: 50,     // Se activa un poco antes de que el elemento aparezca del todo
    easing: 'ease-out-cubic' // Curva de animación suave
  })
})

</script>

<template>
  <WelcomeScreen v-if="!experienceStarted" @start="onStart" />

  <!-- Agregamos relative, bg-cover, bg-center, bg-no-repeat y bg-fixed -->
  <div 
    v-else 
    class="relative min-h-screen px-6 py-12 bg-cover bg-center bg-no-repeat bg-fixed"
    style="background-image: url('/background.webp');">
    
    <!-- Capa de Superposición Oscura (El filtro que oscurece la foto) -->
    <!-- Puedes cambiar bg-goth-bg/90 por bg-black/80 si lo quieres aún más oscuro -->
    <div class="absolute inset-0 bg-goth-bg/70 z-0"></div>
    
    <!-- Contenedor principal con relative y z-10 para estar por encima de la capa oscura -->
    <div class="relative z-10 max-w-md mx-auto">
      
      <TimelineItem
        data-aos="fade-up" 
        fecha="23/Junio/2024"
        titulo="La Mejor Crema"
        descripcion="Siempre me fascinaste, pero no sabía cómo hablarte sin denotar mi evidente obsesión por ti. Nunca pensé que nuestra historia comenzaría con algo tan rutinario como mostrarte mi crema para el cabello, no tienes idea de lo nervioso que estaba ese día. Esta foto fue la excusa perfecta para ganar tu atención."
        :imagen="fotoJunio"
      />

      <TimelineItem
        data-aos="fade-up" 
        fecha="12/Julio/2024"
        titulo="Nuestro Primer Beso"
        descripcion="Estaba muy nervioso. Podría haber esperado cualquier otra cosa, menos un beso tuyo. Aún recuerdo cómo me armé de valor y decidí besarte; fue el beso que comenzó mi caída libre hacia una devoción eterna por ti. Probar tus labios por primera vez me provocó un cortocircuito neuronal, y por eso me declaré. No sabía si estaba bien o mal, simplemente lo sentí y lo hice. Esa noche no paraba de repetirme a mí mismo que había besado a la única mujer que, con un solo vistazo, me maldijo con su abrumadora belleza."
        :imagen="fotoNovios"
      />

      <TimelineItem
        data-aos="fade-up" 
        fecha="12/Julio/2024"
        titulo="Una Cita en las Tinieblas"
        descripcion="Recuerdo nuestra primera sesión de fotos. Fue en un lugar para conmemorar la muerte; lúgubre y frío. Un día nublado... simplemente un día perfecto para ambos. ¿Pudimos haber hecho más? Claro, pero, carajo mi amor, estaba tan nervioso y creo que tú también lo estabas. Aun así, estas fotos son un recordatorio para mí de que, justo ahí donde la muerte inunda el lugar, nosotros celebramos nuestra vida juntos."
        :imagen="fotoPantheon"
      />

      <TimelineItem
        data-aos="fade-up" 
        fecha="31/Octubre/2024"
        titulo="Halloween in love"
        descripcion="Creo que Halloween es nuestro propio San Valentín; la fecha en que celebramos nuestro amor a nuestra oscura y cruda manera. El horror corporal, las vísceras y la sangre son los elementos perfectos para describir mi amor por ti. Carcomes mi carne, devoras mis entrañas y bebes mi sangre, porque te pertenezco. Halloween se convirtió en una de mis fechas favoritas desde que te conocí, desde aquellas dos ocasiones en las que me maquillaste."
        :imagen="fotoHallo"
      />
      
      <TimelineItem
        data-aos="fade-up" 
        fecha="12/Julio/2025"
        titulo="Nuestro Primer Aniversario"
        descripcion="Nuestro primer año... Una vez más, quisimos celebrar nuestro amor en un cementerio. Aún me sentía nervioso, e incluso cuando creímos que todo saldría perfecto, una tormenta repentina nos obligó a buscar refugio en la sala de velación. A pesar del caos, logramos capturar algunas de nuestras mejores fotos. Dar una vuelta al sol juntos es algo que jamás voy a olvidar, consolidando, una vez más, a los lúgubres cementerios como nuestra escenografía perfecta."
        :imagen="fotoYear1"
      />

      <TimelineItem
        data-aos="fade-up" 
        fecha="12/Noviembre/2025"
        titulo="Nosferatu"
        descripcion="La grotesca y cruda obra de Nosferatu (2025) me fascinó. Su mensaje erótico me hizo pensar en cómo nuestra intimidad siempre ha sido tan gratificante y especial... brutalmente excitante. Me encantas, mi amor; te deseo de todas las formas posibles."
        :imagen="fotoNos"
      />

      <TimelineItem
        data-aos="fade-up" 
        fecha="14/Febrero/2026"
        titulo="Una Nueva Etapa"
        descripcion="Comenzamos otro año más juntos, dispuestos a enfrentar la vida una vez más. Has cambiado tanto desde aquella primera vez que nos besamos, o desde esa tarde en que una tormenta nos atrincheró en un cementerio... Realmente estoy orgulloso de la mujer en la que te has convertido; cada día que pasa me gustas y te admiro más. Eres la persona que cualquiera desearía conocer, y soy muy afortunado de poder llamarte mi amor. Serás mi esposa, eso es un hecho, y espero estar siempre a la altura de una mujer tan espectacular. Gracias por acompañarme, apoyarme y evolucionar a mi lado. Te amo y te amaré eternamente, Yathziri, mi esposa."
        :imagen="fotoYear2"
      />
      
      <SecretUnlock />
      <!-- Agrega más <TimelineItem /> aquí -->

    </div>
  </div>
</template>
