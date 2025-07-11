<script setup></script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer theme="dark" permanent rail>
        <div class="d-flex align-center justify-space-around">

          <v-avatar color="" size="48px">
            <img src="./assets/electron.svg" />
          </v-avatar>
        </div>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            value="dashboard"
            href="/home"
          ></v-list-item>

          <v-list-item prepend-icon="mdi-api" value="api" href="/apiConfig"></v-list-item>
          <v-list-item prepend-icon="mdi-xml" value="code" href="/editPad"></v-list-item>
        </v-list>
        <template #append>
          <v-list>
            <v-list-item prepend-icon="mdi-cog" value="config" href="/config"></v-list-item>
          </v-list>
        </template>
      </v-navigation-drawer>

      <v-main style="height: 100%">
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>
