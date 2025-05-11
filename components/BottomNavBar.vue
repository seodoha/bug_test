<template>
  <v-bottom-navigation
    app
    color="white"
    grow
    height="64"
    style="border-top: 1px solid #eee;"
  >
    <v-btn variant="plain" class="flex-column" style="min-width: 0;">
      <v-icon size="32">mdi-tag-outline</v-icon>
      <span style="font-size: 12px; margin-top: 2px;">브랜드</span>
    </v-btn>
    <v-btn variant="plain" class="flex-column" style="min-width: 0;">
      <v-icon size="32">mdi-message-outline</v-icon>
      <span style="font-size: 12px; margin-top: 2px;">스타일라이브</span>
    </v-btn>
    <v-btn variant="plain" class="flex-column" style="min-width: 0;" @click="dialog = true">
      <v-icon size="32">mdi-menu</v-icon>
      <span style="font-size: 12px; margin-top: 2px;">전체메뉴</span>
    </v-btn>
    <v-btn variant="plain" class="flex-column" style="min-width: 0;">
      <v-icon size="32">mdi-heart-outline</v-icon>
      <span style="font-size: 12px; margin-top: 2px;">마이하트</span>
    </v-btn>
    <v-btn variant="plain" class="flex-column" style="min-width: 0;">
      <v-icon size="32">mdi-account-outline</v-icon>
      <span style="font-size: 12px; margin-top: 2px;">마이페이지</span>
    </v-btn>

    <FullMenuDialog :dialog="dialog" @update:dialog="dialog = $event" :shoppingMenu="shoppingMenu" :contentMenu="contentMenu" />
  </v-bottom-navigation>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'BottomNavBar',
  setup() {
    const dialog = ref(false)
    const shoppingMenu = [
      { text: '카테고리' },
      { text: '브랜드' },
      { text: '아울렛' },
      { text: '셀렉티드', badge: true },
      { text: 'TOP 100' }
    ]
    const contentMenu = [
      { text: '핸썸TV', chip: true },
      { text: '스타일라이브' },
      { text: 'THE매거진' },
      { text: '기획전' },
      { text: '이벤트' },
      { text: '룩북' }
    ]
    return { dialog, shoppingMenu, contentMenu }
  }
}
</script>

<style scoped>
.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style> 