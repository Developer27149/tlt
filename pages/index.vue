<template>
  <div class="p-4 m-4" text="2xl red-700">
    <span class="p-4 m-4"> home </span>
    <div class="i-mdi-alarm text-orange-400" />
    <div p="4" w="50" scrollbar="~ rounded">
      <div w="200">
        rounded scrollbar rounded scrollbar rounded scrollbar rounded scrollbar
      </div>
    </div>

    <article class="text-base prose prose-zinc xl:text-xl">
      {{ `### hello` }}
      <p class="not-prose">Some text</p>
      <h1>xxx</h1>
      <h3>loly fif juciak</h3>
      <span>just for fun</span>
      <hr />
      <b>okc</b>
      <p>jsss</p>
      <pre>
        print("hello")
        <code>
          import cls form 'cls'
        </code>
      </pre>
    </article>
    <div p="4" w="50" scrollbar="~ track-color-gray-800 thumb-color-teal-700">
      <div w="200">track color is gray-800 thumb color is teal-700</div>
    </div>
    <div scrollbar="~" class="h-600px">
      <div class="h-200vh bg-red-300"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
