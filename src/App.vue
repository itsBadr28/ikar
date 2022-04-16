<template>
<div>

<div  class=" flex-initial bg h-[700px] shadow-xl w-full
 bg-no-repeat bg-cover  bg-left bg-opacity-0">
 <div  class=" max-w-7xl mx-auto">
<Header />
<Interface/>

</div>
</div>
<Reservation/>
<AboutUs id="about"/>
<Topvehicle id="cars"/>
<Contact id="contact"/>

</div>
</template>
<script>
import Header from './components/Header.vue';
import Interface from './components/Interface.vue';
import Reservation from './components/Reservation.vue';
import AboutUs from './components/AboutUs.vue';
import Topvehicle from './components/TopVehicle.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'app',
  components: {
    Header,
    Interface,
    Reservation,
    AboutUs,
    Topvehicle,
    Contact,
  },
};
</script>

<style>

.bg{
  background-image: url("assets/img/bg-intf.jpg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
@media (min-width: 1024px) {
  .tap-nav{
    display: inline-flex !important;
  }
}
</style>
