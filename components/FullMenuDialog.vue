<template>
  <v-dialog :value="dialog" fullscreen persistent content-class="fullscreen-dialog" @input="$emit('update:dialog', $event)">
    <template #default>
      <v-slide-x-reverse-transition>
        <v-card v-if="dialog" class="pa-0 d-flex flex-column" style="height: 100vh;">
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
                dense
                append-icon="mdi-magnify"
                class="search-bar w-100"
                style="font-size:16px;padding:10px;"
                @click:append="onSearch"
              />
            </div>
            <div class="sticky-menu">
              <v-tabs v-model="tab" grow show-arrows>
                <v-tab v-for="item in tabItems" :key="item" :value="item">{{ item }}</v-tab>
              </v-tabs>
            </div>
          </div>
          <v-card-text class="flex-grow-1" style="padding: 0; overflow-y: auto;">
            <v-container fluid class="pa-0">
              <v-row class="white ma-0">
                <v-col cols="12" class="pa-0">
                  <v-list class="pa-0">
                    <v-list-item>
                      <v-list-item-title class="font-weight-bold">쇼핑 <span style="font-size:12px;">HOME</span></v-list-item-title>
                    </v-list-item>
                    <v-list-item v-for="item in shoppingMenu" :key="item.text">
                      <v-list-item-title>{{ item.text }} <span v-if="item.badge" class="ml-1" style="color: #1976d2; font-size:10px;">•</span></v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title class="font-weight-bold mt-4">콘텐츠 <span style="font-size:12px;">HOME</span></v-list-item-title>
                    </v-list-item>
                    <v-list-item v-for="item in contentMenu" :key="item.text">
                      <v-list-item-title>
                        {{ item.text }}
                        <v-chip v-if="item.chip" color="red" text-color="white" small class="ml-1">LIVE</v-chip>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-slide-x-reverse-transition>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: 'FullMenuDialog',
  
  props: {
    dialog: {
      type: Boolean,
      required: true
    },
    shoppingMenu: {
      type: Array,
      required: true
    },
    contentMenu: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      search: '',
      tab: '전체',
      tabItems: [
        '전체', '남성', '여성', '잡화', '뷰티', '아동', '라이프', '스포츠'
      ]
    }
  },

  methods: {
    onSearch() {
      // 검색 동작 구현 필요시 여기에 작성
    },

    handleScroll() {
      if (this.$refs.searchInput) {
        const input = this.$refs.searchInput.$el.querySelector('input')
        if (input) {
          input.blur()
        }
      }
    }
  },

  mounted() {
    document.addEventListener('touchmove', this.handleScroll, { passive: true })
  },

  beforeDestroy() {
    document.removeEventListener('touchmove', this.handleScroll)
  }
}
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

:deep(.fullscreen-dialog) {
  background-color: white;
}

:deep(.v-dialog--fullscreen) {
  overflow: hidden;
}

:deep(.v-card) {
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
</style> 