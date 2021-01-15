<template>
  <div class="add-tag-step-image flex flex-grow flex-col justify-start items-start">
    <LabeledInput label="Bild von Spotify" class="mt-auto mb-4">
      <TagEntry class="mx-auto w-32" :img="spotifyImageUrl" @click="changeImage(true)" />
      <span v-if="isSpotify" class="far fa-check-circle transform -translate-x-9" />
    </LabeledInput>

    <LabeledInput label="Bild aus dem Internet" class="mb-auto">
      <TagEntry
        v-if="externalImage"
        class="mx-auto w-32"
        :img="externalImage"
        @click="changeImage(false)"
      />
      <span v-if="!isSpotify" class="far fa-check-circle transform -translate-x-9" />
      <Textfield v-model="externalImage" class="mx-2" placeholder="enter URL" />
    </LabeledInput>
  </div>
</template>

<script lang="ts">
import { NFCTag } from '@leek/commons';
import { defineComponent, PropType, ref } from 'vue';

import LabeledInput from '../uiBlocks/LabeledInput.vue';
import TagEntry from '../uiBlocks/TagEntry.vue';
import Textfield from '../uiBlocks/Textfield.vue';

export default defineComponent({
  name: 'AddTagStepImage',

  components: { TagEntry, Textfield, LabeledInput },

  props: {
    nfcTag: {
      type: Object as PropType<NFCTag>,
      required: true,
    },
  },
  emits: { 'update:nfc-tag': null },
  setup(props, ctx) {
    const isSpotify = ref<boolean>(true);
    const externalImage = ref<string>('');
    const currentTag = ref<NFCTag>(props.nfcTag);
    const spotifyImageUrl = ref<string>(currentTag.value.imageUrl);

    const changeImage = (val: boolean): void => {
      isSpotify.value = val;
      if (isSpotify.value) {
        currentTag.value.imageUrl = spotifyImageUrl.value;
      } else {
        currentTag.value.imageUrl = externalImage.value;
      }
      ctx.emit('update:nfc-tag', currentTag.value);
    };

    return { externalImage, isSpotify, changeImage, spotifyImageUrl };
  },
});
</script>
