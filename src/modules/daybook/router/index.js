export default {
  name: 'daybook',
  component: () =>
    import(
      /*webpackChunkName:"daybook"*/ '@/modules/daybook/layouts/DayBookLayout.vue'
    ),

  // => aquí dentro voy a definir todos los children que pueden ser considerados como rutas hijas
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () =>
        import(
          /*webpackChunkName:"daybook-no-entry"*/ '@/modules/daybook/views/NoEntrySelected.vue'
        ),
    },

    {
      path: ':id',
      name: 'entry',
      component: () =>
        import(
          /*webpackChunkName:"daybook-entry"*/ '@/modules/daybook/views/EntryView.vue'
        ),
    },
  ],
}
