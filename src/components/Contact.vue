<template>
<!-- eslint-disable -->
  <div class="bg-[#2C2E33]">
      <div class="max-w-7xl flex h-screen  mx-auto">
          <div class=" w-[35%] h-[95%] my-auto rounded-3xl bg-[#141517] shadow-2xl border-0  ">
              <h1 class="text-3xl text-left m-8 mt-16 text-white font-bold font-body">Contact information</h1>
              
                  <div class="mt-20">
                  <div class="flex m-8 ml-10 mb-10  items-center text-white">
                      <font-awesome-icon class=" text-3xl mr-4" icon="at" />
                      <div class=" font-body text-xl text-left">
                          <h2 class="font-bold">Email</h2>
                          <h3 class="sans">Ikar@contact.com</h3>
                      </div>
                  </div>                 
                   <div class="flex m-8 ml-10 mb-10  items-center text-white">
                      <font-awesome-icon class=" text-3xl mr-4" icon="phone" />
                      <div class=" font-body text-left">
                          <h2 class="font-bold">Phone</h2>
                          <h3>0779255292 /032153833</h3>
                      </div>
                  </div>
                   <div class="flex m-8 ml-10 mb-10 items-center text-white">
                      <font-awesome-icon class=" text-3xl mr-4" icon="location-dot" />
                      <div class=" font-body text-left">
                          <h2 class="font-bold">Address</h2>
                          <h3 >Eloued - eloued</h3>
                      </div>
                  </div>
                   <div class="flex m-8 ml-10 mb-10 items-center text-white">
                     <font-awesome-icon class=" text-3xl mr-4" icon="sun" />
                      <div class=" font-body text-left">
                          <h2 class="font-bold">Working hours</h2>
                          <h3 >8 am  - 8 pm</h3>
                      </div>
                  </div>
                  </div>

              
          </div>
          <div class="ml-8">
              <h1 class="text-3xl text-left m-8 mt-[90px] text-white font-bold font-body">Get in touch</h1>
              <div class="lg:flex ml-10 justify-center mb-10">
                      <div class="text-left">
                      <label for="name" class="text-white  font-body font-bold text-xl">Your name<br> </label>
                      <input type="text" class="px-8 rounded mt-1 outline-none shadow-lg font-body py-4 text-white bg-[#141517] w-[350px] mr-10" placeholder="Your name">
                      </div>
                      <div class="text-left">
                      <label for="email" class="text-white mb-8 font-body font-bold text-xl">Your email *<br></label>
                      <input type="email" class="px-8 rounded mt-1 outline-none font-body shadow-lg text-white py-4 bg-[#141517] w-[350px]"  placeholder="Your email">
                      </div>
              </div>
              <div class="lg:flex ml-10  mb-10" >
                      <div class="text-left">
                      <label for="name" class="text-white font-body font-bold text-xl">Subject *<br> </label>
                      <input type="text" class="px-8 rounded mt-1 outline-none font-body shadow-lg py-4 text-white bg-[#141517] w-[740px] " placeholder="Subject *">
                      </div>
              </div>
              <div class="lg:flex ml-10  mb-10">
                      <div class="text-left">
                      <label for="name" class="text-white font-body font-bold text-xl">Your Message *<br> </label>
                      <textarea name="" id="" class="px-8 mt-1 outline-none rounded shadow-lg font-body py-4 text-white bg-[#141517] max-h-[250px] min-h-[250px] w-[740px] " placeholder="Please include all relrvant information" cols="30" rows="10"></textarea>
                      
                      </div>
              </div>
              <div class="lg:flex justify-end">
                  <button class="bg-[#FF385C] hover:bg-white hover:text-black transform duration-200 px-5 py-3 text-white font-body font-bold rounded">Send Message</button>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Contact-us',
};
</script>

<style>

</style>
