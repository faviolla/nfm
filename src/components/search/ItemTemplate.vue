<template>
  <div>
    <a :href="item.href" class="product-item">
      <span class="product-item-name">{{ item.name }}</span>
      <span class="product-item-code">{{item.code}}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true }
  }
};
</script> 