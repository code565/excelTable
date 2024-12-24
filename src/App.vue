<template>
  <div id="exxcelContainer">{{ num }}</div>
</template>
<script setup>
import { ref } from "vue";
import {
  createUniver,
  defaultTheme,
  LocaleType,
  Tools,
} from "@univerjs/presets";
import { UniverSheetsCorePreset } from "@univerjs/presets/preset-sheets-core";
import UniverPresetSheetsCoreZhCN from "@univerjs/presets/preset-sheets-core/locales/zh-CN";

import "@univerjs/presets/lib/styles/preset-sheets-core.css";

const exxcelContainer = ref(null);

let excelInit = function () {
  console.log(222);
  const { univerAPI } = createUniver({
    locale: LocaleType.ZH_CN,
    locales: {
      zhCN: UniverPresetSheetsCoreZhCN,
    },
    theme: defaultTheme,
    presets: [
      UniverSheetsCorePreset({
        container: "exxcelContainer",
      }),
    ],
  });

  univerAPI.createUniverSheet({ name: "Test Sheet" });
};

onMounted(() => {
  console.log(exxcelContainer, 111);
  excelInit();
});
</script>

<style scoped>
#exxcelContainer {
  width: 100%;
  height: 100%;
}
</style>
