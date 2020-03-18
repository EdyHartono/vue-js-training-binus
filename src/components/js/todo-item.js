export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleFinish (id) {
      this.$emit('finish', id)
    },
    handleDelete (id) {
      this.$emit('delete', id)
    },
    undo (id) {
      this.$emit('undo', id)
    }
  }
}
