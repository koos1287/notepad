<template>
    <div class="jurk">
        <h1>下のボタンをクリックしてください</h1>
        <button @click="infection">クリック</button>
    </div>
</template>

<script>
export default {
    name: 'SecretView',
     methods: {
    infection: function() {
       alert("あなたのパソコンはウイルスに感染しました");
    }
  }
    };
 
</script>