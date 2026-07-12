<script setup>
import { ref } from 'vue'

// Estado para ocultar esta pantalla y mostrar el Timeline
const emit = defineEmits(['start'])
const bgMusic = ref(null)

const startExperience = () => {
  // Reproducir el audio
  if (bgMusic.value) {
    bgMusic.value.volume = 0.4
    bgMusic.value.play().catch(e => console.log("Audio bloqueado por el navegador", e))
  }
  
  emit('start')
}
</script>

<template>
  <!-- Contenedor principal con la imagen de fondo -->
  <!-- Mantuvimos fixed inset-0 y agregamos las propiedades de fondo -->
  <div 
    class="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 bg-cover bg-center bg-no-repeat"
    style="background-image: url('/Background3.webp');"
  >
    
    <!-- Capa de Superposición Oscura (El filtro que oscurece la foto al 90%) -->
    <div class="absolute inset-0 bg-goth-bg/65 z-0"></div>

    <audio ref="bgMusic" src="/public/tu-cancion.mp3" loop></audio>

    <!-- Contenedor del contenido elevado con relative y z-10 para estar por encima del filtro -->
    <div class="relative z-10 text-center flex flex-col items-center">
      
      <h1 class="glitch-effect text-4xl md:text-6xl mb-4 tracking-widest drop-shadow-md" data-text="Unsere Liebesgeschichte">
        Unsere Liebesgeschichte
      </h1> 
      
      <p class="font-reading text-zinc-text/70 mb-12 max-w-sm text-sm leading-relaxed">
        "En la profunda oscuridad, nuestras almas se encontraron..." 
      </p>
      
      <button 
        @click="startExperience"
        class="px-8 py-3 border-2 border-analog-border text-zinc-text font-reading tracking-widest uppercase text-sm hover:bg-vampire-crimson hover:border-vampire-crimson transition-all duration-300 shadow-[0_0_15px_rgba(128,0,32,0)] hover:shadow-[0_0_20px_rgba(128,0,32,0.5)]"
      >
        Descubrir
      </button>

    </div>
  </div>
</template>
<style scoped>
    .glitch-effect {
      position: relative;
      display: inline-block; /* Vital para que la caja abrace el texto y no se expanda */
      color: #e4e4e7; 
      font-family: 'Cinzel', serif; 
    }

    .glitch-effect::before,
    .glitch-effect::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent; /* <-- Cámbialo a transparente */
    }

    .glitch-effect::before {
      left: 1px; /* Distancia del desfase (más pequeño = más sutil) */
      text-shadow: 1px 0 #750d0d; /* Sombra pegada a la letra */
      opacity: 0.8; /* Hace que la capa fantasma sea semi-transparente */
      animation: glitch-anim 3s infinite linear alternate-reverse;
    }

    .glitch-effect::after {
      left: -1px; /* Desfase hacia el lado contrario */
      text-shadow: -1px 0 #535c5c;
      opacity: 0.8;
      animation: glitch-anim2 3s infinite linear alternate-reverse;
    }

    /* Usamos clip-path con porcentajes (Arriba, Derecha, Abajo, Izquierda) */
    @keyframes glitch-anim {
      0% { clip-path: inset(20% 0 60% 0); }
      20% { clip-path: inset(80% 0 5% 0); }
      40% { clip-path: inset(10% 0 50% 0); }
      60% { clip-path: inset(50% 0 30% 0); }
      80% { clip-path: inset(30% 0 20% 0); }
      100% { clip-path: inset(70% 0 10% 0); }
    }

    @keyframes glitch-anim2 {
      0% { clip-path: inset(10% 0 60% 0); }
      20% { clip-path: inset(30% 0 20% 0); }
      40% { clip-path: inset(70% 0 10% 0); }
      60% { clip-path: inset(20% 0 50% 0); }
      80% { clip-path: inset(60% 0 5% 0); }
      100% { clip-path: inset(5% 0 80% 0); }
    }
</style>