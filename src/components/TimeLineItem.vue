<script setup>
import { ref, onMounted } from 'vue';
import VanillaTilt from 'vanilla-tilt';

defineProps({
  fecha: String,
  titulo: String,
  descripcion: String,
  imagen: String
})

const polaroidRef = ref(null);

onMounted(() => {
  // Inicializamos el efecto 3D solo si el elemento existe
  if (polaroidRef.value) {
    VanillaTilt.init(polaroidRef.value, {
      max: 12,          // Inclinación máxima en grados
      speed: 400,       // Velocidad de la transición
      glare: true,      // Agrega un efecto de reflejo de luz analógico
      "max-glare": 0.2, // Opacidad máxima del reflejo (sutil para no tapar la foto)
      scale: 1.05       // Pequeño zoom al interactuar
    })
  }
})

</script>

<template>
  <div class="relative pl-8 py-8 group">
    
    <!-- El Esqueleto Vertical -->
    <div class="absolute left-0 top-0 h-full w-px bg-analog-border"></div>
    <div class="absolute left-[-5.5px] top-12 h-3 w-3 rounded-full bg-vampire-crimson border-2 border-goth-bg shadow-[0_0_8px_rgba(128,0,32,0.8)]"></div>

    <div class="flex flex-col gap-6 items-start">
      
      <!-- Marco Analógico Polaroid (AHORA CON REFERENCIA 3D) -->
      <!-- Agregamos ref="polaroidRef" y quitamos la rotación de Tailwind 
           para dejar que Vanilla-Tilt controle el movimiento físico -->
      <div 
        ref="polaroidRef"
        class="relative bg-zinc-text p-3 pb-12 shadow-lg w-60 flex-shrink-0 cursor-pointer"
        style="transform-style: preserve-3d;"
      >
        
        <!-- La imagen fotográfica -->
        <!-- Usamos translateZ para que la foto "flote" separada del marco durante la inclinación -->
        <img 
          :src="imagen" 
          alt="Recuerdo destacado" 
          class="block w-full aspect-square object-cover grayscale-[30%] contrast-125 mix-blend-multiply"
          style="transform: translateZ(30px);"
        >
        
        <!-- Fecha escrita a mano -->
        <div 
          class="absolute bottom-2 left-0 w-full text-center font-handwriting text-2xl text-goth-bg opacity-90 rotate-[-1deg]"
          style="transform: translateZ(20px);"
        >
          {{ fecha }}
        </div>
      </div>

      <!-- Título y Descripción -->
      <div class="mt-2">
        <h3 class="font-romantic-goth text-2xl text-zinc-text mb-3">
          {{ titulo }}
        </h3>
        <p class="font-reading text-zinc-text/80 text-sm leading-relaxed max-w-sm text-justify">
          {{ descripcion }}
        </p>
      </div>

    </div>
  </div>
</template>