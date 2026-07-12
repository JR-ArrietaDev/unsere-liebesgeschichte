<script setup>
import { ref } from 'vue'
import confetti from 'canvas-confetti'

const secretPassword = 'loveyoutodeath' 
const userInput = ref('')
const isUnlocked = ref(false)
const errorAnim = ref(false)

// 1. NUEVO: Creamos la referencia para el audio
const secretAudio = ref(null)

const dispararConfetiGoth = () => {
  const duracion = 4 * 1000; 
  const fin = Date.now() + duracion;

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 70, 
      origin: { x: 0, y: 0.8 },
      colors: ['#000000', '#1a1a1a', '#800020', '#4a0012'], 
      gravity: 0.5, 
      scalar: 0.8,  
      ticks: 400,   
      shapes: ['square'] 
    });
    
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.8 },
      colors: ['#000000', '#1a1a1a', '#800020', '#4a0012'],
      gravity: 0.5,
      scalar: 0.8,
      ticks: 400,
      shapes: ['square']
    });

    if (Date.now() < fin) {
      requestAnimationFrame(frame);
    }
  }());
};

const checkPassword = () => {
  if (userInput.value.toLowerCase().trim() === secretPassword) {
    isUnlocked.value = true
    dispararConfetiGoth()
    
    // 2. NUEVO: Reproducir el audio al desbloquear
    if (secretAudio.value) {
      secretAudio.value.volume = 0.4 // Puedes ajustar el volumen de 0.0 a 1.0
      secretAudio.value.play().catch(e => console.log("Audio bloqueado por el navegador", e))
    }

  } else {
    errorAnim.value = true
    setTimeout(() => errorAnim.value = false, 500)
    userInput.value = ''
  }
}
</script>

<template>
  <div class="mt-16 mb-24 py-12 border-t border-analog-border flex flex-col items-center text-center px-4" data-aos="fade-up">
    
    <!-- 3. NUEVO: Etiqueta de audio oculta -->
    <!-- Asegúrate de poner el nombre correcto de tu archivo mp3 -->
    <audio ref="secretAudio" src="/ourSong.mp3"></audio>

    <h3 class="font-romantic-goth text-2xl text-vampire-crimson mb-4">
      El Último Secreto
    </h3>
    
    <p class="font-reading text-zinc-text/70 text-sm mb-6 max-w-xs">
      ¿Cuál es nuestra canción?
    </p>

    <!-- Modo Bloqueado -->
    <div v-if="!isUnlocked" class="flex flex-col items-center gap-4 w-full max-w-xs">
      <input 
        v-model="userInput"
        @keyup.enter="checkPassword"
        type="password" 
        placeholder="Ingresa la contraseña..."
        :class="['w-full bg-transparent border-b-2 border-analog-border text-center text-zinc-text font-reading py-2 focus:outline-none focus:border-vampire-crimson transition-colors', errorAnim ? 'animate-shake border-red-500' : '']"
      >
      <button 
        @click="checkPassword"
        class="text-xs font-reading tracking-widest text-zinc-text/50 hover:text-vampire-crimson transition-colors mt-2"
      >
        REVELAR
      </button>
    </div>

    <!-- Modo Desbloqueado -->
    <div v-else class="animate-fade-in mt-4">
      <p class="font-reading text-zinc-text text-sm leading-relaxed max-w-sm italic">
        "Now close those eyes and let me love you to death."
      </p>
    </div>

  </div>
</template>

<style scoped>
.animate-shake {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}
@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}
.animate-fade-in {
  animation: fadeIn 1s ease-in forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>