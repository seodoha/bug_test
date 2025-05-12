<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-4">Nuxt2 + Vue2 + Vuetify2 개발환경</h1>
        
        <!-- 스크롤을 위한 더미 컨텐츠 -->
        <div v-for="i in 20" :key="i" class="mb-4">
          <v-card>
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

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.mb-4 {
  margin-bottom: 16px;
}
</style> 