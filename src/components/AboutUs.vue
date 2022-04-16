<template  >
 <div class=" max-w-7xl mx-auto">
    <div class=" text-left text-7xl text-black lg:mt-96 my-8 font-body font-bold">
        <h1 > About Us </h1>
    </div>
    <div class=" flex-initial font-body font-bold m-4 text-black text-4xl">
        <h1 > Who We are </h1>
    </div>
    <div class="flex  flex-wrap justify-center ">
        <div class=" w-[400px] m-3 rounded-3xl h-[500px] bg-[#DE3151]">
            <div class="bgAbus w-full h-1/2 bg-cover bg-center rounded-t-3xl"></div>
            <h1 class=" text-white  text-3xl font-body font-bold my-20">
                Vehicle rental company
                </h1>

        </div>
        <div class=" w-[400px] m-3 rounded-3xl h-[500px] bg-[#BC1A6E]">
            <div class="bgAbus2 w-full h-1/2 bg-cover bg-center rounded-t-3xl"></div>
            <h1 class=" text-white  text-3xl font-body font-bold my-20">
                We own a large variety of vehicles
            </h1>
        </div>
        <div class=" w-[400px] m-3 rounded-3xl h-[500px] bg-[#D93B30]">
            <div class="bgAbus3 w-full h-1/2 bg-cover bg-center rounded-t-3xl"></div>
            <h1 class=" text-white  text-3xl font-body font-bold my-20">
                Leasing is on long term and short term contracts
                </h1>
        </div>
    </div>
    <div class=" ml-10 lg:ml-0 text-left text-7xl text-black my-8 font-body font-bold">
        <h1 > About Our Service </h1>
    </div>
    <div class="flex  flex-wrap justify-center mb-8" >
        <div class=" bg-no-repeat bg-cover   bg-center bg1 lg:w-[600px]
         mx-5 my-4 rounded-3xl w-[400px] h-[800px] ">
         <h1 class="text-white  text-left h-5/6 mt-16 bg-black
        bg-opacity-20 mx-8  font-body font-bold
         text-4xl">We offer a collection <br> of cars for rent.</h1>
         <div class="flex mx-8">
         <button class=" btn  bg-white hover:bg-white
             hover:scale-105 text-[#FF385C] hover:text-black
            transition ease-out  font-body font-bold  duration-250  flex-initial justify-start
             text-xl"> Show more
        </button>
             </div>
        </div>
        <div class=" bg-no-repeat bg-cover w-[400px]   bg-center bg2 lg:w-[600px]
         mx-5 my-4 rounded-3xl h-[800px] bg-black">
         <h1 class="text-white text-left h-5/6 mt-16 bg-black bg-opacity-10
          mx-8  font-body font-bold
         text-4xl">We offer our services to companies on long term <br>
          or short term contracts.</h1>
          <div class="flex mx-8">
         <button class=" btn  bg-white hover:bg-white
             hover:scale-105 text-[#FF385C] hover:text-black
            transition ease-out  font-body font-bold  duration-250  flex-initial justify-start
             text-xl"> Show more</button></div>
        </div>
    </div>
 </div>
</template>

<script>
export default {

};
</script>

<style>
.bg1{
background-image: url("../assets/img/bg-info-1.jpg");
}
.bg2{
background-image: url("../assets/img/bg-info-2.jpg");
}
.bgAbus{
    background-image: url("../assets/img/bgAbus3.jpg");
}
.bgAbus2{
    background-image: url("../assets/img/bgAbus1.jpg");
}

.bgAbus3{
    background-image: url("../assets/img/bgAbus2.jpg");
}
</style>
