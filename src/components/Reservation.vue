<template>
 <!-- eslint-disable  -->
 <div class=" relative  ">
  <div class=" lg:absolute -top-20 left-1/2 lg:-translate-x-1/2 justify-center  bg-[#FF385C] mx-auto lg:rounded-2xl flex max-w-7xl">
      <div class="  h-full p-10 py-16 lg:flex justify-center">
       <form  action="">
          <div class="lg:flex  justify-center">
            <div class="text-left">
              <label for="name" class=" text-white text-xl font-body font-bold"  >PICK-UP LOCATION*<br></label>
              <input  id="name" class="px-4 mr-1 py-4 w-[750px] lg:w-[700px] flex-wrap  border outline-0 font-body font-bold
               border-[#35464A]"  type="text" placeholder="ZIP , CITY OR AIRPORT" name="location">
              <div  class="">
              <input type="checkbox" @click.prevent="toggleReturn" class="form-check-input appearance-none h-5 w-5 font-body border
                border-black  bg-white checked:bg-black checked:border-black 
               focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center 
               bg-contain float-left mr-2 cursor-pointer" name="returnDif">
              <label for="name"  class=" text-white text-lg uppercase font-body font-bold" >Return different lociton</label>
              </div>
            </div>
            <div class=" text-left">
              <label for="name" class=" text-white  text-xl font-body font-bold" >PICK-UP*<br></label>
              <input id="name" class=" py-4 lg:mr-1 w-[750px] lg:w-[200px] border rounded-sm outline-0 border-[#35464A]
               pl-5 font-body font-bold"  type="text" placeholder="12-12-22" name="pickUp">
            </div>
            <div class=" text-left">
              <label for="name" class=" text-white text-xl font-body font-bold" >RETURN*<br></label>
              <input id="name" class="  py-4 border w-[750px] lg:w-[200px] rounded-sm outline-0 border-[#35464A] 
              pl-5 font-body font-bold"  type="text" placeholder="12-12-22" name="return">
            </div>
          </div>
          <div class="lg:flex justify-end">
            <div v-show="returnShow" class=" text-left">
              <label for="name" class=" text-white text-xl font-body font-bold" >RETURN LOCATION*<br></label>
              <input id="name" class="px-4 w-[750px] lg:w-[500px] lg:mr-1 py-4 border rounded-sm outline-0 border-[#35464A] 
              pl-5 font-body font-bold"  type="text" placeholder="ZIP , CITY OR AIRPORT" name="locationRet">
            </div>
            <div class=" text-left">
              <label for="name" class=" text-white text-xl font-body font-bold" >VEHICLE CLASS<br></label>
              <input id="name" class=" lg:mr-1 w-[750px]   lg:w-[200px] py-4 border rounded-sm outline-0 border-[#35464A] 
              pl-5 font-body font-bold"  type="text" placeholder="ALL VEHICLE" name="locationRet">
            </div>
            <div class=" text-left">
              <label for="name" class=" text-white text-xl font-body font-bold" >PROMO CODE<br></label>
              <input id="name" class=" lg:mr-1 w-[750px] lg:w-[200px] py-4 border  rounded-sm outline-0 border-[#35464A]
               pl-5 font-body font-bold"  type="text" placeholder="CODE" name="codePromo">

            </div>
            <div class="text-left">
              <label for="name" class=" text-white text-xl font-body font-bold" >RENTER AGE*<br></label>
              <input id="name" class=" py-4 w-[750px] lg:w-[200px] border rounded-sm outline-0 border-[#35464A]
               pl-5 font-body font-bold"  type="text" placeholder="+ 25" name="age">
            </div>
           
          </div>
           <div class=" flex lg:justify-end ">
              <button class="bg-[#141517] font-body font-bold text-white text-2xl rounded-sm w-[750px] lg:w-[200px] px-4 my-3 py-4 shadow-xl hover:bg-white hover:text-[#141517] transition ease-out duration-250">
                  Next <font-awesome-icon class=" hover:text-[#141517]" icon="play" />
              </button>
            </div>
       </form>
    </div>
  </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Reservation-home',
  computed: {
    returnShow() {
      return this.$store.getters.returnShow;
    },
  },
  methods: {
    ...mapMutations(['toggleReturn']),
  },
};
</script>

<style>

</style>
