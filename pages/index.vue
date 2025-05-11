<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h1>Nuxt 3 + Vuetify 프로젝트에 오신 것을 환영합니다!</h1>
        <p>하단 도커 네비게이션을 확인해보세요.</p>
        
        <!-- 스크롤을 위한 더미 컨텐츠 -->
        <div v-for="i in 20" :key="i" class="mt-4">
          <v-card class="mx-auto" max-width="400">
            <v-card-title>섹션 {{ i }}</v-card-title>
            <v-card-text>
              <p>이것은 스크롤 테스트를 위한 더미 컨텐츠입니다.</p>
              <p>스크롤을 내려보시면 하단 네비게이션이 고정되어 있는 것을 확인하실 수 있습니다.</p>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// 페이지용 스크립트 없음
</script>

<style scoped>
.mt-4 {
  margin-top: 16px;
}
</style> 