<template>
  <div>
    <modal
      name="send-request-equipment"
      :adaptive="true"
      :resizable="true"
      height="auto"
      id="send-request-equipment"
    >
      <h3>Отправить заявку на покупку трактора?</h3>
      <div class="modal-buttons">
        <button
          @click="$modal.show('success-request-equipment'), $modal.hide('send-request-equipment')"
          class="btn btn-main"
        >Отправить</button>
        <button @click="$modal.hide('send-request-equipment')" class="btn btn-link">Отменить</button>
      </div>
    </modal>
  </div>
</template>

<script>
import ModalSuccessForm from "./ModalSuccessForm";

export default {
  components: {
    ModalSuccess: ModalSuccessForm
  }
};
</script>