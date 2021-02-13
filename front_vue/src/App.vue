<template>
  <v-app>
   <v-card class="overflow-hidden">
     <v-app-bar absolute color="#6A76AB" dark shrink-on-scroll
 prominent fade-img-on-scroll scroll-target="#scrolling-techniques-3">
 <template v-slot:img="{ props }">
   <v-img v-bind="props" gradient="to top right,rgba(100,115,201,.7),rgba(25,32,72,.7)"> </v-img>
 </template>
 <v-app-bar-nav-icon></v-app-bar-nav-icon>
 <v-app-bar-title> Lampy</v-app-bar-title>
 <b-nav tabs align="center">
   <b-nav-item>  <router-link to="/">  Home  </router-link> </b-nav-item>
    <b-nav-item>  <router-link to="/addnew">  new </router-link> </b-nav-item>

 </b-nav>

 <v-spacer></v-spacer>
 <v-btn icon>
   <v-icon>mdi-magnify</v-icon>
 </v-btn>
 <v-btn icon> 
   
   <v-icon> mdi-heart</v-icon> 
 </v-btn>
 <template v-slot:extension>
   <v-tabs align-with-title>
     <v-tab>oooo</v-tab>
     <v-tab>ooo</v-tab>
   </v-tabs>
 </template>
     </v-app-bar>
     <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="600">
    
    <v-container fluid style="height: 1000px">
      <div id="app">
        <router-view/>
      </div>
    </v-container >
  
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2021</span>
    </v-footer>
     </v-sheet>
    </v-card>
  </v-app>
  
</template>

<script>


export default {



  data: () => ({
    drawer:null,
  }),
  props: {
    source:String,
  }
};
</script>
