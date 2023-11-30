<template>
  <div class="my-5">
    <h3 class="py-2">Disciplinas</h3>
    <v-container>
      <v-row
        align="center"
        justify="start"
      >
        <v-col
          v-for="(selection, i) in selections"
          :key="selection.text"
          cols="auto"
          class="py-1 pe-0"
        >
          <v-chip
            :disabled="loading"
            closable
            @click:close="selected.splice(i, 1)"
          >
            <v-icon
              :icon="selection.icon"
              start
            ></v-icon>

            {{ selection.text }}
          </v-chip>
        </v-col>

        <v-col
          v-if="!allSelected"
          cols="12"
        >
          <v-text-field
            ref="searchField"
            v-model="search"
            hide-details
            label="Busca"
            single-line
            density="compact"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-divider v-if="!allSelected"></v-divider>

    <v-list class="py-0 bg-black">
      <template v-for="item in categories">
        <v-list-item
          v-if="!selected.includes(item)"
          :key="item.text"
          :disabled="loading"
          @click="selected.push(item)"
        >
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        items: [
        {
          text: 'Direito Tributário',
          icon: 'mdi-flag',
        },
        {
          text: 'Direito Constitucional',
          icon: 'mdi-flag',
        },
        {
          text: 'Direito Administrativo',
          icon: 'mdi-flag',
        },
        {
          text: 'Direito Previdenciário',
          icon: 'mdi-flag',
        },
        {
          text: 'Direito Empresarial',
          icon: 'mdi-flag',
        },
      ],
      loading: false,
      search: '',
      selected: [],
      }
    },
    computed: {
      allSelected () {
        return this.selected.length === this.items.length
      },
      categories () {
        const search = this.search.toLowerCase()

        if (!search) return this.items

        return this.items.filter(item => {
          const text = item.text.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
      selections () {
        const selections = []

        for (const selection of this.selected) {
          selections.push(selection)
        }

        return selections
      },
    },

    watch: {
      selected () {
        this.search = ''
      },
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
.tag h3 {
  border-left: 5px solid black;
  padding-left: 5px;
  margin-bottom: 5px;
  background: #353333;
}
</style>
