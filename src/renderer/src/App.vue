<script setup>
  import Monaco from './components/Editor-monaco.vue';
  import { ref } from 'vue'



</script>

<template>

  <v-card>
    <v-layout>
      <v-navigation-drawer theme="dark" permanent rail>
        <div class="d-flex align-center justify-space-around">

          <v-avatar color="" size="48px">
            <img src="./assets/electron.svg"></img>
          </v-avatar>
        </div>


        <v-divider></v-divider>



        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" value="dashboard" href="/home"></v-list-item>

          <v-list-item prepend-icon="mdi-api" value="api" href="/about"></v-list-item>
          <v-list-item prepend-icon="mdi-xml" value="code" href="/2"></v-list-item>

        </v-list>
        <template v-slot:append>

          <v-list>
            <v-list-item prepend-icon="mdi-cog" value="config" href="/2"></v-list-item>
          </v-list>

        </template>
      </v-navigation-drawer>



      <v-main style="height: 100%"> <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>