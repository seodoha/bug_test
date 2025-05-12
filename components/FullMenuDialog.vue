<template>
  <v-dialog :model-value="props.dialog" fullscreen persistent @update:model-value="$emit('update:dialog', $event)">
    <template #default>
      <v-slide-x-transition>
        <v-card v-if="props.dialog" class="pa-0" style="height: 100vh;">
          <v-toolbar flat color="white">
            <v-btn icon @click="$emit('update:dialog', false)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-toolbar>
          <!-- 검색바+탭 스티키 래퍼 -->
          <div class="sticky-wrap">
            <div class="px-4 pt-2">
              <v-text-field
                ref="searchInput"
                v-model="search"
                placeholder="찾으시는 브랜드를 입력해주세요."
                variant="underlined"
                hide-details
                density="compact"
                append-inner-icon="mdi-magnify"
                class="search-bar w-100"
                style="font-size:16px;padding:10px;"
                @click:append-inner="onSearch"
              />
            </div>
            <div class="sticky-menu">
              <v-tabs v-model="tab" grow show-arrows>
                <v-tab v-for="item in tabItems" :key="item" :value="item">{{ item }}</v-tab>
              </v-tabs>
            </div>
          </div>
          <v-card-text style="padding: 0;">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-list>
                    <v-list-item>
                      <v-list-item-title class="font-weight-bold">쇼핑 <span style="font-size:12px;">HOME</span></v-list-item-title>
                    </v-list-item>
                    <v-list-item v-for="item in props.shoppingMenu" :key="item.text">
                      <v-list-item-title>{{ item.text }} <span v-if="item.badge" class="ml-1" style="color: #1976d2; font-size:10px;">•</span></v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title class="font-weight-bold mt-4">콘텐츠 <span style="font-size:12px;">HOME</span></v-list-item-title>
                    </v-list-item>
                    <v-list-item v-for="item in props.contentMenu" :key="item.text">
                      <v-list-item-title>
                        {{ item.text }}
                        <v-chip v-if="item.chip" color="red" text-color="white" size="x-small" class="ml-1">LIVE</v-chip>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-slide-x-transition>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface ShoppingMenuItem {
  text: string
  badge?: boolean
}
interface ContentMenuItem {
  text: string
  chip?: boolean
}

const props = defineProps<{
  dialog: boolean
  shoppingMenu: ShoppingMenuItem[]
  contentMenu: ContentMenuItem[]
}>()

const search = ref('')
const onSearch = () => {
  // 검색 동작 구현 필요시 여기에 작성
}

const tabItems = [
  '전체', '남성', '여성', '잡화', '뷰티', '아동', '라이프', '스포츠'
]
const tab = ref(tabItems[0])

const searchInput = ref<HTMLElement | null>(null)

const handleScroll = () => {
  if (searchInput.value) {
    searchInput.value.blur()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.search-bar {
  font-size: 16px;
}
.sticky-wrap {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #fff;
}
.sticky-menu {
  border-bottom: 1px solid #eee;
}
</style> 