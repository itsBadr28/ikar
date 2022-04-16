<template>
<!-- eslint-disable  -->
<div class=" max-w-7xl mx-auto">
  <nav class="flex items-center justify-between px-0 py-3 flex-wrap ">
      <div class="flex">
          <h1 class="text-white uppercase tracking-wide text-4xl font-body font-bold">IKAR</h1>
      </div>
      <button @click.prevent="toggleMenubar"
       class=" text-white inline-flex p-3 hover:bg-[#FF385C] rounded lg:hidden ml-auto">
          <font-awesome-icon  icon="bars" />
      </button>
      <div v-show="menubarShow" class="tap-nav font-body font-bold w-full lg:inline-flex lg:flex-grow lg:w-auto" 
      id="nav">
          <ul class="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">

              <li class="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-[#FF385C]">
                  <a class="text-white text-xl " href="#home"> 
                   <span> Home </span> 
                  </a> </li>
              <li class="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-[#FF385C]">
                  <a class="text-white  text-xl " href="#rent"> 
                    <span> Rent </span> 
                  </a> </li>
              <li class="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-[#FF385C] ">
                  <a  class="text-white text-xl " href="#cars">
                    <span> Cars </span>
                  </a> </li>
              <li class="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-[#FF385C] ">
                  <a  class="text-white text-xl " href="#about">
                    <span> Abut Us </span>
                  </a> </li>
              <li  class="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-[#FF385C]">
                  <a  class="text-white text-xl " href="#contact">
                    <span> Contact Us </span>
                  </a> </li>
          </ul>
          <ul class="lg:inline-flex lg:flex-row lg:ml-auto items-center">
              <li class="mr-4 hover:text-slate-900 "><a class="text-white text-l hover:text-slate-900" href="#sign"> Sign In </a></li>
              <h3 class="text-white text-l  mr-4">or</h3>
              <li class=" mr-5 hover:text-slate-900"><a class="text-white text-l hover:text-slate-900" href="#join"> join </a></li>
          </ul>
      </div>
  </nav>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Header-interface',
  computed: {
    menubarShow() {
      return this.$store.getters.menubarShow;
    },
  },
  methods: {
    ...mapMutations(['toggleMenubar']),
  },
};
</script>
