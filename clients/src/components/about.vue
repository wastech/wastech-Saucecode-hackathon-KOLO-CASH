<template>
  <div>
    <div class="row">
      <div class="col-sm-6">
        <img
         src="@/assets/5.png"
          alt=""
        />
      </div>
      <div class="col-sm-6">
        <div class="text">
          <q>
            For direct use via in the browser, exposes the Vue global.
            In-browser template compilation: vue.global.js is the "full" build
            that includes both the compiler and the runtime so it supports
            compiling templates on the fly. vue.runtime.global.js contains only
            the runtime and requires templates to be pre-compiled during a build
            step. Inlines all Vue core internal packages - i.e. it's a single
            file with no dependencies on other files. This means you must import
            everything from this file and this file only to ensure you are
            getting the same instance of code. Contains hard-coded prod/dev
            branches, and the prod build is pre-minified. Use the *.prod.js
            files for production.</q>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
q {
  font-size: 2em;
  width: 90%;
  color: white;
}
.text {
  text-align: center;
  background-color: #1f061f;
  padding: 4%;
}
img{
  width: 664px;
height: 600px;
object-fit: cover;
left: 0px;
top: 919px;
}
</style>