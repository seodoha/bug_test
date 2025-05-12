<template>
  <v-bottom-navigation
    app
    color="white"
    grow
    height="48"
    style="border-top: 1px solid #eee;"
  >
    <v-btn text class="flex-column" style="min-width: 0;">
      <v-icon size="20">mdi-tag-outline</v-icon>
      <span style="font-size: 9px; margin-top: 1px;">브랜드</span>
    </v-btn>
    <v-btn text class="flex-column" style="min-width: 0;">
      <v-icon size="20">mdi-message-outline</v-icon>
      <span style="font-size: 9px; margin-top: 1px;">스타일라이브</span>
    </v-btn>
    <v-btn text class="flex-column" style="min-width: 0;" @click="dialog = true">
      <v-icon size="20">mdi-menu</v-icon>
      <span style="font-size: 9px; margin-top: 1px;">전체메뉴</span>
    </v-btn>
    <v-btn text class="flex-column" style="min-width: 0;">
      <v-icon size="20">mdi-heart-outline</v-icon>
      <span style="font-size: 9px; margin-top: 1px;">마이하트</span>
    </v-btn>
    <v-btn text class="flex-column" style="min-width: 0;">
      <v-icon size="20">mdi-account-outline</v-icon>
      <span style="font-size: 9px; margin-top: 1px;">마이페이지</span>
    </v-btn>

    <FullMenuDialog :dialog="dialog" @update:dialog="dialog = $event" :shoppingMenu="shoppingMenu" :contentMenu="contentMenu" />
  </v-bottom-navigation>
</template>

<script>
import FullMenuDialog from './FullMenuDialog.vue'

export default {
  name: 'BottomNavBar',
  components: {
    FullMenuDialog
  },
  data() {
    return {
      dialog: false,
      shoppingMenu: [
        { text: '카테고리' },
        { text: '브랜드' },
        { text: '아울렛' },
        { text: '셀렉티드', badge: true },
        { text: 'TOP 100' },
        { text: '신상품' },
        { text: '베스트' },
        { text: '세일' },
        { text: '기프트', badge: true },
        { text: '프리미엄' }
      ],
      contentMenu: [
        { text: '핸썸TV', chip: true },
        { text: '스타일라이브' },
        { text: 'THE매거진' },
        { text: '기획전' },
        { text: '이벤트' },
        { text: '룩북' },
        { text: '뷰티매거진' },
        { text: '트렌드리포트' },
        { text: '스타일가이드' },
        { text: '컬렉션' },
        { text: '브랜드스토리' },
        { text: '인터뷰' }
      ]
    }
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