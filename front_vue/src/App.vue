<template>
  <v-app app>

  <v-card class="overflow-hidden">
    <v-app-bar app
    
    absolute
    color="#fcb69f"
     dark
     

      src="https://installationart.tv/wp-content/uploads/2019/05/light-art-installation-Light-Evaporating-With-People-by-TeamLab-installationart.tv_.jpg"
      scroll-target="#scrolling-techniques-2"
    >
       <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>LAMPY</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon  :to="{ name: 'addnew'}">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="600"
    >
      
    </v-sheet>

<v-container style="height: 1000px;">
  <div id="app" style="padding:200px">
       <router-view />
  </div>
      </v-container>
        </v-card>
         
  </v-app>
  
</template>

<script>


export default {

name: "app"
};
</script>
