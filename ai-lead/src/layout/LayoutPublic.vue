<template>
  <div>
    <NavPublic></NavPublic> 
    
    <main>
      <slot></slot>
    </main>
    
    <footerPublic></footerPublic>
  </div>
</template>

<script>
import NavPublic from '../components/NavPublic.vue'
import footerPublic from '../components/footerPublic.vue'

</script>
