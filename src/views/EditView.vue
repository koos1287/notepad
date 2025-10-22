<template>
    <div class="editor">
        <h1>New Memo</h1>
        <textarea name="memo" v-model="memoBody"></textarea>
        <button>保存</button>
    </div>
</template>

<script>
export default {
  name: 'EditView',
  computed: {
   memo: function(){
    let id = this.$route.params["id"];
    return this.$store.state.memos.find(memo => memo.id ==id);
   }
  }
};
</script>
